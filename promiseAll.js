async function promiseAll(ps) {
  return new Promise((resolve, reject) => {
    const xs = {};
    ps.forEach((p, i) => {
      p.then((x) => {
        console.log("p", p);
        console.log("x", x);
        console.log("i", i);
        xs[i] = x;
        // console.log("xs", xs);

        if (Object.keys(xs).length == ps.length) {
          resolve(Object.values(xs));
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
}

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

promiseAll([p1, p2, p3]);

Promise.all([p1, p2, p3]).then((res) => console.log(res));

// const p1 = new Promise((_, reject) => {
//   setTimeout(() => {
//     reject(new Error("e1"))
//   }, 1500)
// })

// const p2 = new Promise((_, reject) => {
//   setTimeout(() => {
//     reject(new Error("e2"))
//   }, 1000)
// })
