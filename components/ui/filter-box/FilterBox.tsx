"use client"

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import FilterBoxOption from "./fragments/FilterBoxOption";

const TRACKS = ["Cloud", "Computing", "Network"];

export default function FilterBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function toggle(key: string, value: string) {
    const next = new URLSearchParams(searchParams.toString());
    const current = next.getAll(key);
    if (current.includes(value)) {
      next.delete(key);
      current.filter((v) => v !== value).forEach((v) => next.append(key, v));
    } else {
      next.append(key, value);
    }
    router.replace(`${pathname}?${next.toString()}`);
  }

  return (
    <div className="grid grid-cols-2 gap-7 bg-red-800 px-9 py-7 rounded-3xl">
      <div className="flex flex-col gap-2">
        <h1
          className="text-paper font-serif text-lg font-semibold"
        >
          Trilhas
        </h1>
        
        {TRACKS.map((track) => (
          <FilterBoxOption
            key={track}
            track={track}
            checked={searchParams.getAll("track").includes(track)}
            onChange={() => toggle("track", track)}
          />
        ))}
      </div>
      
      <div className="flex flex-col gap-2">
      </div>
    </div>
  );
}
