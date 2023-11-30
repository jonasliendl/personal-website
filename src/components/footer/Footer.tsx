import FooterItem from "./FooterItem";

export default function Footer() {
    return (
        <>
            <footer className="w-full h-[100px] bg-darkBackground bottom-0 absolute">
                <div className="w-11/12 mx-auto flex flex-row items-center justify-between h-full">
                    <p className="font-openSans text-snow/80">
                        Jonas Liendl
                    </p>
                    <div className="flex flex-row gap-2">
                        <FooterItem link="/legal" text="Legal Notice"/>
                    </div>
                </div>
            </footer>
        </>
    );
}
