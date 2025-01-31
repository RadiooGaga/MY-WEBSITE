

export const scrollFunction = (buttonId, blockValue, parentDiv) => {

    const goToDiv = document.getElementById(parentDiv);
    const scrollButton = buttonId;

    scrollButton.addEventListener("click", (event) => {
        goToDiv.scrollIntoView({ 
            behavior: 'smooth',
            block:blockValue,
            inline: 'nearest' });  
    })
}