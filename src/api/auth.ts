import type { RegisterPayload } from "../models/Auth";

export async function register(data: RegisterPayload) {
  const payload = {
    email: data.email,
    name: `${data.firstName} ${data.lastName}`,
    password: data.password,
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/auth/register/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    console.error("Backend error:", error);
    throw new Error(JSON.stringify(error));
  }

  return response.json();
}
