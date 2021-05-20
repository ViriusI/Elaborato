/* get da localstorage del gioco e output informazioni
*/
//let games = document.getElementById("games")
//let Games = []

var game = JSON.parse(localStorage.getItem("games"))

var generi = game.genres

console.log("ciao")

document.getElementById("header").innerText = game.name
document.getElementById("rating").innerText = "Valutazione: " + game.rating
let description = game.description
document.getElementById("descrizione").insertAdjacentHTML('beforeend', description)
var div = document.getElementById("h");
div.style.background = `linear-gradient(to bottom, transparent 0%, white 100%), url(${game.background_image}) no-repeat center top`;
for(var i = 0; i < generi.lenght; i++ ){
  var string = JSON.stringify(generi[i].name)
  var genere
  genere = genere.concat(", ", string)
}
document.getElementById("generi").innerText = genere

//document.getElementById("header").innerText = "ciao"
