import { useState, useEffect } from "react";
import { FilterBar } from "../components/FilterBar";
import { Navbar } from "../components/Navbar";
import { QuestionContainer } from "../components/Questions/QuestionContainer";
import { Searchbar } from "../components/Searchbar";
import type { Question } from "../models/Question";
import type { QuestionsGetResponse } from "../models/QuestionsGetResponse";
import { PaginationButton } from "../components/PaginationButton";
// import { Questions } from "../data/Data";

async function getResponse(pageUrl: string): Promise<QuestionsGetResponse>{
  const response = await fetch(`${pageUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const data = await response.json();
  return data;
}

export function QuestionsPage() {
  // const questions: Question[] = Questions;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState<string>('http://localhost:8001/api/v1/questions/?page=1');
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  
  useEffect(() => {
    getResponse(currentPage)
      .then((data: QuestionsGetResponse) => {
        setQuestions(data.results);
        setNextPage(data.next);
        setPreviousPage(data.previous);
        window.scrollTo({
          top: 0,
        });
      })
  }, [currentPage]);

  return (
    <div className="grid grid-cols-5 gap-18 p-10 bg-gray-100">
      <FilterBar />

      <div className="grid col-span-3 gap-15">
        <Searchbar />

        <div className="grid gap-7">
          {questions.map((question) => (
            <QuestionContainer
              key={question.id}
              question={question}
            />
          ))}
        </div> 

        <div className="flex justify-evenly">
          <PaginationButton 
            label="Página Anterior"
            newPage={previousPage}
            setCurrentPage={setCurrentPage}
          />
          
          <PaginationButton 
            label="Próxima Página"
            newPage={nextPage}
            setCurrentPage={setCurrentPage}
          /> 
        </div>
      </div>
      

      <Navbar />
    </div >
  );
}
