"use client"

import { useQueryParams } from "@/hooks/useQueryParams";
import PaginationButton from "./fragments/PaginationButton";

interface PaginationProps {
  next: string | null;
  previous: string | null;
}

export default function Pagination({
  next,
  previous
}: PaginationProps) {
  const { setQueryParam, queryParams } = useQueryParams();
  const currentPage: number = queryParams.get("page")
    ? Number(queryParams.get("page")) 
    : 1
  
  return (
    <div className="flex gap-3">
      <PaginationButton
        disabled={previous === null}
        label="<-"
        onClick={() =>
          setQueryParam("page", `${currentPage - 1}`)
        }
      />
      <div
        className="size-10 shrink-0 inline-flex items-center 
        justify-center bg-red-700 text-sm font-medium 
        rounded-xl text-paper"
      >{currentPage}</div>
      <PaginationButton
        disabled={next === null}
        label="->"
        onClick={() =>
          setQueryParam("page", `${currentPage + 1}`)
        }
      />
    </div>
  )
}