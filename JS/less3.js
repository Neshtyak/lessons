/*
let name;
console.log(name);

/* 
 undefined - тип данных для значений, которые еще не определили, т.е. ничего
 undefined => false

 null - пустое значение
 null => false
*/

/*
name = "Vitalya";

// условия

if(name !== "Serega") 
{
 console.log(`${name}, pozovi Seregu`);
}
else 
{
    console.log("Ale, Serega");
}
*/


/* 
  В зависимости от значения переменной age, выводить одну из следующих фраз:
  Если возраст < 18: "рано пахать"
  Если возраст от 18 до 65 (вкл): "Иди работай"
  Если возраст >18: "отдохни"
*/

/*
let age;
age = Math.floor(Math.random () * 100);

if(age < 18)
{
    console.log(`В ${age} рано пахать.`);
}
else if(age >= 18 && age <= 65)
{
    console.log(`Тебе ${age}? Иди работай.`);
}
else
{
    console.log(`Да какая работа в ваши ${age}, отдохни.`);
}
 */


/* 
  Даны три точки:
  все точки задаются рандомом не больше +/-30
  x1, y1 - Точка А
  x2, y2 - Точка B
  x3, y3 - Точка C
  1) Найти длину каждого отрезка АВ АС СВ
  2) Убедиться, что это треугольник (АВ + АС > CB)
  3) Если треугольник - посчитать площать и периметр
*/

let x1, x2, x3, y1, y2, y3;
let AB, BC, CA;
let S, P;

x1 = Math.floor(Math.random () * 61 - 30);
y1 = Math.floor(Math.random () * 61 - 30);

x2 = Math.floor(Math.random () * 61 - 30);
y2 = Math.floor(Math.random () * 61 - 30);

x3 = Math.floor(Math.random () * 61 - 30);
y3 = Math.floor(Math.random () * 61 - 30);

console.log(`Координаты точек A=(${x1},${y1}), B=(${x2},${y2}), C=(${x3},${y3}),`);


AB = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
BC = Math.sqrt((x3 - x2)**2 + (y3 - y2)**2);
CA = Math.sqrt((x3 - x1)**2 + (y3 - y1)**2);
 
console.log(`AB=${AB}, BC=${BC}, CA=${CA}`);

if((AB+BC > CA) || (AB+CA > BC) || (BC+CA > AB))
{
    P = AB + BC + CA;
    let q = ((AB + BC + CA) / 2);
    let S = Math.sqrt(q * (q - AB) * (q - BC) * (q - CA));
    console.log(`Это треугольник! Его периметр равен ${P}, площадь = ${S}`);
}
else
{
    console.log(`Это не треугольник!`);
}