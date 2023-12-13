import { Link } from "react-router-dom";
import { ProjectItem } from "./type";
import { twMerge } from "tailwind-merge";

interface ProjectProps {
    item: ProjectItem;
}

export default function Project({ item }: ProjectProps) {

    item.tags?.sort(a => a.highlighted ? -1 : 1);

    return (
        <>
            <div className="p-[32px] flex flex-row items-start gap-4 bg-darkSurface shadow-lg rounded-md w-full">
                <img src={item.image ?? "https://avatars.githubusercontent.com/u/56661501?v=4"} alt={item.title} className="w-[48px] h-[48px] rounded-md" />
                <div className="flex flex-col gap-2 w-full overflow-hidden">
                    <h1 className="text-snow font-montserrat font-bold text-[28px]">
                        {item.title}
                    </h1>
                    <p className="text-snow/80 font-openSans">
                        {item.description}
                    </p>
                    { item.tags && <div className="w-full overflow-x-scroll">
                        <div className="flex flex-row gap-2 mt-2">
                            {item.tags.map(tag => (
                                <span key={tag.name} className={twMerge("text-tangBlue cursor-pointer font-bold font-openSans rounded-md px-4 py-1 bg-tangBlue/20", tag.highlighted ? "text-azure bg-azure/20" : "")}>
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </div>}
                    { item.link && <Link to={item.link} className="flex flex-row items-center text-tangBlue font-bold hover:bg-tangBlue/30 rounded-md w-fit py-[4px] px-[12px] gap-1 ease-in-out duration-300">
                        <i className="fa-solid fa-link"></i>
                        <span>
                            Read More
                        </span>
                    </Link>}
                </div>
            </div>
        </>
    );
}
