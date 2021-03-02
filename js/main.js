let button = document.querySelector("uni-button")

function showMenu(){
    let menu = document.querySelector("nav.uni-menu")
    menu.classList.toggle("show")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}