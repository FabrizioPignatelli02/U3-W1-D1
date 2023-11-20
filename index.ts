

const numberPlayer1 = document.getElementById("numberPlayer1") as HTMLInputElement | null
const numberPlayer2 = document.getElementById("numberPlayer2") as HTMLInputElement | null
const buttonFormGame = document.getElementById("buttonForm") 
const labelPlayer1 = document.createElement("p")
const labelPlayer2 = document.createElement("p")
const labelRandomNumber = document.createElement("p")
const responce = document.createElement("p")

document.body.appendChild(labelPlayer1)
document.body.appendChild(labelPlayer2)
document.body.appendChild(labelRandomNumber)
document.body.append(responce)

console.log(numberPlayer1)
console.log(numberPlayer2)




const playRandomNumberGame = function (e) {
    e.preventDefault();

    responce.innerText =""


    let n1 = parseInt(numberPlayer1.value)
    let n2 = parseInt(numberPlayer2.value)

    const random:number = Math.floor(Math.random()*10)

    labelPlayer1.innerText = "Giocatore 1: " + n1;
    labelPlayer2.innerText = "Giocatore 2: " + n2;
    labelRandomNumber.innerText = "Numero estratto: " + random;





    if(n1 === random ){
        responce.innerText = "Giocatore 1 ha indovinato"
    } 
    if (n2 === random)
    {
        responce.innerText = "Giocatore 2 ha indovinato"
    }
    // if(n1 !== random && n2 !== random){
    //     if(random-n1 >= random-n2){
    //     responce.innerText= "Nessuno ha vinto ma Giocatore 2 è andato più vicino"
    // }else{
    //     responce.innerText= "Nessuno ha vinto ma Giocatore 1 è andato più vicino"
    // }}
    


}

buttonFormGame.addEventListener("click", playRandomNumberGame)



