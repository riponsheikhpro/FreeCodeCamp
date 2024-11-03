

// switch case
/*
let x = 3;

switch(x){
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log("one");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("i have know idea about your input");
}
        */


// for loop

/*
let arr = [1,2,3,4,5,6,7];

for(let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}
    */

//while loop

let x = 0;

/*while(x < 10){
    console.log(x);
    x++;
}*/
/*
while(1){
    console.log(x);
    x++;
    if(x == 10){
        break;
    }
}

*/

/*
do{
    console.log(x);
    x++
}while(x <= 10);

*/

/*
of: Used in for...of loops for iterating over iterable objects (like arrays).
in: Used in for...in loops for iterating over object properties, and can also be used to check property existence.
*/

/*
const obj ={
    
    name : 'akahs',
    id : 123,
    sec : 2
}

for(let d in obj){
    console.log(obj[d]);
}

let a = [1,2,3,4,4,5];

for(let x of a){
    console.log(x);
}
*/
let a = [1,4,5,7,4,7,4];
for(let x of a){
    console.log(x);
}
console.log(13 in a);