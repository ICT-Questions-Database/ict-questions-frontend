import QuestionContainer from "@/components/ui/question-container/QuestionContainer";
import { GetQuestionsResponse } from "@/models/api-response/GetQuestionsResponse";
import { Question } from "@/models/question";
import GetQuestions from "@/services/GetQuestions"

export default async function QuestionsPage() {

    const res: GetQuestionsResponse = await GetQuestions();
    console.log(res.next)
    console.log(res.previous)
    return (
        <div className="flex flex-col gap-10 bg-background">
            {res.results.map((question: Question) => (
                <QuestionContainer 
                    key={question.id}
                    question={question} 
                />
            ))}
        </div>
    )
}