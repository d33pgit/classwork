function rectangleArea(l,b){
    return l*b
}
function rectangleparameter(l,b){
    return 2*(l+b)
}
const prompt=require('prompt-sync')()
let length=prompt("Enter length")
let breadth=prompt("Enter breadth")
console.log(`Area is : ${rectangleArea(length,breadth)}`)
console.log(`Perimeter is : ${rectangleparameter(length,breadth)}`)