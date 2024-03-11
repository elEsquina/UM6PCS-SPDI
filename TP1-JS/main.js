for (var i = 1; i <= 12; i++) {
    (function(index) {
        var button = document.createElement("div");
        button.addEventListener('click', function() {
            console.log(index);
            executeExercise(index);
        });
        button.className = "button";
        button.textContent = "Exercise " + index;
        document.getElementById("btn").appendChild(button);
    })(i);
}

function exercise1() {
    var userInput = prompt("Enter a string:");
    document.write("<p>" + userInput + "</p>");
}

function exercise2() {
    var a = 10;
    var b = 20;
    var result = a + b;
    alert("Sum of a and b is: " + result);
}

function exercise3() {
    var budget = 500;
    var purchases = 300;
    if (purchases <= budget) {
        alert("Budget allows for the purchases.");
    } else {
        alert("Budget does not allow for the purchases.");
    }
}

function exercise4() {
    var priceExcludingVAT = prompt("Enter the price excluding VAT:");
    var priceIncludingVAT = parseFloat(priceExcludingVAT) * 1.20;
    document.body.innerText = "Price including VAT: " + priceIncludingVAT.toFixed(2);
}

function exercise5() {
    var priceExcludingVAT = parseFloat(prompt("Enter the price excluding VAT:"));
    var customVATRate = parseFloat(prompt("Enter the custom VAT rate:"));
    var totalPrice = priceExcludingVAT * (1 + customVATRate / 100);
    document.body.innerText = "Total price including custom VAT: " + totalPrice.toFixed(2);
}

function exercise6() {
    var priceExcludingVAT = parseFloat(prompt("Enter the price excluding VAT:"));
    var customVATRate = parseFloat(prompt("Enter the custom VAT rate:"));
    var totalPrice = priceExcludingVAT * (1 + customVATRate / 100);
    var priceHTML = totalPrice > 100 ? '<span style="color: red;">' : '<span style="color: green;">';
    priceHTML += totalPrice.toFixed(2) + "</span>";
    document.body.innerHTML = priceHTML;
}

function exercise7() {
    document.getElementById('cocktail').innerText = "Long Island Iced Tea";
}

function exercise8() {
    var tableHTML = "<table border='1'>";
    for (var i = 0; i < 3; i++) {
        tableHTML += "<tr>";
        for (var j = 0; j < 3; j++) {
            tableHTML += "<td>Cell " + (i * 3 + j + 1) + "</td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    document.body.innerHTML += tableHTML;
}

function exercise9() {
    var rows = parseInt(prompt("Enter number of rows:"));
    var cols = parseInt(prompt("Enter number of columns:"));
    var dynamicTableHTML = "<table border='1'>";
    for (var i = 0; i < rows; i++) {
        dynamicTableHTML += "<tr>";
        for (var j = 0; j < cols; j++) {
            dynamicTableHTML += "<td>Cell " + (i * cols + j + 1) + "</td>";
        }
        dynamicTableHTML += "</tr>";
    }
    dynamicTableHTML += "</table>";
    document.body.innerHTML += dynamicTableHTML;
}

function exercise10() {
    var randomNumbersHTML = "<ul>";
    for (var i = 0; i < 10; i++) {
        randomNumbersHTML += "<li>" + Math.floor(Math.random() * 100) + "</li>";
    }
    randomNumbersHTML += "</ul>";
    document.body.innerHTML += randomNumbersHTML;
}

function exercise11() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    document.body.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exercise12() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = "";

    for (var i = 0; i < 12; i++) {
        var randomId = getRandomNumber(1, 1000); 
        var width = 50;
        var height = 50;
        var img = document.createElement('img');
        img.src = `https://picsum.photos/id/${randomId}/${width}/${height}`;
        img.alt = `Image ${i + 1}`;
        imageContainer.appendChild(img);
    }
}

window.onload = exercise12;

function executeExercise(exerciseNumber) {
    switch (exerciseNumber) {
        case 1:
            exercise1();
            break;
        case 2:
            exercise2();
            break;
        case 3:
            exercise3();
            break;
        case 4:
            exercise4();
            break;
        case 5:
            exercise5();
            break;
        case 6:
            exercise6();
            break;
        case 7:
            exercise7();
            break;
        case 8:
            exercise8();
            break;
        case 9:
            exercise9();
            break;
        case 10:
            exercise10();
            break;
        case 11:
            exercise11();
            break;
        case 12: 
            exercise12();
            break;
        default:
            break;
    }
}