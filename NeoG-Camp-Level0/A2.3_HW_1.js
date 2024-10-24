console.log("A2.3_HW_1")
console.log("---- ---- ----")
console.log("Exercise 1")

console.log("1.1")
let subject1Marks = 85
let subject2Marks = 92
let subject3Marks = 78

averageMarks = (subject1Marks + subject2Marks + subject3Marks) / 3
let hasDramaSchoolEndorsement = true

let isSelected = averageMarks >= 80 || hasDramaSchoolEndorsement

console.log("Is the user selected?", isSelected)

console.log("---- ---- ----")

console.log("1.2")
let foodBill = 1500
let hasZomatoGoldMembership = true

let qualifiesForDiscountedBill = foodBill < 2000 || hasZomatoGoldMembership

console.log("Does the user qualify to pay the food bill at a discounted price?", qualifiesForDiscountedBill)

console.log("---- ---- ----")

console.log("1.3")
let piggyBankBalance = 2000
let piggybank2Balance = 1500
let penCost = 50
let notebookcost = 100
let pencilCost = 20

let totalCost = pencilCost + penCost + notebookcost

let isAffordable = totalCost <= piggyBankBalance || totalCost <= piggybank2Balance

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
let personAge = 25
let isAgeInrange = personAge >= 18 && personAge <= 60
console.log("Is the selected Age between 18 and 60?", isAgeInrange)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

console.log("3.1")
let TvscreenSize = 55
let tvBrand = "Sony"
let tvPrice = 50000

let matchesCriteria = TvscreenSize >= 50 && tvPrice <= 60000 && (tvBrand === "Samsung" || tvBrand === "Sony")

console.log("Does the TV meet the criteria?", matchesCriteria)

console.log("---- ---- ----")

console.log("3.2")
let watchReleaseYear = 2022
let watchSize = "L"
let watchBrand = "Apple"

let isDiscountApplicable = watchReleaseYear > 2022 && (watchSize === "M" || watchSize === "L") && (itemBrand === "Apple" || itemBrand === "Samsung")

console.log("Is the discount applicable?", isDiscountApplicable)