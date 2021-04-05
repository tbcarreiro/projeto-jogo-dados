function jogar() {
  var dado1 = 1 + Math.floor(6 * Math.random());
  var dado2 = 1 + Math.floor(6 * Math.random());
  document.querySelector(".dado1").src = "images/dice" + dado1 + ".png";
  document.querySelector(".dado2").src = "images/dice" + dado2 + ".png";
  if (dado1 > dado2) {
    document.querySelector("h1").textContent = "🚩Jogador 1 ganhou!"
  } else if (dado2 > dado1) {
    document.querySelector("h1").textContent = "Jogador 2 ganhou!🚩"
  } else {
    document.querySelector("h1").textContent = "Empate!"
  }
}

if (!sessionStorage.getItem("reload")) {
    sessionStorage.setItem("reload", "sim")
  } else(
    jogar()
  )
