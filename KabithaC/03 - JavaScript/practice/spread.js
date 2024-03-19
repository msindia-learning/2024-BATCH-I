let kabitha = [[[7, [23, 23], 22], [3, 42]], [232, 343, 53], [], 43, 533, [[5]]];
while(kabitha.length > 0)
{
    let Value;

    if(typeof kabitha[0] == "number")
    {
        Value = kabitha[0];
        console.log(Value);
        kabitha.shift();
    }

    else
    {
        Value = kabitha.shift();
        kabitha.unshift(...Value);
    }
}
