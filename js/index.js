function scrollToElement(elementId) {
    const elementObjetive = document.getElementById(elementId);

    if (elementObjetive) {
        const nabvarHeight = document.getElementsByClassName("navbar-top")[0].offsetHeight
        const elementHeight = elementObjetive.offsetHeight;
        const avalibleHeight = window.innerHeight - nabvarHeight;

        
        var alturaResto = Math.max((avalibleHeight - elementHeight) / 2,0)
        
        window.scroll({
            top: elementObjetive.offsetTop - (alturaResto + nabvarHeight),
            behavior: 'smooth',
        });
    }
}