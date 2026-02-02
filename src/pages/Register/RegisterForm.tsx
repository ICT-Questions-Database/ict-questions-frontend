import { useEffect, useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import type { RegisterPayload } from "../../models/Auth";

export function RegisterForm() {
  const { handleRegister, loading, error } = useRegister();

  const [form, setForm] = useState<
    RegisterPayload & { confirmPassword: string }
  >({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [visibleError, setVisibleError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // limpa erro de senha enquanto o usuário digita
    if (passwordError) {
      setPasswordError(null);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setPasswordError("As senhas não coincidem");
      return;
    }

    try {
      const { confirmPassword, ...payload } = form;
      await handleRegister(payload);
    } catch {
      // erro já vem do hook
    }
  }

  // faz o erro do backend desaparecer depois de 4 segundos
  useEffect(() => {
    if (error) {
      setVisibleError(error);

      const timer = setTimeout(() => {
        setVisibleError(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800 text-center md:text-left">
        Sign Up
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
          className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
          className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />

      <div className="space-y-1">
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${
            passwordError
              ? "border-red-500 focus:ring-red-400"
              : "focus:ring-blue-500"
          }`}
        />

        {passwordError && (
          <p className="text-sm text-red-500">{passwordError}</p>
        )}
      </div>

      {visibleError && (
        <p className="text-sm text-red-600 text-center">
          {visibleError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
}
