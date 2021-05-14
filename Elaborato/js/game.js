/* get da localstorage del gioco e output informazioni
*/
let games = document.getElementById("games")
let Games = []

function getFromLocalStorage() {
  var game = JSON.parse(localStorage.getItem("games"))
  
  document.getElementById("header").innerText = game.name
  document.getElementById("rating").innerText = "Valutazione: " + game.rating
  let description = game.description
  document.getElementById("description").insertAdjacentHTML('beforeend', description)
  var div = document.getElementById("h");
  div.style.backgroundImage = `url(${game.background_image})`;
  //document.getElementById("")
  
  //document.getElementById("header").innerText = "ciao"
}

getFromLocalStorage()