export default async function GetQuestions(
    filters: Record<string, string>
){
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
        if (value) params.set(key, value);
    })

    const apiRoute = `http://localhost:8001/api/v1/questions?${params.toString()}`

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