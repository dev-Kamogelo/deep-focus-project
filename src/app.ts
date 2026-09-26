import './style.css';

const timeDisplay = document.querySelector("#time-display") as HTMLElement;
const startSessionBtn = document.querySelector("#start-session") as HTMLButtonElement;
const pauseSessionBtn = document.querySelector('#pause-session') as HTMLButtonElement;
const resetSessionBtn = document.querySelector('#reset-session') as HTMLButtonElement;

const decreaseInputValueBtn = document.querySelector('#decrease-input-value') as HTMLButtonElement;
const increaseInputValueBtn = document.querySelector('#increase-input-value') as HTMLButtonElement;
const inputField = document.querySelector('#user-time-input-field') as HTMLInputElement;

let initialTime: number = 25;
let remainingTime = initialTime * 60;
let countDown: ReturnType<typeof setInterval>;

function renderTimeDisplay() {
    const hour = Math.floor(remainingTime / 3600)
    const minute = Math.floor((remainingTime / 60) % 60);
    const second = remainingTime % 60;

    const displayHr = hour.toString().padStart(2, '0');
    const diplayMin = minute.toString().padStart(2, '0');
    const diplaySec = second.toString().padStart(2, '0');

    timeDisplay.innerHTML = `${displayHr}:${diplayMin}:${diplaySec}`;
};

function insertInputToFocus() {
    
    const inputNumber = inputField.valueAsNumber;
    initialTime = inputNumber;
    remainingTime = initialTime * 60;
    renderTimeDisplay();
}

function startSession() {

    clearInterval(countDown);
    
    countDown = setInterval(() => {

        if(remainingTime <= 0) {
            clearInterval(countDown);
            console.log('time done');
        };

        remainingTime--;
        renderTimeDisplay();
    }, 1000);

    startSessionBtn.disabled = true;
    pauseSessionBtn.disabled = false

};

function pauseSession() {
    startSessionBtn.disabled = false;

    clearInterval(countDown);
    remainingTime = remainingTime;
    renderTimeDisplay();
};

function resetSession() {
    startSessionBtn.disabled = false;
    pauseSessionBtn.disabled = true

    clearInterval(countDown);
    remainingTime = initialTime;
    insertInputToFocus()
    renderTimeDisplay()
}

function decreaseInputValue() {
    inputField.stepDown()
    insertInputToFocus()
}

function increaseInputValue() {
    inputField.stepUp()
    insertInputToFocus()
}

decreaseInputValueBtn.addEventListener('click', () => {
    decreaseInputValue()
});

increaseInputValueBtn.addEventListener('click', () => {
    increaseInputValue()
})

startSessionBtn.addEventListener('click', startSession);
pauseSessionBtn.addEventListener('click', pauseSession);
resetSessionBtn.addEventListener('click', resetSession);

window.addEventListener('load', renderTimeDisplay);