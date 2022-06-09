// inputs
const dzuiger = document.getElementById("dzuiger");
const dstang = document.getElementById("dstang");
const verp = document.getElementById("verp");
// outputs
const diaZ = document.getElementById("diaZ");
const diaS = document.getElementById("diaS");
const verpM = document.getElementById("verpM");

const oppZ = document.getElementById("oppZ");
const WoppZ = document.getElementById("WoppZ");
const verpV = document.getElementById("verpV");
const verpVstang = document.getElementById("verpVstang");
const verschil = document.getElementById("verschil");
// Buttons
const calc = document.getElementById("calc").addEventListener("click", calculation);

function calculation() {
    let zuigerM = parseFloat(dzuiger.value) / 1000;
    let stangM = parseFloat(dstang.value) / 1000;
    let verplaatsingM = parseFloat(verp.value) / 100;
    let opperzuiger = 0.785*zuigerM*zuigerM;
    let Wopperzuiger = opperzuiger-(0.785*stangM*stangM);
    let verpvolume = opperzuiger*verplaatsingM;
    let Wverpvolume = Wopperzuiger*verplaatsingM;
    let verschilvolume = verpvolume - Wverpvolume;

    calcdiaZ(zuigerM);
    calcdiaS(stangM);
    calcverpM(verplaatsingM);
    calcoppz(opperzuiger);
    calcWoppz(Wopperzuiger);
    calcverpV(verpvolume);
    calcverpVstang(Wverpvolume);
    calcverschil(verschilvolume);
};

function calcdiaZ(zuigerM) {
    diaZ.innerHTML = `<strong>${zuigerM}</strong> Meter `
};

function calcdiaS(stangM) {
    diaS.innerHTML = `<strong>${stangM}</strong> Meter `
};

function calcverpM(verplaatsingM) {
    verpM.innerHTML = `<strong>${verplaatsingM}</strong> Meter `
};

function calcoppz(opperzuiger) {
    oppZ.innerHTML = `<strong>${opperzuiger.toFixed(5)}</strong> m&sup2; `
};

function calcWoppz(Wopperzuiger) {
    WoppZ.innerHTML = `<strong>${Wopperzuiger.toFixed(5)}</strong> m&sup2; `
};

function calcverpV(verpvolume) {
    verpV.innerHTML = `<strong>${verpvolume.toFixed(5)}</strong> m&sup3; `
};

function calcverpVstang(Wverpvolume) {
    verpVstang.innerHTML = `<strong>${Wverpvolume.toFixed(5)}</strong> m&sup3; `
};

function calcverschil(verschilvolume) { 
    verschil.innerHTML = `<strong>${verschilvolume.toFixed(5)}</strong> m&sup3; `
};