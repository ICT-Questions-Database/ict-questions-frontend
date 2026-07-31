import QuestionsPage from "../components/pages/home/QuestionsPage";

export default async function Home({ searchParams }: PageProps<"/">) {
  const params = await searchParams;
  const queryString = new URLSearchParams(
    Object.entries(params).flatMap(([k, v]) =>
      Array.isArray(v) ? v.map((x) => [k, x]) : [[k, v ?? ""]]
    )
  ).toString();

  return <QuestionsPage queryString={queryString} text={Array.isArray(params.text) ? params.text[0] : params.text ?? ""} />
}
