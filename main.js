import './style.css';

import { Email } from './src/components/Email/email.js';
import { addSkills } from "./src/components/skillsCreator/skills.js";
import { addEducation } from './src/components/educationCreator/educationDiv.js';
import { projectCreator } from './src/components/projectCreator/projectCreator.js';
import { scrollFunction } from './src/components/scrollAction/scrollAction.js';
import { toTheTop } from './src/components/scrollAction/buttonToTheTop.js';


const skillsArray = ["JAVASCRIPT", "CSS", "REACT", "NODE.JS", "GIT", "EXPRESS", "MONGO", "FIGMA"];
const educationArray = [
    {
    title: "BOOTCAMP FULL STACK DEVELOPER",
    course: "{Rock The Code} - ThePowerMBA Business School - June 2023/Jan 2025"
    },
    {
    title: "RELEVANT COURSES",
    course: "E-Commerce with Wordpress - Figma - Sound engineer degree"
    }
]
const projects = [
    {
        span: "LANDING PAGE - RÉPLICA",
        img: "./assets/projectsImg/suarez.jpeg",
        url1:"https://proyecto1csstiendasuarez.netlify.app/",
        button1: "LINK 1",
        url2:"https://proyecto-3-async-pinterest.netlify.app/",
        button2: "LINK 2"
    
    },

    {
        span: "WEBSITE - SHOP",
        img: "./assets/projectsImg/retrofeet.jpeg",
        url1:"https://retrofeet-shop.netlify.app/",
        button1: "LINK 1",
        url2:"https://bidi-bags-front.vercel.app/",
        button2: "LINK 2" 
    },
    {
        span: "GAMES HUB",
        img: "./assets/projectsImg/gamesHub.png",
        url1:"https://juegos-reunidos.netlify.app/",
        button1: "LINK 1",
        url2:"",
        button2: "WORKING ON IT"
    
    }
]


//header
const headerDiv = document.querySelector("#headerDiv");
const h1 = document.createElement("h1");
h1.textContent = "MARIA K. RIVAS";
const h2 = document.createElement("h2");
h2.textContent = "FULLSTACK JR DEVELOPER";


//menu central
const introPage = document.querySelector("#introPage");
const menu = document.querySelector(".menuDiv");
menu.className = "menuDiv";

const leftSide = document.createElement("div");
leftSide.className = "menuLeft";

const educationButton = document.createElement("button");
educationButton.id = "educationButton";
educationButton.textContent = "EDUCATION";

const avatarDiv = document.createElement("div");
avatarDiv.className = "avatarDiv";
const imgAvatar = document.createElement("img");
imgAvatar.src = "./assets/icons/favicon.png";
imgAvatar.id = "avatar";

const rightSide = document.createElement("div");
rightSide.className = "menuRight";

const projectsButton = document.createElement("button");
projectsButton.id = "projectsButton";
projectsButton.textContent = "PROJECTS";


//sobre mi
const aboutMeButton = document.createElement("button");
aboutMeButton.id = "aboutMeButton";
aboutMeButton.textContent = "ABOUT ME";


const aboutMeP = document.createElement("p");
aboutMeP.className = "aboutmeParagraph";
aboutMeP.textContent = '"Mi objetivo es crear interfaces intuitivas, prácticas y agradables, aportar valor a los proyectos y continuar creciendo en un campo tan dinámico y creativo como el desarrollo. Creo que reinventarse y tener pasión por el aprendizaje es clave, y es algo que aplico y valoro en mi día a día, en todos los aspectos. Mi trayectoria previa es un mundo muy diferente, pero me ha dotado de un ojo crítico para el detalle, un profundo estudio del color y el entrenamiento de la creatividad, cualidades que ahora aplico al desarrollo de software y diseño web."'

const educationDiv = document.querySelector("#educationDiv");
const projectsDiv = document.querySelector("#projectsContainer");
const aboutMeDiv = document.querySelector("#aboutMeDiv");

//contacto
const contactSection = document.querySelector("#contact");
Email(contactSection);



//footer
const footerDivHTML = document.querySelector(".footerDiv");
const footerSpan = document.createElement("span");
footerSpan.textContent = "© Created by Maria Rivas - 2024";

//to the top
const buttonToTheTop = document.createElement("div");
buttonToTheTop.id = "buttonToTheTop";
const toTopImg = document.createElement("img");
toTopImg.src = "./assets/icons/flecha-hacia-arriba.png";
toTopImg.id = "toTop";


headerDiv.appendChild(h1);
headerDiv.appendChild(h2);
menu.appendChild(leftSide);
leftSide.appendChild(educationButton);
menu.appendChild(avatarDiv);
avatarDiv.appendChild(imgAvatar);
menu.appendChild(rightSide);
rightSide.appendChild(projectsButton);

introPage.appendChild(aboutMeDiv);
aboutMeDiv.appendChild(aboutMeButton);
aboutMeDiv.appendChild(aboutMeP);
introPage.appendChild(educationDiv);
introPage.appendChild(projectsDiv);
introPage.appendChild(contactSection);
introPage.appendChild(footerDivHTML);
footerDivHTML.appendChild(footerSpan);
introPage.appendChild(buttonToTheTop);
buttonToTheTop.appendChild(toTopImg);


addSkills(document.getElementById("skillsDiv"), skillsArray);
addEducation(document.getElementById("educationDiv"), educationArray);
projectCreator(document.getElementById("projectsContainer"), projects);
scrollFunction(document.getElementById("educationButton"), "center",  "educationDiv");
scrollFunction(document.getElementById("projectsButton"),"nearest",  "projectsContainer");
scrollFunction(document.getElementById("aboutMeButton"),"center",  "aboutMeDiv");
toTheTop(document.getElementById("buttonToTheTop"), "skillsDiv");



