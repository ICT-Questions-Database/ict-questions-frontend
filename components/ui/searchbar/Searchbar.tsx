import SearchIcon from "@/components/icons/SearchIcon";

export default function Searchbar(){
    return (
        <div
            className="flex group transition-all duration-250 gap-3 
            border-2 border-border bg-white px-4 py-3 rounded-lg
            focus-within:border-main-red"
        >
            <input
                className="focus:outline-none w-full"
                placeholder="Busque por uma questão"
            />

            <button 
                className="ml-auto 
                hover:cursor-pointer"
            >
                <SearchIcon 
                    className="text-border 
                    group-focus-within:text-main-red
                    transition-all duration-250
                    "
                />
            </button>
        </div>
    )
}