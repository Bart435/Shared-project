// Inputs
const radius = document.getElementById("radius")
const height = document.getElementById("height")

// buttons
const calc = document.getElementById("calc").addEventListener("click", calcVolume)

// outputs
const volume = document.getElementById("volume")

function calcVolume() {
    // Pre-Calculations
    let radius2 = parseFloat(radius.value) * parseFloat(radius.value)
    let solve = (Math.PI) * (radius2) * parseFloat(height.value)
    
    volume.innerHTML = `<strong>${solve.toFixed(2)}</strong> cc`
}
