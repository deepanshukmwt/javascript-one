/*
If we want to convert we can use Number(variable name).
if variable have string which cant be convert to number result will be NaN.
IF NULL result is zero.
for boolean also 0 and 1.
for undefined it will be Nan.


*/

let value="100";
let convertTonumber = Number(value);
console.log(convertTonumber);
console.log(typeof(convertTonumber)); 

let nan="hello"; 
let converttonumber = Number(nan); // result will be NaN
console.log(converttonumber);
console.log(typeof(converttonumber)); 


/*
same way.
Boolean(variable)
0 and ""(empty strings for false) and anyything else for true
String(vairable) for conversionns
*/