interface FilterBoxOptionProps {
  track: string;
  onChange: (key: string, value: string) => void;
  checked: boolean;
}

export default function FilterBoxOption({
  track,
  onChange,
  checked
}: FilterBoxOptionProps) {
  return (
    <label
      className={`flex gap-3 w-full rounded-lg cursor-pointer 
        transition-all duration-200 hover:translate-x-0.5 p-3
        border border-paper/15 text-sm font-medium font-mono
        ${checked ? "bg-paper text-red-900" : "bg-paper/9 text-paper"}
      `}
    >
      <input
        type="checkbox"
        className="accent-amber"
        onChange={() => onChange("track", track)}
        checked={checked}
      />
      {track}
    </label>
  )
}