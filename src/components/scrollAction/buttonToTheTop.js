


export const toTheTop = (buttonId, parentDiv) => {

    const goToTop = document.getElementById(parentDiv);
    const toTop = buttonId;

    toTop.addEventListener("click", (event) => {
        goToTop.scrollIntoView({ 
            behavior: 'smooth',
            block:'center',
            inline: 'nearest' });  
    })
}