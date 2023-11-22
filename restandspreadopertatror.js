function doSum(a,b,c,...rest){
    console.log("rest elements : "+rest);
    return a+b+c;
}

console.log("sum is : "+doSum(1,2,3,4,5,6));


let arr = ["Nasser","Mohit","Akshay"];
let arr2 = [...arr, "Rohit","asds"];
console.log(arr2);

