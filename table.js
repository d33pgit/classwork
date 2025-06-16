const prompt=require('prompt-sync')()
let a=prompt("Enter a number")

if(a<1 || isNaN(a)){
    console.log("Invalid Input")
}
else
for(let i=1;i<=10;i++){
    
    console.log(`${a} X ${i} : ${a*i}`)
}