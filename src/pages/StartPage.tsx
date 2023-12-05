import Timeline from "../components/timeline/Timeline";
import { TypeTimelineItem } from "../components/timeline/timeline.type";
import * as TeslaLogo from "../assets/img/Tesla.png";

export default function StartPage() {

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
            <div className="w-11/12 mx-auto mt-10 flex flex-col gap-[8rem]">
                <div className="flex flex-col gap-4 items-center">
                    <h1 className="font-montserrat font-bold text-5xl text-center">
                        Hi, I'm Jonas Liendl 👋
                    </h1>
                    <p className="font-openSans text-left text-snow/80 md:w-8/12 mx-auto">
                        Hey, I am Jonas a Future Talent in Computer Science working for Tesla in Berlin.
                        As a Future Talent I am studying at the Berlin School of Economics and Law, and working for Tesla at the same time, resulting in a mixture of theoretical and practical training.
                        <br /><br />
                        Besides my work I am working in small projects related to Computer Science, or other interesting technology and engineering topics.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-2 h-fit">
                    <h1 className="font-montserrat font-bold text-5xl text-center">
                        Timeline
                    </h1>
                    <p className="font-openSans text-[14px] font-semibold text-snow/80 text-center">Everything about my education, career and more.</p>
                    <Timeline items={timelineItems} />
                </div>
            </div>
        </>
    );
}