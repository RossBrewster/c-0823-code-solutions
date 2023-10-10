const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const prices1 = prices.map((x) => {
  const newObject = {
    price: x,
    salesPrice: x / 2,
  };
  return newObject;
});

console.log(prices1);

const prices3 = prices.map((x) => '$' + x.toFixed(2));

console.log(prices3);
