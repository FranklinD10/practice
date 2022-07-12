var count;
var userAge;
var myAge;
var humanDogRatio;

function execute() { 

 userAge = getElementById('age').value;

}

function calculate() {

    myAge = userAge;
    humanDogRatio = 7;

    count = myAge * humanDogRatio;
}

function check() {

   if (userAge == null) {
    
    } 
}

function print() {

    document.getElementById("content-title").innerText = "Results:";
    document.getElementById("content-results").innerText = count;
    
}

export { execute, calculate, check, print, count, userAge, myAge, humanDogRatio };