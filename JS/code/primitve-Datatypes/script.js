let x=25;
console.log(x,typeof(x))
let y=35.33569;
console.log(y,typeof(y))
console.log(y.toFixed(3))
console.log(y.toPrecision(4))
console.log(y.toString(2))
// Math Functions
console.log(Math.max(2,3))
console.log(Math.min(2,3))
console.log(Math.sqrt(16))
console.log(Math.cbrt(27))
console.log(Math.pow(2,3),2 ** 3)
console.log(Math.floor(-3.6589))
console.log(Math.ceil(-3.6589))
console.log(Math.round(1.5))
console.log(Math.random())
console.log(Math.round(Math.random()*10000))

let p ='Sita'
console.log(p,typeof p, p[0], p[1], p[2], p[3])

let q ="Raju"
console.log(q,typeof q, q[0], q[1], q[2], q[3])

let r =`John`
console.log(r,typeof r, r[0], r[1], r[2], r[3])

// In JS strings '' or "" are similiar

let time = "5'o clock"
let quote = ' The Kalam said "Dream Big"'
let price = 25;
console.log(`Price is ${price*4}`)

let str="Javascript is so easy"