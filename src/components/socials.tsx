import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';

export default function Socials() {
    return (
        <section className="section py-5 px-4">
            <h1 className="section-title">Socials.</h1>
            <p className="text font-serif text-center mt-4">
                You can contact me via Twitter direct message or LinkedIn. 
                At GitHub you can see some of my projects. 
                And at Twitter I post about my work and interesting topics.
            </p>
            <div className="flex sm:flex-row flex-col justify-center mt-10">
                <div className="group card">
                    <a href="https://twitter.com/jonasliendl" key="twitter" target="_blank" rel="noreferrer" className="card-link">
                        <Twitter className="card-icon"/>
                    </a>
                    <span className="card-title">Twitter</span>
                </div>
                <div className="group card">
                    <a href="https://github.com/jonasliendl" key="github" target="_blank" rel="noreferrer" className="card-link">
                        <GitHub className="card-icon"/>
                    </a>
                    <span className="card-title">GitHub</span>
                </div>
                <div className="group card">
                    <a href="https://www.linkedin.com/in/jonas-liendl-b56848225/" key="linkedin" target="_blank" rel="noreferrer" className="card-link">
                        <LinkedIn className="card-icon"/>
                    </a>
                    <span className="card-title">LinkedIn</span>
                </div>
            </div>
        </section>
    );
}
