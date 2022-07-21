var decrement = document.getElementById("down")
var increment = document.getElementById("up")
var number = document.getElementById("number")

var count = 0

function countUp() {
    count++;
    number.innerHTML = count
}

function countDown() {
    count--;
    number.innerHTML = count
}

increment.addEventListener("click", countUp)
decrement.addEventListener("click", countDown)
