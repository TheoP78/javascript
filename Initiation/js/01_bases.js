// Syntaxe de base 

// commentaire sur une ligne

/*
    Ici, je fais un commentaire sur
    plusieurs lignes 
*/

// -- 1:Déclarer une variable en JS 
var prenom;

// -- 2: Affecter une valeur à une variable 
// prenom = "Théo";

// var prenom = "Théo";

// -- 3: Une instruction se termine TOUJOURS par un point-virgule, aussi il est possible d'écrire plusieurs instruction sur une seul ligne
// inst_1;
// inst_2; inst_3;

//  -- 4: Afficher une boîte de dialogue (2 façons)
// alert("Super, tu es arrivé sur mon site ! ");
// windows.alert("Super, tu es arrivé sur mon site ! ");

// -- 5: Afficher dans la console (ici, la valeur de ma variable prenom)
// console.log(prenom);

// -- 6: Afficher dans la page web
// document.write("A la pause vous aurez des haribos pik !")

// -- 7: Demander à l'utilisateur une valeur (2 façons)
// window.prompt("Question: on est quel jour ?", "jour de la semaine");
// prompt("Question: on est quel jour ?" , "jour de la semaine");

// -- et pour manipuler cette valeur, je n'oublie pas de la stocker
// var jour = prompt("Question: on est quel jour ?" , "jour de la semaine");
// console.log(jour);

// -- 8: Attention /!\ Le JS est sensible à la casse ('casse sensitive')
// mavariable =/= maVariable =/= ma_variable

// -- 9: Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphanumérique, etne peut pas être un mot réversé (var, for... des éléments natifs du langage JS)

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

// -- 10: Une variable peut être déclarée de façon explicit
var fruit;
var fruit = "fraise";
// ou implicite;
var fruit_2 = "coco";
haribo = "tagada";

/*--------------------------------------------------------------*/
/ ------------------LES TYPES DE VARIABLES ---------------------/
/*--------------------------------------------------------------*/

// -- 1. Chaîne de caractères (string)
var vacances = "2022";
var destination = "Maldive";

// -- 2. Un nombre entier (integer ou int)
var annee = 2022;

// -- 3. Un nombre décimal (float)
var nombre_a_virgule = -5.32;

// -- 4.Un booléen (boolean = VRAI/FAUX = TRUE/FALSE)
var unBoolen = false // -- true

//  -- 5. Les constantes

// La déclaration const permet de créer une constante accessible uniquement en lecture. Contrairement à une variable sa valeur ne peut plus être modifiée par réaffectation plus bas dans le code.
// Une constante ne peut pas être déclarée à nouveau dans le même script.

// -- par convention les constantes sont en majuscules
const PAYS = "France"; //string
const AN = "2022"; //string
const BIRHT = 2022; //string

// -- 6. typeof permet de connaître le type de ma variable
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);

// En JS les variables sont auto-typées
// On peut convertir une variable de type NUMBRE en STRING et aussi STRING en NUMBER avec les fonctions natives de JS
// -- la fonction parseInt() renvoie un entier à partire d'une chaine de caractères

var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => NUMBER
unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// je ré-affecte une valeur
unChiffre = "12.22"
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => FLOAT
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// NUMBER => STRONG
var nb_en_letters = 258;
console.log(nb_en_letters);
console.log(typeof nb_en_letters);

var nb_en_letters = nb_en_letters.toString();
console.log(nb_en_letters);
console.log(typeof nb_en_letters);

// FIN 


