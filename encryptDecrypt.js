let alphabet = "abcdefghijklmnopqrstuvwxyz";

let encryptStr = (str) => {
  let lowerStr = str.toLowerCase();
  newString = "";
  for (let i in lowerStr) {
    let currentLetter = lowerStr[i];
    currentIndex = alphabet.indexOf(currentLetter);
    newIndex = currentIndex - 3;
    if (currentLetter === " ") {
      newString += currentLetter;
    } else if (newIndex < 0) {
      newIndex += 26;
      newString += alphabet[newIndex];
    } else if (newIndex > 25) {
      newIndex -= 26;
      newString += alphabet[newIndex];
    } else if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }
  return newString;
};

console.log("FINAL RESULT", encryptStr("Hi there I am Stepan"));

let decryptString = (str) => {
  let lowerStr = str.toLowerCase();
  newString = "";
  for (let i in lowerStr) {
    let currentLetter = lowerStr[i];
    currentIndex = alphabet.indexOf(currentLetter);
    newIndex = currentIndex + 3;
    if (currentLetter === " ") {
      newString += currentLetter;
    } else if (newIndex < 0) {
      newIndex += 26;
      newString += alphabet[newIndex];
    } else if (newIndex > 25) {
      newIndex -= 26;
      newString += alphabet[newIndex];
    } else if (str[i] === str[i].toUpperCase()) {
      console.log("current letter", str[i]);
      newString += alphabet[newIndex].toUpperCase();
      console.log("uppercase", alphabet[newIndex].toUpperCase());
    } else {
      newString += alphabet[newIndex];
    }
  }
  return newString;
};

console.log(decryptString("Ef qebob F xj Pqbmxk"));
