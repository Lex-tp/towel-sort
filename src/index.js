
// You should implement your task here.

module.exports = function towelSort(matrix) {

  let index = 1;
  if (matrix != undefined && matrix.length > 0) {
    do {
      matrix[index] = matrix[index].sort((a, b) => { return b - a; });
      index += 2;
    }
    while (matrix.length > index);
    return matrix.flat();
  } else {
    return [];
  }
}
