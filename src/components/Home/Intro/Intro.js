// import "../../../static/css/Intro.css";
import Greeting from "./Greeting";

function Intro() {
    return (
        <section id="intro_section">
            <div class="wrapper">
                <span>
                    <Greeting></Greeting>
                </span>
                <span>I'm siwa.</span>
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
