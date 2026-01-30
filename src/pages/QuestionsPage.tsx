import { useState, useEffect } from "react";
import { FilterBar } from "../components/FilterBar";
import { Navbar } from "../components/Navbar";
import { QuestionContainer } from "../components/Questions/QuestionContainer";
import { Searchbar } from "../components/Searchbar";
import type { Question } from "../models/Question";
import type { QuestionsGetResponse } from "../models/QuestionsGetResponse";
import { PaginationButton } from "../components/PaginationButton";
import type { questionsParams } from "../models/QuestionsGetResponse";
// import { Questions } from "../data/Data";

async function getResponse(pageUrl: string): Promise<QuestionsGetResponse> {
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
  const BASEURL = 'http://localhost:8001/api/v1/questions/';
  
  // const questions: Question[] = Questions;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState<string>('http://localhost:8001/api/v1/questions/?page=1');
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  
  const [params, setParams] = useState<questionsParams>({
    page: 1,
    text: '',
    track: [],
    has_answer: true,
  })

  useEffect(() => {
    const urlParams = new URLSearchParams();
    urlParams.append('has_answer', params.has_answer.toString());
    urlParams.append('text', params.text);
    params.track.forEach(track => {
      urlParams.append('track', track);
    })
    
    setCurrentPage(`${BASEURL}?${urlParams.toString()}`)
  }, [params])
  
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
    <div className="min-h-screen p-10 bg-gray-100">
      <FilterBar
        setParams={setParams}
      />

      <main className="max-w-4xl mx-auto grid gap-15 items-start px-10">
        <Searchbar 
          setParams={setParams}
        />

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
      </main>


      <Navbar />
    </div >
  );
}
