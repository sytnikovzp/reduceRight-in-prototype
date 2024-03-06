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
  this.length = args.length;
  if (args.length) {
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
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
    let result = initialValue;
    let currentIndex = this.length - 1;

    if (!initialValue) {
      result = this[this.length - 1];
      currentIndex = this.length - 2;
    }

    for (let i = currentIndex; i >= 0; i--) {
      if (i in this) {
        result = callback(result, this[i], i, this);
      }
    }

    return result;
  };
}

// Verify method
const myTestArray1 = new MyArray(1, 2, 3, 4, 5, 6, 'test');
const resultReduceRight = myTestArray1.reduceRight(
  (result, currentValue) => result + currentValue,
  100
);

console.log(resultReduceRight);
