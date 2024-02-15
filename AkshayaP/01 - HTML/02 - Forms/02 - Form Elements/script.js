function Add()
{
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");
    let result = document.getElementById("result");

    result.innerHTML = parseInt(value1.value) + parseInt(value2.value);
}