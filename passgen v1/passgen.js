// inputs
const first = document.getElementById("first");
const last = document.getElementById("last");
const tel = document.getElementById("tel");
// outputs
const pass = document.getElementById("pass");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
// buttons
const output = document.getElementById("output").addEventListener("click", password);

function password() {
    // pre-action
    firstEnd = first.value.toLowerCase().substring(0, 2);
    lastEnd = last.value.toLowerCase().substring(0, 3);
    telEnd = tel.value.substring(0, 4);
    endResult = `${firstEnd}.${lastEnd}.${telEnd}`;

    let t = false;
    let e = false;
    let s = false;
    // Checking if first name is longer than 3
    if (first.value.length > 3) {
        t = true;
        one.innerHTML = "&#10004;";
    }else {
        one.innerHTML = "&#10006;";
    };
    // checking if last name is longer than 4
    if (last.value.length > 4) {
        e = true;
        two.innerHTML = "&#10004;";
    }else {
        two.innerHTML = "&#10006;";
    };
    // checking if tell is longer than 5
    if (tel.value.length > 5) {
        s = true;
        three.innerHTML = "&#10004;";
    }else {
        three.innerHTML = "&#10006;";
    };
    // if all values are correct output end result
    if (t, e ,s) {
        pass.innerHTML = `<strong>${endResult}</strong>`;
    };
}
