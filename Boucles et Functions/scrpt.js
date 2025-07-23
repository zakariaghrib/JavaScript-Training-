//Factorial 
function factorial(n){
    let resultat = 1;
    for(let i=1;i<=n;i++){
        resultat*=i;
    }
    return resultat;
}
console.log(factorial(5)); 

//----------------------------------------------------------------------------------------------------------
//Compte le nombre de chiffres dans un nombre donné.
function calculnombre(n){
   
    if(n===0)return 1;
    let calcul = 0;
    let nvn = Math.abs(n);

     while(nvn > 0){
        nvn =Math.floor(nvn/10);
        calcul ++;

     }
     return calcul ;

}
console.log(calculnombre(-1234489));

//-------------------------------------------------------------------------------------------------------------
//Transforme un nombre (1–7) en jour de la semaine.
function numberToDay(number) {
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    if (number >= 1 && number <= 7) {
        return jours[number - 1]; // Les tableaux commencent à l’index 0
    } else {
        return "Jour invalide";
    }
}
console.log(numberToDay(3)); 

//-------------------------------------------------------------------------------------------------------------
//Retourne le plus grand entre trois nombres.
function max(a, b, c) {
    return Math.max(a, b, c);
}
console.log(max(12, 7, 45));


//--------------------------------------------------------------------------------------------------------------
//Donne une note sous forme de lettre selon le score (ex : A, B, C…)
function myGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(myGrade(88)); 

//--------------------------------------------------------------------------------------------------------------------------

function combinator(n, p) {
    if (p > n || n < 0 || p < 0) {
        return "Valeurs invalides"; 
    }
    return factorial(n) / (factorial(p) * factorial(n - p));
}
console.log(combinator(5, 2));

//---------------------------------------------------------------------------------------------------------------------------------
//calculatrice 
function calculator(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) return "Erreur : division par zéro";
            return a / b;
        case "%":
            return a % b;
        case "c":
        case "C":
            if (b > a || a < 0 || b < 0) return "Erreur : combinaison invalide";
            return factorial(a) / (factorial(b) * factorial(a - b));
        default:
            return "Opérateur invalide";
    }
}


