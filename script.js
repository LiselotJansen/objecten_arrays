/*
// Objecten:
let person = {
    myname : 'Liselot',
    age : 34
};

person.myname = 'John'
person ['myname'] = 'Mary'

console.log(person.myname);

let evaluations = [7, 10, 9];

console.log(evaluations);

// Arrays:
let colors = ['groen', 'blauw', 'rood'];
colors[3] = 'geel';
colors[4] = 5;
colors[5] = {greeting: "hi ik ben een object"};

/*console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[2]);
console.log(colors[5]);*/

// Bekijk een "real-life" object
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna", 
        disliked_food: "canned food"
     }
  }
]
console.log("name 3e kat:", catBreeds[2].name);
console.log("energy-level 1e kat:", catBreeds[0].energy_level);
console.log("1e temperament 2e kat:", catBreeds[1].temperament[0]);
console.log("laatste temperament 3e kat:", catBreeds[2].temperament[4]);
console.log("favoriete eten 3e kat:", catBreeds[2].food); //deze niet gelukt.






/* VORIGE OPDRACHT
const age = 26;
const isFemale = true;
const driverStatus = 'bob';
const myName = "Bram";
const totalAmount = 20;

// leeftijdscontrole:
if (age >= 18){
    console.log("Je mag naar binnen"); 
} else{
    console.log("Je bent te jong, je mag niet naar binnen");
}

// ladiesnight:
if (isFemale){
    console.log("Mevrouw, je mag een kaartje kopen");
} else{
    console.log("Je bent geen lady, je mag geen kaartje kopen");
}

// bob:
if (driverStatus == 'bob'){
    console.log("rij veilig");
} else{
    console.log("we bellen een taxi voor je");
}

// 50% korting:
if (age >= 18 && age <= 25){
    console.log("Je bent ouder dan 18 en jonger dan 25. Je krijgt 50% korting!");
} else{
    console.log("Sorry, je bent te oud. Geen korting voor jou.");
}

//Sarah of Abraham
if (myName === "Bram" || "Sarah"){
    console.log("Bram/Sarah: je krijgt een biertje gratis")
} else{
    console.log("Sorry Pieter/Anna, geen gratis biertje voor jou.")
}

// Jubileum korting:
if (totalAmount > 25 && totalAmount <= 50){
    console.log("Je krijgt gratis (vega)bitterballen.")
} else if (totalAmount > 50 && totalAmount < 100){
    console.log("Je krijgt een gratis portie nachos")
} else if (totalAmount >= 100){
    console.log("Je krijgt een gratis flesje champagne")
} else {
    console.log("Helaas geen korting")
}
*/