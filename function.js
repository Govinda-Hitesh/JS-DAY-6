// function

//regular , array , expression functions

//arrow function 
const a = (para1,para2) => {
    console.log('hello');

}
a(arg1,arg2);

//function expression

const b = function(para1,para2){
    console.log('hello');

}
b(arg1,arg2);


function sayhi(){
    console.log('hello')
    let a = 3;
    let b = 4;
    let result = a+b;
    console.log(result)
}
sayhi();


function c(num1,num2){
    let result = num1 + num2;
    console.log(result);

}
c(4,5);


function mul(num1,num2){
    let result = num1 + num2;
    return result;
}
let finalresult =  mul(3,6);
console.log(finalresult);

// another way

console.log(mul(3,4));

/////////////-----------------------///////////////


//the lexical enviornment and scope chain


let i = 5;

function one(){
    console.log(i)
    two();

    function two(){
        console.log(i)

    }
}
one();
