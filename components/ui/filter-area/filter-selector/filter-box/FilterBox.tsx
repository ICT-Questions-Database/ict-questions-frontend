"use client"

import FilterBoxOption from "./fragments/FilterBoxOption";
import { useQueryParams } from "@/hooks/useQueryParams";

const TRACKS = ["Cloud", "Computing", "Network"];

export default function FilterBox() {
  const {setQueryParam, queryParams, toggleQueryParam} = useQueryParams();
  
  return (
    <div className="grid grid-cols-2 gap-7 bg-red-800 px-9 py-7 rounded-3xl">
      <div className="flex flex-col gap-5">
        <h1
          className="text-paper font-serif text-lg font-semibold"
        >
          Trilhas
        </h1>
        
        <FilterBoxOption
          key={"Todas"}
          track={"Todas"}
          checked={queryParams.getAll("track").length === 0}
          onChange={() => setQueryParam("track", "")}
        />

        <div className="flex flex-col gap-3">
          {TRACKS.map((track) => (
            <FilterBoxOption
              key={track}
              track={track}
              checked={queryParams.getAll("track").includes(track)}
              onChange={() => toggleQueryParam("track", track)}
            />
          ))}
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
      </div>
    </div>
  );
}
