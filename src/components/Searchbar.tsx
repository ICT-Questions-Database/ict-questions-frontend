import { useEffect, useRef, useState } from "react";
import type { questionsParams } from "../models/QuestionsGetResponse";

interface SearchbarProps {
  setParams: React.Dispatch<React.SetStateAction<questionsParams>>
}

export function Searchbar({ setParams }: SearchbarProps) {
  const [userQuery, setUserQuery] = useState<string>("")
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const currentUserQuery = event.target.value;

    setUserQuery(currentUserQuery);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setParams(prev => ({
        ...prev,
        text: currentUserQuery
      }))
    }, 500);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  }, [])

  return (
    <input
      className="rounded-md bg-white border border-[#D1D5DB] py-3 px-5 w-full"
      type="text"
      placeholder="Busque uma questao."
      value={userQuery}
      onChange={handleChange}
    />
  );
}
