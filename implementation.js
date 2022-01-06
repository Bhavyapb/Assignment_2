const Arr=[2,6,14,5,6,9]

//myEach()
function myEach(callback,arr){
    for(let i=0;i<arr.length;i++){
      callback(arr[i]);
    }
  }
  
  function print(num){
    console.log(num);
  }
console.log(myEach(print,Arr))


//myMap()
function myMap(callback,arr){
    for(let i=0;i<arr.length;i++){
      arr[i]=callback(arr[i]);
    }
    return arr
  }
  
  function doubled(num){
    return num*2;
  }

  console.log(myMap(print,Arr))


//myFilter()
function myFilter(callback,arr){
    let len =arr.length;
    for(let i=0;i<len;i++){
      if(!callback(arr[i])){
        arr.splice(i,1)
      }
    }
    return arr
  }
  
  function evenNum(num){
    return num%2===0
  }
  console.log(myFilter(evenNum,Arr));


//mySome()
function mySome(callback,arr){
    let b=false;
  
  for(let i=0;i<arr.length;i++){
    if(callback(arr[i])){
      b=true;
    break;
    }
  }
  return b;
  }
  
  function check(val) {
    return val %3===0;
  }
  console.log(mySome(check,Arr));

//myEvery()
function myEvery(callback,arr){
  
    return callback(arr);
  }
  
  function checkAll(arr){
    let checker =true;
    for(let i=0;i<arr.length;i++){
      while(arr[i]<=20){
        return true;
      }
      break;
    }
    return false;
  }
  
  console.log(myEvery(checkAll,Arr));

//myReduce()
function myReduce(callback,arr){
    return callback(arr);
  }
  
  function minVal(arr){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
      if(min>arr[i]){
        min=arr[i];
      }
    }
    return min
  }
  
  console.log(myReduce(minVal,Arr));

//myIncludes()
function myIncludes(arr,val){
    let isFound=false;
    for(let i=0;i<arr.length;i++){
      if(arr[i]===val){
        isFound=true;
        
      }
    }
    return isFound;
  }
  
  console.log(myIncludes(Arr,14));

//myIndexOf()
function myIndexOf(arr,val){
    let index=-1;
      for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
          
          index= i;
          break;
        }
        
      }
      return index;
}

    
    console.log(myIndexOf(Arr,6));

//myPush()
function myPush(arr,elementToAdd){
    arr[arr.length]=elementToAdd;
    return arr;
  }
  
  console.log(myPush(arr1,66));

//myUnshift()
function myUnShift(arr,val){
    let index=-1;
      for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
          
          index= i;
        }
      }
      return index;
}
console.log(myUnshift(Arr,6));

//grabKeys()
function grabKeys(anObj){
    let ans=[]
    let key
    for(key in anObj){
      if(key){
        ans.push(key)
      }
    }
    return ans;
}
console.log(grabKeys(Arr));


//grabValues()
function grabValues(anObj){
    let ans=[]
    let key
    for(key in anObj){
      if(key){
        ans.push(anObj[key])
      }
    }
    return ans;
}

console.log(grabValues(Arr));