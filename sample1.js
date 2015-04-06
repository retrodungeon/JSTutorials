function Calculator(){
    var methods = {
        "-" : function(a, b){
            return a - b;
        },
        "+" : function(a, b){
            return a + b;
        }
    }
    this.calculate = function(str){
        var res = str.split(" "),
            a = res[0],
            operation = res[1],
            b = res[2];
        return methods[operation](+a, +b);
    }
    this.addMethod = function(str, func){
        methods[str] = func;
    }
}
var calc = new Calculator;
console.log(calc.calculate("3 + 7"));
calc.addMethod('*', function(a, b){
    return a * b;
})
console.log(calc.calculate("5 * 5"));