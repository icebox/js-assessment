exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    var output = fn.apply(null, arr);
    return output;
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures : function(arr, fn) {

    var outputAry = [];

    var closureFunction = function(val) {
      return function() {
        return fn(val);
      };
    };

    for (var x=0; x < arr.length; x++) {
      outputAry.push(closureFunction(arr[x]));
    }

    return outputAry;
  },

  partial : function(fn, str1, str2) {

    return function(str3) {
      return fn.call(null, str1, str2, str3);
    };
  },

  useArguments : function() {
    var sum = 0;

    for (var x=0; x < arguments.length; x++) {
      sum += arguments[x];
    }

    return sum;
  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
