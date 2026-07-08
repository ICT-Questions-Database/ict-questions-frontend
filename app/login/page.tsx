import type { Metadata } from "next";
import LoginPage from "@/components/pages/login/LoginPage";

export const metadata: Metadata = {
  title: "Entrar - Banco de Questões ICT",
  description: "Acesse sua conta.",
};

export default function Login() {
  return <LoginPage />;
}
