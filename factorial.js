let prompt=require('prompt-sync')()
let n=prompt("Enter a number to find the factorial")
f=1
if(n<0 || isNaN(n)){
    console.log("Invalid Input")
}
else{
    for(let i=1;i<=n;i++){
        f=f*i
    }
    console.log(`Factorial : ${f}`)
}