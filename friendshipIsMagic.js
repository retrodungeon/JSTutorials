var Graph = function (a, b, settings) {
    this.a = a;
    this.b = b;
    this.defaults = settings || {};
}

var G = new Graph(1, 2);

Graph.prototype = {
    doMagic: function () {
        return "Friendship is magic!";
    }
}

var C = new Graph(1, 2);
console.log(G);
console.log(C);
