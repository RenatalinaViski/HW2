// 1. Напишите код вычисления суммы всех нечетных чисел от 0 до 
//заданного числа N
// - Спрашиваем у пользователя через prompt
// - Переводим в number(потому что из prompt мы получаем строку)
// - Дальше думаем сами
// В конце просто я должен увидеть сумму от 0 до N числа, который я ввёл

function summury(){
let str=prompt("Input some number");
let num=parseInt(str);
let summ=null;

for(let i=0; i<num; i++){
 if(i%2==1){
     summ+=i;
 }   
}
console.log(summ);
}
summury()