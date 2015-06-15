var ValueAccumulator = function() {
  var values = [];
  var accumulate = function(obj) {
    if (obj) {
      values.push(obj.value);
    }
    return values;
  };
  return accumulate;
};

var acc = ValueAccumulator();

var obje = {
  value: "name",
  arr: []
};

acc(1);
acc(obje);

console.log(acc());
