const sumAll = function(start, stop) {
  // reject non-number arguments
  if (typeof start != 'number' || typeof stop != 'number') return 'ERROR';
  // reject negative arguments
  if (start < 0 || stop < 0) return 'ERROR';
  // sum numbers
  let result = 0;
  switch (start < stop) {
    case true:
      for (let i = start; i <= stop; i++) {
        result += i;
      }
      return result;
    case false:
      for (let i = start; i >= stop; i--) {
        result += i;
      }
      return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
