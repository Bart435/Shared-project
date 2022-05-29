const vc = document.getElementById("Vc");
const vs = document.getElementById("Vs");

const cr = document.getElementById("Cr").addEventListener("click", calcCR);

const epsilon = document.getElementById("epsilon");

function calcCR() {
    let calc = (parseInt(vs.value) + parseInt(vc.value)) / parseInt(vc.value);
    epsilon.innerHTML = `<strong>${calc.toFixed(2)} : 1</strong>`
};