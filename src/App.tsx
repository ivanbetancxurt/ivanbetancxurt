import "./App.scss";
import headshot from "./public/headshot.jpg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

function App() {
    const bio = useRef(null);

    useEffect(() => {
        const typed = new Typed(bio.current, {
            strings: [
                "Hey, my name is Ivan. I'm a software engineer based in the Boston area. I studied math and CS at Amherst College but music has my heart, with a soft spot for classical piano. Feel free to reach out for anything!",
            ],
            typeSpeed: 35,
            showCursor: true,
            cursorChar: "_",
        });

        return () => {
            typed.destroy();
        };
    });

    return (
        <>
            <div className="container">
                <div className="glassTester">o</div>
                <div className="card">
                    <img src={headshot} alt="Ivan's headshot" className="headshot" />
                    <h1 className="name">Ivan Betancourt</h1>
                    <p className="bio">
                        <span ref={bio} />
                    </p>
                    <section className="links">
                        <a
                            href="https://github.com/ivanbetancxurt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ivan-andre-betancourt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            <FontAwesomeIcon icon={faSquareLinkedin} size="2x" />
                            LinkedIn
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ivan-andre-betancourt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
                            Email
                        </a>
                    </section>
                </div>
            </div>
        </>
    );
}

export default App;
