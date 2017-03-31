/*jshint esversion: 6*/

module.exports = (a) => {
  var score = 0;
  if (Array.isArray(a) !== true) {
    return false;
  } else if (a.length === 0) {
    score = -1;
    return score;
  }
  for (var i = 0; i < a.length; i++) {
    if (typeof (a[i]) !== 'number' || a[i] > 20) {
      return false;
    } else if (a[i] < 5 && a[i] !== 0) {
      score += 10;
    } else if (a[i] >= 5 && a[i] <= 10) {
      score += 5;
    }
    score += 0;
    if (score === (a.length * 10)) {
      score += 100;
    }
  }
  return score;
};