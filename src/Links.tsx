import "./App.scss";
import "./Links.scss";
import { Asterisk } from "lucide-react";

function Links() {
    return (
        <ul className="linkContainer">
            <li>
                <a className="dotoBody link" href="https://github.com/ivanbetancxurt" target="_blank" rel="noopener noreferrer">
                    <span>+  GitHub</span>
                </a>
            </li>

            <li>
                <a className="dotoBody link" href="https://linkedin.com/in/ivan-andre-betancourt/" target="_blank" rel="noopener noreferrer">
                    <span>+  LinkedIn</span>
                </a>
            </li>
        </ul>
    );
}

export default Links;
