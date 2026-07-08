interface TrackTagProps {
    track: string
}

export default function TrackTag( 
    { track }: TrackTagProps
) {
    return (
        <div
            className="self-start rounded-3xl items-rounded-3xl py-1 px-6 bg-primary" 
        >
            <p className="text-white font-bold text-xs">{track}</p>
        </div>
    )
}