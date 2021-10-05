// Question 2
function ziffZubb(start, end){
  for(let i=start; i < end; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log("ZiffZubb");
    }else if(i % 3 === 0 && i % 5 != 0){
        console.log("Ziff");
    }else if(i %5 === 0 && i %3 != 0){
        console.log("Zubb");
    }else{
        console.log(i);
    }
  }
};
ziffZubb(1,20);

///////////////////////////////////////

// Question 3
function gcd(a,b){
    if(a == 0 || b == 0){
        console.log(a+b);
    }
    while(a != b){
        if(a>b){
            a = a - b;
        }else{
            b = b - a;
        }
        console.log(a);
    }
};
gcd(1,8);

//#4 Least Common Multiple
function lcm(n1,n2){
    let large = Math.max(n1, n2);
    let small = Math.min(n1, n2);
    let i = large;
    while(i % small !== 0){
      i += large;
    }
    return i;
  }
lcm(5,3);
lcm(6,7);

//#5 Prime Number
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  isPrime(5);
  isPrime(8);
  
//#6 Capture time
function CaptureTime(){
    console.log(Date.now());
    const timeNow = new Date('October 6, 12 04:22');

    console.log(timeNow.getHours());
    console.log(timeNow.getMinutes());
    console.log(timeNow.getMonth());
    let yourAgeInMilliseconds = Date.now() - new Date("1997-07-28");
    console.log(yourAgeInMilliseconds);    
}

//#7: Advanced Random Number
for(var i=1; i<=5; i++){
    console.log(Math.random()*1);
}
function getRandomInt(start, end){
    for(var i=1; i<=100; i++){
        console.log(Math.floor(Math.random()*10));
    }

}
console.log(getRandomInt(5,8));
//#8: Nested for loop
//8.1
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += i;
  }
  string += "\n";
}
console.log(string);

//8.2
var size = 8;
var result = "";
for(var i = 0; i < size; i++) {
  for(var j = 0; j < size; j++) {
    if(i !== 0 && j ===0){
      result += "\n";
    }
    else if((j % 2 === 0 && i % 2 === 0) ||
    		(j % 2 === 1 && i % 2 === 1)){
      result += " ";
    }
    else if((j % 2 === 0 && i % 2 === 1) || 
            (j % 2 === 1 && i % 2 === 0)){
      result += "#"; 
    }
  }
}

console.log(result);
//#9
// Print out each day
var workingHours = [6,6,7,7,8,8,6,7,8,7];
function rateHours(rate){
    for(var i = 0; i < workingHours.length; i++){
        console.log("Peter earn $ " + workingHours[i] * rate + " each day");
    }
}
rateHours(25);

//caculate Peter 2 weeks
let sumTwo = 0;
function sumTwoWeeks(rate){
    for(var i = 0; i < workingHours.length; i++){
        sumTwo = sumTwo + workingHours[i] * rate;
    }
    console.log(sumTwo);
}
sumTwoWeeks(25);
// year earn
var sumYears;
function sumYear(twoWeeks){
    for(var i=1; i<=twoWeeks;i++){
            console.log(workingHours);
            sumYears = sumYears + sumTwo;
        }
        console.log(sumYears);
    }
//year
var summ = sumYear(25);
console.log(summ);

//#10
const one = 1;
if(one){
    console.log("Is truthy");
}
const zero = 0;
if(zero){
    console.log("Is truthy");
}else{
    console.log("Isn't truth");
}
const In = Infinity;
if(In){
    console.log("Is truthy")
}else{
    console.log("Isn't truth")
};
const nu = undefined;
if(nu){
    console.log("isnt Falsy")
}else{
    console.log("falsy")
};
