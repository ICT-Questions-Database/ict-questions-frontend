export type QuestionLevel = 'HCIA' | 'HCIP' | 'HCIE'
export type QuestionTrack = 'Cloud' | 'Network' | 'Computing'

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