function breakOut(array, changeValue, stopValue) {
  for(i=0;i<array.length;i++) {
    if(array[i] == stopValue) {break}
    array[i]=changeValue[i]
  }
  return changeValue
}