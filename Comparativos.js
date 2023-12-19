let isPowerON = true   
let isBatteryConnected = true
//se todos forem verdadeiros '&&'
console.log(isBatteryConnected && isPowerON)

//se um OU outro forem verdadeiros '||'
isBatteryConnected = false
console.log(isBatteryConnected || isPowerON)

let condition1= true
let condition2 = false

const logicalExpression = condition1 || condition2

console.log(!logicalExpression||logicalExpression)


let isLoanApproved = true
let cash = 30000
let cost = 45000

const canBuyACar = isLoanApproved || (cash>cost)

console.log(canBuyACar)


//teste para saber se uma pessoa pode ou não comprar um carro
let LoanApproved = false
let Clientcash = 50000
let carCost = 45000

const insufficientBalance = cash > carCost || !(isLoanApproved)

let clientCantBuyACar = "Your balance are insufficient to buy this car"

console.log(clientCantBuyACar)