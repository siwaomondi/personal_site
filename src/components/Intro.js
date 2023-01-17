import "./css/Intro.css";
import { useEffect, useState } from "react";

function GreetingComponent() {
    const [greeting, setGreeting] = useState("Hello world");
    const greetings = [
        "hello world",
        "WASemaje mkuu",
        "idhi nade",
        "ũhana atĩa",
        "chamgei",
        "oriena",
    ];

    useEffect(() => {
        var el = 0;
        const interval = setInterval(() => {
            setGreeting(greetings[el]);
            el += 1;
            if (el === greetings.length) {
                el = 0;
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return <>{greeting}.</>;
}

function Intro() {
    return (
        <section className="intro_section">
            <div
                class="wrapper"
                style={{ fontSize: "3rem", fontWeight: "400" }}
            >
                <span id="dynamic__greet">
                    <GreetingComponent></GreetingComponent>
                </span>
                <span>
                    I'm siwa.
                </span>
            </div>

            <div className="intro_text">
                A designer passionate about architecture, software development
                and deep learning. My other interests are precision agriculture
                and blockchain technology development.
            </div>
        </section>
    );
}

export default Intro;
