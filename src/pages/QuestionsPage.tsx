import { QuestionContainer } from "../components/Questions/QuestionContainer";
import { Searchbar } from "../components/Searchbar";
import { Questions } from "../data/Data";
import type { Question } from "../models/Question";

export function QuestionsPage() {
  const questions: Question[] = Questions;

  return (
    <div className="grid gap-18 p-10 bg-gray-100">
      <Searchbar />
      
      <div className="grid gap-10">
        {questions.map((question) => (
          <QuestionContainer question={question} />
        ))}
      </div>
    </div>
  );
}