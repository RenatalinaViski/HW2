//- Сделайте калькулятор для расчета деления нацело двух чисел. Используйте Math.floor или альтернативы.
let firstNum=parseInt(prompt("Input some number"))
let secondNum=parseInt(prompt("Input second some number"))
alert(Math.floor(firstNum/secondNum)+" rounding to less")
alert(Math.ceil(firstNum/secondNum)+" rounding to top")
alert(Math.round(firstNum/secondNum)+" rounding to human understanding")

