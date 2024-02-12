let menu = document.getElementById("menu")
let currStatus = 'hide'
console.log(currStatus)
function menuToggle() {
    if (currStatus === 'hide') {
        // menu.style.display = "flex"
        menu.classList.add("show")
        currStatus = "show"
        console.log(currStatus)
    } else {
        // menu.style.display = "none"
        menu.classList.remove("show")
        currStatus = "hide"
        console.log(currStatus)
    }
}