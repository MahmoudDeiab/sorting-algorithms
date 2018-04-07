function swap(list, firstIndex, secondIndex){
    var temp = list[firstIndex];
    list[firstIndex] = list[secondIndex];
    list[secondIndex] = temp;
}

function selectionSort(array) {

  let length = array.length;
  let minIndex;

  for(let k = 0; k < length; k++) {

    minIndex = k;

    for(let i = k+1; i < length; i++) {
      if (array[i] < array[minIndex]){
        minIndex = i;
      }
    }

    if (k !== minIndex){
      swap(array, k, minIndexIndex);
    }

  }

  return array;
}
