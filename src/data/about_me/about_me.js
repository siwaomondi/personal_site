import rev_omondi from '../../images/influences/rev_omondi_siwa.jpg'

const intro = {
    title: "Intro",
    description: ""
}

const currently = {
    title: "Currently",
    description: ""
}

const my_story = {
    title: "My Story",
    list: [
        "At age1",


    ]
}

const likes = {
    title: "I like",
    list: [
        "Finding my limits and going there",
        "Running",
        <a >Books</a>,
        "Writing",
        ""
    ]
}

const influences = {
    title: "People I look up to",
    influences: [
        {
            name: "Omondi Siwa",
            urlRedirect: "#",
            imgUrl: rev_omondi,
            briefDescription: "Tim LaHaye's Transformed Temperaments describes Abraham the Phlegmatic as calm, peaceable, cautious, easygoing and reliable.I'd be damned if this man were not the modern day father Abraham "
        },
        {
            name: "Elon Musk",
            urlRedirect: "https://en.wikipedia.org/wiki/Elon_Musk",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
            briefDescription: "Is there really anyone who doesn't admire what this man has accomplished?"
        },
        {
            name: "Jordan Peterson",
            urlRedirect: "https://en.wikipedia.org/wiki/Jordan_Peterson",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Jordan_Peterson_by_Gage_Skidmore.jpg/330px-Jordan_Peterson_by_Gage_Skidmore.jpg",
            briefDescription: "Insightful"
        },
        {
            name: "Benjamin Franklin",
            urlRedirect: "https://en.wikipedia.org/wiki/Benjamin_Franklin",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/330px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg",
            briefDescription: "Is there anyone that "
        },
        {
            name: "Carl Jung",
            urlRedirect: "https://en.wikipedia.org/wiki/Carl_Jung",
            imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MjY4NjkzMDAz/carl-jung-9359134-1-402.jpg",
            briefDescription: ""
        }
    ]
}

const ageData = {
    year: 1998,
    month: 0, //birthmonth range is [0-11]
    date: 5,
    hour: 10,
    minute: 4,
    second: 0
}

export { influences, likes, intro, my_story, currently,ageData }