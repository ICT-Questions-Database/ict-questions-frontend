import { FilterBar } from "../components/FilterBar";
import { Navbar } from "../components/Navbar";
import { QuestionContainer } from "../components/Questions/QuestionContainer";
import { Searchbar } from "../components/Searchbar";
import { Questions } from "../data/Data";
import type { Question } from "../models/Question";

export function QuestionsPage() {
  const questions: Question[] = Questions;

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
