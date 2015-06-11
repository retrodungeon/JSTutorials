var getRGB = function(hexStr) {

  if (typeof hexStr !== "string"){
    return TypeError("Expecting hexStr to be string value");
  };

  var arr = [],
      rgb;

  var firstHash = hexStr.slice(0,1);

  if(firstHash !== "#") {
    return Error("Expecting first symbol to be #");
  }


  rgb = hexStr.substr(1);

  if(rgb.length == 3) {
    arr[0] = rgb.slice(0,1) + rgb.slice(0,1);
    arr[1] = rgb.slice(1,2) + rgb.slice(1,2);
    arr[2] = rgb.slice(2,3) + rgb.slice(2,3);
  }

  if(rgb.length == 6) {
    arr[0] = rgb.slice(0,2);
    arr[1] = rgb.slice(2,4);
    arr[2] = rgb.slice(4,6);
  }


  console.log(arr);
  for(var i = 0; i < arr.length; i++){
    arr[i] = parseInt(arr[i], 16);
  }
  console.log(arr);

  rgb = "rgb(" + arr + ")";
  return rgb;
};

getRGB("#004400");
