// LECTURE: Values and Variables

// let country = "Viet Nam";
// let continent = " Aisia";
// let population = "Nghe An";

// console.log(country);
// console.log(continent);
// console.log(population);

// LECTURE: Data Types

// let isIsland = false;

// let language_;

// LECTURE: let, const and var

// language = "English";

// const language = "VietNamese";

// // LECTURE: Basic Operators

// let population = 10000;
// let splitPopulation = population / 2;

// console.log(splitPopulation);

// let splitPopulationIn = splitPopulation + 1;
// console.log(splitPopulationIn);

// let Finland = 600000;

// if (splitPopulationIn > Finland)
//   console.log("My country is less people than Finland");

//   LECTURE: Type Conversion and Coercion

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// const numneighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numneighbours === 1) {
//   console.log("'Only 1 border");
// } else if (numneighbours > 1) {
//   console.log("'More than 1 border");
// } else if (numneighbours === 0) {
//   console.log("'No borders");
// }

// LECTURE: The switch Statement

// let language = prompt("Plase language");

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;

//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;

//   case " english":
//     console.log("3rd place");
//     break;

//   case "hindi":
//     console.log("Number 4");
//     break;
// }

// -----------------

// const myAge = (birthYear) => 2022 - birthYear;
// console.log(myAge(2002));

// LECTURE: Functions

// const describeCountry = function (country, population, capitalCity) {
//   return `
//     ${country} has ${population} million people and its
//     capital city is ${capitalCity}`;
// };

// const Inf1 = describeCountry("Viet Nam", 100, "Ha Noi");
// const Inf2 = describeCountry("England", 200, "LonDon");
// const Inf3 = describeCountry("Canada", 300, "Canada");

// console.log(Inf1);
// console.log(Inf2);
// console.log(Inf3);

// LECTURE: Function Declarations vs. Expressions

// function percentageOfWorld1(population) {
//   const per = (population / 7900) * 100;
//   return `
//     Viet Nam has 100 million people, so it's about ${per}% of the world population
//     `;
// }

// console.log(percentageOfWorld1(100));
// console.log(percentageOfWorld1(2000));
// console.log(percentageOfWorld1(500));

// const percentageOfWorld2 = function (population) {
//   const per = (population / 7900) * 100;
//   return `
//     Canada has 100 million people, so it's about ${per}% of the world population
//     `;
// };

// console.log(percentageOfWorld2(500));

// LECTURE: Arrow Functions

// const percentageOfWorld3 = (population) => {
//   const per = (population / 7900) * 100;
//   return `
//     Canada has ${population} million people, so it's about ${per}% of the world population
//     `;
// };

// console.log(percentageOfWorld3(1000));

// LECTURE: Functions Calling Other Functions

// const describePopulation = (country, population) => {
//   const percentageOfWorld1 = function (population) {
//     return (population / 7000) * 100;
//   };

//   const per = percentageOfWorld1(population);

//   return `
//   ${country} has ${population} and which is ${per} %
//   `;
// };

// const result = describePopulation("Vietnam", 100);
// console.log(result);

// LECTURE: Introduction to Arrays
// const population = [10, 1441, 332, 83];

// console.log(population);
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// LECTURE: Basic Array Operations (Methods)

// const neighbours = ["ThaiLan", "Lao", "Capuchin", "VietNam"];
// neighbours.push("Utopia");

// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// neighbours[0] = "Indonesia";

// console.log(neighbours.indexOf("Indonesia"));

// LECTURE: Introduction to Objects

const myCountry = {
  "country",
  "capital",
  "language"
}