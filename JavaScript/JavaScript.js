/* 
 
 What is JavsScript ?
-> JavaScript is a programming language used both on the client-side and server-side
   that allows you to make our web pages interactive.

  What is Call Function in JavaScript?
-> Call function is a JavaScript predefined method using which we can call methods of another
   objects by passing another object as an argument in call function.
   The call() method takes arguments separately.

  What is Apply Function in JavaScript?
-> Apply function is similar like Call function but only difference it has is it take
   arguments as an array whereas Call function take arguments seprately.

  What is Bind Function in JavaScript?
-> Bind method is a function using which we can borrow a method from another object.

What do you mean by Synchronous?
->Synchronous means to be in a sequence, i.e. every statement of the code gets executed one
  by one. So, basically a statement has to wait for the earlier statement to get executed.
  
  What do you mean by ASynchronus?  
->Asynchronous means Executions running in parrallel .eg Statements running parallely  

  What do you mean by Async Await?
->The Purpose of async / await is to simplify the syntax necessary to consume promise-based
  APIs. The behavior of async / await is similar to combining generators and promises. Async
  functions always return a promise.

  What do you mean by Objects ?
->A JavaScript object is an entity having state and behavior (properties and method)
  Datas in the object are stored in the key value pairs.
  
  What do you mean by Eventloop in JavaScript ?
->A programming structure that continually checks for external events and calls the 
  appropriate function to handle them.
  An event loop is often the main loop in a program that typically waits for the user to 
  trigger something.

  What do you mean by Prototypes in JavaScript?
->Prototypes are the mechanism by which javaScript objects inherit features from one another.
  The prototype property allows us to add properties and methods to any object (Number, 
  Boolean, String and Date, etc).


  JavaScipt Objects can be Created by Following ways --
   Case 1. Using Object Constructor -- 
 
  <Script> //Script tag in the body tag
     var e1 = new Object();
     e1.name = "Sujit";
     e1.age =  23;
     e1.salary = 4000;
     e1.designation = "Junior Software Engineer";
     e1.salary += 5000;
     display(e1);
  </Script>


Case 2. Using Functional Constructor --

   <Script>//Script tag in the head Section

      function Emp(name,age,sal,desig)
     {
         this.name = name;
         this.age =  age;
         this.salary = sal;
         this.designation = desig
     }
     var e1 = new Emp("Suman",33,4500,"Progammer");
     console.log(e1.name);

  </Script>

Case 3. Using JSON --

   <Script>//Script tag in the body Section
     var e1 = {"name":"Sujit","age":25,"salary":2500,"designation":"Junior Software Engineer"};
     var e1 = {"name":"Anjali","age":22,"salary":2000,"designation":"Application Development Associate"};

     e1 = e2 ;{Here we are asigning the ref of object e2 to object e1}
     e2.name = "Manoj";
     display(e1);
     display(e2);
   </Script>

--------------------------------------------------------------------------------------------
Prototypes Examples-- 

<Script>
function Emp(name,age,sal,designation)
{
this.name = name;
this.age =  age;
this.salary = sal;
this.designation = designation;
}

var e1 = new Emp("Suman",33,4500,"Progammer");
var e2 = new Emp("Sujit",25,2500,"Manager");
Emp.prototype.company = "EPAM";

console.log(e1);
console.log(e2);

</Script>

--------------------------------------------------------------------------------------------
 Scopes -
Accessibility - Global,local;
Methodology - Lexical,Dynamic

Lexical -
Lexical Scope allows inner functions to access the scope of their outer functions
const and let blocked scoped variables.

function a() {
    var x = 12;
    var y = 24 
    b()
    function b() {
        console.log(x);
        console.log(y);
        var z = 30;
        console.log(z);
        c();
        function c() {
            console.log(z);
        }
    }
}

a();


Dynamic - 
Dynamic scoping means that if a variable is defined in a function, it is also visible inside the
functions called from that function (and functions called from those functions and so on).

function a() {
    console.log(x);
}
function b() {
    var x = 10;
    a();
}
b();
{ Here the value of x is accessible in function a when we call function a from function
       b }


--------------------------------------------------------------------------------------------
JavaScript Array - It is a collection of ELements of Different types.
There are Following ways through which we can create Arrays --
Case 1. Creating Empty Array

var arr = [];
arr[0] = "Rajesh";
arr[1] = 32;
arr[2] = true;
arr[3] = 32.234
cosole.log(arr);

Case 2. By Using Array Constructor
var arr2 = new Array("Suman",32,2500,"SOftware Engineer");
cosole.log(arr2);

Case 3. By Directly Intializing
var arr3 = ["Hi",23,2500];
console.log(arr3);`

Case 4. Creating Empty Array and Pushing Elements into it
var arr4 = [];
arr4.push(33);
arr4.push("Suraj");
arr4.push(32223);
cosole.log(arr4);

------------------------------------------------------------------------------------------
Differnt Array Methods --

1. pop() -- this method pops last element from the array and returns poped element from 
            the array.

2. shift() --  this method pops first element from the array  and shifts all the elments to 
               lower index and returns poped element from the array.

3. push() -- this method appends element at the end of the array.It retuns the length of 
             the new Array.

4. unshift() -- this method appends element at the begining of the array.It returns the new 
                Array Length.
                e.g - 
                     const fruits = ["Banana","Mango","Orange"];
                     fruits.unshift("Guava","Apple")
                     [ 'Guava', 'Apple', 'Banana', 'Mango', 'Orange' ]
                     we can unshift more than one element at a time.

5. del arr[index] -- this method clear particular index element but memory exits there
                     fruits = ["Apple",Empty item,"Mango];
                     fruits[1] = "Orange"

6. splice() --  this method does both insertion and removal operation.
                It Returns the updated Array.

               At position 2, add 2 elements:
               const fruits = ["Banana", "Orange", "Apple", "Mango"];
               fruits.splice(2, 0, "Lemon", "Kiwi"); 
               [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
  
               At position 2, remove 2 items:
               const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
               fruits.splice(2, 2); 
               [ 'Banana', 'Orange', 'Kiwi' ]

7. slice() -- this method slice out elements from the given array but does not affect
              Original array(Here we provide starting and ending Position not including current last index).
              e.g - arr4 = ["Mango","Apple","Potato","Tomato","Chilli"];
                    const arr5  = arr4.slice(3);
                    console.log(arr5)
                    OUTPUT - ["Tomato","Chilli"]

8. concat() -- this method concates two arrays but this method does not affect original
               arrays ,it will return concatenated array as a output
               e.g arr1.concat(arr2)

               It can be done in other way also  
               arr3 = [...arr1,...arr2]; the result will be concatenated array

9. sort() --  this method will sort the array.

10.reverse() -- this method Sorts the array Elements in the Descending Order.



------------------------------------------------------------------------------------------
Array Destructuring--
Destructuring is an efficient way to extract multiple values from data that is stored in 
arrays or objects. 
e.g -
var arr = ["Hello", "World"]  
  
// Destructuring Assignment  
var [first, second] = arr;   
console.log(first); // Hello  
console.log(second); // World  


var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
//Destructuring Assignment  
var[color1, color2, color3] = colors;  
console.log(color1); // Violet  
console.log(color2); // Indigo  
console.log(color3); // Blue 


var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// Destructuring Assignment  
var [a,b,...args] = colors;  
console.log(a);      // Violet
console.log(b);      //Indigo 
console.log(args);   //["Blue", "Green", "Yellow", "Orange", "Red"]

-------------------------------------------------------------------------------------------
Spread and Rest

Spread --
It takes in an iterable (e.g an array) and expands it into individual elements.

function display(name,age,salary,designation)
{
console.log(name);
console.log(age);
console.log(salary);
console.log(designation);
}
e1 = ["Kajal",23,2400,"Support Analyst"];
display(...e1);
Here it is called spread because value will spread into different parameter

Rest --
The rest parameter allows a function to accept an indefinite number of arguments as an array.

function add(...a){
var res = 0;
for(let i=0;i<a.length;i++)
{
res += a[i];
}
console.log(res);
}

add(10,20);
add(10,20,30);
Here value will concat and form array which will be passed as an arugument.
and Variable length parameter must be specified at the End.

   What do you mean by Babel?
-> Babel is a javascript Compiler
   Babel is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of
   JavaScript in  browsers environments.

   What do you mean by Webpack?
-> Webpack is a Static Module Bundler for modern JavaScript applications.

   What do you mean by Use Strict ?
-> "use strict" Defines that JavaScript code should be executed in "strict mode".
   Strict mode makes it easier to write "secure" JavaScript Code.
   Strict mode changes previously accepted "bad syntax" into real errors.

   What do you mean by async and defer Attribute in Script Tag ?
-> When load a Webpage Two major things are Happening there 
   1. HTML Parsing 
   2. Loading of the Scripts
   
   Here Loading of the Scripts is also consisting of two Parts -
   1. Loading of the Scripts from the Server
   2. Execution of the Scripts Line by Line

   async - With async The Script file gets downloaded asynchronously and then executed as
   soon as it's downloaded.
   The async attribute is a boolean attribute
   
   defer -  With defer , The Script file gets downloaded asynchronously, but executed only 
   when the document parsing is completed. With defer , scripts will execute in the same 
   order as they are called.
   The defer attribute is a boolean attribute

*/  








