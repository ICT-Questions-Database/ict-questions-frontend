import { Alternative } from "@/models/alternative";

interface AlternativeContainerProps {
    alternative: Alternative,
}

export default function AlternativeContainer(
    { alternative }: AlternativeContainerProps
) {
    return (
        <div 
            className=
            "border border-[#E2E8F0] bg-[#F8F9FA] rounded-md p-3"
        >
            <p className="text-[#808080]">
                {alternative.text}
            </p>
        </div>
    )
}