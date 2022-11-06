var currentSlide;

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