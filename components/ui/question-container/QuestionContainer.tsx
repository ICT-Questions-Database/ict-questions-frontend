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
        <div className="flex flex-col gap-5 px-5 py-6 rounded-md bg-white">
            <p>
                {question.text}
            </p>

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