import { Question } from "../question";

export interface GetQuestionsResponse {
    count: number,
    next: string | null, 
    previous: string | null,
    results: Question[],
}