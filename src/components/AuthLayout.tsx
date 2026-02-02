import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div
        className="
          w-full max-w-5xl
          bg-white
          rounded-2xl
          shadow-xl
          overflow-hidden
          grid grid-cols-1 md:grid-cols-2
          min-h-[560px]
        "
      >
        {/* Lado esquerdo */}
        <aside className="hidden md:flex flex-col justify-center bg-blue-500 text-white p-14">
          <h1 className="text-4xl font-bold mb-4">
            Create your account
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            The global challenge awaits you.
          </p>
        </aside>

        {/* Lado direito */}
        <main className="flex items-center justify-center p-10 md:p-14">
          <div className="w-full max-w-md">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
