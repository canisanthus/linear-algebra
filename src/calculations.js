Matrix.prototype.getSum = function(axis) {
  var _getSum = function(that) {
    var thisData = that.data,
      rows = that.rows,
      cols = that.cols;

    var arr = new Array(rows);
    for (var i = 0; i<rows; ++i) {
      var sum = 0;
      for (var j = 0; j<cols; ++j) {
        sum += thisData[i][j];
      }
      arr[i] = sum;
    }
    return arr;
  };

  if (axis === 0) {
    return new Matrix(_getSum(this.trans()));
  } else if (axis === 1) {
    return new Matrix(_getSum(this));
  } else if (axis === null || axis === undefined) {
    var arr = _getSum(this);
    var sum = 0;
    for (var i = 0; i<arr.length; ++i) {
      sum += arr[i];
    }
    return sum;
  } else {
    _throwError('[getSum] axis is ' + axis);
  }
};


Matrix.prototype.getNorm = function() {
 var thisData = this.data,
   rows = this.rows,
   cols = this.cols;

 var nnorm = 0;

 for (var i = 0; i<rows; ++i) {
   for (var j = 0; j<cols; ++j) {
     nnorm += Math.pow(Math.abs(thisData[i][j]), 2);
   }
 }
 
 return Math.sqrt(nnorm);
};
