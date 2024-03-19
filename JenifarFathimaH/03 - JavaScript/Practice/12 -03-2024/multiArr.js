let jenifar = [[[7, 35, 21, 22], [3, 11, 42]], [232, [], 53], 87, 43, 533, [904, 82, 42], [[6]]];

while (jenifar.length >0 ) {
    if (typeof (jenifar[0]) == "number") {
        console.log(jenifar[0]);
        jenifar.shift(jenifar[0]);
    }
    else {
        jenifar.unshift(...jenifar.shift());
    } 
  
}
