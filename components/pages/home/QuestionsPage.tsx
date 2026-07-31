import QuestionContainer from "@/components/ui/question-container/QuestionContainer";
import Searchbar from "@/components/ui/searchbar/Searchbar";
import GetQuestions from "@/services/GetQuestions";
import { Suspense } from "react";
import Loading from "@/components/ui/loading/Loading";
import FilterBox from "@/components/ui/filter-box/FilterBox";

export default function QuestionsPage({ text, queryString }: { text: string; queryString: string }) {
    return (
      <div className="flex flex-col gap-8">
        <Searchbar text={text} queryString={queryString} />
        <Suspense fallback={null}>
          <FilterBox />
        </Suspense>
          <div className="flex flex-col gap-10 bg-background">
              <Suspense key={queryString} fallback={<Loading />}>
                  <Questions queryString={queryString} />
              </Suspense>
          </div>
      </div>
    )
}

async function Questions({ queryString }: { queryString: string }) {
  const data = await GetQuestions(queryString);

  return data.count > 0 ? (data.results.map((question) => (
    <QuestionContainer key={question.id} question={question} />
  ))) : (
      <p className="py-20 text-center font-mono text-sm">
        Sem questões :(
      </p>
  )
}
