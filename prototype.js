var shape = {
  type: 'shape',
  getType: function() {
    return this.type;
  }
}

function Triangle(a,b,c) {

  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape;

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

Array.prototype.shuffle = function () {
  return this.sort(function () {
    return Math.random() - 0.5;
  });
};

[1,3,4,5].shuffle();
