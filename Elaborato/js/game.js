/* get da localstorage del gioco e output informazioni
*/
let games = document.getElementById("games")
let Games = []

function getFromLocalStorage() {
  var game = JSON.parse(localStorage.getItem("games"))
  
  document.getElementById("header").innerText = game.name
  document.getElementById("rating").innerText = "Valutazione: " + game.rating
  let description = game.description
  var array = description.split("<h3>Plot and setting</h3>")
  document.getElementById("description1").insertAdjacentHTML('afterbegin', array[0])
  document.getElementById("description2").insertAdjacentHTML('beforeend', array[1])
  //document.getElementById("")
  
  //document.getElementById("header").innerText = "ciao"
}

getFromLocalStorage()