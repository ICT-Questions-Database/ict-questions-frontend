"use client"

import { MouseEvent } from "react";

interface PaginationButtonProps {
  disabled: boolean;
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function PaginationButton({
  disabled,
  label,
  onClick
}: PaginationButtonProps) {
  return (
    <button
      className="size-10 shrink-0 inline-flex items-center justify-center
      border border-line bg-paper text-sm font-medium
      rounded-xl cursor-pointer transition-all duration-200
      enabled:hover:border-red-700 enabled:hover:text-red-700
      disabled:bg-red-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}