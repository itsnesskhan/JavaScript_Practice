function printTime(){
    setTimeout(() => {
        console.log(new Date())
    }, 100);
    
}

for(i = 0;i<11;i++){
    printTime()
}
