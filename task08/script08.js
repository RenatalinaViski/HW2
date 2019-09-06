//- Поэкспериментируйте с confirm, определите тип данных, который он возвращает, и конкретные значения этого типа данных.
let str=confirm("Beer or not two beer?");

console.log(str);
console.log(typeof str);
if(str){
    alert("Ofcourse two beer!!!!!!)))))")
}
else{
    alert("You are very boring...")
}

confirm("Do you like kandy?")? alert("Me too ;)"): (confirm("Are you like meet?")? (confirm("And beer?")? alert("Good boy!"):alert("Just taste it!")):alert("Vegeterian..."))