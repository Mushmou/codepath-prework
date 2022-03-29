//Global Variables
var clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
// OPTIONAL work here
var pattern = []
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
// console.log(pattern);

// OPTIONAL work here
var mistakes = 0;

function startGame() {
  //initialize game variables
  mistakes = 0;
  // console.log("mistakes", mistakes);
  pattern = generatePattern();
  // console.log(pattern);
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

//swap the start and stop buttons
function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  
  5: 150.6,
  6: 90.6,
  7: 500,
  8: 200.2,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    // console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
//     change clue hold time
    if (clueHoldTime <= 250) {
      clueHoldTime = 250;
    }
    else{
      clueHoldTime -= 20;
    }
    // console.log(clueHoldTime);
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  // console.log("User guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  //add game logic here

  if (mistakes != 2){
    
    if (btn == pattern[guessCounter]) {
      //Guess is correct
      if (guessCounter == progress) {
        if (progress == pattern.length - 1) {
          //Game over
          winGame();
        }
        else {
              progress++;
              playClueSequence();
             }
      }
      else{
          guessCounter++;
          }
    }
    else {
          mistakes++ 
          alert("Uh oh you made a mistake. You have " + -1 * (mistakes - 2) + " try left.");
          }
    
  }
  else{
      loseGame();
      }

}

// OPTIONAL FEATURES
function generatePattern() {
  var buttonAmount = 8;

//   Pick a pattern size
// var patternSize = Math.floor(Math.random() * (max - min + 1) + min);

  var patternSize = Math.floor(Math.random() * (13 - 7 + 1) + 7);
  // console.log("Pattern Size: " + patternSize);

  let  i = 0
  var myPattern = [];

  while (i < patternSize){
    var makeNum = Math.floor(Math.random() * (buttonAmount - 1 + 1) + 1);
    myPattern.push(makeNum);
    i++
  }
  return myPattern
}

function pictureChange(){
  // console.log("hello")
    document.getElementById('duck').src="https://cdn.glitch.global/867df87e-6eba-40b1-b570-70e73b9836e3/duck.png?v=1648493302718";
}
