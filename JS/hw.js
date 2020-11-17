// ДЗ - решето эратосфена
/*
1) с помощью цикла написать программу возводящую число x в степень s, результат выводить каждую итерацию цикла
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
   написать программу к-я говорит сколько мб или гб и мби кб занимает заданное количество
*/

//  1
let x = 2;
let s = 10;
let y=s-(s-1);
let z=0;

console.log(x);
console.log(y);
for(let i=0;i<s;i++) {
   z=Math.pow(x,y);
   y++;
   console.log(z);
}  




// 2
let x=10;
let y=3;
let z=x+1;

for(let i=0;i<10;) {
   if(z/y==0) {
      console.log(z);
      z=z+1; 
      i=i+1;
   }      
   else {
   z=z+1;
   }   
}  
    
    

// 3
let apple=100;
let orange=150;
let banana=170;
let colA=16, colO=10, colB=7;
let vapple=apple*colA;
let vorange=orange*colO;
let vbanana=banana*colB;

if(vapple>vorange && vapple>vbanana){
        console.log('Яблок больше берем яблоки')
}   
else if(vorange>vapple && vorange>vbanana) {
   console.log('Апельсинов больше берем апельсины')
}
else {
   if(vapple==vorange || vapple==vbanana || vorange==vbanana) {
      console.log("Всё поровну сложно выбрать(")
   }
   else {
      console.log("Бананов больше берем бананы")
   }
}


//4
