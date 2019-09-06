//10. Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
let num=parseInt(prompt("Input some number:"))
try {
    alert(Math.pow(num,2));
} catch (error) {
    console.log(error)
}

