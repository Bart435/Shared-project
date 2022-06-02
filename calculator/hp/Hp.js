//Inputs
const vp = document.getElementById("Vp")
const nv = document.getElementById("Nv")
const n = document.getElementById("n")
const nmh = document.getElementById("Nmh")
const bar = document.getElementById("bar")
const tpomp = document.getElementById("Tpomp")

//Outputs
const outputQvthp = document.getElementById("qvthp")
const outputQveffp = document.getElementById("qveffp")
const outputNtotp = document.getElementById("Ntotp")
const outputQvlekp = document.getElementById("qvlekp")
const outputPpompas = document.getElementById("Ppompas")
const outputPthp = document.getElementById("Pthp")
const vpStop = document.getElementById("vpStop")
const barStop = document.getElementById("barStop")

//Button
const hp = document.getElementById("hp").addEventListener("click", calc)

function calc(){
    //Pre-Calculations
    let vpm = parseInt(vp.value) / 1000000
    let qvthp = vpm * parseInt(n.value)
    let qveffp = qvthp * parseFloat(nv.value)
    let ntotp = parseFloat(nv.value) * parseFloat(nmh.value)
    let ppompas = parseInt(tpomp.value) * 2 * 3.14 * parseInt(n.value)
    let barToNM = parseInt(bar.value) * 100000   //bar to n/m3

    //SOLVING CALCULATIONS
    calcQvthp(qvthp)
    calcQveffp(qveffp)
    calcNtotp(ntotp)
    calcQvlekp(qvthp, qveffp)
    calcPpompas(ppompas)
    calcPthp(barToNM)
    calcStopOne(vpm)
    calcBarStop(barToNM)
}

function calcQvthp(qvthp){
    
    outputQvthp.innerHTML = `<strong>${qvthp}</strong> m^3/sec | <strong>${((qvthp) * 1000 * 60).toFixed(2)}</strong> l/min`
}
function calcQveffp(qveffp){
    outputQveffp.innerHTML = `<strong>${qveffp}</strong> m^3/sec | <strong>${(qveffp  * 1000 * 60).toFixed(2)}</strong> l/min`

}
function calcNtotp(ntotp){
    outputNtotp.innerHTML =`<strong>${ntotp}</strong> &eta;`
}
function calcQvlekp(qvthp, qveffp){
    outputQvlekp.innerHTML = `<strong>${(qvthp - qveffp)}</strong> m^3/sec | <strong>${((qvthp - qveffp) * 1000 * 60).toFixed(2)}</strong> l/min`
}
function calcPpompas(ppompas){
    outputPpompas.innerHTML = `<strong>${ppompas.toFixed(2)}</strong> W | <strong>${(ppompas / 1000).toFixed(2)}</strong> kW`
}
function calcPthp(barToNM){
    outputPthp.innerHTML = ``
}
function calcStopOne(vpm){
    vpStop.innerHTML = `<strong>${vpm}</strong> m^3`
}
function calcBarStop(barToNM){
    barStop.innerHTML = `<strong>${barToNM}</strong> Nm`
}