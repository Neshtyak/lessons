/*
  *
 ***
*****
*/
/*

function triangle(n) {
let star = "";
let simple = "";
let result= "";

for ( let i = 0; i < n; i++) {
    simple = "";
 //   if (i === 0) {
 //      star +="*";
 //   } else {
 //       star += "**";
  //  }

star += i ? "**" : "*";

    for(let j = 0; j < n - 1 - i; j++) {
        simple += " ";

    }
    result += simple + star + "\n";
  }
  return result;
}
console.log(triangle(5));

*/

/*
  Правильно написать окончание слова в зависимости от числа 
*/

/*
  день 1, 21, 31              !11
  дня 2-4, 22-24, 32-34       !12-14
  дней 0, 5-20, 25-30, 35-40 
*/

let a = getNumber(1001);

 function getWord(a, w0, w1, w2){
   if (a % 100 >= 11 && a % 100 <= 14 ) {
       return w0;
   } else if (a % 10 === 1) {
        return w1;
    } else if ( a % 10 === 2 || a % 10 === 3 || a % 10 === 4) {
        return w2;
    } else {
        return w0;
    }
   
}
console.log(`До нг осталось ${a} ${getWord(a, "дней", "дня", "день")}`);