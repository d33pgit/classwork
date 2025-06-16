//This is node program to take user input using read line
const readline=require('readline')
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("Enter your name: ",function(name){
    console.log(`hello, ${name}!`)
    r1.close()
})