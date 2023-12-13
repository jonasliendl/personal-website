import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface HeaderItemProps {
    title: string;
    path: string;
}

export default function HeaderItem({ title, path }: HeaderItemProps) {
    const location = useLocation();

    return (
        <>
            <span
                className={
                    twMerge(
                        location.pathname === path
                            ? "bg-tangBlue"
                            : "hover:bg-tangBlue hover:text-snow",
                        "py-[8px] sm:py-[0px] w-full sm:w-fit flex flex-row items-center justify-center font-bold rounded-md ease-in-out duration-300"
                    )
                }
            >
                <Link to={path} className="px-[16px] py-[4px]">
                    {title}
                </Link>
            </span>
        </>
    );
}
