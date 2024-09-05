// objects
const car ={
    1:"one"
}
var {a,b}=car;
console.log();

// copy array by spread
const obj={name:"zainab"};
const newobj={...obj,age:22,salary:"3434"};
console.log(newobj);
// array mapping
let arr =[1,2,3,4,5];
let res=arr.map((a)=>
{
    return a*3;
}
)
console.log(res);
// filter
let filtered=arr.filter((a)=>{
    //where there is no one found
    return a!=1;
}
)
console.log(filtered);
// object
let objName={_name:"zainab",salary:232323};
console.log(objName.salary);
console.log(objName);
// destructing
let {_name,salary} =objName;
console.log(_name,salary);
// export
// old way to export 
module.exports=objName;
// ecma script exports creates error because it is used in native
export {_name,salary};
