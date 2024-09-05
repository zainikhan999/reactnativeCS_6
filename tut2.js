// arguments 
function add(num1,num2)
{
    console.log(arguments.length);
    if (arguments.length <2)
    {
        arguments[0]=90;
        console.log(`value of num1 updated to ${arguments[0]}`);
    }
    console.log(num1);

}
add(8);
// different types of functions
// anonymous
var a=function ()
{
    console.log("hi");
}
// arrow

var func = ()=>{
   console.log("hello")
}

func=()=> "i am not interested"

// for each
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
// use arrow function
numbers.forEach((number)=>
{
   console.log(number*2)
}

)

// arrow when you have one parameter
const fucA = name => 
{
    return name;
}
console.log(fucA("zainab"));

// nologic
var a=ab => ab+90
console.log(a(10))

// ternary operators
const check= 22 >17 ?"i am zainAB":"I am areeba";
console.log(check)


