const removeFromArray = function(arr, ...args) {
  // convert args to array, write filter to return new array
  const remove = Array.from(args);
  return arr.filter(item => !(remove.includes(item)) );
};

// Do not edit below this line
module.exports = removeFromArray;
