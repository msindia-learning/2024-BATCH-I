let object = {
    a: 20,
    b: 30,
    multiply: function()  {
        return console.log(this.a * this.b);
    }
};

object.multiply();

/*let object = {
    a: 20,
    b: 30,
    multiply:() => {
        console.log(this.a * this.b);
    }
};

object.multiply();*/ // it return NaN 