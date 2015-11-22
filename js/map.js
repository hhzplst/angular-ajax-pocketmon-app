var arr = [1,2,3,4];
var emptyArr = [];

var result = arr.map(function(el){
  emptyArr.push(el*2);
  return emptyArr;
});

console.log(result);