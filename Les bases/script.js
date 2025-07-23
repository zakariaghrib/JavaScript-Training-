// Déclaration des variables de base
let firstname = "zakaria";
let lastname  = "ghrib";
const PI = 3.14;
let radius = 6;
let favoriteSuperhero = "Spider-Man";
let favoriteQuote = "Un grand pouvoir implique de grandes responsabilités.";


// Concaténation du prénom et du nom
let fullname = firstname +" "+ lastname;
console.log("nom complet est :" + fullname);



// Calcul de l’aire d’un cercle (π × r²)
let air = PI * radius * radius;
console.log("lair est :" + air);


// Construction d’une phrase de motivation avec le super-héros
let motivation ="Un homme sage nommé " + favoriteSuperhero + favoriteQuote;
console.log(motivation);


// Déclaration de deux variables à échanger
let a = 3;
let b = 10;

// Échange des valeurs à l'aide d'une variable temporaire
let k = a;
a = b;
b = k;

console.log("After swapping: a = ", a, " and b = ", b); 



// Vérifie si le rayon est pair ou impair
if(radius % 2==0){
    console.log("pair")
}else{
        console.log("impair")

}

// Utilisation de switch pour convertir un numéro de jour en nom
var day = 4;
var dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Unvalid Day";
}

console.log(dayName); 


// Trouver le plus grand entre trois nombres : a, b, c
let c=8;
let max;

if (a >= b && a >= c) {
    max = a;
} else if (b >= a && b >= c) {
    max = b;
} else {
    max = c;
}

console.log(max); 


// Évaluation d’une note à partir d’un score
let score = 90;
let grade;

if (score > 85) {
    grade = "A";
} else if (score <= 85 && score > 70) {
    grade = "B";
} else if (score <= 70 && score > 55) {
    grade = "C";
} else if (score <= 55 && score > 40) {
    grade = "D";
} else if (score <= 40 && score > 15) {
    grade = "E";
} else if (score <= 15) {
    grade = "F"; 
} else {
    grade = "Invalid score";
}

console.log(grade); 


const x = 10;
if (true) {
  const x = 20;
  console.log(x);
}
console.log(x);

