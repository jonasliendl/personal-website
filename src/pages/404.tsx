import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="w-full h-screen mt-[-100px] flex flex-col items-center justify-center flex-grow gap-6">
            <div className="text-center">
                <h1 className="font-montserrat text-snow font-bold text-4xl">404</h1>
                <p className="font-openSans text-snow/80 font-semibold">We could not find this site.</p>
            </div>
            <Link to="/" className="flex flex-row items-center text-tangBlue font-bold hover:bg-tangBlue/30 rounded-md w-fit py-[4px] px-[12px] gap-1 ease-in-out duration-300">
                <i className="fa-solid fa-link"></i>
                <span>
                    Go Home
                </span>
            </Link>
        </div>
    );
}