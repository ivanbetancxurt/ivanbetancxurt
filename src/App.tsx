import "./App.scss";
import headshot from "./public/headshot.jpg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function draw(ctx) {
    console.log("yo");
    ctx.fillStyle = "red";
    ctx.fillRect(500, 300, 20, 20);
    ctx.fillRect(100, 200, 20, 20);
}

function App() {
    const bioRef = useRef(null);
    const canvasRef = useRef(null);

    let grid = [];
    const gridRef = useRef(grid);

    const cellSize: number = 20;

    useEffect(() => {
        const typed = new Typed(bioRef.current, {
            strings: [
                "Hey, my name is Ivan. I'm a software engineer based in the Boston area and I studied math and CS at Amherst College. Outside of work, I'm deep into music; all kinds, but classical piano especially. Feel free to reach out for whatever.",
            ],
            typeSpeed: 35,
            showCursor: true,
            cursorChar: "_",
        });

        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const dpr = window.devicePixelRatio;
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        const ctx = canvas.getContext("2d");
        ctx.scale(dpr, dpr);
        const rafId = requestAnimationFrame(() => draw(ctx));

        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <>
            <div className="container">
                <canvas ref={canvasRef} />
                <div className="card">
                    <img src={headshot} alt="Ivan's headshot" className="headshot" />
                    <h1 className="name">Ivan Betancourt</h1>
                    <p className="bio">
                        <span ref={bioRef} />
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
                        <a href="mailto:ivanab252@gmail.com" className="link">
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                                style={{ fontSize: "1.6rem" }}
                            />
                            Email
                        </a>
                    </section>
                </div>
            </div>
        </>
    );
}

export default App;
