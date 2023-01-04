const isBalanced = (str) => {
  let hashMap = {
    "[": "]",
    "(": ")",
    "{": "}",
  };
  let stack = [];
  for (let ch of str) {
    // console.log("ch", ch);
    if (hashMap[ch]) {
      //   console.log("hash ch", hashMap[ch]);
      stack.push(hashMap[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isBalanced("[(({))()]"));
