//- Напишите код, который спрашивает те или иные вопросы с ответом "да"/"нет" с помощью confirm, и сохраняет ответы в переменных.
let arr=[]
arr[0]=confirm("Do you like cofee?")
arr.push(confirm("Do you like JS?"))
arr.push(confirm("Do you like PHP?"))
arr.unshift(confirm("Do you like C++?"))
arr.push(confirm("Do you like snow?"))
alert("I like all of them too ;)")
console.log(arr);