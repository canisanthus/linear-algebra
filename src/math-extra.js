Matrix.prototype.softmax = function() {
  var mat, sum, max = this.getMax();

  mat = this.eleMap(function(v) { return Math.exp(v - max); });
  sum = mat.getSum();
  return mat.eleMap(function(v) { return v / sum; });
};

Matrix.prototype.softmax_ = function() {
  var mat, sum, max = this.getMax();

  this.eleMap_(function(v) { return Math.exp(v - max); });
  this.getSum();
  return this.eleMap_(function(v) { return v / sum; });
};
