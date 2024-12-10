import Renderer from './renderer.js';
import Keyboard from './keyboard.js'; // NEW
import Speaker from './speaker.js'
import CPU from './cpu.js'

const renderer = new Renderer(10);
const keyboard = new Keyboard(); // NEW
const speaker = new Speaker();
const cpu = new CPU(renderer, keyboard, speaker); // NEW

let loop;

let fps = 60, fpsInterval, startTime, now, then, elapsed;

function init() {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;

    cpu.loadSpritesIntoMemory(); // NEW
    cpu.loadRom('Airplane.ch8'); // NEW
    loop = requestAnimationFrame(step);
}

function step() {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        cpu.cycle(); // NEW
    }

    loop = requestAnimationFrame(step);
}

init();