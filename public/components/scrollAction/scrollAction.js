

export const scrollFunction = (buttonId, parentDiv) => {

    const goToDiv = document.getElementById(parentDiv);
    const scrollButton = buttonId;

    scrollButton.addEventListener("click", (event) => {
        goToDiv.scrollIntoView({ 
            behavior: 'smooth',
            block:'center',
            inline: 'nearest' });  
    })
}