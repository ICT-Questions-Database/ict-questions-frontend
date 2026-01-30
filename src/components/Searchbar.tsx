import { useEffect, useState } from "react";
import type { questionsParams } from "../models/QuestionsGetResponse";

interface SearchbarProps{
  setParams: React.Dispatch<React.SetStateAction<questionsParams>>
}

export function Searchbar({setParams}: SearchbarProps) {
  const [userQuery, setUserQuery] = useState<string>("")
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserQuery(event.target.value);
  }
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      setParams(prev => ({
        ...prev,
        text: userQuery
      }))
    }, 500)
    return () => {
      clearTimeout(timerId)
    };
  }, [userQuery, setParams]);
  
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
