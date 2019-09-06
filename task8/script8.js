//8. Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите сумму всех charCode этой переменной
let str ='Привет, Мир!', sum=null
for(let i=0; i<str.length;i++){
    sum+=str[i].charCodeAt()     
}

console.log(sum)
