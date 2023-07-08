const title_caps = function (arr) {
  var caps = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
      const c = arr[i].charCodeAt(0);
      caps[i] = arr[i].replace(arr[i][0], String.fromCharCode(c - 32));
    } else {
      caps.push(name[i]);
    }
  }
  return caps;
};
var string = ["abdur", "rasheed"];
console.log(title_caps(string));

//Arrow function:

const title_caps = (arr) => {
  var caps = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
      const c = arr[i].charCodeAt(0);
      caps[i] = arr[i].replace(arr[i][0], String.fromCharCode(c - 32));
    } else {
      caps.push(name[i]);
    }
  }
  return caps;
};
var string = ["abdur", "rasheed"];
console.log(title_caps(string));

//IIFE

(function () {
  var arr = ["abdur", "rasheed"];
  var caps = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
      const c = arr[i].charCodeAt(0);
      caps[i] = arr[i].replace(arr[i][0], String.fromCharCode(c - 32));
    } else {
      caps.push(name[i]);
    }
  }
  console.log(caps);
})();
