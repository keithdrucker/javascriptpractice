

// // question1
// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log(sum(4, 6))




// // question2
// function minToSec(min){
//     return min * 60
// }

// console.log(minToSec(3))




// // question3
// function triArea(base, height){
//     return (base * height) / 2
// }

// console.log(triArea(7, 4))





// // question4
// function points(twoPoints, threePoints) {
//     return (twoPoints * 2) + (threePoints * 3)
// }

// console.log(points(38, 8))




// // question5
// function addUp(num1) {
//     let sum = 0
//     for(let i=1; i<=num1; i++){
//         sum += i
//     }
//     return sum
// }

// console.log(addUp(5))



// // question6
// function timeForMilkAndCookies(keithsDate) {
//     if(keithsDate.getMonth() === 11 && keithsDate.getDate() === 24) {
//         return true
//     } else {
//         return false
//     }
// }

// const keithsDay = (new Date(1994, 09, 19))
// console.log(timeForMilkAndCookies(new Date(1994, 11, 24)))




// //question7
// function detectWord(crowd){
//     const chars = crowd.split("")
//     let word = ""

//     for (let i=0; i<chars.length; i++){
//         if(checkIsLowerCase(chars[i])) {
//             word += chars[i]
//         }
//     }

//     return word
// }
//     function checkIsLowerCase(character){
//         if(character === character.toLowerCase()){
//             return true;
//         }   
//         return false;        
//     }

// console.log(detectWord("UcUNFYGaFYFYGtNUH"))





//question 8
// const arrayList = [7, -3, 1, 2, 3, 4, 5]
// function getFirstElement(array){
//     return array[0]
// }

// console.log(getFirstElement(arrayList))



//question 8 extended
// const arrayList = [7, -3, 1, 2, 3, 4, 5]
// function getLastElement(array2){
//     let lastValue = array2.length

//     return array2[lastValue - 1]
// }

// console.log(getLastElement(arrayList))




//question 8 extended extended 
// const arrayList = [7, -3, 1, 2, 3, 4, 5]
// function getMinValue(array3){
//     let min = array3[0]

//     for (let i=0; i<array3.length; i++) {
//         if(array3[i] < min){
//         min = array3[i]
//         }
//     }
//     return min
// }

// console.log(getMinValue(arrayList))



//question 9
// function calcAge(age){
//     return age * 365
// }

// console.log(calcAge(20))



//question 10
// function circuitPower(num1, num2) {
//     return num1 * num2
// }

// console.log(circuitPower(110, 3))



//question 11
// function giveMeSomething(anyString) {
//     return "something" + " " + anyString
// }

// console.log(giveMeSomething("blah blah blah"))



//question 12
// function calculateFuel(num) {
//     let fuel = num * 10

//     if(fuel < 100){
//         fuel = 100
//     }
//    return fuel
// }

// console.log(calculateFuel(5))


//question 13
// function animals(chickens, cows, pigs) {
// 	return (chickens*2) + (cows*4) + (pigs*4)
// }

// console.log(animals(2, 3, 5))



//question 14
// function secretSociety(friends) {
//     let sortedFriends = friends.sort()
//     let result = ""

//     for (let i=0; i<sortedFriends.length; i++){
//         result += sortedFriends[i][0].toUpperCase()
//     }
//     return result
// }

// const friendsArray = ["Sarah", "Adam", "Malcolm"]
// console.log(secretSociety(friendsArray))



//question 15
// function matchHouses(step) {
//     if(step === 0) {
//         return 0
//     } else {
//         return (step * 6) - (step - 1)
//     }
// }

// console.log(matchHouses(87))




//question 16 /
// function sumOfOddNums() {
//     let result = 0

//     for (let i=10; i<=30; i++){
//         if (i % 2 != 0){
//             result += i
//         }
//     }
//     return result
// }

// console.log(sumOfOddNums())




// function sumOfOddNums2(start, end, numArray){   
//     let result = 0

//     for(let i = 0; i<numArray.length; i++) {
//         if((numArray[i] % 2 != 0 && numArray[i] < end) && numArray[i] > start) {
//             result += numArray[i]
//         }
//     }
//     return result
// }

// const newArray = [-5, 10, 21, 30, 49, 51]
// console.log(sumOfOddNums2(1, 50, newArray))




// //question 17 
// function calculateSumNumber(num1, num2) {
//     let result = 0

//     for(let i=num1; i<=num2; i++) {
//         result += i
//     }
//     return result
// }

// console.log(calculateSumNumber(1, 10))




//question 18 
// const arrayExample = [-10, 2, -3, 4, 5]
// function sumOfNumbers(array4) {
//     // let result = 0

//     // for(let i=0; i<array4.length; i++) {
//     //     result += array4[i]
//     // }
//     // return result

//     return array4.reduce(function(acc, num){
//         acc += num
//         return acc
//     }, 0)
// }


// console.log(sumOfNumbers(arrayExample))



// //question 19 
// const arrayExample = [-10, 2, -3, 4, 5]
// function averageOfNumbers(array5) {
//     let result = 0
//     let averager = array5.length

//     for(let i=0; i<array5.length; i++) {
//         result += array5[i]
//     }
//     return result / averager
// }

// console.log(averageOfNumbers(arrayExample))



// // question 20 
// const arrayExample = [-10, 2, -3, 4, 5]
// function posArrayNumbers(array6) {
//     return array6.filter(function(item, index){
//         return item > 0
//     })

// }

// console.log(posArrayNumbers(arrayExample))
// console.log(arrayExample)




//question 21 
// function isPrimeNumber(number) {
//     if(number === 2 || number % 2 != 0){
//         return true
//     }
//     return false
// }

// console.log(isPrimeNumber(617))




// //question 24 
// function getNumberOfWords(anyString) {
//     const words = anyString.split(" ")
//          return words.length
// }

// console.log(getNumberOfWords("hello you got this"))




// //question 25
// let keithsArray = [1, 2, 3, 4, 5]
// function rotateLeft(exampleArray) {
//     let firstElement = exampleArray[0]


//     for (let i=1; i<exampleArray.length; i++) {
//         exampleArray[i - 1] = exampleArray[i]
//     }
//         exampleArray[exampleArray.length - 1] = firstElement
//     return exampleArray

// }

// console.log(rotateLeft(keithsArray))




// //question 26
// let keithsArray = [1, 2, 3, 4, 5]
// function rotateRight(exampleArray2) {
//     let lastElement = exampleArray2[exampleArray2.length - 1]

//         for (let i=exampleArray2.length - 1; i>0; i--) {
//             exampleArray2[i] = exampleArray2[i -1]
//         }
//         exampleArray2[0] = lastElement
//         return exampleArray2
// }
//     console.log(rotateRight(keithsArray))





// //question 27
// function removedFirst3(anyString) {

//     let word = anyString.split("").filter(function(item){
//         return !["a", "b", "c"].includes(item)
//     }).join("")

//     return word
// }
// console.log(removedFirst3("bkakjncjkndajknbhlclnblna"))



// //question 28
// function uniqueInOrder(anyting){
//     let newArray = [anyting[0]]

//     for(let i=1; i<anyting.length; i++) {
//         if (anyting[i] !== anyting[i-1]){
//             newArray.push(anyting[i])
//         }

//     }
//     return newArray

// }

// console.log(uniqueInOrder("AAAABBBCCDDA"))


// //question 29
// function friendsOnly(names) {
//     let newArray = []

//     for (let i=0; i<names.length; i++) {
//              if (names[i].length < 5){

//             newArray.push(names[i])
//         }
        
//     }   
//     return newArray
        
// }

// console.log(friendsOnly(["keith", "joe", "john"]))


// //question 30
// function xo(xsos) {
//     let acceptable = xsos.toLowerCase()
//     let x = 0
//     let o = 0

//     for(let i=0; i<xsos.length; i++) {
//         if(xsos[i] === "x") {
//             x += 1
//         } 
//         if(xsos[i] === "o") {
//             o += 1
//         }
//     }

//     if (x === o) {
//         return true
//     }
//     return false

//  }

// console.log(xo("xoxox"))


// //question 31
// function reverseNumbers(anyNum) {
//     let newOrder = [anyNum].join("")
//     let result = []

//     for(let i=newOrder.length -1; i>=0; i--){
//             result += newOrder[i]
            
//     }    
   
//     return Number.parseInt(result)
     
// }
// console.log(reverseNumbers(2345))
