//🔹 1. Déclaration de variables
//nom de l'utilisateur
let nomUtilisateur = "";
//âge
let ageUtilisateur = 11;
//ville
let villeUtilisateur = "Paris";

//🔹 2. Réaffectation de valeur
//Change la valeur de la variable "ville" pour une autre ville
villeUtilisateur = "Grenoble";

//🔹 3. Création d’un objet
//Crée un objet utilisateur qui regroupe les informations : nom, âge, ville
const Utilisateur = {
	nomUtilisateur: "TestUser",
	ageUtilisateur: 10,
    villeUtilisateur: "Grenoble",
}
//test : console.log(Utilisateur);

//🔹 4. Modification de propriété
//Change la ville dans l’objet utilisateur
Utilisateur.villeUtilisateur = "Bastia";

//🔹 5. Ajout de propriété
//Ajoute une propriété email à l’objet utilisateur
Utilisateur.email = "johndoe@gmail.jom"

//🔹 6. Création d’un tableau
//Ajoute une propriété amis à l’objet utilisateur, qui contient une liste de prénoms
Utilisateur.amisUser = ["Alex", "Paul", "John"];
//test : console.log(Utilisateur.amisUser);

//🔹 7. Manipulation du tableau
//Supprime un ami de la liste
let last = Utilisateur.amisUser.pop(); //ou pour premier du tableau : let first = amisUser.shift(); 
//ou pour supprimer via l'index : let removedItem = amisUser.splice(0, 1); (supprime 1 element à la position 0)

//Ajoute un nouvel ami à la fin de la liste
let newLength = Utilisateur.amisUser.push("AMI");

//Remplace un ami par un autre
Utilisateur.amisUser[0] = "Marc"; // Remplace un ami

//🔹 8. Parcours du tableau
//Utilise une boucle pour afficher chaque ami dans la console
console.log("Liste des amis:");
Utilisateur.amisUser.forEach(ami => console.log(ami));

//tester si une personne en particulier est dans la liste d'amis
let testInclu = "Clara";
console.log("Est ce que " + testInclu + " est inclu dans la liste ? --> " + Utilisateur.amisUser.includes(testInclu));

//🔹 9. Conditions
//Si l’utilisateur a moins de 18 ans, affiche “Mineur”
//S’il a entre 18 et 25 ans, affiche “Jeune adulte”
//Sinon, affiche “Adulte”

if (Utilisateur.ageUtilisateur <= 18) {
    console.log("Utilisateur mineur");
} else if (Utilisateur.ageUtilisateur >= 18 && Utilisateur.ageUtilisateur <= 25) {
    console.log("Utilisateur jeune adulte");
} else {
    console.log("Utilisateur adulte");
}

//🔹 10. Fonctions (nouvelle section)
//a) Fonction simple
//Crée une fonction saluerUtilisateur qui prend un prénom et affiche un message de bienvenue
function saluerUtilisateur() {
    console.log("Bienvenue" + Utilisateur.nomUtilisateur + " !");
}
saluerUtilisateur();


//b) Fonction avec retour
//Crée une fonction calculerAnneeNaissance qui prend l’âge en paramètre et retourne l’année de naissance (en supposant qu’on est en 2025)
function calculerAnneeNaissance(age) {
    return 2025 - age;
}
console.log("Année de naissance:", calculerAnneeNaissance(Utilisateur.ageUtilisateur));

//c) Fonction avec condition
//Crée une fonction verifierMajorite qui prend un âge en paramètre et retourne true si l’utilisateur est majeur, sinon false
function verifierMajorite(age) {
    return age >= 18;
}
console.log("Utilisateur majeur ?", verifierMajorite(Utilisateur.ageUtilisateur));

//d) Fonction qui manipule un objet
//Crée une fonction afficherProfil qui prend l’objet utilisateur et affiche toutes ses infos dans un message formaté
function afficherProfil(userInfo) {
    console.log("Nom: "+ Utilisateur.nomUtilisateur + "\nÂge: " + Utilisateur.ageUtilisateur + "\nVille: " + Utilisateur.villeUtilisateur + "\nEmail: " + Utilisateur.email + "\nAmis: " + Utilisateur.amisUser);
}
afficherProfil(Utilisateur);

//e) Bonus :
//Crée une fonction ajouterAmi qui ajoute un prénom dans le tableau amis de l’objet utilisateur
function ajouterAmi(user, ami) {
    user.amisUser.push(ami);
    console.log(ami + " a été ajouté aux amis.");
}
ajouterAmi(Utilisateur, "Sophie");

//Crée une fonction supprimerAmi qui supprime un prénom s’il existe
function supprimerAmi(user, ami) {
    let index = user.amisUser.indexOf(ami);
    if (index !== -1) {
        user.amisUser.splice(index, 1);
        console.log(ami + " a été supprimé des amis.");
    } else {
        console.log(ami + " n'est pas dans la liste des amis.");
    }
}
supprimerAmi(Utilisateur, "Paul");
//test: console.log("Utilisateur final:", Utilisateur);