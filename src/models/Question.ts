export const QUESTION_TRACKS = [ 'Cloud', 'Network', 'Computing' ] as const
export type QuestionTrack = typeof QUESTION_TRACKS[number]
export type QuestionLevel = 'HCIA' | 'HCIP' | 'HCIE'

export interface Source {
  id: number
  source: string
}

export interface Alternative {
  id: number
  text: string
  is_correct: boolean
  sources: Source[]
}

export interface Question {
  id: number
  text: string
  level: QuestionLevel
  track: QuestionTrack
  weight: string
  
  has_answer: boolean
  has_multiple_answers: boolean
  
  submitted_by: number | null
  reviewed_by: number | null
  
  approved_at: string
  last_update: string
  
  alternatives: Alternative[]
}