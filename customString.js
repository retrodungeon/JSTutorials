function MyString(str) {

  this.length = str.length;

  this.charAt = function(pos) {
    return str[pos];
  };

  /**
   * Concatenate string with given string
   * @param {String} string string to concat with
   */
  this.concat = function(string) {
    return str + string;
  }

  this.reverse = function( ) {
    var newStr = '';
    for(var i = str.length - 1 ; i >= 0; i-=1) {
      newStr += str[i];
    }
    return newStr;
  }

  this.slice = function(n1, n2){
    var o = '';
    for ( var i = n1; i <= n2; i++){
      o += str[i];
    }
    return o;
  }
}

var s = new MyString("stoopit");
s.slice(1,4);
