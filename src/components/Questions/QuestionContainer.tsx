import type { Question } from "../../models/Question";
import { Alternative } from "./Alternative";

interface QuestionContainerProps {
  question: Question
}

export function QuestionContainer({ question }: QuestionContainerProps){
  return (
    <div className="grid gap-3 p-5 rounded-md bg-white shadow-sm">
      <p className="cursor-default">{question.text}</p>
      
      {question.alternatives.map((alternative) => (
        <Alternative key={alternative.id} alternative={alternative} />
      ))}
      
      <p className="text-xs text-gray-400 cursor-default">{question.track}</p>
    </div>
  )
}