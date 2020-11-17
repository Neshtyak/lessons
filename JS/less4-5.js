//  Циклы

let apples = 5;

while (apples)
{
    console.log(`nom`);
   //apples = apples - 1;
   apples -= 1;  //итератор а весь цикл - итерация
}
console.log(`noo my ampple collemction(((`)



let dream = 3000000; // однушка в подмосковье
let cash = 0;
let salary = 15000;
let age = 18;
let daysPerMonth = 30;
let month = 12;
let housePay = 2343.86;
let branch = 200; //200-240
// каждый год зарплата растет на 10%;
// во сколько лет чел накопит на однушку

while (cash < dream)
{
    let mn = 0;
    while (mn < month)
    {
        let days = 0
        while (days < daysPerMonth)
        {
            cash -= Math.floor(Math.random() * 41 + branch);
            days++;
        }
        
        mn += 1;
        cash += salary;
        cash -= housePay;
    }
    age += 1;
    //salary = salary * 1.1;
    salary = salary + 1000;
    salary = +salary.toFixed(2);
    cash = +cash.toFixed(2);
  //  branch += 100;
}
console.log(`В ${age} зарабатывает ${salary} у.е. и наконец накопил ${cash} рублей на однушку в подмосковье`)