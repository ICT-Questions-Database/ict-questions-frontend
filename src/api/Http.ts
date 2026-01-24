const BASE_URL = "http://localhost:8001/api/v1"

export async function apiGet<T>(url: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error("Erro ao buscar dados")
  }

  return response.json()
}
