import type { Question, QuestionTrack } from "../models/Question"
import { apiGet } from "./Http"

interface Filters {
  questionTrack: QuestionTrack[]
  has_answer: boolean
}

interface QuestionsResponse {
  results: Question[]
}

export async function getQuestions(filters: Filters): Promise<Question[]> {
  const params = new URLSearchParams()

  filters.questionTrack.forEach(track => {
    params.append("track", track)
  })

  if (filters.has_answer) {
    params.append("has_answer", "true")
  }

  const data = await apiGet<QuestionsResponse>(
    `/questions/?${params.toString()}`
  )

  return data.results
}
