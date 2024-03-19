function Main()
{
    // let value = 10;
    // let objValue = { name: "Akshaya" };
    let arrValue = [1, 2, 3];

    // ChangeValue(value);
    // ChangeObject(objValue);
    ChangeArray(arrValue);

    // console.log(value);
    // console.log(objValue);
    console.log(arrValue);
}

function ChangeValue(value)
{
    value += 20;

    console.log(value);
}

function ChangeObject(objValue)
{
    objValue.name = "Jenifar";

    console.log(objValue);
}

function ChangeArray(arrValue)
{
    arrValue.push(44);

    console.log(arrValue);
}

Main();