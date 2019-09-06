// - Разберите пример. Добавьте условие отрицательного возраста в пример выше. Расставьте недостающие (но синтаксически необязательные) фигурные скобки.
// Выкиньте лишнее из текущего кода

var age = prompt("Сколько вам лет?")
if (age < 18) {
    alert("школьник")
} else if (age > 18 && age < 30) {
    alert("молодеж")
} else if (age > 30 && age < 45) {
    alert("зрелость")
} else if (age > 45 && age < 60) {
    alert("закат")
} else if (age > 60) {
    alert("как пенсия?")
} else {
    alert("то ли киборг, то ли ошибка")
}

///////////
let ageMy =parseInt(prompt("Сколько вам лет?"))
if(ageMy<=0 || ageMy>120){
 alert("You made a mistake")
}
else{
    if(ageMy <7){
        alert("детский садик")
    } else if (ageMy>=7 && ageMy < 18) {
        alert("школьник")
    } else if (ageMy >= 18 && ageMy < 30) {
        alert("молодеж")
    } else if (ageMy >= 30 && ageMy < 60) {
        alert("зрелость")
    } else {
       alert("как пенсия?")
    } 
}