import './style.css';

import {addSkills} from "./public/components/skillsCreator/skills.js";
import { addEducation } from './public/components/educationCreator/educationDiv.js';
import { projectCreator } from './public/components/projectCreator/projectCreator.js';


const skillsArray = ["HTML", "CSS", "JAVASCRIPT", "NODE.JS", "GIT", "DESIGN", "PREMIERE", "PHOTOSHOP", "AUDIO SKILLS", "AI"];
const educationArray = [
    {
    title: "BOOTCAMP FULL STACK DEVELOPER",
    course: "Rock The Code - ThePowerMBA Business School - jan 2023/jan2024"
    },
    {
    title: "RELEVANT COURSES",
    course: "E-Commerce with Wordpress - Adobe XD - Sound engineer degree"
    }
]
const projects = [
    {
        span: "LANDING PAGE",
        img: "./public/assets/projectsImg/landingImg.jpg",
        url1:"https://proyecto1csstiendasuarez.netlify.app/",
        button1: "LINK 1",
        url2:"https://position-landing-page.netlify.app/",
        button2: "LINK 2"
    
    },

    {
        span: "WEBSITE - SHOP",
        img: "./public/assets/projectsImg/websiteImg.jpg",
        url1:"https://retrofeet-shop.netlify.app/",
        button1: "LINK 1",
        url2:"https://proyecto-3-async-pinterest.netlify.app/",
        button2: "LINK 2" 
    },
    {
        span: "GAMES HUB",
        img: "./public/assets/projectsImg/gamesImg.jpg",
        button1: "WORK IN PROGRESS"
         
    }
]


//header
const headerDivHTML = document.querySelector(".headerDiv");
const h1 = document.createElement("h1");
h1.textContent = "MARIA RIVAS";
const h2 = document.createElement("h2");
h2.textContent = "FRONTEND DEVELOPER";


//menu central
const introPage = document.querySelector("#introPage");
const menu = document.querySelector(".menuDiv");
menu.className = "menuDiv";

const leftSide = document.createElement("div");
leftSide.className = "menuLeft";
const educationButton = document.createElement("button");
educationButton.className = "educationButton";
educationButton.textContent = "EDUCATION";

const avatarDiv = document.createElement("div");
avatarDiv.className = "avatarDiv";
const imgAvatar = document.createElement("img");
imgAvatar.src = "./assets/icons/favicon.png";

const rightSide = document.createElement("div");
rightSide.className = "menuRight";
const projectsButton = document.createElement("button");
projectsButton.className = "projectsButton";
projectsButton.textContent = "PROJECTS";


//sobre mi
const aboutMeDiv = document.querySelector(".aboutMeDiv");
const aboutMeButton = document.createElement("button");
aboutMeButton.className = "aboutMeButton";
aboutMeButton.textContent = "ABOUT ME";
const aboutMeP = document.createElement("p");
aboutMeP.className = "aboutmeParagraph";
aboutMeP.textContent = "Sea usted bienvenido, visitante! Y es que, la vida finalmente me ha traído hasta aquí, porque nada es casualidad y todos los caminos llevan a Roma! Provengo de un entorno artístico y enfocado al audiovisual en el que, durante casi 20 años, he cultivado habilidades creativas, organizativas y metódicas que estoy ahora aplicando en el mundo del desarrollo web y experiencias digitales. Con ojo crítico para el diseño y lo estético, (también un poquito de obsesión con la simetría) y una base técnica, estoy abierta a oportunidades y nuevos proyectos para crecer como desarrolladora, trabajar en equipo y contribuir con soluciones innovadoras.";


const projectsDiv = document.querySelector("#projectsContainer");

//contacto
const contactSection = document.querySelector("#contact");
const contactDiv = document.createElement("div");
const input = document.createElement("input");

const footerDivHTML = document.querySelector(".footerDiv");
const footerSpan = document.createElement("span");
footerSpan.textContent = "© Created by Maria Rivas - 2024";


headerDivHTML.appendChild(h1);
headerDivHTML.appendChild(h2);
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
contactSection.appendChild(contactDiv);
contactDiv.appendChild(input);
footerDivHTML.appendChild(footerSpan);


addSkills(document.getElementById("skillsDiv"), skillsArray);
addEducation(document.getElementById("educationDiv"), educationArray);
projectCreator(document.getElementById("projectsContainer"), projects);