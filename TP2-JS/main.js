
document.getElementById("Ex1_trigger").addEventListener('click', exercice1);
document.getElementById("Ex2_trigger").addEventListener('click', exercice2);
document.getElementById("Ex3_trigger").addEventListener('click', exercice3);
document.getElementById("Ex4_trigger").addEventListener('click', exercice4);
document.getElementById("Ex5_trigger").addEventListener('click', exercice5);
document.getElementById("Ex6_trigger").addEventListener('click', exercice6);

function exercice1(){
    var op1 = document.getElementById("Ex1_op1");
    var op2 = document.getElementById("Ex1_op2");
    var res = document.getElementById("Ex1_result");

    res.innerText  = parseFloat(op1.value) + parseFloat(op2.value);
}

function exercice2(){
    var op1 = document.getElementById("Ex2_op1");
    var op2 = document.getElementById("Ex2_op2");
    var a = op1.value;

    op1.value = op2.value;
    op2.value = a;
}

function exercice3(){
    var op1 = parseFloat(document.getElementById("Ex3_op1").value);
    var op2 = parseFloat(document.getElementById("Ex3_op2").value);
    var operation = document.getElementById("Ex3_operation").value;
    var result = document.getElementById("Ex3_result");
    var res = 0;

    if (operation == "+"){
        res = op1 + op2;
    }
    else if(operation == "-"){
        res = op1 - op2;
    }
    else if(operation == "*"){
        res = op1 * op2;
    }
    else if(operation == "/"){
        res = op1 / op2;
    }

    result.innerText  = res;
}

function exercice4(){
    var num1 = parseFloat(prompt("Entrez le premier nombre :"));
    var num2 = parseFloat(prompt("Entrez le deuxième nombre :"));
    var num3 = parseFloat(prompt("Entrez le troisième nombre :"));

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        if (num1 == num2 && num2 == num3) {
            alert("Les trois variables sont identiques.");
        } else if (num1 == num2 || num1 == num3 || num2 == num3) {
            alert("Deux des variables sont de valeurs égales.");
        } else {
            alert("Les trois variables sont différentes.");
        }
    } else {
        alert("Veuillez saisir des nombres valides.");
    }
}

function exercice5() {
    var prixHT = parseFloat(prompt("Entrez le prix HT :"));
    var tauxTVA = parseFloat(prompt("Entrez le taux de TVA en pourcentage :"));

    if (!isNaN(prixHT) && !isNaN(tauxTVA)) {
        var prixTTC = prixHT * (1 + tauxTVA / 100);
        document.body.innerHTML = "Prix TTC : " + prixTTC.toFixed(2) + '<br><button onclick="actualiserPage()">Retour au menu</button>';
    } else {
        alert("Veuillez entrer des valeurs numériques valides.");
    }
}

function exercice6(){
    var email = document.getElementById("email").value;
    var objet = document.getElementById("objet").value;
    var corps = document.getElementById("corps").value;
    var res = document.getElementById("Ex6_result");


    res.innerText = "Sender: " + email + "\n" + "Objet: " + objet + "\n" + "Corps: " + corps
}


function actualiserPage() {
    location.reload();
}

document.getElementById("redirectLink").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirection interdite");
});

document.getElementById("menuButton").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display == "block") ? "none" : "block";
});

document.getElementById("menuButton").addEventListener("mouseleave", function() {
    document.getElementById("menu").style.display = "none";
});