import FooterItem from "./FooterItem";
import SocialMediaLink from "./SocialMediaLink";

export default function Footer() {
    return (
        <>
            <footer className="w-full h-[100px] bg-darkBackground bottom-0">
                <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-around md:justify-between h-full">
                    <div className="flex flex-row gap-4">
                        <FooterItem link="/legal" text="Legal Notice"/>
                    </div>
                    <div className="flex flex-row gap-2">
                        <SocialMediaLink link="https://x.com/jonasliendl" icon="x-twitter" />
                        <SocialMediaLink link="https://github.com/jonasliendl" icon="github" />
                        <SocialMediaLink link="https://www.linkedin.com/in/jonasliendl/" icon="linkedin" />
                        <SocialMediaLink link="https://medium.com/@jonasliendl" icon="medium" />
                        <SocialMediaLink link="https://www.xing.com/profile/Jonas_Liendl" icon="xing" />
                    </div>
                </div>
            </footer>
        </>
    );
}
