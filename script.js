'use strict';

const companies = [
  { name: 'Company One', category: 'Technology', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// higher order functions

// forEach()
companies.forEach(company => console.log(company.name));

// filter()
// returns a new array based on a specific condition

const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

const retail = companies.filter(company => company.category === 'Retail');
console.log(retail);

const companiesOf80s = companies.filter(company => company.start >= 1980 && company.start < 1990);
console.log(companiesOf80s);

const lastedTenOrMoreYears = companies.filter(company => company.end - company.start >= 10);
console.log(lastedTenOrMoreYears);

// map()
// returns a new array after performing an operation on each item of an array

const retailName = retail.map(company => company.name);
console.log(retailName);

const companyInfo = companies.map(company => `${company.name} is in the ${company.category} sector`);
console.log(companyInfo);

const companyStartEnd = companies.map(company => `${company.name} lasted for ${company.end - company.start} years`);
console.log(companyStartEnd);

// any value can be returned by a map()
const test = companies.map(company => 0);
console.log(test);

// toFixed(n) limits decimal places to n digits and converts a number to a string
const root = ages.map(age => Number(Math.sqrt(age).toFixed(2)));
console.log(root);

// method chaining

// technology companies that started before 2000
const techCompanies = companies
  .filter(company => company.category === 'Technology')
  .filter(company => company.start < 2000)
  .map(company => company.name);

console.log(techCompanies);

// sort()
// syntax: array.sort(function(a, b) { return [+ve, -ve, 0] } )

// sort() takes a compare function as a callback function
// upon each iteration, sort() invokes its callback and passes two arguments inside it
// items of array are sorted as per the nature of value returned by compare function

// sort a before b if -ve value is returned
// sort b before a if +ve value is returned
// sort nothing if 0 is returned

const ageInAscending = ages.sort((a, b) => a - b);
console.log(ageInAscending);

const ageInDescending = ages.sort((a, b) => b - a);
console.log(ageInDescending);

// sort companies on the basis of start year
const sortedCompanies = companies.sort((first, second) => first.start - second.start);
console.log(sortedCompanies);

// reduce()
// syntax: array.reduce(function(acc, currValue) { returns acc }, initialAcc)
// reduce() takes two arguments: callback function and initial value of accumulator
// returns a single value i.e accumulator
// with each iteration, value of acc is updated and passed into callback as an argument

let sumOfAges = ages.reduce(function (sum, age) {
  sum += age;
  return sum;
}, 0);

console.log(sumOfAges);

sumOfAges = ages.reduce((sum, age) => sum + age);
console.log(sumOfAges);

// all the years that the companies are operational
let sumYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(sumYears);

// second way
sumYears = companies.map(company => company.end - company.start).reduce((total, years) => total + years, 0);
console.log(sumYears);

// method chaining
// only possible if an array is returned
// methods can't be chained on reduce()

const combinedAge = ages
  .map(age => age * 2)
  .filter(age => age > 50)
  .sort((a, b) => a - b)
  .reduce((sum, age) => sum + age, 0);

console.log(combinedAge);
