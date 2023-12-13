import Project from "../components/project/Project";
import { ProjectItem } from "@/components/project/type";

export default function Projects() {

    const projects: ProjectItem[] = [
        {
            title: "Meetandask",
            description: "Meetandask is a student project that aims to create a platform for people to meet experts and ask them questions. It's a platform where people can share their knowledge and get paid for it.",
            link: "https://test.meetandask.com",
            tags: [
                {
                    name: "Next.js",
                },
                {
                    name: "TypeScript",
                }
            ]
        },
        {
            title: "Jonasliendl.me",
            description: "My personal website where I share my projects and thoughts as well as my current status and what I'm up to. Here I also share my knowledge and experience in the tech industry and interesting engineering branches.",
            tags: [
                {
                    name: "React",
                },
                {
                    name: "TypeScript",
                },
                {
                    name: "TailwindCSS",
                }
            ]
        }
    ];

    return (
        <>
            <div className="w-11/12 mx-auto flex flex-col gap-10 items-center">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="font-montserrat font-bold text-6xl mt-10">
                        Projects
                    </h1>
                    <p className="font-openSans w-1/2 text-center text-snow/80 font-semibold">
                        Besides my work and studies, I'm working on different private projects with whom I try to boost my engineering skills.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map(project => (
                        <Project key={project.title} item={project} />
                    ))}
                </div>
            </div>
        </>
    );
}