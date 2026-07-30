"use client"

import SearchIcon from "@/components/icons/SearchIcon";
import Form from "next/form";
import type { FormEvent } from "react";

export default function Searchbar({ text }: { text: string }) {
    function prepareSearch(event: FormEvent<HTMLFormElement>) {
        const input = event.currentTarget.elements.namedItem("text") as HTMLInputElement;
        input.value = input.value.trim();
        if (input.value === text) event.preventDefault();
    }

    return (
        <Form
            action=""
            className="flex gap-5 transition-all duration-400 rounded-xl border border-line bg-paper px-4 py-3 focus-within:ring-1 focus-within:ring-red-700"
            role="search"
            onSubmit={prepareSearch}
        >
            <button type="submit" className="cursor-pointer" aria-label="Buscar questões">
                <SearchIcon className="text-ink-soft" />
        </button>
        
            <input
                key={text}
                type="search"
                name="text"
                aria-label="Buscar questões"
                className="w-full text-sm focus:outline-none"
                placeholder="Busque por uma questão"
                defaultValue={text}
            />
        </Form>
    )
}
