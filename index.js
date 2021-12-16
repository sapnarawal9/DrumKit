//Detecting button click
var btnList = document.querySelectorAll("button.drum");
var btnListCount = btnList.length;

for (var i = 0; i < btnListCount; i++) {
  btnList[i].addEventListener("click", function() {

    var btnCaption = this.innerHTML;
    makeSound(btnCaption);
    addAnimation(btnCaption);
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function(event) {
  var keyPressed = event.key.toLowerCase();
  if (keyPressed==="w"||keyPressed==="a"||keyPressed==="s"||
  keyPressed==="d"||keyPressed==="j"||keyPressed==="k"||keyPressed==="l") {
    makeSound(keyPressed);
    addAnimation(keyPressed);
  }
  else{
    console.log(keyPressed);
  }
});


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}


function addAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
