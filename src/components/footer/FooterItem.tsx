import { Link } from "react-router-dom";

interface FooterItemProps {
    link: string;
    text: string;
}

export default function FooterItem({ link, text }: FooterItemProps) {
    return (
        <>
            <span className="rounded-sm">
                <Link to={link} className="font-openSans text-sm text-snow/80 hover:underline hover:text-tangBlue ease-in-out duration-300">
                    {text}
                </Link>
            </span>
        </>
    );
}