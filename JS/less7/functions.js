function getNumber(max = 11, min = 0) {
   // let n = Math.random() * (max - min) + min;
   // n = Math.floor(n);
    return Math.floor(Math.random() * (max - min) + min);
}
function getRGB() {
    let red =getNumber(256);
    let green =getNumber(256);
    let blue =getNumber(256);
    return `rgb(${red},${green},${blue})`;
}

let cnt = getNumber(20,10);
//console.log(cnt);

console.log(getRGB());

//node functions.js
 
