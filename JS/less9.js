// (+ 2 5 4 6 7) - сумма всех чисел внутри
/*
console.log(typeof 6);
console.log(typeof "str");
console.log(typeof null);
*/

let obj = {};

let capitals = {
    monako: "Monako", /* свойства объекта: значение */
    "Российская Федерация": "Москва",
    ukrine: "Kiev",
    france: "Paris"
}

capitals.italy = "Rome";
capitals.france = "Marsel";

console.log(capitals.italy);
console.log(capitals.france);

delete capitals.monako;
console.log(capitals);

/*
  Объект - неупорядоченный список свойст (пара ключ - значение)
*/

let cntr = "Российская Федерация";7
// sconsole.log(capitals.cntr); // не работает
console.log(capitals[cntr]);

// for in - обход по всем ключам (свойствам) объекта
for (let key in capitals) {   // для каждого свойства в обеъкте
    console.log("Страна " + key + ", столица - " + capitals[key]);
}

/*
  Дан циклб к-ый генерирует случайное число n (100) раз (0-10)
  Сколько раз получилось каждое число
  Найти самое частое число
*/

//декларируемая ф-я
function other() {
    //
}

// функциональное выражение
let getNumber = function (max = 10, min = 0){
    return Math.floor(Math.random() * (max - min) + min);

}

let numbers ={}

for (let i = 0; i < 100; i++) {
    let n = getNumber();
    if (numbers[n]){
        numbers[n] += 1;
    } else {
        numbers[n] = 1;
    }
}

console.log(numbers);