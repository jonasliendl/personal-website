export type TypeTimelineItem = {
    img?: string;
    organisation: string;
    title: string;
    startingDate?: Date;
    endingDate?: Date;
    type: TimelineItemType;
    location?: string;
    description?: string;
};

export type TimelineItemType = "work" | "education" | "project" | "other";
