import type { Question } from "../../models/Question";
import { Alternative } from "./Alternative";

interface QuestionContainerProps {
  question: Question
}

export function QuestionContainer({ question }: QuestionContainerProps){
  return (
    <div className="grid gap-2 sm:gap-3 p-3 sm:p-5 rounded-md bg-white shadow-sm">
      <p className="cursor-default wrap-break-word">{question.text}</p>
      
      {question.alternatives.map((alternative) => (
        <Alternative key={alternative.id} alternative={alternative} />
      ))}
      
      <p className="text-xs text-gray-400 cursor-default mt-1">{question.track}</p>
    </div>
  )
}