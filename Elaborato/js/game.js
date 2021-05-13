/* get da localstorage del gioco e output informazioni
*/
let games = document.getElementById("games")
let Games = []

function getFromLocalStorage() {
    var game = JSON.parse(localStorage.getItem("games"));
    /*
    document.getElementById("header").innerText = game.name
    document.getElementById("rating") = game.rating
    document.getElementById("")
    document.getElementById("")
    */
    document.getElementById("header").innerText = "ciao"
}

getFromLocalStorage()