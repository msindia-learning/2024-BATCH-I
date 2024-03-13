let lst1 = [1, 2, 3, 4, 5];
let lst2 = [6, 7, 8, 9, 10];

//for(let index in lst1)
//{
//    //console.log(lst1[index]);
//}

//for(let index in lst2)
//{
//    //console.log(lst2[index]);
//}

lst1.forEach(x => PrintElement(x));
lst2.forEach(x => PrintElement(x));

lst1.forEach(function(value)
{
    PrintElement(value);
})

function PrintElement(value)
{
    console.log(value);

    PrintElement(value);
}