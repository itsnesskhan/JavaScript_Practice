let object = {
    firstName:'Nasser',
    lastName:'Khan',
    age:24
}

console.log(object)

object.email = "mnk56250@gmail.com"
console.log(object)

delete object.email ;

console.log(object)

for(let key in object){
    console.log(key+" : "+object[key])
}

console.log(object.email)
console.log('email' in object)