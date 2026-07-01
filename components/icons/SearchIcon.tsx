import SearchIconSVG from "@/assets/Searchbar/SearchIconSVG.svg"

interface SearchIconProps {
    className?: string
}

export default function SearchIcon(
    { className }: SearchIconProps)
{
    return (
        <SearchIconSVG 
            className={
                className
                ? className
                : ""
            }
        />
    )
}