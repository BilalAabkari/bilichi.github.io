var currentSlide;
menu_is_open = false;

function displayGallery() {
    var images = document.getElementsByClassName("slideElement");
    for (i = 1; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    images[0].style.display = "inline";
    currentSlide = 0;
}

function previousSlide() {
    var images = document.getElementsByClassName("slideElement");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }

    if (currentSlide == 0) {
        currentSlide = images.length -1;
    }
    else {
        currentSlide--;
    }
    images[currentSlide].style.display = "inline";

}

function nextSlide() {
    var images = document.getElementsByClassName("slideElement");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }

    if (currentSlide == images.length-1) {
        currentSlide = 0;
    }
    else {
        currentSlide++;
    }
    images[currentSlide].style.display = "inline";

}


function process_menu_click() {
    const element = document.getElementById("leftSection");
    if (!menu_is_open) {
        let offset = 0; //This is the value that will assign to max-width progressively for the animation
        let fontSize  = 0; //This is the value that will assign to font-size progressively for the animation
        let timer = setInterval( function() {
            if (offset == 80 && fontSize == 80) { //I choose the same number to make a simpler code, and it looks fine
                clearInterval(timer); //If we reached 80% of max width and 80% of font-size, stop the animation.
            }
            else { 
                offset = offset + 1;
                element.style.maxWidth = offset + '%';
                fontSize = fontSize + 1;
                element.style.fontSize = fontSize + '%';
            }
        }, 5);
    }
    else {
        let offset = 80;
        let fontSize  = 80;
        let timer = setInterval( function() {
            if (offset == 0 && fontSize == 0) {
                clearInterval(timer);
            }
            else {
                offset = offset - 1;
                element.style.maxWidth = offset + '%';
                fontSize = fontSize - 2;
                element.style.fontSize = fontSize + '%';
            }
        }, 5);
    }
    menu_is_open = !menu_is_open;
    setTimeout(null, 1000);    
}

window.onresize = function(){ //This function resets the values to default if we change the size of the window to avoid having to refresh
    const element = document.getElementById("leftSection");
    element.style.maxWidth = "";
    element.style.fontSize = "";
}