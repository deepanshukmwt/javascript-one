/* complete string*/



let str1 = "my name is deepanshu"
let str2 = " my class is 1st year"
let str3="      my          "

/* properties of string*/

console.log(str1.charAt(6)) // it will give what is at indeces 6
console.log(str1.indexOf("m")) // give index of m
console.log(str1.indexOf("m",str1.indexOf("name"))) // give index of m in name
console.log(str1.concat(" " , str2)) // add both strings
console.log(str1.slice(2,5)) // give string starting from 2 to 5(exclude)
console.log(str1.split("")) // split the string into array
console.log(str3.trim())
console.log(str1.includes("hello"))
console.log(str2.endsWith("hello"))