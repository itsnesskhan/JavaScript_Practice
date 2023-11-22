const name = {
    firstname: "Nasser",
    lastname: "Khan",

    printName: function (greetType){
        console.log(greetType+" "+this.firstname+" "+this.lastname)
    }
}

const name2 = {
    firstname: "Mohit",
    lastname: "Malve"
}

name.printName.call(name2, "Namste");
name.printName.apply(name2, ["Asslam Walekum"])
let printFun = name.printName.bind(name2, "Sasriya kall");
printFun()
name.printName("Kemchho")

