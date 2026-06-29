export default async function GetQuestions(route?: string){

    let apiRoute;
    if (route) apiRoute = route
    else apiRoute = "http://localhost:8001/api/v1/questions/"

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