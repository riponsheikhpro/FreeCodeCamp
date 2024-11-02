/* code for variables */

let name = "Ripon";
console.log(name);

let first_name = "Ripon", last_name = "Sheikh";
console.log(first_name + " " + last_name);

// primitive data type: 7types such as: number, BigInt, string, null, undefined, boolean, symple
let num = 10;
console.log(num+"\n");
let big_int = 12323232323234342322424n;
console.log(big_int + "\n");
let str = "Ripon";
console.log(str + "\n");
let bol = true;
console.log(bol + "\n");
let undef;
console.log(undef);
let nl = null;
console.log(nl + "\n");
let sym = Symbol();
console.log(sym);

console.log(typeof(sym));
console.log('\n');

// object data type

let obj = {
    //key : value;
    name: "ripon",
    age: 23
};
console.log(obj.name + "\n");
console.log(obj["age"] + '\n');

let x = 'akash';
obj.name = x;
console.log(obj.name+'\n');

// array

let arr = [12, 'ripon', 34,3];

console.log(arr[1] + '\n');

console.log(arr.length)

let temp = 'sheikh';
arr[2] = temp;
console.log(arr[2] + '\n');

// function

function fun_name(){
    console.log('this is function');
}

console.log(fun_name());

function fun_argu(a, b){
    return a+b;
}

console.log(fun_argu(12, 3));

