import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react";

export function useQuestionFilters() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const filters = {
        text: searchParams.get("text") ?? ""
    }

    const setFilter = useCallback(
        (key: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            if (value) params.set(key, value)
            else params.delete(key)

            router.push(`${pathname}?${params.toString()}`);
        }, [searchParams, router, pathname]
    )

    return { filters, setFilter };
}