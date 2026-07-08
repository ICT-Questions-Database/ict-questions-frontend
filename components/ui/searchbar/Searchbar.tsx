"use client"

import SearchIcon from "@/components/icons/SearchIcon";
import { useQuestionFilters } from "@/hooks/useQuestionFilters";
import { useState } from "react";

export default function Searchbar(){
    const { filters, setFilter } = useQuestionFilters();
    const [ localText, setLocalText ] = useState<string>(filters.text)

    function search(){
        setFilter("text", localText);
    }

    return (
        <div
            className="flex group transition-all duration-250 gap-3 
            border-2 border-border bg-white px-4 py-3 rounded-lg
            focus-within:border-primary"
        >
            <input
                className="focus:outline-none w-full"
                placeholder="Busque por uma questão"

                value={localText}
                onChange={(e) => setLocalText(e.target.value)}

                onKeyDown={(e) => {
                    e.key === "Enter" && search();
                }}
            />

            <button 
                className="ml-auto 
                hover:cursor-pointer"
                onClick={search}
            >
                <SearchIcon 
                    className="text-border 
                    group-focus-within:text-primary
                    transition-all duration-250
                    "
                />
            </button>
        </div>
    )
}