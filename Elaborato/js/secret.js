let txtSearch = document.getElementById("txtSearch")
let btnSearch = document.getElementById("btnSearch")
let game_List = document.getElementById("game_list");
let element = document.getElementById("select");
let size = document.getElementById("size");


const apiKey = "1ac5994c124e4ee8a3e8e30222bd6b55";


//nel cliccare il bottone creo una lista dei giochi trovati
btnSearch.onclick = e => {
  e.preventDefault();
  resetGiochi();
  
  var i = element.options[element.selectedIndex].text;
  var d = txtSearch.value;
  var s = size.options[size.selectedIndex].text;
  var url = Url(i, d, s);
  
  txtSearch.value = "";
  cercaGioco(url);
  
}

//funzione che ritorna l'url necessario al fetch
function Url(index ,data, size) {
  let u;
  if (index === "Titolo" )
      u = 'https://api.rawg.io/api/games?key=' + apiKey + '&search=' + data + '&page_size=' + size;
  else if (index === "Genere" )
      u = 'https://api.rawg.io/api/games?key=' + apiKey + '&genres=' + data + '&page_size=' + size;
  else if (index === "Tag" )
      u = 'https://api.rawg.io/api/games?key=' + apiKey + '&tags=' + data + '&page_size=' + size;
  return u;
}

//funzione che cerca uno o più videogiochi a partire dall'input
async function cercaGioco(url) {
  var s = size.options[size.selectedIndex].text;
  var result = await fetch(url);
  var data = await result.json();
  for( let j = 0; j<s; j++ ){
      creaGioco( data.results[j].id, data.results[j].name, data.results[j].rating, data.results[j].released );
  }
}

//funzione che inserisce i giochi nella pagina html
function creaGioco(id, name, rating, released) {
  let html = `<a class="list__item" id="${id}">${name} - Valutazione:${rating} - Data di rilascio:${released}</a><br>`;
  game_List.insertAdjacentHTML('beforeend', html);
}

//quando clicco sul gioco nella lista ne visualizzo le informazioni
game_List.addEventListener('click', (e) => {
  e.preventDefault();
  let id = e.target.id;
  DettagliGioco(id);
});

//funzione per chiedere i dati di un particolare gioco
async function DettagliGioco(id) {
  var result = await fetch("https://api.rawg.io/api/games/" + id + "?key=" + apiKey + "&page_size=1");
  var data = await result.json();

  //local storage e spostamento al file game.html
  localStorage.setItem("games", JSON.stringify(data))
  location.href = "game.html";
}

//funzione che svuota la lista dei giochi
function resetGiochi() {
  game_List.innerHTML = '';
}