export default async function GetQuestions(){
    const res = await fetch(
        "http://localhost:8001/api/v1/questions/", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json"
            }
        }
    )

    return res.json()
}