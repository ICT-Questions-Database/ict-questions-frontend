"use client"

import SearchIcon from "@/components/icons/SearchIcon";
import Form from "next/form";
import type { SubmitEvent } from "react";

export default function Searchbar({ text, queryString }: { text: string; queryString: string }) {
    function prepareSearch(event: SubmitEvent<HTMLFormElement>) {
        const input = event.currentTarget.elements.namedItem("text") as HTMLInputElement;
        input.value = input.value.trim();
        if (input.value === text) event.preventDefault();
    }

    return (
        <Form
            action=""
        className="flex gap-5 transition-all duration-400 rounded-xl border 
            border-line bg-paper px-5 py-3 focus-within:ring-1 focus-within:ring-red-700"
            role="search"
            onSubmit={prepareSearch}
        >
        {Array.from(new URLSearchParams(queryString))
            .filter(([name]) => name !== "text")
            .map(([name, value], index) => (
                <input key={`${name}-${index}`} type="hidden" name={name} value={value} />
            ))}
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
        </Form>
    )
}
