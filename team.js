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

const printLol= ()=> {
    let printFirst= "";
    for (let i = 0; i < gruppo.length; i++) {
       if (gruppo[i].favoriteVideoGame === ("LOL" || "League Of Legends")) {
            printFirst= gruppo[i].name;
       }
    }
    if (printFirst) {
        console.log(printFirst);        
    } else {
        console.log("No one likes LOL... lol!")
    }
}
printLol()

const sameName= ()=> {
    let firstName= "";
    for (let i = 0; i < gruppo.length; i++) {
        if (gruppo[i].name === gruppo[i+1]?.name) {
            firstName = gruppo[i].name
        }            
    }
    if (firstName) {
        console.log(firstName);
    } else {
        console.log("No, everyone have different names.")
    }
}
sameName()