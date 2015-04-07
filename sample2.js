function f(a){
    console.log(a);
    console.log(arguments);
    var args = [].slice.call(arguments, 1);
    g.apply(this, args);   
}
function g(a, b, c) {
  console.log( a + b + (c || 0) );
}

f("тест", 1, 2);
f("тест2", 1, 2, 3);
