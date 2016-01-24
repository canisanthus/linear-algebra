/**
 * @fileOverview  High precision version.
 */




/**
 * Sum every element.
 * @return {Number}
 */
Matrix.prototype.getSum = function(value) {
  var thisData = this.data,
    rows = this.rows,
    cols = this.cols;

  var sum = new Array(rows * cols);

  for (var i = 0, jBase = 0; i<rows; ++i, jBase += cols) {
    for (var j = 0; j<cols; ++j) {
      sum[jBase + j] = thisData[i][j];
    }
  }
  
  return adder(sum); 
};

/**
 * Get the mean of every element.
 * @return {Number}
 */
Matrix.prototype.getMean = function() {
  return this.getSum() / (this.rows * this.cols);
};
