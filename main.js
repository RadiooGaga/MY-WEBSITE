import './style.css';

import {addSkills} from "./public/components/skillsCreator/skills.js";
import { addEducation } from './public/components/educationCreator/educationDiv.js';
import { projectCreator } from './public/components/projectCreator/projectCreator.js';
import { scrollFunction } from './public/components/scrollAction/scrollAction.js';
import { toTheTop } from './public/components/scrollAction/buttonToTheTop.js';


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
        img: "./assets/projectsImg/landingImg.jpg",
        url1:"https://proyecto1csstiendasuarez.netlify.app/",
        button1: "LINK 1",
        url2:"https://landing-malakai.netlify.app/",
        button2: "LINK 2"
    
    },

    {
        span: "WEBSITE - SHOP",
        img: "./assets/projectsImg/websiteImg.jpg",
        url1:"https://retrofeet-shop.netlify.app/",
        button1: "LINK 1",
        url2:"https://proyecto-3-async-pinterest.netlify.app/",
        button2: "LINK 2" 
    },
    {
        span: "GAMES HUB",
        img: "./assets/projectsImg/gamesImg.jpg",
        url1:"https://juegos-reunidos.netlify.app/",
        button1: "JUEGOS REUNIDOS",
        url2:"",
        button2: "WORK IN PROGRESS"
    
    }
]


//header
const headerDiv = document.querySelector("#headerDiv");
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
educationButton.id = "educationButton";
educationButton.textContent = "EDUCATION";

const avatarDiv = document.createElement("div");
avatarDiv.className = "avatarDiv";
const imgAvatar = document.createElement("img");
imgAvatar.src = "./assets/icons/favicon.png";

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
aboutMeP.textContent = "Sea usted bienvenido, visitante! Provengo de un entorno artístico y enfocado al audiovisual en el que, durante casi 20 años, he cultivado habilidades creativas, organizativas y metódicas que estoy ahora aplicando en el mundo del desarrollo web y experiencias digitales. Con ojo crítico para el diseño y lo estético, (también un poquito de obsesión con la simetría) y una base técnica, estoy abierta a oportunidades y nuevos proyectos para crecer como desarrolladora, trabajar en equipo y contribuir con soluciones innovadoras.";

const educationDiv = document.querySelector("#educationDiv");
const projectsDiv = document.querySelector("#projectsContainer");
const aboutMeDiv = document.querySelector("#aboutMeDiv");

//contacto
const contactSection = document.querySelector("#contact");
const form = document.createElement("form");
form.className = "contactForm";
form.method = "post";
const inputName = document.createElement("input");
inputName.id = "name";
inputName.placeholder = "Name";
const inputMail = document.createElement("input");
inputMail.id = "email";
inputMail.placeholder = "email@gmail.com";
const textForm = document.createElement("textarea");
textForm.className = "message";
const sendButton = document.createElement("button");
sendButton.className = "send";
sendButton.textContent = "ENVIAR";


//footer
const footerDivHTML = document.querySelector(".footerDiv");
const footerSpan = document.createElement("span");
footerSpan.textContent = "© Created by Maria Rivas - 2024";

//to the top
const buttonToTheTop = document.createElement("div");
buttonToTheTop.id = "topButton";
const toTopImg = document.createElement("img");
toTopImg.src = "./assets/icons/flecha-hacia-arriba.png";



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

contactSection.appendChild(form);
form.appendChild(inputName);
form.appendChild(inputMail);
form.appendChild(textForm);
form.appendChild(sendButton);
footerDivHTML.appendChild(footerSpan);
introPage.appendChild(buttonToTheTop);
buttonToTheTop.appendChild(toTopImg);


addSkills(document.getElementById("skillsDiv"), skillsArray);
addEducation(document.getElementById("educationDiv"), educationArray);
projectCreator(document.getElementById("projectsContainer"), projects);
scrollFunction(document.getElementById("educationButton"), "educationDiv");
scrollFunction(document.getElementById("projectsButton"), "projectsContainer");
scrollFunction(document.getElementById("aboutMeButton"), "aboutMeDiv");
toTheTop(document.getElementById("topButton"), "skillsDiv");



