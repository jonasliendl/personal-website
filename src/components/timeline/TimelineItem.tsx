import { differenceInMonths, format } from "date-fns";
import { TypeTimelineItem } from "./timeline.type";
import { twMerge } from "tailwind-merge";

interface TimelineItemProps {
    item: TypeTimelineItem;
}

export default function TimelineItem({ item }: TimelineItemProps) {

    if (item.tags) item.tags.sort(a => a.highlighted ? -1 : 1);

    const calculateTimeDifference = (): number => {
        return differenceInMonths(new Date(item.endingDate ?? Date.now()), new Date(item.startingDate ?? Date.now()));
    }

    const calculateTimeDifferenceInYears = (): number => {
        return Math.floor(calculateTimeDifference() / 12);
    }

    let timeDifference = calculateTimeDifference();
    let timeDifferenceInYears = calculateTimeDifferenceInYears();
    let timeDifferenceInMonths = timeDifference - timeDifferenceInYears * 12;

    return (
        <>
            <div className="p-[32px] flex flex-col md:flex-row items-start gap-4 bg-darkSurface shadow-lg rounded-md w-full">
                <img src={item.img ?? "https://avatars.githubusercontent.com/u/56661501?v=4"} alt={item.title} className="w-[42px] h-[42px] rounded-md" />
                <div className="flex flex-col gap-2 w-full overflow-hidden">
                    <span className="inline-block font-openSans text-[12px] uppercase font-semibold text-snow/60">
                        {item.organisation}
                    </span>
                    <h1 className="text-snow font-montserrat font-bold text-[22px]">
                        {item.title}
                    </h1>
                    {item.startingDate &&
                        <div className="font-openSans text-[14px] text-snow/80 flex flex-row items-center gap-2">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>
                                {format(new Date(item.startingDate), "MMMM yyyy")} - {item.endingDate ? format(new Date(item.endingDate), "MMMM yyyy") : "Present"}
                                {` ( ${timeDifferenceInYears > 0 ? timeDifferenceInYears > 1 ? timeDifferenceInYears + " years " : timeDifferenceInYears + " year " : ""}
                                    ${timeDifferenceInMonths > 0 ? timeDifferenceInMonths === 1 ? timeDifferenceInMonths + " month " : timeDifferenceInMonths + " months " : ""})`}</span>
                        </div>
                    }
                    {item.location &&
                        <span className="font-openSans text-[14px] text-snow/80 flex flex-row gap-2 items-center">
                            <i className="fa-solid fa-location-dot"></i>
                            {item.location}
                        </span>
                    }
                    <p className="text-snow/80 font-openSans text-[14px]">
                        {item.description}
                    </p>
                    {item.tags && <div className="w-full overflow-x-scroll">
                        <div className="flex flex-row gap-2 mt-2">
                            {item.tags.map(tag => (
                                <span key={tag.name} className={twMerge("text-[12px] text-tangBlue duration-300 ease-in-out hover:bg-tangBlue/40 cursor-pointer font-bold font-openSans rounded-md px-4 py-1 bg-tangBlue/20", tag.highlighted ? "text-azure bg-azure/20" : "")}>
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
}