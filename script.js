const body = document.body;
const slider = document.getElementById("theme-slider");
const input = document.querySelector("input[type='text']");
const buttons = document.querySelectorAll("button");

let str = '';
const themes = ["theme-one", "theme-two", "theme-three"];
const validExpression = /^-?\d+(\.\d+)?([+\-*/]-?\d+(\.\d+)?)*$/;

slider.addEventListener("input", changeTheme);
buttons.forEach(button => {
    button.addEventListener("click", calculate);
});
input.addEventListener("keydown", validateInput);
input.addEventListener("input", validateInput);


function changeTheme() {
    themes.forEach(theme => body.classList.remove(theme));
    body.classList.add(themes[+slider.value - 1]);
};

function calculate(e) {
    if (e.target.dataset.value === 'Del') {
        str = str.substring(0, str.length - 1);
        input.value = str;
    } else if (e.target.dataset.value === 'Reset') {
        str = "";
        input.value = str;
    } else if (e.target.dataset.value === "=") {
        str = input.value;
        if (!validExpression.test(str)) {
            input.value = "Invalid Input"
            return;
        };
        str = eval(str);
        input.value = str;
    } else {
        str += e.target.dataset.value;
        input.value = str;
    };
};