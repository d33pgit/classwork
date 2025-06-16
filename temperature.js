function ctof(c){
    return (c * 9/5) +32
}
function ftoc(fahreinheit){
    return (fahreinheit -32) * 5/9
}
console.log(`30 c to fahreinheit : ${ctof(30)}F`)
console.log(`30 f to celsius : ${ftoc(30)}C`)

