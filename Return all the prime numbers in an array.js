const prime_value = function (arr) {
  var count = 0;
  var prime = [];
  var max_value = Math.max(...arr);
  for (var i = 0; i <= arr.length; i++) {
    for (var j = 1; j <= max_value; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count == 2) {
      prime.push(arr[i]);
    }
    count = 0;
  }
  return prime;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(prime_value(arr));

//Arrow functions :

const prime_value = (arr) => {
  var count = 0;
  var prime = [];
  var max_value = Math.max(...arr);
  for (var i = 0; i <= arr.length; i++) {
    for (var j = 1; j <= max_value; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count == 2) {
      prime.push(arr[i]);
    }
    count = 0;
  }
  return prime;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(prime_value(arr));

//IIFE

(function () {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var count = 0;
  var prime = [];
  var max_value = Math.max(...arr);
  for (var i = 0; i <= arr.length; i++) {
    for (var j = 1; j <= max_value; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count == 2) {
      prime.push(arr[i]);
    }
    count = 0;
  }
  console.log(prime);
})();
