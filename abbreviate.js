function abbreviate(str) {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join(".");
}

console.log("final", abbreviate("jon doe schmoe"));
