import "./educationDiv.css";

export const addEducation = (parentDiv, educationArray) => {

    for (let i = 0; i < educationArray.length; i++) {

        const education = educationArray[i];

        const title = document.createElement("h3");
        title.textContent = education.title;
        const courseName = document.createElement("p");
        courseName.textContent = education.course;

        parentDiv.appendChild(title);
        parentDiv.appendChild(courseName);
    }
}