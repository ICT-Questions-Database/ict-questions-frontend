import { Alternative } from "@/models/alternative";
import { Question } from "@/models/question";
import AlternativeContainer from "./parts/AlternativeContainer";

interface QuestionContainerProps {
    question: Question,
}

export default function QuestionContainer(
    { question }: QuestionContainerProps
) {
    return (
      <div
        className="flex flex-col gap-7 rounded-3xl 
        transition-all duration-200
        border border-line bg-paper py-8 px-9
        hover:shadow-xl hover:border-red-700"
      >
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase font-mono text-red-700">{question.track}</p>
          <h2 className="font-semibold text-lg text-ink font-serif max-w-prose">{question.text}</h2>
        </div>
            

            <div className="flex flex-col gap-3">
                {question.alternatives.map((alternative: Alternative) => (
                    <AlternativeContainer 
                        key={alternative.id}
                        alternative={alternative} 
                    />
                ))}
            </div>
        </div>
    )
}