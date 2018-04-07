function swap(list, firstIndex, secondIndex){
    var temp = list[firstIndex];
    list[firstIndex] = list[secondIndex];
    list[secondIndex] = temp;
}

function bubbleSort(array) {

  let length = array.length - 1;

  for(k = 0; k < length; k++) {

    for(let i = 0; i < (length - k); i++) {
      if (array[i] > array[i+1]) {
        swap(array, i, i+1);
      }
    }
  }

  return array;
}
