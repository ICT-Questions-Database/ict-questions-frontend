import "server-only";

import type { GetQuestionsResponse } from "@/models/api-response/GetQuestionsResponse";

export default async function GetQuestions(
    queryString: string
): Promise<GetQuestionsResponse> {
    const backendURL = process.env.BACKEND_URL;
    const apiRoute = `${backendURL}/api/v1/questions${queryString ? `?${queryString}` : ""}`

    const res = await fetch(apiRoute);

    if (!res.ok) throw new Error(`Failed to fetch questions (${res.status})`);

    return res.json()
}
