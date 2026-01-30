import type { Question } from "./Question"

export interface QuestionsGetResponse {
  count: number
  next: string | null
  previous: string | null
  results: Question[]
}

export interface questionsParams {
  page: number
  text: string
  track: string[]
  has_answer: boolean
}