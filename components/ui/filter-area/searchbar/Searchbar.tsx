"use client"

import SearchIcon from "@/components/ui/filter-area/searchbar/fragments/SearchIcon";
import { useQueryParams } from "@/hooks/useQueryParams";
import type { SubmitEvent } from "react";

export default function Searchbar({ text }: { text: string }) {
  const { setQueryParam } = useQueryParams();

  function search(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem("text") as HTMLInputElement;
    input.value = input.value.trim();
    if (input.value !== text) setQueryParam("text", input.value);
  }

  return (
      <form
        className="flex gap-5 transition-all duration-400 rounded-xl border w-full
        border-line bg-paper px-5 py-3 focus-within:ring-1 focus-within:ring-red-700"
        role="search"
        onSubmit={search}
      >
      <button type="submit" className="cursor-pointer" aria-label="Buscar questões">
          <SearchIcon className="text-ink-soft" />
      </button>

          <input
              key={text}
              type="search"
              name="text"
              aria-label="Buscar questões"
              className="w-full text-sm focus:outline-none font-mono"
              placeholder="Busque por uma questão"
              defaultValue={text}
          />
      </form>
  )
}
