import { useState } from "react";
import { register } from "../api/auth";
import type { RegisterPayload } from "../models/Auth";

export function useRegister() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleRegister(data: RegisterPayload) {
        try {
            setLoading(true);
            await register(data);
        } catch (err) {
            setError("Não foi possível criar a conta");
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return { handleRegister, loading, error };
}
