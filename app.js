
let sides = 30;
const buttons = document.querySelectorAll('.options');
const newGridButton = document.querySelector('#new-grid')

// newGridButton.addEventListener("click", () => {
//     let input = prompt("Choose number of sides (2-100)");
//     return sides = parseInt(input);
// });


for (let button of buttons) {
    button.addEventListener('click', function () {
        for (let button of buttons) {
            button.classList.remove('checked');
        }
        button.classList.toggle('checked');
    })
};

for (let i = 0; i < sides * sides; i++) {
    const game = document.querySelector('.game')
    const div = document.createElement('div');
    game.appendChild(div);
    div.classList.add("squares");
    game.style.gridTemplateColumns = columns(sides);
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = color();
    });
    const clearButton = document.querySelector('.clear')
    clearButton.addEventListener("click", () => {
        div.style.backgroundColor = 'white';
    });
};



function columns(number) {
    let cols = '';
    for (let i = 0; i < number; i++) {
        let auto = 'auto ';
        cols = cols.concat(auto);
    }
    return cols;
};

function getColorCode() {
    const makeColorCode = '0123456789ABCDEF';
    let code = '#';
    for (let count = 0; count < 6; count++) {
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
};

function singleColor() {
    return 'black';
};

// function greyscale() {

// }

function erase() {
    return 'white';
};

function clear() {
    const game = document.querySelector('.game');
    game.style.backgroundColor = 'white';
};

function color() {
    const col = document.querySelector('#col-btn');
    const rbw = document.querySelector('#rbw-btn');
    const ers = document.querySelector('#ers-btn');
    const clr = document.querySelector('#clr-btn');
    if (col.classList.contains('checked') === true) {
        return singleColor();
    }
    if (rbw.classList.contains('checked') === true) {
        return getColorCode();
    }
    return erase();
};