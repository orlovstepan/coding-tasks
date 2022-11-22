//min-max

const numbers = [1, 10, 3, 2, 72, 3, 4, -1, 5, 6, 7, 8, 9];

const minMax = (arr) => {
  const numberMax = arr.reduce((a, b) => {
    return Math.max(a, b);
  }, 0);
  const numberMin = arr.reduce((a, b) => {
    return Math.min(a, b);
  }, 0);

  return [numberMax, numberMin];
};
// console.log("result", minMax(numbers));

// Excercise 1. Collect all videos from movieLists into a single array of {id, title} items:

let movieLists = [
  {
    listId: 1,
    videos: [
      {
        id: 70111470,
        title: "Die Hard",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
          },
        ],
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
          },
          {
            width: 140,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg",
          },
        ],
      },
    ],
  },
  {
    listId: 2,
    videos: [
      {
        id: 65432445,
        title: "The Chamber",
        boxarts: [
          {
            idth: 130,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg",
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
          },
        ],
      },
      {
        id: 675465,
        title: "Fracture",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
          },
          {
            width: 120,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg",
          },
          {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
          },
        ],
      },
    ],
  },
  {
    listId: 3,
    videos: [
      {
        id: 123,
        title: "Foo",
      },
      {
        id: 456,
        title: "Bar",
      },
    ],
  },
];

let newMovieList = movieLists.flatMap((movie) => {
  return movie.videos.map((data) => {
    return { id: data.id, title: data.title };
  });
});

// console.log(newMovieList);

// Exercise 2. Collect all item names from orders into a single array of string items:

const orders = [
  {
    orderId: 42,
    items: [
      { name: "soap", price: 1.99 },
      { name: "shampoo", price: 4.99 },
    ],
  },
  {
    orderId: 1337,
    items: [
      { name: "toothpaste", price: 5.59 },
      { name: "toothbrush", price: 8.99 },
    ],
  },
];

let stringsArr = orders.flatMap((order) => {
  return order.items.map((item) => {
    return item.name;
  });
});

// console.log(stringsArr);
