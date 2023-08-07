
/*  let names= ['khokon', 'rokon', 'karim', 'rahim', 'jadhu', 'modhu'];

let element = names.length;
console.log(element);

 let fourElement = names[3];
  */
// names[fourElement] = 'rahima';

//  console.log(names);

// object er moddhe for loop use kore ukto object er property ,value ber korar programme_Starrt------------


/* var myShopping ={
  books: 5,
  shoo: 4,
  pent : 3,
  mouse: 10,
  computer: 5,
  keyboard: 10
};

const keys = Object.keys(myShopping);
console.log(keys);

const valu =Object.values(myShopping);
console.log(valu); */


/* for(var i = 0; i<keys.length; i++){
  const propertyName = keys[i];
  const propertyValue =myShopping[propertyName];
  console.log(propertyName,propertyValue);
} */

/* for(propertyName in myShopping){
  const propertyValue =myShopping[propertyName];
  console.log(propertyName, propertyValue);
} */

// object er moddhe for loop use kore ukto object er property ,value ber korar programme_End===================


// switch example_start----------------------------------
/* var color ='black';

switch(color){
  case 'red':
    console.log('You are government color');
    break;

    case 'white':
      console.log('you are my favourite color');
      break;

      case 'black':
        console.log('You are my best color');
        break;

        default:
          console.log('You are bad color');
}
 */

// switch example_End=======================================



// Practice Task_Start---------------------------------------

/* function avarage(assinment1,assinment2,assinment3){

    var totalMarks = assinment1+assinment2+assinment3;
    var avarageMark= totalMarks/3;
    return avarageMark;
}


var returnMarks= avarage(60,59,60);

console.log(returnMarks); 
 */


/* function foo() {
    console.log("foo");

   bar();
  }

function bar(){
    console.log("bar")
}

foo(); */



/* 

function calculateAverage(array) {
  
 sum = 0;
 for (var i = 0; i < array.length; i++) {
  sum += array[i];
  var average = sum / array.length;
}

return average;

}
    
  const numbers = [12, 34, 56];
  const result = calculateAverage(numbers);
  console.log(result); */

/* 

function leafYear(year){

var remainder = year%4;
  if(remainder%4==0){
return true;
   }
   else{
    return false;
   }


}

const numbers = leafYear(prompt('enter your year'));
console.log(numbers); */
  
/*   // program to check leap year
function checkLeapYear(year) {

  //three conditions to find out the leap year
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      console.log(year + ' is a leap year');
  } else {
      console.log(year + ' is not a leap year');
  }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);
 */


/* function getSumArray(numbers){
  for(var i = 0; i<numbers.length; i++){
    var index = i;
    console.log(index);
  }
}

var number =[12,34,456,67,878,67];
getSumArray(number) */

// function getSumArray(numbers){
// let sum = 0;
//   for(let i = 0; i < numbers.length; i++){
//     let index = i;
//     let element = numbers[index]
//     sum = sum+element
//    /* console.log(index,element,sum); */
//   }
//   return sum;
// }


// function getOddSumArray(numbers){
//  let oddNumber=[];
//   for(let i = 0; i<numbers.length; i++){
//     let element = numbers[i];
//     if(element%2 != 0){
//       console.log(element)
//       oddNumber.push(element);
//     }
//   }
// return oddNumber;
// }


// let number = [12,234,45,456,567,67,68];
//  let oddNumber =getOddSumArray(number);
//  console.log(oddNumber);

// let oddNumbers =getSumArray(oddNumber);
// console.log(oddNumbers);

/*  function sumOfNumber(number){
  let sum = 0;
for(let i =1; i<=number; i++){
  sum = sum+ i;
  console.log(i, sum); 
}
return sum;

} 

sumOfNumber(7);  */


// Not a Module 19 blew programme-----------------------------


/*  function factorial(number){
  let sum = 1;
for(let i =1; i<=number; i++){
  sum = sum * i;
}
return sum;

} 

var result= factorial(7);
console.log(result);
 */

/* function factorial(number){
  var result = 1;
  for(var i =number; i>=1; i--){
   var result = result * i;
  
  }
  return result;
}

var fact =factorial(7);
console.log(fact); */



/* function factorial(number){
  var num =1;
  var result =1;
  while(num<=7){
   var result = result * num;
   num++
  
  
  }
  return result;
}

var fact =factorial(7);
console.log(fact);
 */

/* 
 function getFactorial(number){
  let result = 1;
  for(let i = 1; i<=7; i++){
    result = result + i;
  }

  return result;
}
let fact =getFactorial(7);
console.log(fact); */
