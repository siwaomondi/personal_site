import rev_omondi from "../../images/influences/rev_omondi_siwa.jpg";
import { Link } from "react-router-dom";
const intro = {
    title: "Intro",
    description: "W.I.P",
};

const currently = {
    title: "Currently",
    description:
        "I am learning and refining my skills in data science and blockchain technologies while dabbling in agricultural market and architectural designs ",
};

const my_story = {
    title: "My Story",
    list: ["W.I.P"],
};

const likes = {
    title: "I like",
    list: [
        "Finding my limits and going there",
        "Running",
        "Books",
        <Link to="/articles">Writing(self-proclaimed charlatan)</Link>,
        "Reading",
        "Anything fitness related"
    ],
};

const footerLinks = {
    twitter: "https://twitter.com/siwaomondi",
    github: "https://github.com/siwaomondi",
    linkedIn: "www.linkedin.com/in/siwaomondi",
    linktree:"https://linktr.ee/siwaomondi",
    phoneNumber:'+254740531097',
    emailAddress:"siwaomondi@gmail.com"
};

const influences = {
    title: "Influences",
    influences: [
        {
            name: "Omondi Siwa",
            urlRedirect: "#",
            imgUrl: rev_omondi,
            briefDescription:
                "Tim LaHaye's Transformed Temperaments describes Abraham the Phlegmatic as calm, peaceable, cautious, easygoing and reliable.I'd be damned if this man were not the modern day father Abraham.",
            quote: "Do the little things and do them well",
        },
        {
            name: "Elon Musk",
            urlRedirect: "https://en.wikipedia.org/wiki/Elon_Musk",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
            briefDescription:
                "Is there really anyone who doesn't admire what this man has accomplished?",
            quote: "When something is important enough, you do it even if the odds are not in your favor.",
        },
        {
            name: "Jordan Peterson",
            urlRedirect: "https://en.wikipedia.org/wiki/Jordan_Peterson",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Jordan_Peterson_by_Gage_Skidmore.jpg/330px-Jordan_Peterson_by_Gage_Skidmore.jpg",
            briefDescription:
                "Listening to him and conversing with him through his literature made me want to do more,be more and ask more.",
            quote: "Write a bad first draft, then move from there",
        },
        {
            name: "Benjamin Franklin",
            urlRedirect: "https://en.wikipedia.org/wiki/Benjamin_Franklin",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/330px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg",
            briefDescription:
                "A man that morphed himself into being whatever he wanted. A polymath if there ever was one.",
            quote: "If you were a servant would you not be ashamed that a good master should catch you idle? Then if you are your own master be ashamed to catch yourself idle.",
        },
        {
            name: "Carl Jung",
            urlRedirect: "https://en.wikipedia.org/wiki/Carl_Jung",
            imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MjY4NjkzMDAz/carl-jung-9359134-1-402.jpg",
            briefDescription:
                "The battle within is one that cannot and should not be repudiated. Jung opened my eyes to this and still does to this day.",
            quote: "Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
        },
    ],
};

const ageData = {
    year: 1998,
    month: 0, //birthmonth range is [0-11]
    date: 5,
    hour: 10,
    minute: 4,
    second: 0,
};

export { influences, likes, intro, my_story, currently, ageData, footerLinks };
