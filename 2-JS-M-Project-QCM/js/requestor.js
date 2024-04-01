function validateform() {
    const amount = document.getElementById("nmbrqsts").value;
    const category = document.getElementById("qstcat").value;
    const difficulty = document.getElementById("qstdiff").value;

    const url = `qcm.html?nmbrqsts=${amount}&qstcat=${category}&qstdiff=${difficulty}`;
    window.location.href = url;

}
