//console.log('Filter excersises file loaded');

// Example 1
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const filteredNumbers = numbers.filter((number) => {
  return number > 5 && number < 10;
}); // end filteredNumbers

//console.log({ filteredNumbers });

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

//console.log(filteredPeople);

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

//console.log(filteredCars);

const filterGames = (gameData, monthIndex) => {
  const filteredGames = gameData.filter((game) => {
    const dateObject = new Date(game.date);
    return dateObject.getMonth() === monthIndex;
  });

  console.log({ filteredGames });
};

// Example 4
// fetch pulls in data, then converts to json, next then processes, catch is there for errors
fetch('js/schedule.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    filterGames(data, 0);
    //console.log({ data });
  })
  .catch(); // promise
