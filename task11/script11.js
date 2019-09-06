// 11. Дошли? Прекрасно.
// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

// Спрашиваем у пользователя через prompt число.
// Если пользователь ввёл 10h, то мы выводим ему количество секунд за 10 часов.
// Если пользователь ввёл 10d, то мы выводим ему количество секунд за 10 дней.
// Если пользователь ввёл 10w, то мы выводим ему количество секунд за 10 недел.
// Если пользователь ввёл 10m, то мы выводим ему количество секунд за 10 месяц.
let result=null
let num=prompt("Input your's number:")
let indexSimbol=num.charAt(num.length-1)
switch(indexSimbol){
case 'h':
   result=parseInt(num)*3600
   break;
case 'd':
    result=parseInt(num)*86400
    break;
case 'w':
    result=parseInt(num)*604800
    break;
case 'm':
    result=parseInt(num)*2592000
    break;
default:
    break;
}
console.log(result)
