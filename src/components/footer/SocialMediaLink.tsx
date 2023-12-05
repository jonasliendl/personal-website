import { Link } from "react-router-dom";

type SocialMediaIcon = "x-twitter" | "github" | "medium" | "linkedin";

interface SocialMediaLinkProps {
    link: string;
    icon: SocialMediaIcon;
}

export default function SocialMediaLink({ link, icon }: SocialMediaLinkProps) {

    return (
        <>
            <Link to={link} target="_blank">
                <div className="w-10 h-10 rounded-full bg-darkBackground hover:bg-tangBlue/80 ease-in-out duration-300 flex items-center justify-center">
                    <i className={`fa-brands fa-${icon} text-snow`} ></i>
                </div>
            </Link>
        </>
    );
}
