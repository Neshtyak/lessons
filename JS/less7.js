/*
Функции
f(x) = 2x +5;

rgb()
url()
.toFixed()
.random()
*/


function niceBalls(eggs = 2, sausage = true, chese = false, tomato = false) {
    let recipe;
    recipe = "Берем сковороду и ставим на огонь.\n";
        if (sausage){
          recipe +=`Добавить колбасу\n`;
       }
        if (chese){
          recipe +=`i smel chese\n`;
       }
        if (tomato){
          recipe +=`томату херани-ка\n`;
       }
    recipe += `Разбить в сковороду ${eggs} яйца.\n`;
    recipe += "Добавить соль, перец, накрфть крышкой и ждать 5 мин.\n";
    recipe += "Жри яичницу из " + eggs + " яиц тварь";
    if (sausage) {
        recipe += " с колбаской";
        if(tomato && chese) {
            recipe += " с поминками и сырком";
        } else if (chese){
            recipe += " и сыром";
        }
        else if (tomato) {
            recipe += " с помиинками";
        }

    } else if (tomato){
        recipe += " с помидорами";
        if (chese){
            recipe += " с chese";
        }
    } else if (chese){
        recipe += "с chese";
    }
    
    recipe += " хавай";
    return recipe;

    //console.log(recipe);
}

niceBalls(1);
console.log(niceBalls(1, true, false, true));
niceBalls(4, true, true, true);

