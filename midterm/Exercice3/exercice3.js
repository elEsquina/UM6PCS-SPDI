var lastpressed = false; 
var panniel = [];


function update(){
    let container = document.getElementById("pannier_container");
    container.innerHTML = "";
    let totalcost = 0;
    for (let i = 0; i < panniel.length; i++){
        let data = panniel[i];
        const mli = document.createElement("li");

        const name = document.createElement("div");
        name.innerText = data[0];
        const price = document.createElement("div");
        price.innerText = data[1] + "$";
        totalcost += parseFloat(data[1]);
        const btn = document.createElement("button");
        btn.innerText = "Supprimer";

        mli.appendChild(name);
        mli.appendChild(price);
        mli.appendChild(btn);
        
        btn.addEventListener('click', () => {
            panniel.splice(i, 1);
            update();
        })

        container.appendChild(mli);
    }

    document.getElementById("totalcost").innerText = "Votre total est: " + totalcost + "$";


}


fetch("./books.json").then(response => response.json()).then(arr => {
    let container = document.getElementById("loadnames");
    
    for (let i = 0; i < arr.books.length; i++){
        const book = arr.books[i];
        const mli = document.createElement("li");

        const name = document.createElement("div");
        name.innerText = book.title;
        const btn = document.createElement("button");
        btn.innerText = "Info";
        const pannier = document.createElement("button");
        pannier.innerText = "ajouter au panier (" + book.price + "$)";

        mli.appendChild(name);
        mli.appendChild(btn);
        mli.appendChild(pannier);
        
        btn.addEventListener('click', () => {
            if (lastpressed != false) {
                lastpressed.remove();
            }

            const infodiv = document.createElement("div");
            infodiv.className = "infodiv";
            
            infodiv.innerHTML += `
                <strong>author:</strong>  ${book.author} <br>
                <strong>subtitle:</strong> ${book.subtitle} <br>
                <strong>description:</strong>  ${book.description} <br>
                <strong>pages:</strong>  ${book.pages} <br>
                <strong>price:</strong>  ${book.price}$ <br>
                <strong>website:</strong>  ${book.website} <br>
                <strong>isbn</strong>: ${book.isbn} <br>
                <strong>published:</strong>  ${book.published} <br>
                <strong>publisher:</strong>  ${book.publisher} <br>
            `
            
            lastpressed = infodiv;
            mli.appendChild(infodiv);
        });

        pannier.addEventListener('click', () => {
            panniel.push([book.title, book.price])
            update();
        })

        container.appendChild(mli);
    }

})

