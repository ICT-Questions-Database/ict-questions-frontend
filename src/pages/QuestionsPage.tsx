import { useState, useEffect } from "react";
import { FilterBar } from "../components/FilterBar";
import { Navbar } from "../components/Navbar";
import { QuestionContainer } from "../components/Questions/QuestionContainer";
import { Searchbar } from "../components/Searchbar";
import type { Question } from "../models/Question";
// import { Questions } from "../data/Data";

async function getQuestions(): Promise<Question[]> {
  const response = await fetch('http://localhost:8001/api/v1/questions', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const data = await response.json();
  return data['results'];
}

export function QuestionsPage() {
  // const questions: Question[]: Questions;
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    getQuestions()
      .then((data: Question[]) => {
        setQuestions(data);
      })
  }, []);

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

        <div />
      </div>

      <Navbar />
    </div >
  );
}
