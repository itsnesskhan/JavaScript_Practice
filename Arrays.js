let subjects = ['Maths', 'Physics','Bio'];
console.log(subjects)
subjects[2] = 'English'
console.log(subjects)

//add element at last
subjects.push('Pharmacy');
console.log(subjects)

//add element at first
subjects.unshift('first')
console.log(subjects)

//pop element at last
subjects.pop()
console.log(subjects)

//remove first element
subjects.shift()
console.log(subjects)

//remove element at specific index // remove two elements from 1 index
subjects.splice(1,2);
console.log(subjects)

//make array blank
subjects = []
console.log(subjects)

let arr1 = ['Nasser','Ayush','Mohit','Rohit']
let arr4 = ['Steve', 'Danial']

console.log(arr1)
console.log(arr4)
let arr3 = arr1.concat(arr4)
console.log(arr3)

const arr2 = [3,4,7,4,3,1];
// console.log(arr2.splice(1,3)); // modify actual array, slice doesnt
console.log(arr2.slice(1,3)); // modify actual array, slice doesnt
console.log(arr2)

console.log(arr2.sort((a,b)=> a-b)); // sort in accending order
console.log(arr2) // sort modified actual array, if u don't want it to be modified
console.log(arr2.slice().sort((a,b)=> b-a)) // sorting in decending order
console.log(arr2)  //didn't modify the actual array

//delte element in array
const names = ['Nasser','Mohit','Akshay','Rohit'];
const index = names.findIndex((e)=> e==='Mohit');
names.splice(index,1);
console.log(names);


//splice(start, deleteCount, item0)
names.splice(2,0,'Jaime Lennister', 'Jon Snow');
console.log(names);