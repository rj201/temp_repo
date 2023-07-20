let arr = [4, 5, 10, 24, 3, 9];
let target = 8;

function findUnOrderedArrayIndices(arr, target) {
  const map_array = {};

  for (let i = 0; i < arr.length; i++) {
    const value = target - arr[i];

    // If the value present in the map_array
    if (map_array[value] !== undefined) {
      return [map_array[value], i];
    }

    // Store the current index in the map_array
    map_array[arr[i]] = i;
  }

  return [-1,-1]; 
}

const indices = findUnOrderedArrayIndices(arr, target);
console.log(indices);