import "server-only";

import type { GetQuestionsResponse } from "@/models/api-response/GetQuestionsResponse";

export default async function GetQuestions(
    filters: Record<string, string>
): Promise<GetQuestionsResponse> {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
        if (value) params.set(key, value);
    })

    const backendURL = process.env.BACKEND_URL;
    const apiRoute = `${backendURL}/api/v1/questions?${params.toString()}`

    const res = await fetch(apiRoute);

    if (!res.ok) throw new Error(`Failed to fetch questions (${res.status})`);

    return res.json()
}
