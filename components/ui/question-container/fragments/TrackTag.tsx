interface TrackTagProps {
    track: string
}

export default function TrackTag( 
    { track }: TrackTagProps
) {
    return (
        <div
            className="self-start rounded-3xl bg-red-700 px-6 py-1"
        >
            <p className="text-xs font-bold text-paper">{track}</p>
        </div>
    )
}