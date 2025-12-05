import type { Alternative } from "../../models/Question";

interface AlternativeProps {
  alternative: Alternative
}

export function Alternative({ alternative }: AlternativeProps){
  return (
    <div>
      {
        alternative.is_correct
          ? <p className="bg-[#E0FFE7] border border-[#22C55E] rounded-md py-2 px-4 text-[#666666] cursor-pointer
            transition duration-250 ease-in-out hover:scale-101">{alternative.text}</p>
          : <p className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-[#666666] cursor-pointer
            hover:border-[#3B82F6] hover:bg-[#E0E7FF] transition duration-250 ease-in-out hover:scale-101">{alternative.text}</p>
      }
    </div>
  )
}