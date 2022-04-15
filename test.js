function doThings (str) {
  var res = {};

  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }
    if (res[str[i]] === undefined) {
      res[str[i]] = 1;
    } else {
      res[str[i]]++
    }
  }

  return res;
}

var str = 'He shells sea shells by the sea shore'

console.log(doThings(str));
