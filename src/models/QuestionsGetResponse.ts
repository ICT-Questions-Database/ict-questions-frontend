import type { Question } from "./Question"

export interface QuestionsGetResponse {
  count: number
  next: string | null
  previous: string | null
  results: Question[]
}