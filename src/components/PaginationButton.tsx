interface PaginationButtonProps {
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function handleClick(currentPage: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>>, nextPage: boolean){
  if (nextPage){
    setCurrentPage((prev: number) => prev + 1);
  } else {
    if ( currentPage != 1 ) {
      setCurrentPage((prev: number) => prev - 1);
    }
  }
}

export function PaginationButton({ currentPage, setCurrentPage }: PaginationButtonProps) {
  const buttonClasses = 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-101';
  
  return (
    <div className='flex justify-evenly'>
      <button
        className={buttonClasses}
        onClick={() => handleClick(currentPage, setCurrentPage, false)}
      >
        Página Anterior
      </button>

      <label>{currentPage}</label>

      <button
        className={buttonClasses}
        onClick={() => handleClick(currentPage, setCurrentPage, true)}
      >
        Próxima Página
      </button>
    </div>
  )
}
