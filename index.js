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
   for (var i=0; i<array.length;i++) {
     if(parseInt(array[i])==findFn) {
       val = array[i]
       break
     }
     else {val = array[i]}
   }
   return val
 }
