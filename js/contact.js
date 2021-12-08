import {
    qs,
    qsa
} from './utils.js'

let contactButtons = qsa(".modal-button")
for (let button of contactButtons) {
    button.addEventListener("click", function () {
        let target = this.getAttribute("data-target")
        qs("html").classList.add("is-clipped")
        qs(target).classList.add("is-active")

    })
}

let exitButtonsContacts = qsa(".modal-close")
for (let button of exitButtonsContacts) {
    button.addEventListener("click", function () {
        qs("html").classList.remove("is-clipped")
        this.parentNode.classList.remove("is-active")
    })
}