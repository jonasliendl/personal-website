import { useMediaQuery } from "react-responsive";
import HeaderItem from "./HeaderItem";
import { Menu, X } from "react-feather";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type NavItem = {
    title: string;
    path: string;
};

export default function Header() {
    const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
    const navigate = useNavigate();

    useEffect(() => {
        if (!isMobile) setIsMenuOpen(false);
    }, [isMobile]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) setIsMenuOpen(false);
        else setIsMenuOpen(true);
    }

    const navItems: NavItem[] = [
        {
            title: "👋 Start",
            path: "/"
        },
        {
            title: "📝 About",
            path: "/about"
        },
        {
            title: "📁 Projects",
            path: "/projects"
        }
    ];

    const navigateHome = () => {
        navigate("/");
    }

    return (
        <>
            <header className="w-full h-[100px] flex flex-row justify-center items-center bg-darkBackground fixed top-0 shadow-2xl z-10">
                <div className="w-11/12 mx-auto flex flex-row justify-between items-center">
                    <div onClick={navigateHome} className="flex flex-row gap-6 items-center cursor-pointer rounded-md hover:bg-tangBlue ease-in-out duration-300 px-[14px] py-[4px]">
                        <img src="https://avatars.githubusercontent.com/u/56661501?v=4" alt="Profile" className="w-[42px] h-[42px] rounded-full" />
                        <div className="flex flex-col">
                            <h1 className="text-snow text-[20px]">
                                Jonas Liendl
                            </h1>
                            { !isMobile && <p className="font-openSans text-[12px] text-snow/80">
                                Future Talent Computer Science
                            </p>}
                        </div>
                    </div>
                    { !isMobile && <div className="flex flex-row gap-2">
                        {navItems.map(item => (
                            <HeaderItem key={item.title} title={item.title} path={item.path} />
                        ))}
                    </div>}
                    { isMobile && 
                    <span className="rounded-md px-[6px] py-[6px] hover:bg-tangBlue cursor-pointer ease-in-out duration-300" onClick={toggleMenu} >
                        { !isMenuOpen && <Menu color="snow" />}
                        { isMenuOpen && <X color="snow" />}
                    </span> }
                </div>
            </header>
            { isMenuOpen && 
                <div className="w-full fixed h-screen bg-darkBackground z-0">
                    <div className="w-11/12 mx-auto mt-[110px] flex flex-col gap-4 justify-center items-center">
                        {navItems.map(item => (
                            <HeaderItem onClick={toggleMenu} key={item.title} title={item.title} path={item.path} />
                        ))}
                    </div>
                </div>}
        </>
    );
}