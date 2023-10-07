const numberOfChars = document.querySelector(".numberOfChars");
const firstChar = document.querySelector(".firstChar");
const lastChar = document.querySelector(".lastChar");
const lowerCase = document.querySelector(".lowerCase");
const upperCase = document.querySelector(".upperCase");
const capitalize = document.querySelector(".capitalize");
const user = document.querySelector(".name");
const answers=document.querySelectorAll(".answer");

//creating 6 function each one return different variation add V at the end of variable name refer to(param||value) &&
// add f to the name of variable refer to its function
function numberOfCharsf(numberOfCharsV) {
    return numberOfCharsV.length;
}
function firstCharf(firstCharV) {
    return firstCharV[0];
}
function lastCharf(lastCharV) {
    return lastCharV[lastCharV.length - 1];
}
function lowerCasef(lowerCaseV) {
    return lowerCaseV.toLowerCase();
}
function upperCasef(upperCaseV) {
    return upperCaseV.toUpperCase();
}
function capitalizef(capitalizeV) {
    return capitalizeV[0].toUpperCase() + capitalizeV.substring(1, capitalizeV.length);
}

user.addEventListener("keyup", _ => {
    const nameValue = user.value;
    if (nameValue) {
        numberOfChars.innerHTML = numberOfCharsf(nameValue);
        firstChar.innerHTML = firstCharf(nameValue);
        lastChar.innerHTML = lastCharf(nameValue);
        lowerCase.innerHTML = lowerCasef(nameValue);
        upperCase.innerHTML = upperCasef(nameValue);
        capitalize.innerHTML = capitalizef(nameValue);
    }
    else {
        answers.forEach(answer=>{
            answer.textContent="";
        })
    }
});
