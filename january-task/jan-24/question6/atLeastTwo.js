const isEven = (num) => { 
    return num % 2 === 0;
  };
  const atLeastTwo = (array, callback) => array.filter(callback).length >= 2;
  console.log( atLeastTwo([4, 7, 3, 1], isEven));
  console.log( atLeastTwo([2, 5, 8, 1], isEven));