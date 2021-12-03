document.querySelector(".modal-button").addEventListener("click", function() {
    let target = this.getAttribute("data-target")
    document.querySelector("html").classList.add("is-clipped")
    document.querySelector(target).classList.add("is-active")
})

document.querySelector(".modal-close").addEventListener("click", function() {
    document.querySelector("html").classList.remove("is-clipped")
    this.parentNode.classList.remove("is-active")
})

// login button
document.querySelector("#one").addEventListener("click", function() { showTab(this)})
// register button
document.querySelector("#two").addEventListener("click", function() {showTab(this)});

const showTab = (e) => {
    let selectType = e.getAttribute("data-select")

    if (selectType == 'one') {
        document.querySelector("#tabs1").classList.remove("is-hidden")
        document.querySelector("#tabs2").classList.add("is-hidden")
        document.querySelector("#activeIdOne").classList.add("is-active")
        document.querySelector("#activeIdTwo").classList.remove("is-active")
    } else if (selectType == 'two') {
        document.querySelector("#tabs1").classList.add("is-hidden")
        document.querySelector("#tabs2").classList.remove("is-hidden")
        document.querySelector("#activeIdOne").classList.remove("is-active")
        document.querySelector("#activeIdTwo").classList.add("is-active")
    }
}
