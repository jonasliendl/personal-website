export default function StartPage() {
    return (
        <>
            <div className="w-11/12 md:w-8/12 mx-auto flex flex-col h-screen justify-center items-start gap-4 mt-[-8rem]">
                <h1 className="font-montserrat font-bold text-6xl text-left text-snow">
                    Hey, I'm <span className="text-tangBlue">Jonas Liendl.</span>
                </h1>
                <p className="font-openSans text-left text-snow/80">
                    I'm a software engineering enthusiast and currently studying the field of Computer Science at the Berlin School of Economics and Law. In addition to the study, I'm part of the Future Talents program at Tesla.
                    Besides my work at Tesla and my studies, I'm working on some private projects trying to boost my engineering skills. You can find them here and on my 
                    <a 
                        href="https://github.com/jonasliendl" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-tangBlue font-semibold hover:bg-tangBlue/20 ease-in-out duration-300 rounded-md ml-0.5 px-1.5 py-0.5 inline-block"
                    > <i className="fa-brands fa-github"></i> GitHub profile.
                    </a>
                </p>
            </div>
        </>
    );
}