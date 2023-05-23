console.log("Je suis la console !");
function bienvenu(){
    alert("😎 Je suis un message dans une fenêtre pop-up 🐱‍🏍");
}

//setInterval(bienvenu, 1000);
//setInterval(bienvenu, 5000);
// function generer(){
//     var monformulaire = document.forms.ajoutPWD;
//     //ou document.forms['ajoutPWD']
//     console.log(monformulaire.nombrecar.value);

//     //création d'une nouvelle ligne qui sera ajouté au tableau
//     var newLine = document.createElement("tr");
//     //création de 3 cellues
//     var col1 = document.createElement("td");
//     var col2 = document.createElement("td");
//     var col3 = document.createElement("td");
//     var col4 = document.createElement("td");
//     var col5 = document.createElement("td");
//     //ajout de valeurs par défaut aux 5 cellules
//     col1.textContent = "val1";
//     col2.textContent = "val2";
//     col3.textContent = "val3";
//     col4.textContent = "val4";
//     col5.textContent = "val5";

//     newLine.append(col1,col2,col3, col4, col5);

//     var monTableau = document.getElementById("montab");
//     monTableau.appendChild(newLine);
    
// }
function incrementerDuree() 
{
let durees=document.getElementsByClassName("duree")
if(durees.length!=0) 
    {Array.prototype.forEach.call(durees, function(dureeElement) 
        {
            //si le mot de passe n'est pas expiré(60 seconds)
            if(parseInt(dureeElement.textContent)<60){
                let valeur=parseInt(dureeElement.textContent);dureeElement.textContent=valeur+1;
            }
            //sinon si égal à 60, grise la police
            else if(parseInt(dureeElement.textContent)==60){
                dureeElement.style.color="grey";
                // remplace les éléments de la colonne mot de passe généré parle mot "expiré"
                dureeElement.parentNode.childNodes[4].textContent="Expiré";
                
            }
        });
    }
}



var minuscule = "abcdefghijklmnopqrstuvwxyz";
var majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chiffre = "0123456789";
var carspecial = "%!&*^()#$:";

function generer(){

    var min = 0;
    var maj = 0;
    var chif = 0;
    var sym = 0; 
    // a. Créez la variable duree dans laquelle sera stocké un nouvel élément td.
    var duree = document.createElement('td');
    
    // b. Utilisez la méthode « classList » afin d’ajouter un attribut « class » à l’élément créé.
    duree.classList.add('duree');
    
    // c. Initialisez la valeur du champ duree à 0.
    duree.textContent = "0";
    
    var monformulaire = document.forms.ajoutPWD;
    var password =""; // Variable contenant le mot de passe
    var listecar=""; // Liste contenant tous les caractères que le mot de passe peut avoir

    if (monformulaire.elements["minuscule"].checked){ // Vérifie si la case minuscule est cochée
        listecar+=minuscule; 
        min=1;
    }
    if (monformulaire.elements["majuscule"].checked){ // Vérifie si la case majuscule est cochée
        listecar+=majuscule;
        maj=1;
    }
    if (monformulaire.elements["chiffre"].checked){ // Vérifie si la case chiffre est cochée
        listecar+=chiffre;
        chif=1;
    }
    if (monformulaire.elements["symbole"].checked){ // Vérifie si la case symbole est cochée
        listecar+=carspecial;
        sym=1;
    }
    var verif = 1;
    while(verif==1){
        for (var i = 1; i <= monformulaire.elements["nombrecar"].value; i++) {
              var randomNumber = Math.floor(Math.random() * listecar.length);
              password += listecar.substring(randomNumber, randomNumber +1);
        }
        console.log(password);
        if (((contient_carspecial(password) == false)&&(sym==1)) || ((contient_minuscule(password) == false)&&(min == 1)) || ((contient_majuscule(password) == false)&&(maj == 1)) || ((contient_chiffre(password) == false)&&(chif == 1))){
            verif = 1;
        }
        else {
            verif = 0;
            var newLine = document.createElement("tr");
            var nbCarac = document.createElement("td");
            var DateG = document.createElement("td");
            var cat = document.createElement("td");
            var site = document.createElement("td");
            var pwd = document.createElement("td");
            nbCarac.textContent = document.getElementById("nombrecar").value;
            DateG.textContent = document.getElementById("dateg").value;
            cat.textContent = document.getElementById("categorie").value;
            site.textContent = document.getElementById("site").value;
            pwd.textContent = password;
            
            newLine.append(nbCarac, DateG, cat, site, pwd, duree);

            var monTableau = document.getElementById("montab");
            monTableau.appendChild(newLine);
  
        }
        password=""; // A NE PAS OUBLIER 
    } // Fin de la boucle while permettant de regénérer un mot de passe si un caractère souhaité n'est pas présent
    verif = 1;
    document.ajoutPWD.reset();
}

function contient_carspecial(str) {
    const specialChars = /[%!&*^()#$:]/;
    return specialChars.test(str);
}
function contient_minuscule(str) {
    const specialChars = /[abcdefghijklmnopqrstuvwxyz]/;
    return specialChars.test(str);
}
function contient_majuscule(str) {
    const specialChars = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
    return specialChars.test(str);
}
function contient_chiffre(str) {
    const specialChars = /[0123456789]/;
    return specialChars.test(str);
}

setInterval(incrementerDuree, 1000);

document.addEventListener("DOMContentLoaded", function() 
{
    document.querySelector('#addPWD').addEventListener('submit',function(e){
        //vérifie si au moins une case du formulaire est cochée
        if((document.getElementById("minuscule").checked == false) && (document.getElementById("majuscule").checked == false) && (document.getElementById("chiffre").checked == false) && (document.getElementById("symbole").checked == false)){
        alert("Veuillez sélectionner au moins un critère");
            e.preventDefault();
        }
        else{
            generer();
        }
    });
});

function supprimer() {
    if (confirm("Confirmez-vous la suppression de tous les mots de passe générés ?"))
    {
        document.ajoutPWD.submit();
        //supprime toutes les lignes du tableau, sauf la première
        var table = document.getElementById("montab");
        var rowCount = table.rows.length;
        table.shift();
}
}

function PwdSaisi(pwd){   
    var monformulaire = document.forms.ajoutPWD;
    // Créer et retourner l'objet littéral
    nbCarac= document.getElementById("nombrecar").value;
    DateCreation = document.getElementById("dateg").value;
    categorie = document.getElementById("categorie").value;
    site = document.getElementById("site").value;
    const NvPWD = new PWD(nbCarac, DateCreation, categorie, site, pwd)
    NvPWD.printPwd();
    return NvPWD;
}     

//création d'une classe PWD

class PWD {
    constructor(nombre, date, categorie, site, mdp) {
      this.nombre = nombre;
      this.date = date;
      this.categorie = categorie;
      this.site = site;
      this.mdp = mdp;
    }

  printPwd() { 
    console.log("Nombre de caractères " + this.nombre);
    console.log("Date de création " + this.date);
    console.log("Catégorie " + this.categorie);
    console.log("Site " + this.site);
    console.log("Mot de passe " + this.mdp);
    }
}

//création d'un tableau vide 
var mesPWDs = [];

function pushPwd(pwd){
    mesPWDs.push(pwd);
}
