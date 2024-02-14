import Project from "../components/project/Project";
import { LinkType, ProjectItem } from "../components/project/type";

export default function Projects() {

    const projects: ProjectItem[] = [
        {
            title: "Piguesso",
            description: "Piguesso is a drawing game where players play against each other by drawing a given topic. After drawing, an AI has to detect the topic. The player with the most correct detections wins the game. This is a study project and was built with Next.js, TypeScript, and TensorFlow.js. Also, we are using a Redis cache and a PostgreSQL database. Wth Redis we store the game state, which gives us the possibility to fetch and write data fast.",
            links: [
                {
                    type: LinkType.SourceCode,
                    url: "https://github.com/piguesso/piguesso-app",
                },
                {
                    type: LinkType.Visit,
                    url: "https://piguesso.com"
                }
            ],
            tags: [
                {name: "Next.js"},
                {name: "TypeScript"},
                {name: "TensorFlow.js"},
                {name: "PostgreSQL"},
                {name: "Redis"},
                {name: "Tailwind CSS"},
            ],
        },
        {
            title: "Zwitscher.online",
            description: "Zwitscher is a Twitter clone which I built with another two students in context of my studies. It consists of a Svelte frontend written in TypeScript, and a Node.js backend with TypeScript and Express.js. For the database we used PostgreSQL.",
            links: [
                {
                    type: LinkType.SourceCode,
                    url: "https://github.com/zwitscheronline"
                },
                {
                    type: LinkType.Visit,
                    url: "https://zwitscher.online"
                }
            ],
            tags: [
                {
                    name: "Svelte",
                },
                {
                    name: "TypeScript",
                },
                {
                    name: "Express.js",
                },
                {
                    name: "PostgreSQL",
                },
                {
                    name: "Node.js"
                },
                {
                    name: "Tailwind CSS"
                }
            ]
        },
        {
            title: "Meetandask",
            description: "Meetandask is a student project that aims to create a platform for people to meet experts and ask them questions. It's a platform where people can share their knowledge and get paid for it.",
            links: [
                {
                    type: LinkType.Visit,
                    url: "https://test.meetandask.com"
                }
            ],
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