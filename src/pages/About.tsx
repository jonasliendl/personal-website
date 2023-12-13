import { TypeTimelineItem } from "@/components/timeline/timeline.type";
import * as TeslaLogo from "../assets/img/Tesla.png";
import Timeline from "../components/timeline/Timeline";

export default function About() {

    const timelineItems: TypeTimelineItem[] = [
        {
            img: TeslaLogo.default,
            organisation: "Tesla",
            title: "Future Talent in Computer Science",
            startingDate: new Date("2022-09-01"),
            location: "Grünheide, Germany",
            type: "work",
            description: "I'm part of the Future Talent Program at Tesla. This is a dual study program offering a mixture of theoretical and practical training."
        },
        {
            img: "https://pbs.twimg.com/profile_images/561164918477438976/tRFHNare.jpeg",
            organisation: "Berlin School of Economics and Law",
            title: "Bachelor of Science in Computer Science",
            startingDate: new Date("2022-10-01"),
            endingDate: new Date("2025-10-30"),
            location: "Berlin, Germany",
            type: "education",
            description: "At the Berlin School of Economics and Law I am studying Computer Science. This study is part of the Future Talent Program at Tesla."
        },
    ];

    return (
        <>
            <div className="w-11/12 mx-auto flex flex-col gap-10 items-center">
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="font-montserrat font-bold text-6xl mt-10">
                        Timeline
                    </h1>
                    <p className="w-1/2">
                        
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <Timeline items={timelineItems} />
                </div>
            </div>
        </>
    );
}
