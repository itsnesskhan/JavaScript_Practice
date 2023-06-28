console.log("Syncronour 1")

setTimeout(() => {
    console.log("timeout called 2")
}, 1);

Promise.resolve().then(()=>{
    console.log("promis called 3")
})

console.log("Synchrous 4")