"use client"

import QuestionContainer from "@/components/ui/question-container/QuestionContainer";
import Searchbar from "@/components/ui/searchbar/Searchbar";
import { useQuestionFilters } from "@/hooks/useQuestionFilters";
import { GetQuestionsResponse } from "@/models/api-response/GetQuestionsResponse";
import { Question } from "@/models/question";
import GetQuestions from "@/services/GetQuestions"
import { useEffect, useState } from "react";

export default function QuestionsPage() {
    const { filters } = useQuestionFilters();
    const [ data, setData ] = useState<GetQuestionsResponse | null>(null);
    const [ isLoading, setIsLoading ] = useState<boolean>(true)

    useEffect(() => {
        let cancelled = false;
        setIsLoading(true);

        GetQuestions(filters)
            .then((res) => {
                if (!cancelled) setData(res);
            })
            .finally(() => {
                if (!cancelled) setIsLoading(false);
            })
        
        return () => {
            cancelled = true;
        }
    }, [JSON.stringify(filters)]);

    return (
        <div className="flex flex-col gap-8">
            <Searchbar />
            <div className="flex flex-col gap-10 bg-background">
                {isLoading && <p>Carregando...</p>}
                {data?.results.map((question: Question) => (
                    <QuestionContainer 
                        key={question.id}
                        question={question} 
                    />
                ))}
            </div>
        </div>
    )
}