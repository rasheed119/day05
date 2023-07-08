const prime = function (arr) {
  var prime = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      prime.push(arr[i]);
    }
  }
  return prime;
};
var arr = [10, 2, 3, 98, 45, 76, 35, 14];
console.log(prime(arr));

//Arrow function;
const prime = (arr) => {
  var prime = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      prime.push(arr[i]);
    }
  }
  return prime;
};
var arr = [10, 2, 3, 98, 45, 76, 35, 14];
console.log(prime(arr));

//IIFE

(function () {
  var arr = [10, 2, 3, 98, 45, 76, 35, 14];
  var prime = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      prime.push(arr[i]);
    }
  }
  console.log(prime);
})();
