//Exercise 1

let number = +prompt("Please enter a number")
switch(number){
    case ( number%50 <25):{
console.log(number - number%50)
    break;
    }
    default: {
        console.log((number - number%50)+50)
    }
}


//Exercise 5

let isNumberPrime = true
let num = +prompt("Please enter a number")
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isNumberPrime = false
        break; 
    }
}
if (isNumberPrime === true) {
    console.log("Prime")
}else{
    console.log("No prime")
}




//Exercise 2

let a = +prompt("Please enter 1. number")
let b = +prompt("Please enter 2. number")
let c = +prompt("Please enter 3. number")

if(a > 0 && b > 0 && c >0 ) {
    console.log("plus")
}else if(a > 0 && b < 0 && c < 0) {
    console.log("plus")
}
else if(a < 0 && b < 0 && c > 0) {
console.log("plus")
} 
else if(a < 0 && b > 0 && c < 0) {
console.log("plus")
} else if ( a === 0 || b === 0 || c===0) {
console.log("unsigned")
}
else {console.log("negativ")
}


//Exercise 3

let isDigitFound = false
let number = +prompt("Enter a number")
let digit = +prompt("Enter a digit")
if (number === 0 && digit === 0) {
    isDigitFound = true
} 
while (number != 0){
    let lastDigit = number%10 
    number = (number - lastDigit)/10
    if (lastDigit === digit) {
        isDigitFound = true
        break
}
}

if (isDigitFound === true) {
    console.log("yes")
}else{ 
    console.log("no")
}


//Exercise 4
number = +prompt("Please enter a number")

let maxDigit = 0
let minDigit = 9
if (number === 0) {maxDigit = minDigit = 0}
while (number !=0){
let lastDigit = number%10
number = (number - lastDigit)/10
if (lastDigit > maxDigit) {maxDigit = lastDigit}
if (lastDigit < minDigit)  {minDigit = lastDigit}
}
console.log(maxDigit - minDigit)
