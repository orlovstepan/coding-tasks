function createPhoneNumber(arr) {
  let firstThree = arr.slice(0, 3).join("");
  let secondThree = arr.slice(4, 7).join("");
  let thirdThree = arr.slice(7).join("");
  return `(${firstThree})${secondThree}-${thirdThree}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
