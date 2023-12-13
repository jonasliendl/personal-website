import TimelineItem from "./TimelineItem";
import { TypeTimelineItem } from "./timeline.type";

interface TimelineProps {
    items: TypeTimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {

    return (
        <>
            <div className="flex flex-col gap-6 mt-10">
                {items.map(item => (
                    <div key={item.title} className="flex flex-col md:flex-row items-center gap-4 md:gap-10 group cursor-pointer">
                        <TimelineItem item={item} />
                    </div>
                ))}
            </div>
        </>
    );
}
