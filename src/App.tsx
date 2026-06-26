import "./App.scss";
import headshot from "./public/headshot.jpg";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
    faPaperPlane,
    faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import CA from "./CA";

function App() {
    const [showQuestion, setShowQuestion] = useState(false);
    const [showThesisPlug, setThesisPlug] = useState(false);
    const bioRef = useRef(null);
    const canvasRef = useRef(null);
    const gridRef = useRef(null);

    const cellSize: number = 8;

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowQuestion(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

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

        const rows = Math.ceil(canvas.clientHeight / cellSize);
        const cols = Math.ceil(canvas.clientWidth / cellSize);
        gridRef.current = new CA(rows, cols, cellSize, ctx);

        canvas.addEventListener("mousemove", gridRef.current.interact);

        let rafId: number;
        const interval = 60;
        let last = 0;

        function animate(timestamp: number) {
            if (timestamp - last > interval) {
                ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
                gridRef.current.golUpdate();
                gridRef.current.draw();
                last = timestamp;
            }

            rafId = requestAnimationFrame(animate);
        }

        gridRef.current.draw();
        rafId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafId);
            canvas.removeEventListener("mousemove", gridRef.current.interact);
        };
    }, []);

    return (
        <>
            <div className="container">
                <canvas ref={canvasRef} />
                <div className={`thesisPlug ${showQuestion ? "visible" : ""}`}>
                    {showQuestion && (
                            <FontAwesomeIcon icon={faCircleQuestion} size="2x" />
                    )}
                </div>
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
