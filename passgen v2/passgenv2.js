// Inputs
const email = document.getElementById("email");
const website = document.getElementById("website");
// buttons
const btn = document.getElementById("btn").addEventListener("click", passGen);
const save = document.getElementById("save").addEventListener("click", saveFile);
// Outputs
const pass = document.getElementById("pass");
// checks
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
// set them false by default
let t = false;
let e = false;
let s = false;

var generatedPassword
function passGen() {
    // Generated random password
    generatedPassword = Math.random().toString(36).slice(2) +
    Math.random().toString(36).toUpperCase().slice(2);
    
    pass.innerHTML = generatedPassword;
    // Checks if generated password is present
    if (generatedPassword) {
        s = true;
        three.innerHTML = "&#10004;";
    }else {
        three.innerHTML = "&#10006;";
    };
}

function saveFile() {
    const password = generatedPassword
    // Checking if email is longer than 5
    if (email.value.length > 5) {
        t = true;
        one.innerHTML = "&#10004;";
    }else {
        one.innerHTML = "&#10006;";
    };
    // checking if website is longer than 3
    if (website.value.length > 3) {
        e = true;
        two.innerHTML = "&#10004;";
    }else {
        two.innerHTML = "&#10006;";
    };
    
    
    if (s) {
        if (t) {
            if (e) {
                const savedInfo = `${website.value} || ${email.value} || ${password} `
                window.alert(savedInfo);
            };         
        };
    };   
}