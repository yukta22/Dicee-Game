// var Player1 = prompt("Player1: ");
//
// var Player2 = prompt("Player2: ");
//
//   document.querySelectorAll("p")[0].innerHTML = Player1;
//   document.querySelectorAll("p")[1].innerHTML = Player2;

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage = "dice" + randomNumber1 + ".png";

  var randomImagesStore = "images/" + randomDiceImage;

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImagesStore);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImagesStore2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImagesStore2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎊 Player 1 Wins !🎊";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🎊 Player 2 Wins !🎊";
  }
  else {
    document.querySelector("h1").innerHTML = " Draw!";
  }
