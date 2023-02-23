const rotate = function(arr,k){
    var rotate = [];
    for(var i = 0 ; i < arr.length ; i++){
        if(i<k){
            rotate.push(arr[arr.length+i-k]);
        }
        else{
            rotate.push(arr[i-k]);
        }
    }
    return rotate;
}
var arr = [1,2,3,4,5,6,7,8,9,10];
var k= 4;
console.log(rotate(arr,k));