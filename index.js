var setaEsquerda = window.document.getElementById("setaE")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("setaD")

function rolarParaDireira(){
    leonardo.style="display:none"
    bruna.style="display:flex"
    setaEsquerda.style="display:flex"
    setaDireita.style="display:none"
}

function rolarParaEsquerda(){
    bruna.style="display:none"
    leonardo.style="display:flex"
    setaDireita.style="display:flex"
    setaEsquerda.style="display:none"

}
