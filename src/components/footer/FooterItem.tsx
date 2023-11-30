import { Link } from "react-router-dom";

interface FooterItemProps {
    link: string;
    text: string;
}

export default function FooterItem({ link, text }: FooterItemProps) {
    return (
        <>
            <span className="rounded-sm">
                <Link to={link} className="font-openSans text-snow/80">
                    {text}
                </Link>
            </span>
        </>
    );
}