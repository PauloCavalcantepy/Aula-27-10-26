// let body = document.querySelector("body");
// let div = document.querySelector("div")
// body.removeChild(div)

// let h1 = document.querySelector("#mudaCor")

// console.log(h1)
// h1.style.color = "blue"
// h1.style.background = "yellow"
// h1.style.height = "20px"

// let body = document.querySelector("body")
// body.style.backgroundColor = "purple"
// var h1 = document.querySelector("h1")
// var paragrafo = document.querySelector("p")

// paragrafo.innerText = h1.innerText

var estado = false
let body = document.querySelector("body");
var but = document.querySelector("#but")
var h1 = document.querySelector("h1")


but.addEventListener("click",()=>{
         estado = !estado
         if(estado === false){
            body.style.backgroundColor = "white"
            h1.style.color = "black"
         }
         else{
            body.style.backgroundColor = "black"
            h1.style.color = "white"
         }
});
    








document.addEventListener("keydown",(e)=>{
console.log(e.key)
if(e.key === "ArrowRight"){
    but.style.left = (parseInt(but.style.left) || 0) + 10 + "px";
}
else if(e.key === "ArrowLeft"){
    but.style.rigtht = (parseInt(but.style.rigtht) || 0) + 10 + "px";
}
})