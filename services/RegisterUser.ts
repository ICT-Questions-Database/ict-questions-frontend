"use server"

import { RegisterUserRequest } from "@/models/user";

export default async function RegisterUser(data: RegisterUserRequest) {
    const backendURL = process.env.BACKEND_URL;
    const apiRoute = `${backendURL}/api/v1/auth/register/`;

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
                error: responseData || { message: "Erro desconhecido ao registrar usuário." },
            };
        }

        return {
            success: true,
            status: res.status,
            data: responseData,
        };
    } catch (err: any) {
        console.error("Erro na Server Action RegisterUser:", err);
        return {
            success: false,
            status: 500,
            error: { message: "Não foi possível conectar ao servidor. Verifique sua conexão." },
        };
    }
}
