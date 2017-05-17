// function add(a, b){
// 	 return a+b;
// }

// console.log(add(4,2));

// var toAdd = [9,5];

// console.log(add(...toAdd));

// var groupA = ['Bob', 'Tom'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA];

// console.log(final);

var person = ['Jim', 36];
var person2 = ['Tim', 20];

function print(name, age){
	console.log("Hi " + name + ", you are " + age);
}

var names = ['tim', 'jim'];
var final = ['slim'];
final = [...names, 'slim'];

//console.log(final)
//print(...person);

final.forEach(function(name){
	console.log('Hi ' + name);
});  

