import './style.css'

const timeDisplay = document.querySelector("#time-display") as HTMLElement;
const startSessionBtn = document.querySelector("#start-session") as HTMLButtonElement;

let intialTime: number = 1;
let remainingTime = intialTime * 60;
let countDown: ReturnType<typeof setInterval>;

function renderTimeDisplay() {
    const minute = Math.floor((remainingTime / 60) % 60);
    const second = remainingTime % 60;

    const diplayMin = minute.toString().padStart(2, '0');
    const diplaySec = second.toString().padStart(2, '0');

    timeDisplay.innerHTML = `${diplayMin}:${diplaySec}`;
    console.log(diplayMin, diplaySec);
}

function startSession() {
    clearInterval(countDown);
    
    countDown = setInterval(() => {
        remainingTime--;
        renderTimeDisplay();

        if(remainingTime <= 0) {
            clearInterval(countDown);
            console.log('time done')
        }
    }, 1000);

    startSessionBtn.disabled = true;
}

startSessionBtn.addEventListener('click', startSession);
window.addEventListener('load', renderTimeDisplay);