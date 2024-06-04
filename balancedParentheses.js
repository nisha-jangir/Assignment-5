function balanceParentheses(str) {
  var stack = [];

  var obj = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  for (var i = 0; i < str.length; i++) {
    var character = str[i];

    if (i === 0 && !obj[character]) {
      return false;
    }

    if (obj[character]) {
      stack.push(character);
    } else {
      var lastCharacterInStack = stack[stack.length - 1];

      if (obj[lastCharacterInStack] === character) {
       stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    return true;
  }

  return false;
}
