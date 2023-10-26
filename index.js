//   ========================================================================    starts to js    ====================================================>

// trim

// if else

// prompt

// ternary operator

// slice , substring , substr

// replaceAll

// toUpperCase

// function

// function expressions

// return keywords

// Anonymous function

// Arrow function

// function |> call ,apply and bind  <| function ----------|
//                                                         |
// bind   ----                                             |
//                                                         |
// call   ----                                             |
//                                                         |
// apply  ----                                             |
//                                                         |
// --------------------------------------------------------|

// switch statement

// while loop statement

// do-while loop statement

// for loop

// for loop  +  Array

// for in loop

// for of loop

// forEach

// forEach +  fat Arrow

// replace

// indexOf

// lestindexOf

// includes

// index search

// fate arrow function + find

// findIndex

// map

// filter

// reduce  

// sort

// push

// pop

// unshift

// shift

// concat

// flat

///======math

// PI

// round

// pow

// sqrt

// abs

// ceil

// floor

// min

// max

// random

// trunc

// Array.isArray

// spread operator

// splice

// some

// every

// calclator

// Date And Time

// Dome


// ====================================================================      trim      ======================================================>



// let us = "     shan     ";
// console.log(us.length);
// console.log(us.trimStart().length);
// let us2 = "umar";
// const full = us.concat(" ali ", us2)
//  console.log(full.length);
//  const num = us.trim();
//  console.log(num.length);



// ====================================================================     if else     =====================================================>

// var tomr = "rain";
// if (tomr == "rain") {
//     console.log('take a raincoat');
// }
// else {
//     console.log('no need to take a raincoat');
// }
//  var y = 2020;
//  if (y % 4 === 0) {
//     if (y % 100 === 0) {
//         if (y % 400 === 0) {
//             console.log("the y " + y + " is a leap y");
//         }else{
//             console.log("the y " + y + " is not a leap y");
//         }
//     }else{
//         console.log("the y " + y + " is a leap y");
//     }
//  }else{
//     console.log("the y " + y + " is not a leap y");
//  }
// ========================================================================     prompt     ===================================================>



// let x = prompt("fhjfryrytro dukmbfrhv  gff   io  0uyukjkg vrptb7t78t  y vr  r ty fryt");                                                                ==
// if (x.startsWith("shan")) {
//     document.write("dshfgfuewy ih 8yu iuu yhoi h98h98h 98h ");
// }
// else{
//     alert(jfdoiugids);
// }

// ====================================================         ternary operator       =====================================


// var age = 77; console.log((age >= 18)? "you can vote": "you can't vote");



//-----------------------------------------============    slice , substring , substr     ===============---------------------------------->



//  ----------------------------======   slice    =====---------------------------->

// let e = "I am a humen";
// let w = e.slice(3, 9);
// console.log(w);



// <-----  slice  -----> //


// let e = "I am a humen";
// let w = e.slice(-9, -3);
// console.log(w);

// -------------------------=========   substr  =========--------------------------->

// let x = "I am a humen";
// let y = x.substr(3 , 7);
// console.log(y);


// -----------------------==========     substring    =========--------------------->

// let x = "I am a humen"
// let a = x.substring(7 , 12);
// console.log(a);


// -------------------------------------------------------      REPLACE     ----------------------------------------------------------------->

// let x = "shan ALI umar shan ALI umar shan ALI umar shan ALI umar shan ALI umar shan ALI umar shan ALI umar shan ALI umar "

// console.log(x.replaceAll("shan" , "sum"));


// -----------------------------------------------------       toUpperCase     ------------------------------------------------->

// let x = "hjfoiuwy ihfoiywes fhilkjgslijlvjn fj ijs oefjijf poia upoias ";
// console.log(x.toUpperCase());


// ------------------------------------------------------       function       ------------------------------------------------->


// function sum(a,b) {
//     var umn = a+b;
//     console.log(umn);
// }
// sum();
// sum(233,23434);
// sum(233,3124);


// -----------------------------==================     function expressions       ==================------------------------------------------>


// function sum(a,b) {
//         var umn = a+b;
//         console.log(umn);
//     }
//     var num = sum(12,123);


// ------------------------------===================       return keywords        ===============-------------------------------------------->


// function sum(a,b) {
//     return  a+b;
//     }
//     var num = sum(12,123);
//       console.log("shan ali umar ka roll number "  +  num);


// ------------------------------===================       Anonymous function      ================----------------------------------------->


// var suu = function(a,b) {
//     return a+b;
//     }
//     var num = suu(23,3432);
//     var num1 = suu(23,32);
//     console.log("shan ali umar ka roll number " + num , num1);


// -------------------------------====================      Arrow function       ==================---------------------------------------->



// const sum = () => `the Arrow functionis anser of ${(a = 2)+(b =3)}`;
// console.log(sum());


//                                              -----------------------------------------------
// -------------------------------============   function |> call ,apply and bind  <| function  ==================---------------------------------------->


const shagggggi ={
    name:"shan umar",
    className:"10th",
}

function info(ratting, quality) {
    console.log(`My  name is ${this.name} . ratting = ${ratting} and quality = ${quality}`);
}


 const fun = info.bind(shagggggi,32)
fun()

// info.call(shagggggi, 5, "best")
// info.apply(shagggggi,[ 5, "best"])
// let arr = [ 5, "best"]
// info.apply(shagggggi,arr)



// -----------------------------------------------------        switch statement       ----------------------------------------------------->



// var area = "circle";
// var PI = 3.142, l = 5 , b = 4 , r = 3;

// if (area == "circle") {
//     console.log("the area of the circle is : " +  PI*r**2);
// }else if (area == "trinagle") {
//     console.log("the area of the trinagle is : " +  (l*b)/2);
// } else if (area == "rectangle") {
//     console.log("the area of the rectangle is : " +  (l*b));
// } else{
//     console.log("please enter valid data");
// }


// =============================================            switch statement             =========================================================


// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;

// switch (area) {

//     case "circle":
//         console.log("the area of the circle is : " + PI * r ** 2);
//         break;

//     case "trinagle":
//         console.log("the area of the trinagle is : " +  (l*b)/2);
//         break;

//         case "rectangle":
//             console.log("the area of the rectangle is : " +  (l*b));
//             break;

//     default:console.log("please enter valid data");
//         break;
// }


// --------------------------------------------===========     while loop statement      =========--------------------------------------


//  var num = 1;
//  while (num <= 10) {
//     console.log(num);
//     num++
//  }


// -------------------------------------=================      do-while loop statement     ==================------------------------->


//  var num = 1;
//   do{
//     console.log(num);
//     num++;
//  }while (num <= 10);


// --------------------------------------------===============       for loop       ===========--------------------------------------------->

// for (var num = 1; num >= 10; num++) {
//     var mmm = prompt('Enter your table');
//     document.write(mmm + " * " + num + " = " + num*mmm);
// }


// ------------------------------------------===============  for loop  +  Array  ==============-------------------------------------------->


// const ew = ['shan ','ali ' , 'umar ' , 'num' , 'amir'];
// for (var t = 0;  t<ew.length; t++) {
//     console.log(ew[t]);
// }


// --------------------------------------------===============       for in loop       ===========--------------------------------------------->


// const ew = ['shan ','ali ' , 'umar ' , 'num' , 'amir'];

// for (let element in ew) {
//     console.log(element)
// }


// --------------------------------------------===============       for of loop       ===========----------------------------------------->


// const ew = ['shan ','ali ' , 'umar ' , 'num' , 'amir'];

// for (let element of ew) {
//     console.log(element)
// }


// --------------------------------------------===============       forEach       ===========----------------------------------------->


// const ew = ['shan ','ali ' , 'umar ' , 'num' , 'amir'];
// ew.forEach((element , index , Array) =>  console.log(element , index));



// --------------------------------------------===============       forEach + fat Arrow       ===========----------------------------------------->


// const ew = ['shan ','ali ' , 'umar ' , 'num' , 'amir'];
// ew.forEach( (element , index , Array) => console.log(element , index));


// ========================================================     replace      ==============================================================>


// let x = "shan ali umar  amir shan";
// let y = x.replace("shan","weeee").replace( "amir","weertyui");
// console.log(y);


// ------------------------------------------==================   indexOf    ==============----------------------------------------->


// let x = "i am a student.i am a boy";

// let y = x.indexOf("am");
// console.log(y);


// ---------------------------------


// let x = "i am a student.i am a boy";

// let y = x.indexOf("am" ,4);
// console.log(y);


//------------------------------------------==================    lestindexOf    ==============----------------------------------------->


// let x = "i am a student.i am a boy";
// let y = x.lastIndexOf("am");
// console.log(y);


// ---------------------------------


// let x = "i am a student.i am a boy";

// let y = x.lastIndexOf("am" ,4);
// console.log(y);



//------------------------------------------==================    includes   ==============----------------------------------------->

// var sum = ['shan ' , 'ali', ' umar'];

// console.log(sum.includes('ali'));



//------------------------------------------==================    index search    ==============----------------------------------------->


// let x = "i am a student.i am a boy";

// let y = x.search("am");
// console.log(y);


//------------------------------------------=============  fate arrow function + find  ============--------------------------------------->


// var sum = [200,300,400,500,600,700];

// console.log(sum.find((Element) => Element<500));


//------------------------------------------===================      findIndex     ===================--------------------------------------->


// var sum = [200,300,400,500,600,700];

// const num = sum.findIndex((Element) => Element>400);
// console.log(num);

// <----------------------------------=============>    <===========---------------------------------------->

// var sum = [200,300,400,500,600,700];

// console.log(sum.findIndex((Element) => Element>400));



// <-----------------------------------------------=============>     map     <===========------------------------------------------------->


// let array = [1,2,3,4,5,6,7,8,9];
// let newArray = array.map((test) => test * 3);
// console.log(newArray);


//------------------------------------------==================        filter       ===================--------------------------------------->



// var sum = [200,300,400,500,600,700];
// console.log(sum.filter((Element) => Element<500));


//------------------------------------------==================        reduce       ===================--------------------------------------->


// let array = [1,2,3,4,5,6,7,8,9];
// let newArray = array.reduce((sum,num)=> sum+num)
// console.log(newArray);


// --------------


// let num = [1,2,3];
// console.log(num.reduce((acc,val)=>acc+val,12));


// --------------------   reduce  +   object  -------------


// let array = [
//     {
//         name : "Apple ",
//         cost : 200
//     },{
//         name : "cake ",
//         cost : 350
//     },{
//         name : "mongo ",
//         cost : 300
//     }
// ]

// let newArray = array.map((val)=>{
//     console.log(`My All Products ${val.name } And The price is ${val.cost}`);
// });
// console.log(array.reduce((cacc, value)=> cacc + value.cost ,0));



// -----------------------------------

    // let arr = [5,6,2];
    // let sum = arr.reduce((acc,curElem) =>{
    //     return acc *= curElem;
    // })
    // console.log(sum);


//------------------------------------------==================          sort       ==============----------------------------------------->


// var sum = ['Shan','Ali','Umar','Amir'];
// console.log(sum.sort());


// <========-------=====    number  ====--------=========>


// const sum = [200,300,400,500,50,100,230,9000];

// console.log(sum.sort());

// <---======================------>

// const arr = [1,9,3,2,6,45,];

// arr.sort((a,b) => {
//     return a-b;
// })
// document.write('the number is ecending oder is '+ arr)
//------------------------------------------==================          push       ==============----------------------------------------->


// var sum = ['Shan', 'Ali', 'Umar', 'Amir'];

// sum.push('amir');
// console.log(sum);



//------------------------------------------==================          pop       ==============----------------------------------------->


// var sum = ['Shan', 'Ali', 'Umar', 'Amir'];

// sum.pop();
// console.log(sum);


//------------------------------------------==================      unshift       ==============----------------------------------------->


// var sum = ['Shan', 'Ali', 'Umar', 'Amir'];

// sum.unshift('amir');
// console.log(sum);


//------------------------------------------==================      shift       ==============----------------------------------------->


// var sum = ['Shan', 'Ali', 'Umar', 'Amir'];

// sum.shift();
// console.log(sum);


//------------------------------------------==================      concat       ==============----------------------------------------->


// const num = ['shan','ali', 'umar'];
// const sum = ['amir','munir' ,'ali' ];

// const nus = num.concat(sum);
// console.log(nus);  

// <-----------------------------------------==============          flat          ===============-------------------------------------->

// let num = [1,2,34,[34,45,456,[3748,85785]]];

// let sum = num.flat(Infinity);
// console.log(sum);


// <-----------------------------------------==============          Math          ===============-------------------------------------->
//     <-------------------------------------==============           PI           ===============------------------------------>

// console.log(Math.PI);

    
// <-----------------------------------------==============          round         ===============------------------------------->


// let num = 10.5565
// console.log(Math.round(num));


// <-----------------------------------------==============          pow          ===============-------------------------------------->


// console.log(Math.pow(2,3));


// <-----------------------------------------==============          sqrt          ===============-------------------------------------->


// console.log(Math.sqrt(36));
// ----------
// console.log(Math.sqrt(81));


// <-----------------------------------------==============          ceil          ===============-------------------------------------->


// console.log(Math.ceil(4.51));
// // ----------
// console.log(Math.ceil(99.01));


// <-----------------------------------------==============          floor          ===============-------------------------------------->


// console.log(Math.floor(4.51));
// // ---------- 
// console.log(Math.floor(99.01));


// <-----------------------------------------==============          min          ===============-------------------------------------->


// console.log(Math.min(100,50,10,0,-200));


// <-----------------------------------------==============          max          ===============-------------------------------------->


// console.log(Math.max(100,50,10,0,-200));


// <-----------------------------------------==============          random          ===============-------------------------------------->


// console.log(Math.random()*10);

// console.log(Math.trunc(Math.random()*10));



// <-----------------------------------==============          trunc          ===============---------------------------------->


// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));




// <-----------------------------------==============          abs          ===============---------------------------------->


// console.log(Math.abs(-99.1));




// <-----------------------------------------==============      Array.isArray        ===============-------------------------------------->


// let num = 'shan  ali umar 17 number of good';

// let sum = Array.isArray(num);

// console.log(sum);

//                                                          The is a cancat opener
// <---------------------------------=================   ...   sptread opertor    ...    ==================------------------------------>


// let num = [1,2,3,4,5,6,78,90];
// let sum = [12,23,34,234,45,65,67,76,8];
// console.log(...num, ...sum);


// <-----------------------------------------=================      splice        ==================-------------------------------------->


// const months = ['june', 'july', 'march', 'jan'];
// months.splice(months.length-2, 1,"Dec");
// console.log(months);



// <-----------------------------------------=================      some        ==================-------------------------------------->


// let num = [12,23,34,45,65,67,78,980]

// let sum = num.some(func)
// console.log(sum);
// function func (nums) {
//      return nums <= 18;
//     }


// <-----------------------------------------=================      every        ==================-------------------------------------->


// let num = [ 12,23,34,45,65,67,78,980]

// let sum = num.every(func)
// console.log(sum);
// function func (nums) {
//      return nums >= 18;
//     }

// <-----------------------------------------=================      Object        ==================-------------------------------------->


// let User = {
//     Username : "shan ali umar",
//     Age : 17
// }
// User.UserObject = function (){
//     console.log(`Hello ${this.Username} your age is ${this.Age}`);
// }
// console.log(User.UserObject());



// -------------------------------------------=================  calclator  ==============------------------------------------------------>


// let x = parseInt(prompt("Enter Youe 1st number")), y = parseInt(prompt("Enter Youe 2nd number")), z = prompt("Chose operater" + " ,  + " + " ,  - " + " ,  / " + " , * " + " , > " + " ,  < ");


// switch (z) {
//     case "+":
//         document.write(x + y);
//         break;
//     case "-":
//         document.write(x - y);
//         break;
//     case "*":
//         document.write(x * y);
//         break;
//     case "/":
//         document.write(x / y);
//         break;
//     case ">":
//         document.write(x > y);
//         break;
//     case "<":
//         document.write(x < y);
//         break;
//     default:
//         document.write(fail);
//         break;
// }


//<==================================================================     Date And Time     ==========================================================>


// const sum = new Date();
// console.log(sum);

// ----------------------


// console.log(new Date().toLocaleString());


// ----------------------


// console.log(new Date().toString());


// ----------------------


// console.log(Date.now());
 
//          <-----------------------------------------   Dome ===========/////\\\\------>














// const shagggggi ={
//     name:"shan umar",
//     className:"10th",
// }

// function info(ratting, quality) {
//     console.log(`My  name is ${this.name} . ratting = ${ratting} and quality = ${quality}`);
// }


//  const fun = info.bind(shagggggi)
// fun()

// info.call(shagggggi, 5, "best")
// info.apply(shagggggi,[ 5, "best"])
// let arr = [ 5, "best"]
// info.apply(shagggggi,arr)



