// types of scopes
var java="i am java"
{
    console.log(java)
    var java=123
    console.log(java)
}
console.log(java)

{
    let blockScope="i am block scope"
    console.log(blockScope)
    {
        let blockScope="hi"
        // let blockScope="i am block scope" can't be redeclared        
        console.log(blockScope)
    }
}



