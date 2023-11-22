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


//examp2

function print(){
    let name = "Nasser Khan"

    return function greet(){
        return "welcome "+name;
    }

}

let greetbro = print( );  
console.log(greetbro());    