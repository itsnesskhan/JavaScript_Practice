//fitler example
let arr = [4,5,6,3,2]
let arr2 = arr.filter((e)=> e%2==0);
console.log(arr2)

//map example

let arr3 = arr.map((e)=> e*10 );
console.log(arr3)

//reduce example
//findi max value in it

let max =  arr.reduce((max, curr)=>{
    if(curr>max)
       max = curr;
    return max;   
}, 0);  // 0 is the default value of max

console.log(max)

const users = [
    {firstName:'Nasser',lastName:'Khan',age:24},
    {firstName:'Mohit',lastName:'Malve',age:27},
    {firstName:'Ayush',lastName:'Kushwah',age:24}
]

let usernames = users.map((u)=>{
    return u.firstName+" "+u.lastName
})

console.log(usernames)


// count person with same age 

let ageCount = users.reduce((acc, curr, index)=>{
    if(acc[curr.age])
       acc[curr.age]++;
    else
       acc[curr.age] = 1;  
    return acc;    
},{})

console.log(ageCount)