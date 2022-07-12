var count;
var userAge;
var myAge;
var humanDogRatio;

function execute() { 
    print();
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
    document.getElementById("content-title").innerText = "Results:";
    document.getElementById("content-age").innerHTML = count;
}

export { execute, calculate, check, print, count, userAge, myAge, humanDogRatio };