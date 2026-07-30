import { Alternative } from "@/models/alternative";

interface AlternativeContainerProps {
    alternative: Alternative,
}

export default function AlternativeContainer(
    { alternative }: AlternativeContainerProps
) {
  const baseClassNames = `rounded-xl border py-3 px-5 transition-all duration-200
      hover:scale-102 hover:-translate-y-1 cursor-pointer active:translate-y-0.5 active:scale-99 `
    const normalClassNames = baseClassNames + "border-line bg-bg"
    const correctClassNames = baseClassNames + "border-green bg-green-50"
    
    return (
        <div 
            className={alternative.is_correct
                ? correctClassNames
                : normalClassNames
            }
        >
            <p className="text-ink-soft font-sans text-sm">
                {alternative.text}
            </p>
        </div>
    )
}