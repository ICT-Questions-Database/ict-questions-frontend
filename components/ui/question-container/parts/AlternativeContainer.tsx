import { Alternative } from "@/models/alternative";

interface AlternativeContainerProps {
    alternative: Alternative,
}

export default function AlternativeContainer(
    { alternative }: AlternativeContainerProps
) {
    const baseClassNames = "rounded-md border p-3 transition-all duration-300 hover:scale-101 "
    const normalClassNames = baseClassNames + "border-line bg-bg"
    const correctClassNames = baseClassNames + "border-green bg-green-50"
    
    return (
        <div 
            className={alternative.is_correct
                ? correctClassNames
                : normalClassNames
            }
        >
            <p className="text-ink-soft">
                {alternative.text}
            </p>
        </div>
    )
}