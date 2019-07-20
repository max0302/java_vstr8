// task 1

class Validation {
    constructor(text) {
        this.text = text;
    }

    static dontNumber(text) {
        this.text = text;
        let lastChar = this.text.charAt(this.text.length - 1);
        if (lastChar.match(/[0-9]/g)) {
            return this.text.substr(0, this.text.length - 1);
        } else {
            return this.text;
        }
    }
}

let inputField = document.querySelector("#input-name");

inputField.addEventListener("input", () => {
    let text = event.target.value;
    event.target.value = Validation.dontNumber(text);
});

// task 2

let closeModalBtn = document.querySelector(".modal-close");

closeModalBtn.addEventListener("click", () => {
    let modal = document.querySelector(".modal");
    modal.style.visibility = 'hidden';
});

let openModalBtn = document.querySelector(".modal-open");

openModalBtn.addEventListener("click", () => {
    let modal = document.querySelector(".modal");
    modal.style.visibility = 'visible';
});

// task 3

// let area = document.querySelector(".football-area");
// let ball = document.querySelector(".football-ball");

// area.addEventListener("click", () => {

//     // get the offset of area regarding the html docuement 
//     let areaOffset = area.getBoundingClientRect();
//     let leftAreaOffset = areaOffset.left;
//     let topAreaOffset = areaOffset.top;

//     // put center of ball in place where was click
//     ball.style.top = event.clientY - topAreaOffset - ball.height / 2 + "px";
//     ball.style.left = event.clientX - leftAreaOffset - ball.width / 2 + "px";
// });

// task 4

let btnNext = document.querySelector("#btn-next");
let index = 1;

btnNext.addEventListener("click", () => {
    let lights = document.querySelectorAll(".light");
    let colors = ['red', 'yellow', 'green'];


    if (index <= 2) {
        lights[index].classList.toggle(colors[index]);
        lights[index - 1].classList.toggle(colors[index - 1]);
    } else {
        index = 0;
        lights[index].classList.toggle(colors[index]);
        lights[2].classList.toggle(colors[2]);
    }

    index++;
});

// task 5 

let bookItems = document.querySelectorAll(".books_list-item");

function resetOtherElementsMarking() {
    bookItems.forEach(elem => {
        elem.style.background = "transparent";
    });
}

bookItems.forEach(elem => {
    elem.addEventListener("click", () => {
        resetOtherElementsMarking();
        event.target.style.background = "#FFA984";
    });
});

// task 6 

let buttons = document.querySelectorAll(".btn-hovered");

buttons.forEach(elem => {
    elem.addEventListener("mouseover", () => {
        let parent = document.querySelector(".btn-wrap");
        if (parent.getBoundingClientRect().top > 50) {
            parent.style.flexDirection = "column-reverse";
        }


        let tooltip = document.querySelector(".btn-hovered ~ .btn-tooltip");
        tooltip.style.visibility = "visible";

    });
    elem.addEventListener("mouseout", () => {
        let tooltip = document.querySelector(".btn-hovered ~ .btn-tooltip");
        tooltip.style.visibility = "hidden";
    });
});