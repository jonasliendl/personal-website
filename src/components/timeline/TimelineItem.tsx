import { differenceInMonths, format } from "date-fns";
import { TypeTimelineItem } from "./timeline.type";

interface TimelineItemProps {
    item: TypeTimelineItem;
}

export default function TimelineItem({ item }: TimelineItemProps) {

    const calculateTimeDifference = (): number => {
        return differenceInMonths(new Date(item.endingDate ?? Date.now()), new Date(item.startingDate ?? Date.now()));
    }

    const calculateTimeDifferenceInYears = (): number => {
        return Math.floor(calculateTimeDifference() / 12);
    }

    let timeDifference = calculateTimeDifference();
    let timeDifferenceInYears = calculateTimeDifferenceInYears();

    return (
        <>
            <div className="p-[24px] bg-darkSurface flex flex-col md:flex-row gap-4 rounded-md shadow-xl items-start max-w-[600px] h-fit">
                <img src={item.img ?? "default.png"} alt={item.title} className="w-[48px] h-[48px] rounded-md"/>
                <div className="flex flex-col">
                    <span className="font-openSans text-[12px] font-semibold uppercase text-snow/60">
                        {item.organisation}
                    </span>
                    <h3 className="font-montserrat text-snow font-semibold text-[20px] my-1">
                        {item.title}
                    </h3>
                    { item.startingDate && 
                        <div className="my-1 font-openSans text-[14px] text-snow/80 flex flex-row items-center gap-2">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>
                                {format(new Date(item.startingDate), "MMMM yyyy")} - {item.endingDate ? format(new Date(item.endingDate), "MMMM yyyy") : "Present"} 
                                {` (${timeDifferenceInYears > 0 ? timeDifferenceInYears > 1 ? timeDifferenceInYears + " years " : timeDifferenceInYears + " year " : ""}${timeDifference - timeDifferenceInYears*12} months)`}</span>
                        </div>
                    }
                    { item.location && 
                        <span className="my-1 font-openSans text-[14px] text-snow/80 flex flex-row gap-2 items-center">
                            <i className="fa-solid fa-location-dot"></i>
                            {item.location}
                        </span>
                    }
                    <p className="font-openSans text-[14px] text-snow/80">
                        {item.description}
                    </p>
                </div>
            </div>
        </>
    );
}