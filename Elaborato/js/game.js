/* get da localstorage del gioco e output informazioni
*/
var game = JSON.parse(localStorage.getItem("games"))
let btn = document.getElementById("btn")

btn.onclick = e => {
  e.preventDefault();
  btn.style.visibility = 'hidden'
  document.getElementById("page").style.visibility = 'visible';

  document.getElementById("header").innerText = game.name
  document.getElementById("rating").innerText = "Valutazione: " + game.rating
  let description = game.description
  document.getElementById("descrizione").insertAdjacentHTML('beforeend', description)
  
  document.getElementById("background").style.background = `linear-gradient(to bottom, transparent 0%, white 100%), url(${game.background_image}) no-repeat center top`
  
  document.getElementById("generi").innerText = "Generi: " + game.genres.map(g => g.name).join(", ")
  document.getElementById("tags").innerText = "Tags: " + game.tags.map(g => g.name).join(", ")
  document.getElementById("tags").style.width = "300px"

  document.getElementById("data").innerText = "Data di pubblicazione: " + game.released
  document.getElementById("piattaforme").innerText = "Piattaforme: " + game.platforms.map(p => p.platform.name).join(", ")
  document.getElementById("sito").href = game.website
}