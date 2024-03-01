import "./projectCreator.css";

export const projectCreator = (parentDiv, projects) => {

    for (const project of projects) {
       
        const projectDiv = document.createElement("div");
        //projectDiv.className = "";
        const projectSpan = document.createElement("span");
        projectSpan.textContent = project.span;
        const projectImg = document.createElement("img");
        projectImg.src = project.img;

        const ancore1 = document.createElement("a");
        ancore1.href = project.url1;
        ancore1.target = "_blank";
        const ancore2 = document.createElement("a");
        ancore2.href = project.url2;
        ancore2.target = "_blank";
    
        const button1 = document.createElement("button");
        button1.textContent = project.button1;
        const button2 = document.createElement("button");
        button2.textContent = project.button2;

        parentDiv.appendChild(projectDiv);
        projectDiv.appendChild(projectSpan);
        projectDiv.appendChild(projectImg);
        projectDiv.appendChild(ancore1);
        ancore1.appendChild(button1);
        projectDiv.appendChild(ancore2);
        ancore2.appendChild(button2);
     
    }
        
}