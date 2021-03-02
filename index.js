function breakOut(array, changeValue, stopValue) {
  for(var i=0;i<array.length;i++) {
    if(array[i] == stopValue) {break}
    else{array[i]=changeValue}
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for(var i=0; i<array.length; i++) {
    if(array[i]==skipValue) {continue}
    else {array[i]=changeValue}
  }
  return array
}


 function findBy (array, findFn) {
   var val = 0
   var numb = findFn(c)
   for (var i=0; i<array.length;i++) {
     if(array[i]==numb) {
       val = array[i]
       break
     }
     else {val = null}
   }
   return val
 }
