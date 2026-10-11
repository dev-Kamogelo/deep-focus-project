import './style.css';

// App DICTIONARY
const DURATIONS = {
    focus: 1500, // Default Focus Duration 1500 seconds = 25:00 Minutes
    shortBreak: 300, // Default shortBreak Duration 300 seconds = 05:00 Minutes
    longBreak: 900 // Default longBreak Duration 900 seconds = 15:00 Minutes
};

//The App State
const state = {
    currentMode: 'focus', // Mode Status
    timeLeft: DURATIONS['focus'], // Mode Time Duration
    isRunning: false, // Boolen Checks If Time Is Running
    timeInterval: null, // Runs Current Time
    completedFocusSession: 0 // Checks how many focus sessions where done to switch to shortBreak or LongBreak
}