// Primitive

// 7 types: String ,Number,Boolean , null,undefined ,Symbol ,BigInt 

const score =100
const scoreValue=100.3
const isLoggedin =false
const outsideTemp=null
let userEmail;

const id=Symbol('123')

const anotherid =Symbol('123')

console.log(id == anotherid)

//const bigNumber =3456789876n


// Reference Type (Non Primitive)

//Array, Objects, Functions

const heros =["shaktiman","naagraj","doga"];

let myObj={
    name:"omkar",
    age:22,
}

const myFunction =function (){
    console.log("hello world");
    
}

console.log(typeof heros);


//**************************************************************************** */


// stack (Primitive) ,Heap (non Primitive)

let myyutubeName="hiteshChoudharyDotcom"

let anothetrname=myyutubeName

anothetrname = "chaiOurcode"

console.log(myyutubeName);
console.log(anothetrname);

let user1 ={
    email:"user@googl.com",
    upi:"user@974584",

}

let user2=user1

user2.email="omkar@google.com"

console.log(user1.email);
console.log(user2.email);

