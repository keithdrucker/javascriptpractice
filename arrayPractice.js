const items = [1, 2, 3, 4, 5]

// for(let i=0; i<items.length; i++) {
//     console.log(items[i])
// }

//method 1 - going through a list
// items.forEach(function(item, index){
//     console.log(index)
// })

//method 2 - same as method 1 but returns a new array(with anything extra)
// const newItems = items.map(function(item, index){
//     return item + 1
// })
// console.log(newItems)
// console.log(items)

//method 3 - returns new array with filtered conditions
// const filteredItems = items.filter(function(item, index){
//     return item % 2 === 0
// })

// console.log(items)
// console.log(filteredItems)

//method 4 - returns single value of whatever you want to reduce from the original array
const sum = items.reduce(function(acc, currentValue){
    console.log(acc) // to show each iteration
    return acc + currentValue
},0)

console.log(sum)