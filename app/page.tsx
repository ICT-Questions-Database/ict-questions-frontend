import QuestionsPage from "../components/pages/home/QuestionsPage";

export default async function Home({ searchParams }: PageProps<"/">) {
  const { text } = await searchParams;

  return <QuestionsPage text={Array.isArray(text) ? text[0] : text ?? ""} />
}
