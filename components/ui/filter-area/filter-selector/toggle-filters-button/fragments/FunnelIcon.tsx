import FunnelIconSVG from "@/assets/ToggleFilterButton/Funnel.svg"

interface SearchIconProps {
    className?: string
}

export default function FunnelIcon({ className }: SearchIconProps) {
    return <FunnelIconSVG aria-hidden="true" className={className ?? ""} />
}