function displayClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().to
    String().padStart(2, "0");
    document.getElementById('clockDisplay').innerText = `${hours}:${minutes}:${seconds}`;
    check(hours, minutes);
}

function check(hours, minutes){
    let container = document.getElementById("tachecontainer");

    for (const child of container.children) {
        let h = child.querySelector("#hour").value;
        let m = child.querySelector("#minute").value;
        let note = child.querySelector("#note").value;
        let checkbox = child.querySelector("#checkbox");
        if (parseFloat(hours) == parseFloat(h) && parseFloat(minutes) == parseFloat(m) && checkbox.checked){
            checkbox.checked = false;
            document.getElementById("myAudio").play();
            alert(note);
        }

    }

}

function add(){
    let container = document.getElementById("tachecontainer");

    const minicontainer = document.createElement("div");
    minicontainer.className = "tache";
    
    minicontainer.innerHTML += `
        <input type="checkbox" id="checkbox">
        <input type="number" id="hour" min="0" max="23" placeholder="0">:
        <input type="number" id="minute" min="0" max="59" placeholder="0">
        <input type="text" id="note" placeholder="Ecrire une note...">
    `

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "deletebtn";
    deleteButton.textContent = "-";
    minicontainer.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        container.removeChild(minicontainer);
    });

    container.appendChild(minicontainer);
}

let addbtn = document.getElementById("tacheajoute");
addbtn.addEventListener('click', add);

add();



setInterval(displayClock, 1000);
