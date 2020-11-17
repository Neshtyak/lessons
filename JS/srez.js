//let n = Math.floor(Math.random() * 5); 
/*
function traangle (n = 1) {

    let str = `    *\n`;  
    af(n = 2);
    srt += `   ***\n`;
 }

 */

function triangle(n = 5) {
  let a = 0, b = 0;
  while (a < n) {
      space = " ";
      star = ""; 
      for (b = 0; b < n - a; b++){
      space += " "; 
      }
      for (b = 0; b < 2 * a + 1; b++){
      star += "*";
      }
     console.log(space + star); 
     a++; 
    }
}
console.log(triangle(5));


/*//
function triangle(length) {
    let line = "";
    for (let i = 1; i <= length; i++) {
      line += " *";
    }
    return line + "\n";
  }
  
  triangle(7);
  console.log(triangle(7));
  */