module.exports = function check(str, bracketsConfig) {
  let array = [];

  if (str.length % 2 !== 0) {
    return false;
  } else {
    for (let i = 0; i < str.length; i++) {
      for (let item of bracketsConfig) {
        if (str[i] == item[1] && array[array.length - 1] == item[0]) {
          array.pop();
        }
        else if (str[i] == item[0]) {
          array.push(str[i]);
        }
      }
    }
  }
  if (array.length == 0) {
    return true;
  }
  else {
    return false;
  }
}
// check('())(', [['(', ')']])