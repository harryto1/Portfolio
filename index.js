const moreInfo = document.getElementById("more-info");
const infoSec = document.getElementById("info");
const projSec = document.getElementById("projects");
const changeInMedia = window.matchMedia("(max-width: 1200px)");
const changeInMedia2 = window.matchMedia("(max-width: 480px)");

moreInfo.onclick = function() {
    if (moreInfo.innerHTML === '▽') {
        let projP = document.getElementById('proj-p');
        projP.style.display = 'none';
        projSec.style.height= '25%';
        infoSec.style.height= '65%';
        moreInfo.innerHTML = '△';
        let moreP = document.getElementById('more-p');
        moreP.style.display = 'block';
    } else if (moreInfo.innerHTML === "△") {
        let projP = document.getElementById('proj-p');
        projP.style.display = 'block';
        projSec.style.height= '50%';
        infoSec.style.height= '40%';
        moreInfo.innerHTML = '▽';
        let moreP = document.getElementById('more-p');
        moreP.style.display = 'none';
    }

}

const notesCloseButton = document.getElementById("close-button-notes");
const notesApp = document.getElementById("notes-app");
const notesAppContainer = document.getElementById("notes-app-container");
const hangmanAppContainer = document.getElementById("hangman-app-container");
const hangmanApp = document.getElementById("hangman-app");

notesAppContainer.onclick = function() {
    notesApp.style.display = 'block';
    notesCloseButton.style.display = 'block';
}

hangmanAppContainer.onclick = function() {
    hangmanApp.style.display = 'block';
    notesCloseButton.style.display = 'block';
}

notesCloseButton.onclick = function() {
    if (notesApp.style.display === 'block') {
        notesApp.style.display = 'none'
        notesCloseButton.style.display = 'none';
    } else if (hangmanApp.style.display === 'block') {
        hangmanApp.style.display = 'none';
        notesCloseButton.style.display = 'none';
    }
} // a

notesAppContainer.onmouseover = function() {
    if (!changeInMedia.matches) {
    let notesP = document.getElementById("notes-p");
    let Notes = document.getElementById("Notes");
    let notesColContainer = document.getElementById("notes-col-container");
    notesP.style.display = 'block';
    Notes.style.display = 'block';
    notesColContainer.style.display = 'flex';
    }
}

notesAppContainer.onmouseleave = function() {
    if (!changeInMedia.matches) {
    let notesP = document.getElementById("notes-p");
    let Notes = document.getElementById("Notes");
    let notesColContainer = document.getElementById("notes-col-container");
    notesP.style.display = 'none';
    Notes.style.display = 'none';
    notesColContainer.style.display = 'none';
    }
}

hangmanAppContainer.onmouseover = function() {
    if (!changeInMedia.matches) {
    let hangmanP = document.getElementById("hangman-p");
    let Hangman = document.getElementById("Hangman");
    let hangmanColContainer = document.getElementById("hangman-col-container");
    let hangmanImage = document.getElementById("hangman-app-img");
    hangmanP.style.display = 'block';
    Hangman.style.display = 'block';
    hangmanColContainer.style.display = 'flex';
    hangmanImage.style.width = '5rem';
    }
}

hangmanAppContainer.onmouseleave = function() {
    if (!changeInMedia.matches) {
    let hangmanP = document.getElementById("hangman-p");
    let Hangman = document.getElementById("Hangman");
    let hangmanColContainer = document.getElementById("hangman-col-container");
    let hangmanImage = document.getElementById("hangman-app-img");
    hangmanP.style.display = 'none';
    Hangman.style.display = 'none';
    hangmanColContainer.style.display = 'none';
    hangmanImage.style.width = '4.5rem';
    }
}


const notesProjA = document.getElementById("proj-a-notes");

function media1200px(changeInMedia) {
    if (changeInMedia.matches) {
        let notesP = document.getElementById("notes-p");
        let Notes = document.getElementById("Notes");
        let notesColContainer = document.getElementById("notes-col-container");
        notesP.style.display = 'block';
        Notes.style.display = 'block';
        notesColContainer.style.display = 'flex';
        notesAppContainer.style.width= '100%';
        notesAppContainer.style.height= '40%';
        let hangmanP = document.getElementById("hangman-p");
        let Hangman = document.getElementById("Hangman");
        let hangmanColContainer = document.getElementById("hangman-col-container");
        hangmanP.style.display = 'block';
        Hangman.style.display = 'block';
        hangmanColContainer.style.display = 'flex';
        hangmanAppContainer.style.width= '100%';
        hangmanAppContainer.style.height= '40%';
    }
}

const locationIcon = document.getElementById("location-icon");
const locationSpan = document.getElementById("location-span");
const locationSection = document.getElementById("location-section");
const educationSection = document.getElementById("education-section");
const educationIcon = document.getElementById("education-icon");
const educationSpan = document.getElementById("education-span");

educationSection.onmouseover = function() {
    educationIcon.style.opacity= 1;
    educationSpan.style.opacity = 1;
}

educationSection.onmouseleave = function() {
    educationIcon.style.opacity = 0.5;
    educationSpan.style.opacity= 0.5;
}

educationSection.onclick = function() {
   window.open("https://www.uprm.edu/portada/", "_blank");
}

educationIcon.onmouseover = function() {
    educationIcon.style.opacity = 1;
    educationSpan.style.opacity = 1;
}

educationIcon.onmouseleave = function() {
    educationIcon.style.opacity = 0.5;
    educationSpan.style.opacity= 0.5;
}

educationSpan.onmouseover = function() {
    educationIcon.style.opacity = 1;
    educationSpan.style.opacity = 1;
}

educationSpan.onmouseleave = function() {
    educationIcon.style.opacity = 0.5;
    educationSpan.style.opacity= 0.5;
}

locationSection.onmouseover = function() {
    locationIcon.style.opacity= 1;
    locationSpan.style.opacity = 1;
}

locationSection.onmouseleave = function() {
    locationIcon.style.opacity = 0.5;
    locationSpan.style.opacity= 0.5;
}

locationIcon.onmouseover = function() {
    locationIcon.style.opacity = 1;
    locationSpan.style.opacity = 1;
}

locationIcon.onmouseleave = function() {
    locationIcon.style.opacity = 0.5;
    locationSpan.style.opacity= 0.5;
}

locationSpan.onmouseover = function() {
    locationIcon.style.opacity = 1;
    locationSpan.style.opacity = 1;
}

locationSpan.onmouseleave = function() {
    locationIcon.style.opacity = 0.5;
    locationSpan.style.opacity= 0.5;
}


