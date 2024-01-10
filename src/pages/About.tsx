import { TypeTimelineItem } from "@/components/timeline/timeline.type";
import * as TeslaLogo from "../assets/img/Tesla.png";
import TimelineItem from "../components/timeline/TimelineItem";

export default function About() {

    const timelineItems: TypeTimelineItem[] = [
        {
            img: TeslaLogo.default,
            organisation: "Tesla",
            title: "Future Talent in Computer Science",
            startingDate: new Date("2022-09-01"),
            location: "Grünheide, Germany",
            type: "work",
            description: "I'm part of the Future Talent Program at Tesla. This is a dual study program offering a mixture of theoretical and practical training.",
            tags: [
                {
                    name: "Go",
                },
                {
                    name: "React",
                },
                {
                    name: "TypeScript",
                },
                {
                    name: "PostgreSQL",
                },
                {
                    name: "Angular",
                }
            ],
        },
        {
            img: "https://pbs.twimg.com/profile_images/561164918477438976/tRFHNare.jpeg",
            organisation: "Berlin School of Economics and Law",
            title: "Bachelor of Science in Computer Science",
            startingDate: new Date("2022-10-01"),
            endingDate: new Date("2025-10-30"),
            location: "Berlin, Germany",
            type: "education",
            description: "At the Berlin School of Economics and Law I am studying Computer Science. This study is part of the Future Talent Program at Tesla.",
            tags: [
                {
                    name: "Go",
                },
                {
                    name: "Java",
                },
                {
                    name: "C",
                },
            ],
        },
    ];

    return (
        <>
            <div className="w-11/12 mx-auto flex flex-col gap-10 items-center">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="font-montserrat font-bold text-6xl mt-10">
                        About Me
                    </h1>
                    <p className="font-openSans w-1/2 text-center text-snow/80 font-semibold">
                        Already in school I was pationate about technology and especially programming. After finishing my school I directly searched for a company and study that fits my interests. I found the perfect match with Tesla and the Berlin School of Economics and Law.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {timelineItems.map(item => (
                        <TimelineItem key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}
