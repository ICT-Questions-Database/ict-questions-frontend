"use server"

import { cookies } from "next/headers";
import { UserSessionData } from "@/models/user";

export async function setAuthSession(
    access: string, 
    refresh: string, 
    userInfo: UserSessionData
) {
    const cookieStore = await cookies();

    // Configuração dos cookies de forma segura (httpOnly)
    cookieStore.set("access_token", access, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        // Expirar em 7 dias (ou conforme a expiração do JWT)
        maxAge: 60 * 60 * 24 * 7, 
    });

    cookieStore.set("refresh_token", refresh, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 dias para o refresh token
    });

    cookieStore.set("user_info", JSON.stringify(userInfo), {
        httpOnly: false, // Permitir leitura no client-side para exibição na UI
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });
}

export async function getAuthSession() {
    const cookieStore = await cookies();
    const access = cookieStore.get("access_token")?.value || null;
    const refresh = cookieStore.get("refresh_token")?.value || null;
    const userInfoStr = cookieStore.get("user_info")?.value || null;

    let userInfo: UserSessionData | null = null;
    if (userInfoStr) {
        try {
            userInfo = JSON.parse(userInfoStr);
        } catch (e) {
            console.error("Erro ao fazer parse do cookie user_info:", e);
        }
    }

    return { access, refresh, userInfo };
}

export async function clearAuthSession() {
    const cookieStore = await cookies();
    cookieStore.delete("access_token");
    cookieStore.delete("refresh_token");
    cookieStore.delete("user_info");
}

export async function getSessionUser() {
    const session = await getAuthSession();
    return session.userInfo;
}
