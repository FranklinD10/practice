var count;
var userAge;
var humanDogRatio;

function execute() { 

 userAge = getElementById('age').value;

 calculate();
 print();

}

function calculate() {

    humanDogRatio = 7;

    count = userAge * humanDogRatio;
}

function check() {

   if (userAge == null) {
    
    } 
}

function print() {

    document.getElementById("content-title").innerText = "Results:";
    document.getElementById("content-results").innerText = count;
    
}

export { execute, calculate, check, print, count, userAge, humanDogRatio };