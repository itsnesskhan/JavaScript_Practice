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
let arr2 = ['Steve', 'Danial']

console.log(arr1)
console.log(arr2)
let arr3 = arr1.concat(arr2)
console.log(arr3)