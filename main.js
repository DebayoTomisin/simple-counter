const number = document.querySelector('.number');
const reduce = document.querySelector('.reduce');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let counter = 0;
number.innerHTML = counter;

reduce.addEventListener('click', reduceCounter);

reset.addEventListener('click', resetCounter);

increase.addEventListener('click', increaseCounter);

function reduceCounter() {
    counter--
    number.innerText = counter;
    number.style.color = changeColor();
}

function resetCounter() {
    counter = 0;
    number.innerText = counter;
    number.style.color = changeColor();
}

function increaseCounter() {
    counter++
    number.innerText = counter;
    number.style.color = changeColor();
}

function changeColor() {
    let x = Math.round(Math.random() * 256);
    let y = Math.round(Math.random() * 256);
    let z = Math.round(Math.random() * 256);

    let color = `rgb(${x}, ${y}, ${z})`
    return color
}