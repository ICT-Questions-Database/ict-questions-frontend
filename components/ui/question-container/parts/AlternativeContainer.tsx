import { Alternative } from "@/models/alternative";

interface AlternativeContainerProps {
    alternative: Alternative,
}

export default function AlternativeContainer(
    { alternative }: AlternativeContainerProps
) {
    const baseClassNames = "border rounded-md p-3 transition-all duration-300 hover:scale-101 "
    const normalClassNames = baseClassNames + "border-[#F4F4F4] bg-[#F8F9FA]"
    const correctClassNames = baseClassNames + "border-[#22C55E] bg-[#E0FFE7]"
    
    return (
        <div 
            className={alternative.is_correct
                ? correctClassNames
                : normalClassNames
            }
        >
            <p className="text-[#808080]">
                {alternative.text}
            </p>
        </div>
    )
}