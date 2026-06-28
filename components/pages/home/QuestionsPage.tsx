import QuestionContainer from "@/components/ui/question-container/parts/QuestionContainer";
import { GetQuestionsResponse } from "@/models/api-response/GetQuestionsResponse";
import { Question } from "@/models/question";
import GetQuestions from "@/services/GetQuestions"

export default async function QuestionsPage() {

    const res: GetQuestionsResponse = await GetQuestions();

    return (
        <>
            {res.results.map((question: Question) => (
                <QuestionContainer 
                    key={question.id}
                    question={question} 
                />
            ))}
        </>
    )
}