import './style.css';


const headerDivHTML = document.querySelector(".headerDiv");
const h1 = document.createElement("h1");
h1.textContent = "MARIA RIVAS";
const h2 = document.createElement("h2");
h2.textContent = "FRONTEND DEVELOPER";

const contentPage = document.querySelector("#introContentPage");
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


const aboutMeDiv = document.querySelector(".aboutMeDiv");
const aboutMeButton = document.createElement("button");
aboutMeButton.className = "aboutMeButton";
aboutMeButton.textContent = "ABOUT ME";

const footerDivHTML = document.querySelector(".footerDiv");
const footerSpan = document.createElement("span");
footerSpan.textContent = "© Created by Maria Rivas";



headerDivHTML.appendChild(h1);
headerDivHTML.appendChild(h2);
menu.appendChild(leftSide);
leftSide.appendChild(educationButton);
menu.appendChild(avatarDiv);
avatarDiv.appendChild(imgAvatar);
menu.appendChild(rightSide);
rightSide.appendChild(projectsButton);
contentPage.appendChild(aboutMeDiv);
aboutMeDiv.appendChild(aboutMeButton);
footerDivHTML.appendChild(footerSpan);