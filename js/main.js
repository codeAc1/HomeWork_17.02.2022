//variables & DATA TYPES

//var -let -const
// var firstName="Altan"
// var lastName='Ibrahimli'
// console.log(firstName)
//alert("hello"+" "+firstName)
// var x=10;
// x=30
// console.log(x)

// const a=20;

// console.log(a)

// var x =true;
// var x= null;
// var n=""
// console.log(x+n)
// console.log(n)

//DATA TYPES

//1. Primitive 
//number
// var age=20;
// var x="20";
//string
// var name ="Altan";
//undefined
// var u;
// u=33
// console.log(u)
//null
// var n=null;
//boolean
// var b=false;
// console.log(b)

//2.Non-primitive
//array
// var lang=['html','css','js','c#','sql'];
// console.log(lang)
//object
// var Person ={
//     name: 'Altan',
//     age: 26,
//     clcAge:function(){
//         return new Date().getFullYear()-this.age
//     }
// }
//console.log(Person.clcAge())

// function DarkMode(){
//     document.getElementById('body').style.backgroundColor="#000"
//     document.getElementById('body').style.color="#fff"

// }

// function LightMode(){
//     document.getElementById('body').style.backgroundColor="#fff"
//     document.getElementById('body').style.color="#000"
    
// }

// const pi = 3.14;
// let person = "Sexavet Eliyev";
// let answer = 'Beli Bu Menem!';

// document.getElementById("test").innerHTML =
// pi + "<br>" + person + "<br>" + answer;

//Data dype
//ex-1
// let Age = 26;                               // Number  
// let lastName = "Sexavet";                   // String
// let surName="Eliyev";                       // String
// let x = {firstName:"Serxan", lastName:"Aliyev",};
// document.getElementById("dt-1").innerHTML=lastName+" "+surName+" "+Age+"<br>"+x.firstName+" "+x.lastName;


var number=0
document.getElementById("count").innerHTML=number
function pilus(){
    number++
    if(number>0){
        document.getElementById('btn').style.backgroundColor="white"
        document.getElementById('btn').style.color="black"
        
        document.getElementById('first').style.backgroundColor="aquamarine"
    }
    
    
    document.getElementById('count').innerHTML=number
}
function minus(){
    if(number==0){
        return;
    }
    number--
    if(number<=5){
        document.getElementById('btn').style.backgroundColor="black"
        document.getElementById('btn').style.color="white"
        document.getElementById('first').style.backgroundColor="#fff"
    }
   
    document.getElementById('count').innerHTML=number
}

function Click(){
    var x = document.getElementById("inp").value;
     if(x.length!=0)
       {
           if(x.length<6){
               alert("6 dan kicik ola bilmez")
           }
           else{
            alert("xos geldun")
           }
       }
       else{
           alert("bos ola bilmez")
       }
      
      
    
}




