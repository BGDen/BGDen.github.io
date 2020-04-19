function _join(arr){
  filteredArr = arr.filter((val)=> {
      return !(val === "" || typeof val == "undefined" || val === null || val === []);
   });
  let str = '';
  for(let i = 0; i < filteredArr.length; i++){
      str += filteredArr[i];
  }
  return str;
}

function _indexOf(arr, search, from = 0){
  const arrLen = arr.length;
  let value = '';
  if(arrLen == 0 || from < 0 || isNaN(from)){
      return -1;
  }else {
      for(let i = from; i < arrLen; i++){
          if(arr[i] === search){
             value = i;
              return value;
          }
          else continue;
      }
      if(value == '') return -1;
  }
}