console.log("A2.2_CW")
console.log("---- ---- ----")
console.log("Exercise 1")

console.log("---- ---- ----")
console.log("1.1")
let rohitAge = 22
let rahulAge = 23
let romaAge = 22
let ninaAge = 23

let isRohitOlder = rohitAge > rahulAge
console.log("is Rohit older than Rahul?", isRohitOlder)

console.log("---- ---- ----")
console.log("1.2")
let isRohitYounger = rohitAge < rahulAge
console.log("Is Rohit younger than Rahul? ", isRohitYounger)

console.log("---- ---- ----")
console.log("1.3")
let isRohitEqualRoma = rohitAge === romaAge
console.log("Is Rohit equal to Roma? ", isRohitEqualRoma)

console.log("---- ---- ----")
console.log("1.4")
let isNinaOlderorSameRahul = ninaAge >= rahulAge
console.log("Is Nina age is equal or older than Rahul? ", isNinaOlderorSameRahul)

console.log("---- ---- ----")
console.log("1.5")
let isNinaOlderorSameRohit = ninaAge >= rohitAge
console.log("Is Nina age is equal or older than Rohit? ", isNinaOlderorSameRohit)

console.log("---- ---- ----")
console.log("1.6")
let isRomaYoungerorSameNina = romaAge <= ninaAge
console.log("Is Roma younger or equal to Nina? ", isRomaYoungerorSameNina)

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
let product1price = 499
let product2Price = 699
let budget = 1199

let totalPrice = product1price + product2Price 

let areBothunderBudget = budget > totalPrice
console.log("Can I afford the two products?", areBothunderBudget)

console.log("---- ---- ----")

console.log("2.2")

let maths = 87
let english = 33
let science = 43
let passingAverage = 60

let average = (maths + english+ science) / 3
let isPass = average > passingAverage
console.log("Did I pass? ", isPass)

console.log("---- ---- ----")

console.log("2.3")
let number = 50 
let isnumberDivisibleBy3 = number % 3 === 0
let isNumberDivisibleBy7 = number % 7 === 0

console.log("Divisible by 3?", isnumberDivisibleBy3)
console.log("Divisible by 7?", isNumberDivisibleBy7)