var count;
var userAge;
var myAge;
var humanDogRatio;

function execute() { 
    
}

function calculate() {
    myAge = userAge
    humanDogRatio = 8

    count = myAge * humanDogRatio
}

function check() {
   if (userAge == null) {
    
    } 
}

function print() {
    document.getElementById("content-title").innerText = "My Dog Age";
    document.getElementById("content-age").innerText = count;
}

export { onLoad, calculate, check, print, count, userAge, myAge, humanDogRatio };