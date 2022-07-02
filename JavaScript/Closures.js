/* Closures - 
It is a Mechanism  to retain a value of a function scope variable
for a long time */

/* function increment(){
    var a = 0;
    a = a+1;
    console.log(a);
}

increment();
increment();
increment();
increment(); */

/* Here we can see the value of a is not changing because the scope of the 
a variable is local so they are getting intialized every time when 
we are calling the function. */


 
// Normal way of Declaring Closures

function increment(){
    var a = 0;
    var plus = function(){
        a = a+1;
        console.log(a)
    }
    return plus;
}

incr = increment();
incr();
incr();
incr();
incr();

/*
OUTPUT - 
1
2
3
4 */


/* Here we have declared Inner function inside the function so the memory 
will remain occupied in the stack till we comeout of the outer function
and by using return plus statement we are passing the reference of function
plus.
 */

/* 
By Using Self invoking Functions

var incr = function increment(){
    var a = 0;
    var plus = function(){
        a = a+1;
        console.log(a)
    }
    return plus;
}();

incr();
incr();
incr();
incr(); 

OUTPUT -
1
2
3
4
*/


