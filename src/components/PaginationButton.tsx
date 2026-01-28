interface PaginationButtonProps {
  label: string
  newPage: string
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

function handleClick(newPage: string, setCurrentPage: React.Dispatch<React.SetStateAction<string>>){
  setCurrentPage(newPage);
}

export function PaginationButton({ label, newPage, setCurrentPage }: PaginationButtonProps) {
  const buttonClasses = 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-101';
  
  return (
    <button
      className={buttonClasses}
      onClick={() => handleClick(newPage, setCurrentPage)}
    >
      {label}
    </button>
  )
}
