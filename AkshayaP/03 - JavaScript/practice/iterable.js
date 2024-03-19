function myNumbers()
{
    let n = { value: 0 };

    return {
        next: function()
        {
            n.value += 10;
            return n;
        }
    };
}

// Create Iterable
const n = myNumbers();

let val = n.next(); // 10
val = n.next(); // 20
val = n.next(); // 30