const Arr=[2,6,14,5,6,9]

//myEach()
function myEach(arr){
    return arr.forEach(x=>console.log(x));
 }

 console.log(myEach(print,Arr))

 //myMap()
 function myMap(arr){
    return arr.map(x=>x*2);
 }
  console.log(myMap(print,Arr))


 //myFilter()
 function myFilter(arr){
    return arr.filter(x=>x%2===0);
 }
console.log(myFilter(evenNum,Arr));


 //mySome()
 function mySome(arr){
    return arr.some(x=>x%3===0);
 }
 console.log(mySome(check,Arr));

 //myEvery()
 function myEvery(arr){
    return arr.every(x=>x<6);
 }
console.log(myEvery(checkAll,Arr));

 //myReduce()
 function myReduce(arr){
    return arr.reduce((prev,curr)=>{
    if(prev>curr)
      prev=curr;
    return prev;
  })
  }
  console.log(myReduce(minVal,Arr));


 //myIncludes()
 function myIncludes(val){
    return arr.includes(val);
  }
  console.log(myIncludes(Arr,14));

  //myIndexOf()
  function myIndexOf(val){
    return arr.indexOf(val);
  }
  console.log(myIndexOf(Arr,6));


  //myPush()
  function myPush(val){
    arr.push(val);
 }
console.log(myPush(arr1,66));

 //myUnShift()
 function myUnshift(val){
    return arr.lastIndexOf(val);
 }
 console.log(myUnshift(Arr,6));

 //grabKeys()
 function grabKeys(arr){
    return Object.keys(arr);
 }
 console.log(grabKeys(Arr));

 //grabValues()
 function grabValues(arr){
    return Object.values(arr);
 }
 console.log(grabValues(Arr));
 
