let arr1=[[1,4,5],[2,3,1],[7,2,1]];
let arr2=[[2,3,4],[1,2,1],[5,6,1]];
let result=[];

for(var i=0;i<arr1.length;i++){
    let dummy=[];
    
    for(var j=0;j<arr2.length;j++)
    {
        dummy.push(arr1[i][j]+arr2[i][j])
    }

    result.push(dummy);
}

console.log(result);
// console.log(arr1);