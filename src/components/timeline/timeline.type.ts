import { Tag } from "../project/type";

export type TypeTimelineItem = {
    img?: string;
    organisation: string;
    title: string;
    startingDate?: Date;
    endingDate?: Date;
    type: TimelineItemType;
    location?: string;
    description?: string;
    tags?: Tag[];
};

export type TimelineItemType = "work" | "education" | "project" | "other";
