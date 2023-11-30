import { useMediaQuery } from "react-responsive";
import HeaderItem from "./HeaderItem";
import { Menu, X } from "react-feather";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) setIsMenuOpen(false);
        else setIsMenuOpen(true);
    }

    return (
        <>
            <header className="w-full h-[100px] flex flex-row justify-center items-center bg-darkBackground fixed top-0 shadow-2xl z-10">
                <div className="w-11/12 mx-auto flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-6 items-center cursor-pointer rounded-md hover:bg-tangBlue ease-in-out duration-300 px-[14px] py-[4px]">
                        <img src="https://avatars.githubusercontent.com/u/56661501?v=4" alt="Profile Picture" className="w-[42px] h-[42px] rounded-full" />
                        <div className="flex flex-col">
                            <h1 className="text-snow text-[20px]">
                                Jonas Liendl
                            </h1>
                            <p className="font-openSans text-[12px] text-snow/80">
                                Future Talent Computer Science
                            </p>
                        </div>
                    </div>
                    { !isMobile && <div className="flex flex-row gap-2">
                        <HeaderItem title="👋 Start" path="/" />
                        <HeaderItem title="📁 Projects" path="/projects" />
                    </div>}
                    { isMobile && 
                    <span className="rounded-sm px-[6px] py-[6px] hover:bg-tangBlue cursor-pointer ease-in-out duration-300" onClick={toggleMenu} >
                        { !isMenuOpen && <Menu color="snow" />}
                        { isMenuOpen && <X color="snow" />}
                    </span> }
                </div>
            </header>
            { isMenuOpen && 
                <div className="w-full absolute h-screen bg-darkBackground z-0">
                    <div className="w-11/12 mx-auto mt-[110px] flex flex-col gap-4 justify-center items-center">
                        <NavLink to="/" className="text-snow w-full hover:bg-tangBlue ease-in-out text-center duration-300 py-[8px] rounded-sm">
                            👋 Home
                        </NavLink>
                        <NavLink to="/projects" className="text-snow w-full hover:bg-tangBlue ease-in-out text-center duration-300 py-[8px] rounded-sm">
                            📁 Projects
                        </NavLink>
                    </div>
                </div>}
        </>
    );
}