//Assignment # 1
  let factorialInput = document.getElementById("factorialInput");
let result = document.getElementById("result")
result.classList = ["textColour"]

function factorial(num){
  
  if(num > 0){
    return num * factorial(num - 1);
  }
  return 1;
}
function calculateFactorial(){
    const input = Number(factorialInput.value)
    
    result.innerHTML =  `The Factorial of ${factorialInput.value} is ${factorial(input)}`

}

//Assignment # 2

function removeVowelFromString(){
    let removeVowel = document.getElementById("removeVowel").value;
let result1 = document.getElementById("result1");
result1.classList = ["textColour"]

   result1.innerHTML = removeVowel.replace(/[aeiou]/gi,"")
  
}


//Assignment # 3
function displayLargestNumber(){
let largestNumber = document.getElementById("largestNumber").value;
let result2 = document.getElementById("result2")
result2.classList = ["textColour"]

let arrayNumbers = largestNumber.split(",").map(Number)
let newNumber = Math.max(...arrayNumbers)
result2.innerHTML =  `The largest number is ${newNumber}`
}
//Assignment # 4
function capitalizedWords(){
    let inputString = document.getElementById("inputString").value;
    let result3 = document.getElementById("result3");
    result3.classList = ["textColour"]

    let splitString = inputString.split(" ");
    let capitalizedWords = splitString.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    let capitalLetters = capitalizedWords.join(" ")
    result3.innerHTML = capitalLetters
}
//Assignment # 5
function average(){
    let inputAverage = document.getElementById("inputAverage").value;
    let numberInput = Number(inputAverage)
    let result4 = document.getElementById("result4");
    result4.classList = ["textColour"]

    let splitInput = inputAverage.replace(/[, ]+/g, " ").trim().split(" ")
    let lengthofString = splitInput.length
    let sum = 0
 for(var i = 0; i < splitInput.length; i++){
sum += Number(splitInput[i])
 }
 result4.innerHTML = `The average of these values is ${sum/lengthofString}`
}


function palindrome(){
let userInput1 = document.getElementById("palindromeFunction").value;
let result5 = document.getElementById("result5")
result5.classList = ["textColour"]

  let reversedWord = userInput1.split("").reverse().join("")

if(userInput1 === reversedWord){
  result5.innerHTML = "Its a palindrome"
} else{
  result5.innerHTML = "Its not a palindrome"

}
}
function sortedString(){
  let userInput2 = document.getElementById("userInput").value;
  let result6 = document.getElementById("result6")
result6.classList = ["textColour"]

  let userArray = userInput2.split(",")
  let sortedArray = userArray.sort().join(" ")
result6.innerHTML =  sortedArray
}
function primeNumber(){
  let primeInput = document.getElementById("primeInput").value
  let result7 = document.getElementById("result7")
result7.classList = ["textColour"]
  
  let isPrime = true;
  for(let i=2; i<primeInput; i++){
    if(primeInput % i === 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime === true){
  result7.innerHTML =    `${primeInput} is a prime number`;
  } else {
 result7.innerHTML =  `${primeInput} is not a prime number`;
  }
}




// let arr = ["banana","apple","mango"];
// let newArr = arr.sort()
// console.log(newArr)