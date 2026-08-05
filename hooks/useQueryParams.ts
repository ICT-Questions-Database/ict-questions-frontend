import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useQueryParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const queryParams = new URLSearchParams(searchParams.toString())

  function setQueryParam(key: string, value: string) {
    const next = queryParams;
    if (value) next.set(key, value)
    else next.delete(key)

    if (key !== "page") next.delete("page")
    
    const queryString = next.toString()
    router.replace(queryString ? `${pathname}?${queryString}` : pathname)
  }

  function toggleQueryParam(key: string, value: string) {
    const next = queryParams;
    const current = next.getAll(key);
    if (current.includes(value)) {
      next.delete(key);
      current.filter((v) => v !== value).forEach((v) => next.append(key, v));
    } else {
      next.append(key, value);
    }

    if (key !== "page") next.delete("page")
    
    router.replace(`${pathname}?${next.toString()}`);
  }

  return { queryParams, toggleQueryParam, setQueryParam }
}