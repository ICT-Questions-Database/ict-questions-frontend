interface PaginationButtonProps {
  label: string
  newPage: string | null
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

function handleClick(newPage: string, setCurrentPage: React.Dispatch<React.SetStateAction<string>>){
  setCurrentPage(newPage);
}

export function PaginationButton({ label, newPage, setCurrentPage }: PaginationButtonProps) {
  const activeButtonClasses = 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-101';
  const disabledButtonClasses = 'bg-gray-700 text-white font-bold py-2 px-4 border-b4 border-y-gray-800 rounded';
  
  if (newPage) {
    return (
      <button
        className={activeButtonClasses}
        onClick={() => handleClick(newPage, setCurrentPage)}
      >
        {label}
      </button> 
    )
  } else {
    return (
      <button
        className={disabledButtonClasses}
        disabled
      >
        {label}
      </button>
    )
  }
}
