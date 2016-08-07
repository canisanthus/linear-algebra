Matrix.prototype.softmax = function(axis) {
  var _softmax, _softmaxByRow;
  _softmax = function(that) {
    var max, mat, sum;
    max = that.getMax();
    mat = that.eleMap(function(v) { return Math.exp(v - max); });
    sum = mat.getSum();
    return mat.eleMap(function(v) { return v / sum; });
  };

  _softmaxByRow = function(that) {
    var row, mat,
      thisData = that.data,
      rows = that.rows,
      result = new Array(rows);
    for (row=0; row<rows; ++row) {
      mat = new Matrix(thisData[row])
      result[row] = _softmax(mat).toArray()[0];
    }
    return new Matrix(result);
  };

  if (axis === 0) {
    return _softmaxByRow(this.trans()).trans();
  } else if (axis === 1) {
    return _softmaxByRow(this);
  } else if (axis === null || axis === undefined) {
    return _softmax(this);
  }
};

Matrix.prototype.softmax_ = function(axis) {
  var _softmax, _softmaxByRow;
  _softmax = function(that) {
    var max, mat, sum;
    max = that.getMax();
    that.eleMap_(function(v) { return Math.exp(v - max); });
    sum = that.getSum();
    return that.eleMap_(function(v) { return v / sum; });
  };

  _softmaxByRow = function(that) {
    var row, mat,
      thisData = that.data,
      rows = that.rows;
    for (row=0; row<rows; ++row) {
      mat = new Matrix(thisData[row])
      thisData[row] = _softmax(mat).toArray()[0];
    }
    return that;
  };

  if (axis === 0) {
    return _softmaxByRow(this.trans()).trans();
  } else if (axis === 1) {
    return _softmaxByRow(this);
  } else if (axis === null || axis === undefined) {
    return _softmax(this);
  }
};

/**
 * Calculate the ReLU function of all the elements.
 *
 * https://en.wikipedia.org/wiki/Rectifier_(neural_networks)
 */
Matrix.prototype.relu = function() {
  var thisData = this.data,
    rows = this.rows,
    cols = this.cols;

  var row, col, result = new Array(rows);

  for (row=0; row<rows; ++row) {
    result[row] = new Array(cols);

    for (col=0; col<cols; ++col) {
      result[row][col] = Math.max(0, thisData[row][col]);
    }
  }

  return new Matrix(result);
};





Matrix.prototype.relu_ = function() {
  var thisData = this.data,
    rows = this.rows,
    cols = this.cols;

  var row, col;

  for (row=0; row<rows; ++row) {
    for (col=0; col<cols; ++col) {
      thisData[row][col] = Math.max(0, thisData[row][col]);
    }
  }

  return this;
};
