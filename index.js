//detecting button click

let buttons = document.querySelectorAll(".drum")
for (const button of buttons) {
  button.addEventListener("click", function () {

    let buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    playSound(buttonInnerHTML);

    //runs when click is detected
  })
}

function playSound(buttonInnerHTML) {

  switch (buttonInnerHTML) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "k":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

//detecting key press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {

  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "k":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  if (!activeButton) {
    return false;
  } else {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

// function checkKey(event){
//   let keyPressed = event.key;
//   return keyPressed; 
// }

// let audio = new Audio("./sounds/tom-1.mp3");
// audio.play();


//use keydown

// constructor function
// function Audio (fileLocation) {
//   this.fileLocation = fileLocation;
//   this.play = function {
//     //tap into the audio hardware
//     //check the file at fileLocation exists
//     //check the file at fileLocation is a valid sound file
//     //Play the file at fileLocation
//   }
// }