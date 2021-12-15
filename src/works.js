import loopstudio from './images/loopstudio.png'
import grocery from './images/grocery.png'
import trafalgar from './images/trafalgar.png'
import resume from './images/resume.png'
import weather from './images/weather.png'
import code from './images/code.png'
import blue from './images/blue.png'
import fusely from './images/fusely.png'
import converter from './images/converter.png'



const works = [
    {
        id: 1,
        img: code,
        desc: "A code editor for testing and showcasing HTML, CSS and JavaScript code. Built with react and tailwind",
        addclass: "work",
        title: "Code Editor",
        github: "https://github.com/bisoladebiyi/code-editor",
        site: "https://codeditor-react.netlify.app/",
        tech: ["React"]

    },
    {
        id: 2,
        img: weather,
        desc: "A weather app, gives basic info about the weather of all cities across the globe",
        addclass: "work switch",
        title: "Weather App",
        github: "https://github.com/bisoladebiyi/weather-app",
        site: "https://bee-weather-app.herokuapp.com/",
        tech: ["React"]

    },
    {
        id: 3,
        img: blue,
        desc: "E-commerce site built with react, redux and tailwind",
        addclass: "work",
        title: "Blue Shop",
        github: "https://github.com/bisoladebiyi/Blue-shop-website",
        site: "https://blue-shop.netlify.app/",
        tech: ["React", "Redux", "Tailwind"]

    },
    {
        id: 4,
        img: fusely,
        desc: "A simple landing page, fully responsive. Built with HTML, SASS & Javascript.",
        addclass: "work switch",
        title: "Fusely Landing Page",
        github: "https://github.com/bisoladebiyi/fusely",
        site: "https://fusely-landing-page.netlify.app/",
        tech: ["HTML", "SASS", "Javascript"]

    }, {
        id:5,
        img: resume,
        desc: "A single webpage resume. Fully responsive and built with React.js.",
        addclass: "work",
        title: "My Resume",
        github: "https://github.com/bisoladebiyi/HNGi8-tasks-stage-2/tree/main/resume-hng-task",
        site: "https://bisoladebiyi-resume.vercel.app/",
        tech: ["React"]
    }, {
        id:6,
        img: converter,
        addclass: "work",
        title: "Currency Converter",
        github: "https://github.com/bisoladebiyi/react-currency-converter",
        site: "https://bee-currency-converter-react.netlify.app/",
        tech: ["React"]
    },
    {
        id: 7,
        img: grocery,
        addclass: "work",
        title: "Grocery Bud",
        github: "https://github.com/bisoladebiyi/react-mini-projects/tree/main/grocery-bud",
        site: "https://grocery-bud-bee.vercel.app/",
        tech: ["React"]

    },
    {
        id: 8,
        img: trafalgar,
        desc: "A simple landing page, fully responsive. Built with HTML, SASS & Javascript.",
        addclass: "work switch",
        title: "Trafalgar Landing Page",
        github: "https://github.com/bisoladebiyi/Trafalgar-landing-page",
        site: "https://trafalgar-bee.netlify.app/",
        tech: ["HTML", "CSS", "Javascript"]

    }, {
        id:9,
        img: loopstudio,
        desc: "A single webpage resume. Fully responsive and built with React.js.",
        addclass: "work",
        title: "Loopsudio Landing Page",
        github: "https://github.com/bisoladebiyi/loopstudio",
        site: "https://loopstudio-bee.netlify.app",
        tech: ["HTML", "CSS", "Javascript"]
    }
]
export default works