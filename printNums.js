function printNum(){

    for(let i =1;i<=5;i++){
        setTimeout(()=>{
            console.log(i+" minute")
        }, i*1000)
    } 
}

printNum()