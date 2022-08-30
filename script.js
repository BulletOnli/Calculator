let btn = document.querySelectorAll(".btn")
let value = document.getElementById("value")

for (let i=0; i < btn.length; i++ ) {
    btn[i].addEventListener("click", function() {
        if (this.innerHTML == "=") {
            value.innerHTML = eval(value.innerHTML)
        } else if (this.innerHTML == "AC") {
            value.textContent = ""
        } else {
            value.innerHTML += this.innerHTML
        }
    })
}

let mainBg = document.getElementById("bg-image")
const inputEl = document.querySelector(".change")


inputEl.addEventListener("click", function() {
    update()
})

function update() {
    if (inputEl.checked) {
        document.body.style.backgroundImage = "url('background2.png')";
    } else {
        document.body.style.backgroundImage = "url('background1.png')";
    }
}