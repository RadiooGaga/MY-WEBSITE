import "./skills.css";

export const addSkills = (parentDiv, skills) => {

    for (const skill of skills) {
        const button = document.createElement("button");
        button.textContent = skill;

        parentDiv.appendChild(button);

    }
}