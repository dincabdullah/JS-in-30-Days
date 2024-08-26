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


console.log("Comparion inside of methods: " , person.city == person2.city)

const PI = Math.PI
console.log(PI)
console.log(Math.round(PI)) // rounds to nearest number
console.log(Math.ceil(PI)) // rounds to upper 
console.log(Math.floor(PI)) // rounds to down 

console.log(Math.min(-555,-5,3,4,5))

const random_number = Math.floor(Math.random() * 100 + 10)
console.log(random_number)


console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2024')

console.log(`${word}`) // back-ticks -> option + , 


// String Methods
let js = 'JavaScript'
console.log(js.length)     


let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)  


let my_name = 'Abdullah'
console.log(my_name.toUpperCase())    

let sur_name = 'Dinç'
console.log(sur_name.toLowerCase())  

console.log(sur_name.substring(0,sur_name.length -1 )) 

let my_full_name = "Abdullah Dinç"
console.log(my_full_name.split(' '))

let str_var = '   30 Days Of JavaScript   '
console.log(str_var)
console.log(str_var.trim(' '))

let string_header = '30 Days Of JavaScript'
console.log(string_header.includes('Days'))     // true
console.log(string_header.includes('days'))     // false - it is case sensitive!

console.log(string_header.replace('JavaScript', 'Python')) // 30 Days Of Python

console.log(string_header.charAt(0))        // 3
console.log(string_header.charCodeAt(3))        // D ASCII number is 68

let regex_str = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(regex_str.match("Java"))
console.log(regex_str.match(/Java/))
let pattern = /java/gi
console.log(regex_str.match(pattern))


// you can use + sign to convert string to number or float