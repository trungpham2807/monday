//#2: Area
var pi = 3.14;
var radius = 5;
var area = pi * radius;
console.log("The area of a circle given the radius " + radius +" (m2) is" + area + "m2")
var radius = 7;
console.log(`The area of a circle ${radius} is ${area} m2`);
//////////////////////////////
// // //#3
// //Part 1:
console.log(1 + 3 === 4);
console.log(1 + "3" === "13");
console.log(true && true && false === false);
console.log(10 + 24 === 34);
console.log("10" + "24" === "1024");
console.log("Hello" + "" + 2021 == "Hello" +"" + "2021");
console.log((1+2*3) === 7);
console.log((1+3) **2 === 16);
console.log( (1/0) === Infinity);
console.log((6%2) === 0);
console.log((5.5 % 2) === 1.5);
console.log(Number("123") === 123);
console.log(typeof(1+"") === 'string');
// // // Part 2:    
var q61 = (5=="5");
q61 === true;
var q62 = (5 === "5");
q62 === false;
var q63 = (8!= 8.0);
q63 === false;
var q64 = (8!==8.0);
q64 === false;
var q65 = ("true" === true);
q65 === false;
var q66 = (4 <= 4.0);
q66 === true;
var q67 = (7>=7);
q67 === true;
// // // Part 3: Logical expressions
console.log(true && true === true);
console.log(true && true === true);
console.log(true && false === false);
console.log(true || true === true);
console.log(false || true === true);
console.log(!true === false);
console.log(!false === true);
console.log((false && (true||true)) === false);
console.log(false && true || true === true);

////////////////////////////
// //#4: Conditional
//4.1
var x = -3;
if(x>0){
    console.log(`${x}  "is a positive number`);
}else if(x<0){
    console.log(`${x}  is a negative number`);
}else{
    console.log(`${x} + is zero`);
};
//4.2
var a4 = 4;
var b4 = 1;
var c4 = 33;
function sort(array){
    var size = array.length;

for(var i=0; i < size-1;i++){
    for(var j = 0; j < size - i - 1; j++){
        if(array[j]>array[j+1]){
            var temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}
}
var arr = [4, 1 , 33];
sort(arr);
console.log(arr);

// //#5: Loop
//5.1
var i;
var a5 = 1;
var b5 = 6;
for(i = 0; i< b5; i++){
    if(0<a5<b5<10){
        a5 = a5 + 1;
        console.log(`${a5}`);
}
}

//5.2
var x5 = 1 , y5 = 3123;
var sum5a = 0;
for(i=1; i<=y5; i++){
    sum5a = sum5a + i;
}
console.log("Sum all from start to end is " + sum5a);
//5.3
var z5 = 12345678;
var sum5b = 0;
while(z5){
    sum5b = sum5b + z5 % 10;
    z5 = Math.floor(z5/10);
}
console.log("Sum of digits is " + sum5b);

// // #6. Function
function MyFunction1(){
    console.log("Wow, it worked");
}
function MyFunction2(){
    console.log("Peaky Blinder")
}
function MyFunction3(YourName){
    return YourName;
}
function conditional(){
    console.log()

}
function seriesOfNumber(a,b){
}

MyFunction1();
MyFunction2();
console.log(MyFunction3('Trung'));
conditional();
seriesOfNumber();

// #Problem 7: ROCKET
var year, start, end;
function checkLeapYears(year){
        if((year%4 == 0) && (year%100 !=0) || (year % 400 == 0)){
            return 1;
    }else{
        return 0;
    }
}    
function getLeapYears(start, end){
    for(i = start; i<=end; i++){
        if(checkLeapYears(i)){
            console.log(i);
        }
    }
}

getLeapYears(100,1000);

//////////////////////////////////////////////////////////////
// #7 Swapping values
var as = 111;
var bs = 999;
var temp;
temp = as;
as = bs;
bs = temp;
console.log(`swap ${as} and ${bs}`);
// #7.Rocket
var a7 = 111;
var b7 = 999;
a7 = a7 + b7;
b7 = a7 - b7;
a7 = a7 - b7;
console.log(`swap ${a7} and ${b7}`);
///////////////////////////////////////////////
// #8 Random Number
console.log(Math.random(2));
console.log(Math.ceil(1.93));
console.log(Math.floor(Math.random()*3));

//#9 Magic-8-ball
function play(){
    const randomNumber = Math.floor((Math.random()*2));
    if(randomNumber === 0){
        console.log(`${randomNumber}`);
        console.log("Yes");
}else{
    console.log(`${randomNumber}`);
    console.log("No");
}
};
play();
