function onLoad() { 
    userAge = prompt("What's your age?")
}

function calculate() {
    myAge = userAge
    humanDogRatio = 7

    count = myAge * humanDogRatio
}

function check() {
   if (userAge == null) {
    run();
    } 
}

function print() {
    document.getElementById("content-title").innerText = "My Dog Age"
    document.getElementById("content-age").innerText = count
}

export { onLoad, calculate, check, print };