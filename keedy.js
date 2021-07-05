// console.log("yeet")
// let milk = 10
// const dad = "KAD"

// console.log(milk + " " + dad + "s " + "walk into evvys crib")

// for(let i=0; i<= 10; i++){
//     if(i % 2 === 0) {
//         console.log(i)
//     } 
// }

// question1
// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log(sum(4, 6))

// question2
// function minToSec(min){
//     return min * 60
// }

// console.log(minToSec(3))

// question3
// function triArea(base, height){
//     return (base * height) / 2
// }

// console.log(triArea(7, 4))

// question4
// function points(twoPoints, threePoints) {
//     return (twoPoints * 2) + (threePoints * 3)
// }

// console.log(points(38, 8))

// question5

// function addUp(num1) {
//     let sum = 0
//     for(let i=1; i<=num1; i++){
//         sum += i
//     }
//     return sum
// }

// console.log(addUp(600))

// question6
// function timeForMilkAndCookies(keithsDate) {
//     if(keithsDate.getMonth() === 11 && keithsDate.getDate() === 24) {
//         return true
//     } else {
//         return false
//     }
// }

// const keithsDay = (new Date(1994, 09, 19))
// console.log(timeForMilkAndCookies(new Date(1994, 11, 24)))


//question7

function detectWord(crowd){
    const chars = crowd.split("")

    let word = ""

    for (let i=0; i<chars.length; i++){
        if(checkIsLowerCase(chars[i])) {
            word += chars[i]
        }
    }

    return word
}
    function checkIsLowerCase(character){
        if(character === character.toLowerCase()){
            return true;
        }   
        return false;        
    }
console.log(detectWord("UcUNFYGaFYFYGtNUH"))
checkIsLowerCase("C")