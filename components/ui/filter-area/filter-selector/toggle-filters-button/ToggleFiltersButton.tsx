import { MouseEvent } from "react"
import FunnelIcon from "./fragments/FunnelIcon"

interface ToggleFiltersButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function ToggleFiltersButton({
  onClick
}: ToggleFiltersButtonProps) {
  return (
    <button
      className="grid size-12 shrink-0 place-items-center rounded-xl bg-red-700
      transition-all duration-100 hover:-translate-y-0.5 hover:bg-red-600 cursor-pointer"
      onClick={onClick}
    >
      <FunnelIcon className="size-6 stroke-paper"/>
    </button>
  )
}