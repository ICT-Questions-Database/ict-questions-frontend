import SpinnerLoader from "./fragments/SpinnerLoader";

export default function Loading() {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <SpinnerLoader />
      <p className="font-mono">Carregando...</p>
    </div>
  )
}