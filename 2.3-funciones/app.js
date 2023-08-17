/*Cuanto nos falta para retirarnos, la edad es de 65 años
const yearsForRetirement = 65 - 29;
console.log(yearsForRetirement);

const yearsForRetirement2 = 65 - 15;
console.log(yearsForRetirement2);

function calcYearsRetirement(age) {
  const yearsForRetirement = 65 - age;
  console.log(yearsForRetirement);
}

calcYearsRetirement(50);

const RETIREMENT_AGE = 85;
const age = prompt('dame tu edad')
function calcYearsRetirement(age) {
  const yearsForRetirement = 
                    RETIREMENT_AGE - age;
  console.log(yearsForRetirement);
}

calcYearsRetirement(age);


const RETIREMENT_AGE = 85;

function calcYearsRetirement(age) {
  const yearsForRetirement = 
                    RETIREMENT_AGE - age;
  console.log(yearsForRetirement);
}

calcYearsRetirement();


const RETIREMENT_AGE = 65;

function calcYearsRetirement(age) {
  return RETIREMENT_AGE - age;
}

const retYax = calcYearsRetirement(29);
//console.log(retYax);

const retErik = calcYearsRetirement(23);
//console.log(retErik);

const user = {
  name: 'Yaxche',
  age: 29,
  hasAfore: true,
}

console.log(user);

user.yearsForRetirement = calcYearsRetirement(user.age);

console.log(user);
*/

const RETIREMENT_AGE = 65;
const CURRENT_YEAR = 2023;

function calcAge(birthYear){
  return CURRENT_YEAR - birthYear;
}

function calcYearsRetirement(birthYear) {
  const age = calcAge(birthYear);
  return RETIREMENT_AGE - age;
}

const retYax = calcYearsRetirement(29);
//console.log(retYax);

const retErik = calcYearsRetirement(23);
//console.log(retErik);

const user = {
  name: 'Yaxche',
  birthYear: 1993,
  hasAfore: true,
}

console.log(user);

user.yearsForRetirement = calcYearsRetirement(user.birthYear);

console.log(user);

/*
 function main {
   function1();
   function2();
   function3();
 }
 
 main();
*/
