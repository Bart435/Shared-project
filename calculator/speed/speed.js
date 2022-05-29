const mph = document.getElementById("mph");
const kmph = document.getElementById("kmph");

const speed = document.getElementById("speed").addEventListener("click", calcSpeed);

function calcSpeed() {
    

    kmph.innerHTML = `<strong>${mph.value * 1.609344}</strong>`
}