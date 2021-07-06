

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
// checkIsLowerCase("C")




//question 8
// const arrayList = [7, -3, 1, 2, 3, 4, 5]
// function getFirstElement(array){
//     return array[0]
// }
// console.log(getFirstElement(arrayList))



//question 8 extended
// function getFirstElement(array2){
//     let lastValue = array2.length
//     return array2[lastValue - 1]
// }
// console.log(getFirstElement(arrayList))




//question 8 extended extended 
// const arrayList = [7, -3, 1, 2, 3, 4, 5]
// function getFirstValue(array3){
//     let min = array2[0]
//     for (let i=0; i<array3.length; i++) {
//         if(array3[i] < min){
//         min = array3[i]
//         }
//     }
//     return min
// }
// console.log(getFirstValue(arrayList))



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
//         result += sortedFriends[i][0].toLowerCase()
//     }
//     return result
// }

// const friendsArray = ["Sarah", "Adam", "Malcolm"]
// console.log(secretSociety(friendsArray))



//question 15
function matchHouses(step) {
    if(step === 0) {
        return 0
    } else {
        return (step * 6) - (step - 1)
    }
}

console.log(matchHouses(87))