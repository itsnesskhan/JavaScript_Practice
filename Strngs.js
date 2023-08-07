let arr = ['0: JavaScript', '1: Python', '2: Rust', '3: C++'];
arr.forEach(element => {
    console.log(element.split(':'));
});


let names = ['Nasser','Mohit', 'Afrid', 'Ayush','Akshay'];
names.forEach((element, i, arr) => {
    console.log(`current element: ${element} and index: ${i} and arr: ${arr}`)
});

// diffrence between other loop and foreach is
// countiue and break does not in foreach loop
// want to break out of it, use for of loop



