import { useState } from "react";

export function Searchbar() {
  const [userQuery, setUserQuery] = useState<string>("")
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserQuery(event.target.value)
  }
  
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
