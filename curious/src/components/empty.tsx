import Image from "next/image";

interface EmptyProps {
    emoji?: string;
    title?: string;
    subtitle?: string;
}

const Empty: React.FC<EmptyProps> = ({
    emoji = "🧐",
    title = "No curious topics",
    subtitle = "Looks like there's nothing to explore... yet!",
}) => {

    return (
        <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
            <div className="text-center">
                <div className="text-3xl">
                    {emoji}
                </div>
                <div className="text-2xl font-semibold dark:text-white mt-2">
                    {title}
                </div>
                <div className="font-light text-neutral-500 mt-2">
                    {subtitle}
                </div>
            </div>
        </div>
    );
}

export default Empty;