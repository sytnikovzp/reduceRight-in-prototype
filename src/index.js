'use strict';

// Pseudocode ReduceRight
/* 
    array.reduceRight(callback, [startValue]);
    callback(previousValue, currentValue, index, array);
    if(startValue){
        previousValue = startValue;
        currentValue = array[array.lenght - 1];
    }else{
        previousValue = array[array.lenght - 1];
        currentValue = array[array.lenght - 2];
    }
*/

function MyArray(...args) {
  this.length = 0;
  if (args.length) {
    for (let i = 0; i < args.length; i++) {
      this.push(args[i]);
    }
  }
}

MyArray.prototype = new MyArrayProto();

function MyArrayProto() {
  this.push = function () {
    if (arguments) {
      for (let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
    }
    return this.length;
  };

  this.reduceRight = function (callback, initialValue) {
    if (initialValue) {
      result = initialValue;
      currentValue = this.length - 1;
      for (let i = currentValue; i >= 0; i--) {
        result = callback(result, this[i], i, this);
      }
    } else {
      let result = this[this.length - 1];
      let currentValue = this.length - 2;
      for (let i = currentValue; i >= 0; i--) {
        if (i in this) {
          result = callback(result, this[i], i, this);
        }
      }
    }
    return result;
  };
}

// Verify method
const myTestArray1 = [1, 2, 3, 4, 5, 6, 'text'];
const resultReduceRight = myTestArray1.reduceRight(
  (result, currentValue) => result + currentValue,
  100
);

console.log(resultReduceRight);
