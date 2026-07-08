import type { Metadata } from "next";
import RegisterPage from "@/components/pages/register/RegisterPage";

export const metadata: Metadata = {
  title: "Criar Conta - Banco de Questões ICT",
  description: "Cadastre-se na plataforma.",
};

export default function Register() {
  return <RegisterPage />;
}
