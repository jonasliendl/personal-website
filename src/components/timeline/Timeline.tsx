import TimelineItem from "./TimelineItem";
import { TypeTimelineItem } from "./timeline.type";

interface TimelineProps {
    items: TypeTimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {

    return (
        <>
            <div className="flex flex-col gap-4">
                {items.map(item => (
                    <TimelineItem item={item} key={item.title} />
                ))}
            </div>
        </>
    );
}
