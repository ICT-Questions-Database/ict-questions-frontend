"use server"

import { getAuthSession, setAuthSession, clearAuthSession } from "./authCookies";

export async function authenticatedFetch(
    path: string, 
    options: RequestInit = {}
): Promise<Response> {
    const backendURL = process.env.BACKEND_URL;
    const apiRoute = path.startsWith("http") ? path : `${backendURL}${path}`;

    // 1. Obter tokens salvos
    const session = await getAuthSession();
    const headers = new Headers(options.headers || {});
    
    // Injetar token de acesso se existir
    if (session.access) {
        headers.set("Authorization", `Bearer ${session.access}`);
    }

    if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
    }

    const fetchOptions: RequestInit = {
        ...options,
        headers,
    };

    // 2. Executar primeira tentativa
    let res = await fetch(apiRoute, fetchOptions);

    // 3. Se retornar 401 (Não autorizado/expirado), tentar renovar o token
    if (res.status === 401 && session.refresh) {
        console.log("Access token expirado (401). Tentando renovação automática...");
        
        try {
            const refreshRoute = `${backendURL}/api/v1/auth/refresh/`;
            const refreshRes = await fetch(refreshRoute, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ refresh: session.refresh }),
            });

            if (refreshRes.ok) {
                const refreshData = await refreshRes.json();
                console.log("Tokens renovados com sucesso!");

                // Atualizar os cookies com os novos tokens
                // userInfo será mantido o mesmo que já está salvo
                await setAuthSession(
                    refreshData.access, 
                    refreshData.refresh, 
                    session.userInfo || { id: 0, email: "", name: "" }
                );

                // 4. Refazer a requisição original com o novo token de acesso
                const newHeaders = new Headers(fetchOptions.headers || {});
                newHeaders.set("Authorization", `Bearer ${refreshData.access}`);
                
                res = await fetch(apiRoute, {
                    ...fetchOptions,
                    headers: newHeaders,
                });
            } else {
                console.warn("Refresh token expirado ou inválido. Deslogando usuário.");
                await clearAuthSession();
            }
        } catch (err) {
            console.error("Erro durante o processo de auto-refresh:", err);
            await clearAuthSession();
        }
    }

    return res;
}
