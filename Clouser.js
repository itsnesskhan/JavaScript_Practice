function first(a){
    var b = 20;
    

    return function second(){
        let c = a+b;
        return c;
    }
}

let d = first(10);
console.log(d);
console.log(d());