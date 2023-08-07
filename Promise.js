var age=18
     var pro1 = new Promise((resolve, reject) =>{

        if(age >=18){
             resolve("Thank you for connnecting with us!")
        }
        else{
            reject("Someting went wrong")
        }
    })


function test(){

    pro1.
        then((result)=>
    console.log(result)
    )
        .catch((error)=>
    console.log(error)
    )   

}

test()
