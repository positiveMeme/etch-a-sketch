
const sides = 20;


for (let i = 0; i < sides * sides; i++) {
    const game = document.querySelector('.game')
    const div = document.createElement('div');
    game.appendChild(div);
    div.classList.add("squares");
    game.style.gridTemplateColumns = columns(sides);
    div.addEventListener("mouseover", event => {
        div.style.backgroundColor = color();
    });
}

function columns(number) {
    let cols = '';
    for (let i = 0; i < number; i++) {
        let auto = 'auto ';
        cols = cols.concat(auto);
    }
    return cols;
};

function getColorCode() {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (let count = 0; count < 6; count++) {
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
};

function color() {
    return getColorCode();
}

const buttons = document.querySelectorAll('button');

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () { alert("Hello World!"); });
}