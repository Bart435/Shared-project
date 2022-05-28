const mph = document.getElementById("mph");
const kmph = document.getElementById("kmph");

const speed = document.getElementById("speed").addEventListener("click", calcSpeed);

function calcSpeed() {
    

    kmph.innerText = mph.value * 1.609344
}