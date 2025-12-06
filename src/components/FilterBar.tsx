import { useState } from "react";
import { QUESTION_TRACKS, type QuestionTrack } from "../models/Question";

interface Filters {
  questionTrack: QuestionTrack[],
  has_answer: boolean
}

export function FilterBar(){
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
    <div className="grid gap-3 sticky h-fit w-64">
      <p className="text-xl">Trilhas</p>
      
      {QUESTION_TRACKS.map((track) => (
        <label 
          key={track}
          className={
            filters.questionTrack.includes(track)
              ? "cursor-pointer py-4 px-6 mt-1 mb-1 border border-[#3B82F6] bg-[#E0E7FF] rounded-xl transition duration-250 ease-in-out text-center"
              : "cursor-pointer py-4 px-6 mt-1 mb-1 border border-gray-300 bg-white rounded-xl transition duration-250 ease-in-out text-center"
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
            filters.has_answer
            ? "appearance-none cursor-pointer w-7 h-7 border-2 border-[#3B82F6] rounded-lg bg-[#3B82F6] transition duration-250 ease-in-out"
            : "appearance-none cursor-pointer w-7 h-7 border-2 border-gray-400 rounded-lg bg-white transition duration-250 ease-in-out"
          }
          checked={filters.has_answer}
          onChange={handleFilterChange}
        />
        <p className="text-gray-500 text-lg wrap-break-word">Mostrar questões respondidas</p>
      </label>
    </div>
  )
}