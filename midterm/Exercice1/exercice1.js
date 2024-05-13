
let idi = document.getElementById("identifiant");
let name = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let age = document.getElementById("age") ;
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let gcu = document.getElementById("rad");
let submission = document.getElementById("submission");

function passwordstrong(pass) {
    let pts = (pass=="") ? 0 : 1;

    if (pass.length >= 8) pts += 1;
    if (/[a-z]/.test(pass)) pts += 1;
    if (/[A-Z]/.test(pass)) pts += 1;
    if (/[0-9]/.test(pass)) pts += 1;
    document.getElementById("displaypts").textContent = `votre mot de pass est : ${pts} / 5 fort`;
    return pts == 5;
}

function SubmitGrise(){
    let cond1 = parseFloat(age.value) >= 18;

    if(!cond1){
        document.getElementById("displayage").textContent = `Vous devez avoir plus de 18 ans.`;
    }
    else{
        document.getElementById("displayage").textContent = ``; 
    }

    let cond2 = idi.value.length <= 12;
    if (!cond2){
        document.getElementById("displayid").textContent = `L'identifiant doit avoir au plus 12 character`; 
    }
    else{
        document.getElementById("displayid").textContent = ``; 
    }

    let cond3 = passwordstrong(password.value); 
    let cond4 = (password.value == password2.value);
    if (!cond4){
        document.getElementById("displaypswd").textContent = `Les mots de passes sont different`; 
    }
    else{
        document.getElementById("displaypswd").textContent = ``; 
    }

    let cond5 = gcu.checked;
    if (!cond5){
        document.getElementById("displaygcu").textContent = 'il faut accepter les termes'; 
    }
    else{
        document.getElementById("displaygcu").textContent = ``; 
    }

    if(cond1 && cond2 && cond3 && cond4 && cond5){
        if (submission.classList.contains("gray")) {
            submission.classList.remove("gray");
            submission.classList.toggle("notgray");
            submission.disabled = false;
            return;
        }
    }
    else if(!submission.classList.contains("gray")) {
        submission.classList.toggle("notgray");
        submission.classList.add("gray");
    }
    submission.disabled = true;
}

SubmitGrise()

idi.addEventListener('input', SubmitGrise);
age.addEventListener('input', SubmitGrise);
password.addEventListener('input', SubmitGrise);
password2.addEventListener('input', SubmitGrise);
gcu.addEventListener('change', SubmitGrise);

function validateform(){
    if (!submission.classList.contains("gray")){
        alert("C'est bon!")
        document.getElementById("regisexercice1").reset();
    }
}