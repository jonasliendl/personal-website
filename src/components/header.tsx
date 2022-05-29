import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="dark:bg-black bg-white py-10 sticky top-0 section-animation">
            <div className="flex flex-row justify-center items-center">
                <div>
                    <img src={logo} alt="Logo" width="50" height="50" className="rounded"/>
                </div>
                <div className="ml-4">
                    <h1 className="text text-lg font-bold">Jonas Liendl</h1>
                    <p className="text dark:text-gray-100 italic">Space flight and astronomy enthusiast.</p>
                </div>
            </div>
        </header>
    );
}
