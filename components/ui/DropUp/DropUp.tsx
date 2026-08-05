"use client"

interface DropUpProps{
  label: string;
  options: string[];
  value: string;
  onChange: (option: string) => void;
}

export default function DropUp({
  label,
  options,
  value,
  onChange,
}: DropUpProps) {
  return (
    <div className="flex gap-3 items-center">
      <p className="text-ink text-sm">{label}</p>
      <select
        className="rounded-md border border-line 
        cursor-pointer h-9 text-sm font-medium px-3
        py-1 bg-paper"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}