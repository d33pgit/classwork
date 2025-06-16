function fib(n){
let a= 0
let b=1
let next
for(let i=1;i<=n;i++){
    console.log(a)
    next=a+b
     a=b
     b=next
}  
const prompt=require('prompt-sync')()
let num=prompt("Enter a Number till the fibbonacci will run")
fib(num)
}