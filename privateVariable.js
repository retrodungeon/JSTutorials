//Trying to access secret will return undefined
//while using getValue method will return secret
//value.
//Same with the setValue function.
//neat!

var getValue,
    setValue;
(function() {
  var secret = 0;

  getValue = function(){
    return secret;
  };

  setValue = function(v){
    secret = v;
  };

}());

//console.log(secret); - will cause a reference error Undefined

console.log(getValue()); // 0

setValue(123);
console.log(getValue()); // 123
