"use server"

export default async function GetQuestions(
    filters: Record<string, string>
){
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
        if (value) params.set(key, value);
    })

    const backendURL = process.env.BACKEND_URL;
    const apiRoute = `${backendURL}/api/v1/questions?${params.toString()}`

    const res = await fetch(
        apiRoute, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json"
            }
        }
    )

    return res.json()
}