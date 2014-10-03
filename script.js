console.log('stuff');

var myReverse = function(array) {
  var backWards = [];
  // array.forEach(function(value){
    value = array.pop();
    backWards.push(value);
    value = array.pop();
    backWards.push(value);
    value = array.pop();
    backWards.push(value);
    value = array.pop();
    backWards.push(value);
  // })
  // having trouble using slice the way expected.
  return backWards;
};
var oldArray = ['a','b','c','d'];
var newArray = myReverse(oldArray);
console.log(newArray)
