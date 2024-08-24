let word = "JavaScript"
console.log(word[0])

let number = 4
let number2 = 5
console.log(number == number2)

let lightOn = false
let lightOff = true
console.log(lightOn != lightOff)

let nums = [1,3,4,5]
nums.push(2)
console.log(nums)

let me = {"name" : "Abdullah", city : "Izmir" , age : 22}
console.log(me.city)

let person = {"name" : "Abdullah", city : "Izmir" , age : 22}
let person2 = {"name" : "Abdullah", city : "Izmir" , age : 22}
// if you compare these two we will get false since as objects they are different, JS does not compares whats inside non-primative data types
console.log("Comparing Objects V1 - ", person == person2)

let dog1 = {name : "Paşa", type : "Golden", age : 3}
let dog2 = dog1 // now if we compare these two we will get true because as objects they are equal
console.log("Comparing Objects V2 - ", dog1 == dog2)