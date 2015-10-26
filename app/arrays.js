exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

    for(var x=0; x < arr.length; x++) {
      if (arr[x] === item) {
        return x;
      }
    }
    // else
    return -1;
  },

  sum : function(arr) {
    var sum = 0;

    for(var x=0; x < arr.length; x++) {
      sum += parseInt(arr[x]);
    }

    return sum;
  },

  remove : function(arr, item) {
    var output = [];

    for(var x=0; x < arr.length; x++) {
      if (item !== arr[x]) {
        output.push(arr[x]);
      }
    }

    return output;
  },

  removeWithoutCopy : function(arr, item) {

    var length = arr.length;

    for(var x=0; x < length; x++) {
      if (item === arr[x]) {
        arr.splice(x, 1);
        // reduce length and count
        x -=1;
        length -=1;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {

    var cnt = 0;

    for(var x=0; x < arr.length; x++) {
      if (item === arr[x]) {
        cnt++;
      }
    }

    return cnt;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {
    var output = [];

    for(var x=0; x < arr.length; x++) {
      output.push(arr[x] * arr[x]);
    }

    return output;
  },

  findAllOccurrences : function(arr, target) {

    var output = [];

    for(var x=0; x < arr.length; x++) {
      if (target === arr[x]) {
        output.push(x);
      }
    }

    return output;
  }
};
