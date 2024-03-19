
let arr1=[[1,2,3],[4,5,6]];
let arr2=[];

  for(var i=0;i<3; i++){
      let dummy=[];
      let sum = 0;

      for( var j=0;j<2;j++){

          dummy.push(arr1[j][i]);

          sum += arr1[j][i];

}
dummy.push(sum);
 arr2.push(dummy);

  }


console.log(arr2);







