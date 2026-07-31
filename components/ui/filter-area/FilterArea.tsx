"use client"

import { Suspense, useState } from "react"
import FilterBox from "./filter-selector/filter-box/FilterBox"
import ToggleFiltersButton from "./filter-selector/toggle-filters-button/ToggleFiltersButton"
import Searchbar from "./searchbar/Searchbar"


interface FilterAreaProps {
  text: string;
  queryString: string;
}

export default function FilterArea({
  text,
  queryString,
}: FilterAreaProps) {

  const [isFilterBoxOpen, setIsFilterBoxOpen] =
    useState<boolean>(true)
  
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <Searchbar text={text} queryString={queryString} />
        <ToggleFiltersButton
          onClick={() => setIsFilterBoxOpen(!isFilterBoxOpen)}
        />
      </div>
      {
        isFilterBoxOpen &&
        <Suspense fallback={null}>
          <FilterBox />
        </Suspense>
      }
    </div>
  )
}