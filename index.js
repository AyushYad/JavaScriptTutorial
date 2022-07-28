//1. Ways to print in JavaScript
//console.log("Hello World");
//alert("Die");
//document.write("this is document write")

//2. JavaScript console API
//console.log("Hello World", 4 + 6, "this is another log");
//console.warn("This is a Warning")
//console.error(" This is an error")
        //console.clear()
// 3. JAVASCRIPT Variables
// What are variables? - Containers to store dataa values.

// 4. Data types in JavaScript
//i)Numbers
var number1=34;
var number2=56;

//ii)string
var str1="this is a string";
var str2="This is also a string";
console.log(number1+str1);
//iii) Objects
var marks={
    Ravi:34,
    Ayush: 99,
    Harry: 78
}
console.log(marks);
//iv) boolean
var a=true;
var b=false;
console.log(a, b);
//v) undefined variable
var und=undefined;
var und1;//this is also undefined
console.log(und,und1);
// Null 
var n=null;
console.log(n);
/* At a very high level , there are two types of data types in JavaScript
1. Primitive data types: undefined, null ,number, string, boolean ,symbol
2. Reference data types:Arrays and objects
*/
//Array
var arr=[1,2,3,"Ayush",4,5];

//****Operators in JavaScript
//*Arthmetic Operators -> same as C++
//*Assignment Operators -> same as C++(=,+=,-=,/=,*=)
//*comparision operators -> same as C++(==,!=)
//*Logical Operators -> Same as C++(&&,||,!(logical not))

// ****Functions in JavaScript
// function avg(a,b){ //use function for making function
//     c=(a+b)/2;
//     return c;
// }
// c1=avg(5,7);
// console.log(c1);

// ***** Conditionls if-else ->Same as C++

// ***** Loops in JavaScript -> same as C++
// We also use forEach loop to iterate arr
// eg. 
// var arr= [1,2,3,4,5,5]
// arr.forEach(function(element)){
//     console.log(element);
// }
// let j=0; 
// console.log(arr.length);//length function to find length
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
//**** Let -> is used inplace of var to store variables(int,string etc) 
// Scope of Let finishes outside the functions.
const ac=0;
// a++; -> this will not work since const store constant variables.
//*#*# Check/search google-> Array methods in javaScript it will give you many useful functions.:)
// let myLovelyString ="Ayush Yadav"
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("Yadav"))
// console.log(myLovelyString.slice(1,4))
// console.log(myLovelyString.replace("Ayush","Rahul"))
let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// **** DOM Document object modulation
let elem = document.getElementById('click');
//console.log(elem);
let elemClass =document.getElementsByClassName('container');
//console.log(elemClass)
//elemClass[0].style.background='yellow';
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
//console.log(elem.innerHTML);
//console.log(elem.innerText);
//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText);
tn=document.getElementsByTagName('div')
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "this is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('p');
createdElement2.innerText = "this is a created bold";
tn[0].replaceChild(createdElement2,createdElement);
// removeChild(element); ----> removes an element

// Selecting using query
sel = document.querySelector('.container');//-> returns an element 
console.log(sel);
sel = document.querySelectorAll('.container');// -> returns all nodes 
console.log(sel);
// ******Events in JavaScript 
function clicked(){
    console.log('button was clicked');
}
window.onload = function(){
    console.log('The document was loaded');
}
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log(" Clicked on Container");
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container");
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out container");
// })
// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("Mouse up when clicked on container");
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked</b>"
//     console.log("Mouse down when clicked on container");
// })




// Arrow functions 
// function summ(a,b){
//     return a+b;
// }
// summ=(a,b)=>{  // this is instead of prev function
//     return a+b;
// }
//********setTimeout and setInterval
// logKaro=()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b> Set Interval fired</b>"
//     console.log("I am your log")
// }
// setTimeout(logKaro,2000); // Used for scheduling time for something
//setInterval(logKaro,2000); // runs repetedly 
//clr=setInterval(logKaro,5000);
// If wants to stop the setInterval we will use clearTimeout(clr)/clearInterval(clr).
//****** JavaScript Local Storage*/
// We can use local storage to store user data locally -> you can check google's local storage for example.
// We can put local sotrage by -> localStorage.setItem('name','Ayush')
// get it by localStorage-> which gives storage or by localStorage.getItem('name')-> which will give my name;
// JSON
//localstorage
//localstorage
// obj = {name: "harry", length: 1}
// jso= JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed= JSON.parse(`{"name":"harry","length": 1}`)
// console.log(parsed);
// ** Template literals - Backticks
a= 34;
console.log(`this is my ${a}`)

