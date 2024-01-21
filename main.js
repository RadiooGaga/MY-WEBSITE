import './style.css';


const headerDivHTML = document.querySelector(".headerDiv");
const h1 = document.createElement("h1");
h1.textContent = "MARIA RIVAS";
const h2 = document.createElement("h2");
h2.textContent = "FRONTEND DEVELOPER";

const introContentSection = document.querySelector("#introContentPage");
const skillsDiv = document.createElement("div");
skillsDiv.className = "skills";
const menu = document.createElement("div");
menu.className = "menuDiv";
const leftSide = document.createElement("div");
leftSide.className = "menuLeft";
const avatarDiv = document.createElement("div");
avatarDiv.className = "avatarDiv";
const imgAvatar = document.createElement("img");
imgAvatar.src = "./public/assets/icons/favicon.png";
const rightSide = document.createElement("div");
rightSide.className = "menuRight";
const aboutMeDiv = document.createElement("div");
aboutMeDiv.className = "aboutMe";


const footerDivHTML = document.querySelector(".footerDiv");
const footerSpan = document.createElement("span");
footerSpan.textContent = "© Created by Maria Rivas";





headerDivHTML.appendChild(h1);
headerDivHTML.appendChild(h2);
introContentSection.appendChild(skillsDiv);
introContentSection.appendChild(menu);
menu.appendChild(leftSide);
menu.appendChild(avatarDiv);
avatarDiv.appendChild(imgAvatar);
menu.appendChild(rightSide);
introContentSection.appendChild(aboutMeDiv);
footerDivHTML.appendChild(footerSpan);