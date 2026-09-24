import './style.css';

const timeDisplay = document.querySelector("#time-display") as HTMLElement;
const startSessionBtn = document.querySelector("#start-session") as HTMLButtonElement;
const pauseSessionBtn = document.querySelector('#pause-session') as HTMLButtonElement;
const resetSessionBtn = document.querySelector('#reset-session') as HTMLButtonElement;

let inputTime: number = 1;
let initialTime = inputTime * 60;
let remainingTime = initialTime ;
let countDown: ReturnType<typeof setInterval>;

function renderTimeDisplay() {
    const minute = Math.floor((remainingTime / 60) % 60);
    const second = remainingTime % 60;

    const diplayMin = minute.toString().padStart(2, '0');
    const diplaySec = second.toString().padStart(2, '0');

    timeDisplay.innerHTML = `${diplayMin}:${diplaySec}`;
};

function startSession() {

    clearInterval(countDown);
    
    countDown = setInterval(() => {
        remainingTime--;
        renderTimeDisplay();

        if(remainingTime <= 0) {
            clearInterval(countDown);
            console.log('time done');
        };

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
    renderTimeDisplay()
}

startSessionBtn.addEventListener('click', startSession);
pauseSessionBtn.addEventListener('click', pauseSession);
resetSessionBtn.addEventListener('click', resetSession);
window.addEventListener('load', renderTimeDisplay);