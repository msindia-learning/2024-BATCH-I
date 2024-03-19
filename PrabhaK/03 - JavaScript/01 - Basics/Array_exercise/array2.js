let arr1=[[1, 2, 3],[4,5,6],[7,8,9]];
let arr2=[];
  for(var i=0;i<arr1.length; i++){
      let dummy=[];
      for( var j=0;j<arr1.length;j++){
          dummy.push(arr1[j][i]);
}

    
      
     
   
     arr2.push(dummy);
  }

console.log(arr2);