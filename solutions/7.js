// create a function that returns the largest number of increasing integers in an array

const getIndicesOfSmallerVals = (arr, startIndex) => {
  let indices = [];
  for (let i = startIndex; i > 0; i--) {
    if (arr[i-1] < arr[startIndex]) {
      indices.push(i-1);
    }
  };
  return indices;
}

const getMaxAmongIndices = (arr, indicesArray) => {
  let max = 0;
  indicesArray.forEach( (index) => {
    if (arr[index] > max) {
      max = arr[index];
    }
  })
  return max;
}

const getMax = (arr) => {
  let max = 0;
  for(let i=0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const getLongestInc = (arr) => {
  let finalResultsArray = [];
  for(let i=0; i < arr.length; i++) {
    let indicesArray = getIndicesOfSmallerVals(arr, i);
    let maxVal = getMaxAmongIndices(finalResultsArray, indicesArray);
    finalResultsArray[i] = maxVal + 1;
  }
  return getMax(finalResultsArray);
}

module.exports = {
  getLongestInc
};
