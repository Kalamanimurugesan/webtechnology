/*** To print the javascript value in HTML***/
document.write("<h1>Hello world !!!</h1>");
//window.alert("hello world");
//alert("hi ashok");
console.log("basics of javascript");

/****************Javascript Variables**********************/
var a=10,b=5,c=7,d; // reserved keywords  - variables names- small cases, uppercase, captialize,_ (underscore), variable name + numbers
//alert(a); // while passing variables should not use double or single quotes
console.log(a);// while passing variables should not use double or single quotes

var a =30;
console.log(a);

var b="ashok";
console.log(typeof b);// shows the type of data

var c= true;
console.log(typeof c);

/****************** Arithmetic Operations ******/
var m1=100, m2=50, m3=70, m4;
m4 = m1+m2+m3;
console.log("Total Mark is :" + m4);

var avg = m4/3;
console.log("Avg is :" + avg);
 
var s1=100, s2 =50;
var diff = s1-s2;
console.log("Difference is :" + diff);

var s1=100, s2 =50;
var mul = s1*s2;
console.log("Multiplication is :" + mul);

var s1=100, s2 =13;
var mod = s1%s2;
console.log("Modulus is :" + mod);
/*************** Conditions**********/
var a=100;
if (a===100){
    alert("if loop is executing")
}
else{
    alert("else is executing");
}

/************ To change the HTML text in Javascript****/
document.getElementById("hello").innerHTML = "Hello Ashok, This is the basics of Javascript";

function change(){
    document.getElementById("hello").innerHTML = "this is after button click";
}
function changeimage(){
    document.getElementById("img_change").src = "1.jpg";
}

/*************************/
//1) 20 values in array
//2) 5 values
////// image
//3) 6 th values display -- image
// 6 to 10 
//image




