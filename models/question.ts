import { Alternative } from "./alternative";

enum Level {
    HCIA = "HCIA",
    HCIE = "HCIE",
    HCIP = "HCIP", 
}

enum Track {
    CLOUD = "CLOUD",
    COMPUTING = "COMPUTING", 
    NETWORK = "NETWORK",
} 

export interface Question {
    id: number,
    submitted_by: number,
    text: string,
    level: Level,
    has_answer: boolean,
    has_multiple_answers: boolean,
    track: Track,
    weight: string,
    alternatives: Alternative[]
}