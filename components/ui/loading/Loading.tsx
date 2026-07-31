import SpinnerLoader from "./fragments/SpinnerLoader";

export default function Loading() {
  return (
    <div className="pointer-events-none fixed inset-0 flex flex-col items-center justify-center">
      <SpinnerLoader />
      <p className="font-mono">Carregando...</p>
    </div>
  )
}