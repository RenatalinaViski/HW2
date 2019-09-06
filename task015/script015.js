//- Сделайте калькулятор, который позволит вам исходя из информации о количества этажей в доме
// и количества квартир на этаже находить подъезд и этаж определенной квартиры по её номеру. 
//Например для 9этажного дома по 4 квартиры на этаж 81 квартира находится на 3м этаже третьего подъезда.

let floor=parseInt(prompt("Input count floor"))
let appartment=parseInt(prompt("Input count appartment on your's floor"))
let num=parseInt(prompt("Input number your's flat"))
let deside=null

label:for(let i=1; ;i++)
{    
    deside+=appartment*floor  //здесь прибавляю по одному подъезду и если уже номер квартиры стал меньше, начинаю считать этаж
    if(deside>=num)
    {
        deside-=appartment*floor //возращаюсь в начало подьезда, и начинаю прибавлять квартиры, что бы добраться до нужного этажа
        for(let f=appartment,j=1; ;f++,j++)// f- определяю как количество квартир на этаже, j-считаю этаж
        {
            deside+=appartment   
            if(deside>num)
           {   
                alert("Квартира распологается в "+i+ " подъезде на "+j+" этаже")
                break label;//выхожу из всех циклов
           }
        }
    }
}


