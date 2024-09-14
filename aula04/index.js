/* let checarMovimento =setInterval(teclaPressionada,5) */
const mario =document.getElementById("mario")
let posicao

function checarPosicao(){
    posicao = mario.style.left
}

function Iniciar(){
    document.addEventListener("keydown", teclaPressionada);
    document.addEventListener("keyup", teclaSolta)
    setTimeout(checarPosicao(), 10)
    
}

function teclaPressionada(event){
    if((event.code === "Space") || event.key === "ArrowUp"){
        mario.style.backgroundColor="red"
        mario.style.top = posicao + 100 + "px"
    }
}

function teclaSolta(event){
    if((event.code === "Space") || event.key === "ArrowUp"){
        mario.style.backgroundColor="yellow"
        mario.style.top = posicao + "px"
    }
}



Iniciar()
/* alert('ok') */
/* alert(teste+'px') */