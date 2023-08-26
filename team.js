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

//Funzione 3

function teamMiddleAge(array) {
    let teamAge = 0;
    for (let i = 0; i < array.length; i++) {
      teamAge = teamAge + array[i].age;
    }
    teamAge = teamAge / 3;
    return teamAge;
  }
  console.log("L'età media del team è " + teamMiddleAge(gruppo));
  
  //Funzione 4
  
  function whoHasAPet(array) {
    let petOwners = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].petName !== "") {
        petOwners.push(array[i].name + " " + array[i].petName);
      } else {
      }
    }
    return petOwners;
  }
  console.log("I proprietari di animali del team sono " + whoHasAPet(gruppo));

