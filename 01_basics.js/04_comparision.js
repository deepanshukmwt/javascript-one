/* 
comparision between same datatypes is not a problem.
consversion between diff datatypes can confuse us.
*/

console.log(2>3)
console.log(2!=2)
console.log(3>2)
console.log(2==2)

/*
now comaprison between diff types
*/

console.log(null==0);
console.log(null>=0);  // comparison convert diff dataypes to number but equality dosent. both work diffrently
console.log(null>0);

