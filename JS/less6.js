// продолжение циклов  
// цикл for

/*
  создать цикл, который возвращает результат умножения числа х на n
*/
/*
let x = 5, n = 7, res = 0;
while (n)
{
    res += x;
    n--;
}
console.log(x + "*" + n + "=" + res);
*/

//____________________________________
//      итератор - меняет условие цикла
// for (выражение; условие; выражение) {блок кода}
/*
let x = 5, n = 7, res = 0;
for (let i=0; i < n; i++)
{
    res += x;
}

console.log(x + "*" + n + "=" + res);
*/


/*___________________________________
посчитать факториал числа n (n <= 20)
*/

let nn = Math.floor(Math.random() * 21);
let fact = 1;
for (let cnt = 0; cnt <= nn; cnt++)
{
    if (cnt)
    {
        fact *= cnt;
    }
    console.log(`${cnt}! = ${fact}`)
}


let day = Math.floor(Math.random() * 10);
let word = " ";
switch (day) {
    case 0:
        word =  "Вс";
        break;
    case 1:
        word =  "Пн";
        break;
    case 2:
        word =  "Вт";
        break;
    case 3:
        word =  "Ср";
        break;
    case 4:
        word =  "Чт";
        break;
    case 5:
        word =  "Пт";
        break;
    case 6:
        word =  "Сб";
        break;
    default:
        word = "Che";
}
console.log(day + `: ` + word);

// ДЗ - решето эратосфена
/*
1) с помощью цикла написать программу возмодящую число x в степень s, результат выводить каждую итерацию цикла
   2 ** 10
   2
   4
   8
   16
   .. 
   1024

2) Дано число х  и число у рандомные
   Написать программу, к-я выводит 10 целых чисел, не меньше х и делящихся на у нацело
   х = 11
   у = 2
   12 14 16 18 20 22 24 26 28 30

3) Вес 1 яблока = 100 г
   Вес одного апельсина = 150 г
   Вес банана = 170 г
   нам предлагают несколько яблок или несколько апельсинов или несколько бананов
   взять то что весит больше
   1 яб или 1 банан или 3 ап - 3 ап => вывести че взял
   
4)  Данно кол-во килобайт (> 10000)
   написать программу к-я говорит сколько мб или гб и мби кб занимает заданное количество*/