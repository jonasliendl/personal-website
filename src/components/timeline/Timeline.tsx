import TimelineItem from "./TimelineItem";
import { TypeTimelineItem } from "./timeline.type";

interface TimelineProps {
    items: TypeTimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {

    return (
        <>
            <div className="flex flex-col gap-6 mt-10 md:ml-[-75px]">
                {items.map(item => (
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 group cursor-pointer">
                        <div className="w-[50px] h-[50px] bg-darkSurface rounded-full flex items-center justify-center group-hover:bg-tangBlue duration-300 ease-in-out">
                            <i className={`fa solid 
                                ${item.type === "education" 
                                    ? "fa-graduation-cap" 
                                    : item.type === "work" 
                                        ? "fa-briefcase" 
                                        : item.type === "project" 
                                            ? "fa-diagram-project" 
                                            : "fa-hashtag"}`}></i>
                        </div>
                        <TimelineItem item={item} />
                    </div>
                ))}
            </div>
        </>
    );
}
