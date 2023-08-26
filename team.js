let gruppo = [
  {
    name: "Stefano",
    surname: "Sala",
    age: 26,
    city: "Milano",
    hobby: "Gaming",
    favoriteFood: "Pizza",
    favoriteVideoGame: "COD",
    favoriteFilm: "Interstellar",
    favoriteBook: "",
    petName: "Totò",
  },
  {
    name: "Marta",
    surname: "Ferraris",
    age: 29,
    city: "Soprana",
    hobby: "Illustration",
    favoriteFood: "Chirashi sake",
    favoriteVideoGame: "AC Odyssey",
    favoriteFilm: "Spirit away",
    favoriteBook: "a Touch of Darkness",
    petName: "Cleo & Mia",
  },
  {
    name: "Adolfo",
    surname: "Gomez",
    age: 25,
    city: "Viterbo",
    hobby: "Photography",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Iracing",
    favoriteFilm: "Pulp Fiction",
    favoriteBook: "",
    petName: "Peter",
  },
];


function sortByName(array) {
  let names = [];
  for (let i = 0; i < array.length; i++) {
    names.push(array[i].name + " " + array[i].surname);
  }
  names.sort();
  return names;
}

console.log(sortByName(gruppo));

function orderAge(array) {
  let ages = [];
  for (let i = 0; i < array.length; i++) {
    ages.push(array[i].age);
  }
  ages.sort((a, b) => a - b);
  return ages;
}
console.log(orderAge(gruppo));

