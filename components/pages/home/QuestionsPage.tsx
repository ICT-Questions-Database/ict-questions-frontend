import QuestionContainer from "@/components/ui/question-container/QuestionContainer";
import Searchbar from "@/components/ui/searchbar/Searchbar";
import GetQuestions from "@/services/GetQuestions";
import { Suspense } from "react";

export default function QuestionsPage({ text }: { text: string }) {
    return (
        <div className="flex flex-col gap-8">
            <Searchbar text={text} />
            <div className="flex flex-col gap-10 bg-background">
                <Suspense key={text} fallback={<p aria-live="polite">Carregando...</p>}>
                    <Questions text={text} />
                </Suspense>
            </div>
        </div>
    )
}

async function Questions({ text }: { text: string }) {
    const data = await GetQuestions({ text });

    return data.results.map((question) => (
        <QuestionContainer key={question.id} question={question} />
    ));
}
