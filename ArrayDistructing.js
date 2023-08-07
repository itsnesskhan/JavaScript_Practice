const arr = [3,4,5, [4,6]];

var [a,,,[b,c]]= arr

console.log(a,b,c)

const getData = ()=>{
    return [5,6];
}

//swapping 
console.log("a ",a);
console.log("b ",b);
[a,b] = [b,a];
console.log("a",a,"b", b);

//defualt values 
[p=1,q=1,s=1] = [3,,5];
console.log(p, q, s);


//receive two values 

[r,s] = getData();
console.log(r,s, typeof s);