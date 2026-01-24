import { useState, useEffect } from "react"
import { FilterBar } from "../components/FilterBar"
import { Navbar } from "../components/Navbar"
import { QuestionContainer } from "../components/Questions/QuestionContainer"
import { Searchbar } from "../components/Searchbar"
import type { Question, QuestionTrack } from "../models/Question"
import { getQuestions } from "../api/Question"

interface Filters {
  questionTrack: QuestionTrack[]
  has_answer: boolean
}

export function QuestionsPage() {
  const [filters, setFilters] = useState<Filters>({
    questionTrack: [],
    has_answer: false
  })

  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    getQuestions(filters).then(setQuestions)
  }, [filters])

  return (
    <div className="grid grid-cols-5 gap-18 p-10 bg-gray-100">
      <FilterBar onChange={setFilters} />

      <div className="grid col-span-3 gap-15">
        <Searchbar />

        <div className="grid gap-7">
          {questions.map((question) => (
            <QuestionContainer
              key={question.id}
              question={question}
            />
          ))}
        </div>
      </div>

      <Navbar />
    </div>
  )
}
