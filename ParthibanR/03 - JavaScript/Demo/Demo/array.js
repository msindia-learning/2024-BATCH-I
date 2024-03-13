let parthiban = [[[7, [], 22], [90, [1, 2, [3, 4, [5, 6], 42]], [232], [], 43, [0], [[6]]]]];

while (parthiban.length > 0) {
    if (typeof parthiban[0] == "number") {

        console.log(parthiban[0]);
        parthiban.shift();
    }


    else {

        parthiban.unshift(...parthiban.shift());
    }
}






