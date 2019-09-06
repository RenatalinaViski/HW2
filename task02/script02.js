//- С помощью prompt спросить у пользователя его возраст и подсчитать год рождения. Год рождения вывести с помощью alert.
let age=parseInt(prompt("How old are you?"))
alert((new Date).getFullYear()-age);