var _ = require('lodash')

export var bubblesortBasic = (displayFunction, boxArray) => {
  console.log('bubbleshort called')
  for(var i = 0; i < boxArray.length; i++) {
    for(var j = 1; j < boxArray.length; j++) {
      if(boxArray[j - 1].value > boxArray[j].value) {
        boxArray = swap(boxArray, j - 1, j)
        displayFunction(boxArray.slice(0))
      }
    }
  }
  return boxArray
}

var swap = (array, i, j) => {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array
}

export var insertionSort = (displayFunction, boxArray) => {
  for(var i = 0; i < boxArray.length; i++) {
    var temp = boxArray[i];
    var j = i - 1;
    while (j >= 0 && boxArray[j].value > temp.value) {
      boxArray[j + 1] = boxArray[j];
      j--;
    }
    boxArray[j + 1] = temp;
    displayFunction(boxArray.slice(0))
  }
  return boxArray;
}

export var  selectionSort = (displayFunction, boxArray) => {
  for(var i = 0; i < boxArray.length; i++) {
    var min = i;
    for(var j = i + 1; j < boxArray.length; j++) {
      if(boxArray[j] < boxArray[min]) {
        min = j;
      }
    }
    if(i !== min) {
      boxArray = swap(boxArray, i, min);
      displayFunction(boxArray.slice(0))
    }
  }
  return boxArray;
}

export var mergeSortTopDown = (displayFunction, boxArray) => {
  console.log('mergeSortTopDown hit', boxArray)

  if(boxArray.length < 2) {
    return boxArray;
  }
  console.log('mergeSortTopDown hit', boxArray)

  const middle = Math.floor(boxArray.length / 2);
  const left = boxArray.slice(0, middle);
  const right = boxArray.slice(middle);

  console.log('left', left)
  console.log('right', right)

  displayFunction(left.concat(right))

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

export var mergeTopDown = (left, right) => {
  const array = [];

  while(left.length && right.length) {
    if(left[0].value < right[0].value) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}