class Animal {
    constructor(tp, sx, yr, clr, nm) {
        this.color = clr;
        this.year = yr;
        this.name = nm;
        this.sex = sx;
        this.user = {};
        this.type = tp;
    }
    getInfo() {
        let age = 2020 - this.year;
        return `${this.type} ${this.name} с возрастом ${age} лет`
    }
}

let cat = {
    breed: "Brithan",
    color: "brown",
    birthYear: 2005,
    female: true,
    name: "Nora",
    user: {
        name: "Leksa",
        status: "ipoteka"
    },
    getInfo: function() {
        let age = 2020 - this.birthYear;
        return "Cat " + this.name + ", it's age - " + age + " years";
    }
}

//console.log(cat.user.name);
//console.log(cat.getInfo());

let parrot = new Animal("Пепук", "м ", "2018", "зелёный", "Кеша");
let rat = new Animal ("Крыса", "ж", "2019", "голубая", "Мышь");

console.log(parrot.getInfo());
console.log(rat.getInfo());

// Array - упорядоченный список значений 

let colors = ["red", "black", 256, true, "aaaaa", new Animal ("Крыса", "ж", "2019", "голубая", "Мышь"), "black"];

console.log(colors[3]);
console.log(colors.indexOf("black"));
console.log("Длина массива: " + colors.length);

let fruits = ["груша", "яблоко", "апельсин", "ананас"];

/*
    Методы массива:
    push(el) -добавить элемент в конец массива
    pop() - забрать последний элемент массива
    shift() - забрать первый элемент массива
    unshift() - добавить элемент в начало массива
    */

fruits.push(("b" + "a" + + "a").toLowerCase());
fruits.pop();
console.log(fruits);


/*
дано число  1 <= n < 100
Вывести в консоли массив из ряда фиббоначи до числа  n (включительно)

Все это сделать при помощи функции  
*/

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/*

Барило Михаил Викторович
Быковский Даниил Викторович
Валуев Александр Александрович
Гаврилов Никита Антонович
Голубев Тимон Викторович
Горбачев Кирилл Евгеньевич
Гусенков Александр Олегович
Искандаров Андрей Александрович
Ким Илья Дмитриевич
Магомедов Нажмутдин 
Можайский Сергей Сергеевич
Нешитова Анна Сергеевна
Паклеев Егор Дмитриевич
Панасюк Виктор Андреевич
Попов Марк Игоревич
Свирщ Алёна Олеговна
Соглаев Артём Вадимович
Солонников Александр Романович
Швецов Глеб Александрович  