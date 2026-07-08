"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginUser from "@/services/LoginUser";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [globalError, setGlobalError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = "O e-mail é obrigatório.";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Insira um endereço de e-mail válido.";
        }

        if (!password) {
            newErrors.password = "A senha é obrigatória.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const extractErrorMessage = (error: any): string => {
        if (!error) return "";
        if (typeof error === "string") return error;
        
        if (typeof error === "object") {
            if (Array.isArray(error)) {
                return error.length > 0 ? extractErrorMessage(error[0]) : "";
            }
            if (error.message) return extractErrorMessage(error.message);
            if (error.detail) return extractErrorMessage(error.detail);
            if (error.non_field_errors) return extractErrorMessage(error.non_field_errors);
            if (error.error) return extractErrorMessage(error.error);
            
            const values = Object.values(error);
            if (values.length > 0) {
                return extractErrorMessage(values[0]);
            }
        }
        return String(error);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setGlobalError(null);
        setErrors({});

        if (!validateForm()) return;

        setIsLoading(true);

        const result = await LoginUser({
            email: email.trim().toLowerCase(),
            password: password,
        });

        setIsLoading(false);

        if (result.success) {
            // Login bem-sucedido, redireciona para a home
            router.push("/");
        } else {
            // Tratar mensagens de erro do backend
            if (result.error) {
                const apiErrors: Record<string, string> = {};
                let hasFieldErrors = false;

                if (typeof result.error === "object" && !Array.isArray(result.error)) {
                    Object.entries(result.error).forEach(([key, val]) => {
                        if (["email", "password"].includes(key)) {
                            apiErrors[key] = extractErrorMessage(val);
                            hasFieldErrors = true;
                        }
                    });
                }

                if (hasFieldErrors) {
                    setErrors(apiErrors);
                } else {
                    const errorMsg = extractErrorMessage(result.error);
                    setGlobalError(errorMsg || "E-mail ou senha incorretos.");
                }
            } else {
                setGlobalError("Não foi possível realizar o login. Verifique os dados inseridos.");
            }
        }
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4 py-8">
            <div className="bg-white dark:bg-zinc-900 border border-border dark:border-zinc-800 shadow-2xl rounded-2xl p-8 max-w-md w-full transition-all duration-300">
                
                {/* Header */}
                <div className="flex flex-col gap-2 text-center mb-8">
                    <h1 className="text-3xl font-extrabold tracking-tight text-foreground bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                        Acessar Conta
                    </h1>
                    <p className="text-sm text-[#808080] dark:text-zinc-400">
                        Entre com seu e-mail e senha para acessar o sistema
                    </p>
                </div>

                {/* Global Error Banner */}
                {globalError && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 text-red-600 rounded-r-lg text-sm flex items-start gap-2 animate-shake">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        <span>{globalError}</span>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    {/* Campo E-mail */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-semibold text-foreground">
                            Endereço de E-mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="seu.email@exemplo.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                            }}
                            className={`px-4 py-3 rounded-lg border bg-zinc-50/50 dark:bg-zinc-800/20 text-foreground focus:bg-white dark:focus:bg-zinc-900 focus:outline-none transition-all duration-200 text-sm ${
                                errors.email 
                                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                                    : "border-border dark:border-zinc-800 focus:border-primary"
                            }`}
                            disabled={isLoading}
                        />
                        {errors.email && (
                            <span className="text-xs text-red-500 font-medium mt-0.5 flex items-center gap-1">
                                <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                                {errors.email}
                            </span>
                        )}
                    </div>

                    {/* Campo Senha */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="text-sm font-semibold text-foreground">
                                Senha
                            </label>
                        </div>
                        <div className="relative w-full">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Insira sua senha"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (errors.password) setErrors(prev => ({ ...prev, password: "" }));
                                }}
                                className={`px-4 py-3 pr-12 rounded-lg border w-full bg-zinc-50/50 dark:bg-zinc-800/20 text-foreground focus:bg-white dark:focus:bg-zinc-900 focus:outline-none transition-all duration-200 text-sm ${
                                    errors.password 
                                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                                        : "border-border dark:border-zinc-800 focus:border-primary"
                                }`}
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-primary transition-colors duration-200 focus:outline-none hover:cursor-pointer p-1"
                                tabIndex={-1}
                                aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <span className="text-xs text-red-500 font-medium mt-0.5 flex items-center gap-1">
                                <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                                {errors.password}
                            </span>
                        )}
                    </div>

                    {/* Botão de Envio */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 bg-gradient-to-r from-primary to-primary-hover text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform flex items-center justify-center gap-2 hover:cursor-pointer ${
                            isLoading 
                                ? "opacity-75 cursor-not-allowed scale-100" 
                                : "hover:from-primary-hover hover:to-primary hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                <span>Autenticando...</span>
                            </>
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>
                </form>

                {/* Footer Link */}
                <div className="mt-8 text-center text-sm border-t border-border dark:border-zinc-800 pt-6">
                    <p className="text-[#808080] dark:text-zinc-400">
                        Ainda não possui uma conta?{" "}
                        <Link
                            href="/register"
                            className="text-primary font-semibold hover:underline transition-all duration-200"
                        >
                            Cadastre-se
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}
