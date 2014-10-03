var myReverse = function(array) {
  var backWards = [];
  do {
    value = array.pop();
    backWards.push(value);
  } while (array.length>0);
  // having trouble using slice the way expected.
  return backWards;
};
var oldArray = ['a','b','c','d'];
var newArray = myReverse(oldArray);
console.log(newArray)
