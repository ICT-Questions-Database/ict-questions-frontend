import { Alternative } from "@/models/alternative";
import { Question } from "@/models/question";
import AlternativeContainer from "./parts/AlternativeContainer";
import TrackTag from "./parts/TrackTag";

interface QuestionContainerProps {
    question: Question,
}

export default function QuestionContainer(
    { question }: QuestionContainerProps
) {
    return (
        <div 
            className="flex flex-col gap-5 px-5 transition-all duration-300 
            py-6 rounded-md border border-border bg-white hover:shadow-lg"
        >
            <div className="flex gap-30">
                <p>{question.text}</p>

                <div className="ml-auto">
                    <TrackTag track={question.track} />
                </div>
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