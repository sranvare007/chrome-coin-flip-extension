function tossCoin() {
  const audio = new Audio("./coin-flip.mp3");
  audio.play();
  var coinContainer = document.getElementById("coin-container");
  document.querySelector(".result-text").innerHTML = "";
  coinContainer.classList.add("coin-animation-class");
  setTimeout(() => {
    coinContainer.classList.remove("coin-animation-class");
    var randNum = Math.random() * 10;
    randNum = randNum.toFixed();
    if (randNum % 2 == 0) {
      document.querySelector(".result-text").innerHTML = "You got tails!";
      coinContainer.style.transform = "rotateY(180deg)";
    } else {
      document.querySelector(".result-text").innerHTML = "You got heads!";
      coinContainer.style.transform = "rotateY(0deg)";
    }
  }, 1500);
}

document.getElementById("toss-btn").addEventListener("click", tossCoin);
