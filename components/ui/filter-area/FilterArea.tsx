"use client"

import { Suspense, useState } from "react"
import FilterBox from "./filter-selector/filter-box/FilterBox"
import ToggleFiltersButton from "./filter-selector/toggle-filters-button/ToggleFiltersButton"
import Searchbar from "./searchbar/Searchbar"


interface FilterAreaProps {
  text: string;
}

export default function FilterArea({ text }: FilterAreaProps) {

  const [isFilterBoxOpen, setIsFilterBoxOpen] =
    useState<boolean>(true)
  
  return (
    <div className="flex flex-col">
      <div className="flex gap-3">
        <Searchbar text={text} />
        <ToggleFiltersButton
          isOpen={isFilterBoxOpen}
          onClick={() => setIsFilterBoxOpen((open) => !open)}
        />
      </div>
      <div
        id="question-filters"
        inert={!isFilterBoxOpen}
        className={`grid transition-[grid-template-rows,opacity,margin] duration-200 ease-out motion-reduce:transition-none ${
          isFilterBoxOpen
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Suspense fallback={null}>
            <FilterBox />
          </Suspense>
        </div>
      </div>
    </div>
  )
}