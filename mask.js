function maskify(num) {
  //   return num.toString().split("").splice(-4, 4).join("");
  //   const arr = num.toString().split("");
  //   const firstPart = [];
  //   const secondPart = [];
  //   for (i = 0; i < arr.length - 4; i++) {
  //     arr[i] = "#";
  //     firstPart.push(arr[i]);
  //   }
  //   for (i = arr.length - 4; i < arr.length; i++) {
  //     secondPart.push(arr[i]);
  //   }
  //   return firstPart.join("") + secondPart.join("");
  //   return num.toString().split("").slice(-4);
  return num.toString().slice(-4).padStart(num.toString().length, "#");
}

console.log("end result", maskify("1847112344272727294949"));
