//console.log('Filter excersises file loaded');

// Example 1
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const filteredNumbers = numbers.filter((number) => {
  return number > 5 && number < 10;
}); // end filteredNumbers

console.log({ filteredNumbers });

// Example 2
const people = [
  { name: 'John', age: 25 },
  { name: 'Bill', age: 30 },
  { name: 'Dave', age: 22 },
  { name: 'Jill', age: 35 },
  { name: 'Katie', age: 28 },
  { name: 'Martha', age: 27 },
];

const filteredPeople = people.filter((person) => {
  return person.age < 30;
}); // end of filter

console.log(filteredPeople);

// Exercise #3
// 1. Create an array of objects containing Ford and Chevrolet cars
const cars = [
  { make: 'Ford', model: 'Fusion', year: 2019 },
  { make: 'Chevrolet', model: 'Malibu', year: 2018 },
  { make: 'Ford', model: 'Focus', year: 2017 },
  { make: 'Chevrolet', model: 'Cruze', year: 2016 },
  { make: 'Ford', model: 'Taurus', year: 2015 },
  { make: 'Chevrolet', model: 'Impala', year: 2014 },
];

const filteredCars = cars.filter((car) => {
  return car.make == 'Ford';
}); // end of filter

console.log(filteredCars);

// Exercise #4
// 1. Fetch a JSON array of objects containing the SU men's basketball schedule (please download the entire schedule.json file from Blackboard/Content below tonight's agenda)

// BELOW IS JUST AN EXAMPLE---YOU WILL HAVE TO IMPORT!!!
const schedule = [
  {
    date: '2023-10-27',
    opponent: 'Deamon',
    location: 'JMA Wireless Dome',
    exhibition: true,
  },
  {
    date: '2023-11-01',
    opponent: 'College of St. Rose',
    location: 'JMA Wireless Dome',
    exhibition: true,
  },
  // etc.
];

// 2. Use the filter method to only include the games in February
// Big question: How do you evaluate the date property in the filter method to only include games in February? Convert the date string to a Date object and evaluate the month property.
// 3. Print the result to the console

const februaryGames = schedule.filter((game) => {
  // write your code here
  const dateObj = new Date(game.date); // convert the date string to a Date object
  return dateObj.getMonth() === 1; // February is the second month, so the index is 1, January is 0, March is 2, April is 3, etc.
});
console.log(februaryGames);
