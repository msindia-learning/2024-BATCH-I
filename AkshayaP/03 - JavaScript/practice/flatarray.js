let Akshaya = [[[7, [23]], [90, 42]], [232, 343], 87, [], 533, [4, [1, 2], 42], [[90]]];

while(Akshaya.length > 0)
{
    if(typeof Akshaya[0] == "number")
    {
        console.log(Akshaya[0]);
        Akshaya.shift();
    }
    else
    {
        Akshaya.unshift(...Akshaya.shift());
    }
}