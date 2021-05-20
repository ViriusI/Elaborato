/* get da localstorage del gioco e output informazioni
*/
var game = JSON.parse(localStorage.getItem("games"))
var generi = game.genres

  document.getElementById("header").innerText = game.name
  document.getElementById("rating").innerText = "Valutazione: " + game.rating
  let description = game.description
  document.getElementById("descrizione").insertAdjacentHTML('beforeend', description)
  var div = document.getElementById("h")
  div.style.background = `linear-gradient(to bottom, transparent 0%, white 100%), url(${game.background_image}) no-repeat center top`
  
  document.getElementById("generi").innerText = generi.map(g => g.name).join(", ")

  //document.getElementById("header").innerText = "ciao"
