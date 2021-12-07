let qs = document.querySelector.bind(document)
let qsa = document.querySelectorAll.bind(document)
let buttons = qsa(".modal-button")
for (let button of buttons) {
    button.addEventListener("click", function () {
        let target = this.getAttribute("data-target")
        qs("html").classList.add("is-clipped")
        qs(target).classList.add("is-active")

    })
}

let exitButtons = qsa(".modal-close")
console.log(`exit button ${exitButtons}`)
console.dir(exitButtons)
for (let button of exitButtons) {
    button.addEventListener("click", function () {
        qs("html").classList.remove("is-clipped")
        this.parentNode.classList.remove("is-active")
    })
}