"use server"

import { LoginUserRequest } from "@/models/user";
import { setAuthSession } from "./authCookies";

export default async function LoginUser(data: LoginUserRequest) {
    const backendURL = process.env.BACKEND_URL;
    const apiRoute = `${backendURL}/api/v1/auth/login/`;

    try {
        const res = await fetch(apiRoute, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        });

        const responseData = await res.json().catch(() => null);

        if (!res.ok) {
            return {
                success: false,
                status: res.status,
                error: responseData || { message: "E-mail ou senha incorretos." },
            };
        }

        // Armazenar os tokens e dados básicos no cookie de forma segura
        const { access, refresh } = responseData.tokens;
        const userInfo = responseData.data;

        await setAuthSession(access, refresh, userInfo);

        return {
            success: true,
            status: res.status,
            message: responseData.message || "Login realizado com sucesso.",
        };
    } catch (err: any) {
        console.error("Erro na Server Action LoginUser:", err);
        return {
            success: false,
            status: 500,
            error: { message: "Não foi possível conectar ao servidor." },
        };
    }
}
