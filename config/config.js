var settings = {
    // common elements such as name, handles, etc
    name: "Aatmodhee Goswami",
    profile: "assets/images/me.png",
    description: "Aspiring Human",
    email: "atomind2005@gmail.com",
    github: "C0smicCrush",

    navLinks: [
        // all links must have a "text" attribute and a "link"
        // attribute (selector). Include "external:true" to link
        // to an outside page.
        {
            text: "Experience",
            link: "#experience",
            external: false
        },
        {
            text: "Projects",
            link: "#projects",
            external: false
        },
        {
            text: "Contact",
            link: "#contact",
            external: false
        },
        {
            text: "Resume",
            link: "https://docs.google.com/document/d/1MF7uLVT1ATXBGMjeYe0C2K8AQPeTfNFY/edit?usp=sharing&ouid=111635364603016531402&rtpof=true&sd=true",
            external: true
        }
    ],
    
    // Experience timeline
    experience: [
        {
            date: "August 2020-",
            title: "Austin Community College",
            description: "Doing an Associate's degree in Computer Science along with a High School Diploma through Dual-Credit Programs"
        },
        {
            date: "2021 - ",
            title: "Tutor at Study Table",
            description: "A tutor for Study Table LLC specializing in providing accelerated calculus curriculums for high schoolers and competitive academics preparation"
        },
        {
            date: "2021 - ",
            title: "ARC Animal Rescue web dev",
            description: "Helped maintain the website for ARC Animal Rescue"
        },
//        {
//           date: "2021 - ",
//            title: "Polk State College",
//            description: "Continued high school on accelerated learning course as a student within Polk State College in order to receive Associate of Arts degree upon high school graduation."
//        },
        {
            date: "2022 - ",
            title: "CCO at Finned Ad Services",
            description: "Focused on creating more enriching and better customer-side experiences for Finned"
        }
    ],

    // Projects: no info needed. Utilises GitHub API

    contact: {
        linkedin: {
            handle: "@aatmodhee-goswami",
            link: "https://www.linkedin.com/in/aatmodhee-goswami-4a305620a/"
        },
        github: {
            handle: "@C0smicCrush",
            link: "https://github.com/C0smicCrush"
        },
        discord: {
            handle: "@Studying#2893",
            link: "https://discord.com/channels/@me"
        },
        gmail: {
            handle: "atomind2005@gmail.com",
            link: "mailto:atomind2005@gmail.com"
        }
    }
}
