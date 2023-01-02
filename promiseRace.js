const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2"), 2000);
});
const p1 = Promise.resolve("p1");
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p3"), 1000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p4"), 500);
});

async function promiseRace(ps) {
  return new Promise((resolve, reject) => {
    for (const p of ps) {
      p.then(resolve, reject);
    }
  });
}

promiseRace([p2, p3])
  .then((res) => console.log(res))
  .catch((e) => console.log("error", e));
