import { useState } from "react";
import { QUESTION_TRACKS, type QuestionTrack } from "../models/Question";

interface Filters {
  questionTrack: QuestionTrack[],
  has_answer: boolean
}

export function FilterBar(){
  const TrackButtonClasses = "cursor-pointer py-4 px-6 mt-1 mb-1 border rounded-xl transition duration-250 ease-in-out text-center"
  const FilterCheckboxClasses = "appearance-none cursor-pointer w-6 h-6 border-2 rounded-lg transition duration-250 ease-in-out"
  const [ filters, setFilters ] = useState<Filters>(
    {
      questionTrack: [],
      has_answer: false
    })
  
  function handleTrackChange(track: QuestionTrack) {
    setFilters(prev => ({
      ...prev,
      questionTrack: prev.questionTrack.includes(track)
        ? prev.questionTrack.filter(qt => qt !== track)
        : [...prev.questionTrack, track]
    }))
  }
  
  function handleFilterChange() {
    setFilters(prev => ({
      ...prev,
      has_answer: prev.has_answer
        ? false
        : true
    }))
  }
  
  return (
    <div className="grid gap-3 fixed h-fit w-64">
      <p className="text-xl">Trilhas</p>
      
      {QUESTION_TRACKS.map((track) => (
        <label 
          key={track}
          className={
            `
              ${TrackButtonClasses}
              ${filters.questionTrack.includes(track)
                ? "border-[#3B82F6] bg-[#E0E7FF]"
                : "border-gray-300 bg-white"
              }
            `
          }
        >
          <input
            type="checkbox"
            className="appearance-none"
            checked={filters.questionTrack.includes(track)}
            onChange={() => handleTrackChange(track)}
          />
          {track}
        </label>
      ))}
      
      <hr className="bg-gray-400 border-0 h-px my-3"/>
      
      <p className="text-xl">Filtros</p>
      
      <label
        key="has_answer"
        className="cursor-pointer flex items-center gap-3"
      >
        <input 
          type="checkbox"
          className={
            `
              ${FilterCheckboxClasses}
              ${filters.has_answer
              ? "border-[#3B82F6] bg-[#3B82F6]"
              : "border-gray-400 bg-white"}
            `
          }
          checked={filters.has_answer}
          onChange={handleFilterChange}
        />
        <p className="text-gray-500 text-lg wrap-break-word">Mostrar questões respondidas</p>
      </label>
    </div>
  )
}