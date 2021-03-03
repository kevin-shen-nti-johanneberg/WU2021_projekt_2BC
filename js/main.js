
let button = document.querySelector(".uni-button").addEventListener("click",showMenu)
let layer = document.querySelector(".fade-layer").addEventListener("click",showMenu)

function showMenu(){
    let menu = document.querySelector(".uni-menu")
    menu.classList.toggle("show")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}