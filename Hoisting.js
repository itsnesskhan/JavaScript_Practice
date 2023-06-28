

console.log(a)
greet()

function greet(){
    console.log("Good Moring")
}
greet2() // will throw error cause function expressions are not hosted
var greet2 = function greet2(){
    console.log("Good Moring")
}

greet3() // arrow functions are not hoisted as well
var greet3 = ()=>{
    console.log("good Moring")
}


// var a; declaration hoisted at the top but 
var a = 9 // intialization is not

// hosting wont work with let and const
console.log(a)