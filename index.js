var numberPlayer1 = document.getElementById("numberPlayer1");
var numberPlayer2 = document.getElementById("numberPlayer2");
var buttonFormGame = document.getElementById("buttonForm");
var labelPlayer1 = document.createElement("p");
var labelPlayer2 = document.createElement("p");
var labelRandomNumber = document.createElement("p");
var responce = document.createElement("p");
document.body.appendChild(labelPlayer1);
document.body.appendChild(labelPlayer2);
document.body.appendChild(labelRandomNumber);
document.body.append(responce);
console.log(numberPlayer1);
console.log(numberPlayer2);
var playRandomNumberGame = function (e) {
    e.preventDefault();
    responce.innerText = "";
    var n1 = parseInt(numberPlayer1.value);
    var n2 = parseInt(numberPlayer2.value);
    var random = Math.floor(Math.random() * 10);
    labelPlayer1.innerText = "Giocatore 1: " + n1;
    labelPlayer2.innerText = "Giocatore 2: " + n2;
    labelRandomNumber.innerText = "Numero estratto: " + random;
    if (n1 === random) {
        responce.innerText = "Giocatore 1 ha indovinato";
    }
    if (n2 === random) {
        responce.innerText = "Giocatore 2 ha indovinato";
    }
    // if(n1 !== random && n2 !== random){
    //     if(random-n1 >= random-n2){
    //     responce.innerText= "Nessuno ha vinto ma Giocatore 2 è andato più vicino"
    // }else{
    //     responce.innerText= "Nessuno ha vinto ma Giocatore 1 è andato più vicino"
    // }}
};
buttonFormGame.addEventListener("click", playRandomNumberGame);
