const prime = function (arr){
    var prime = [];
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i]%2!==0){
            prime.push(arr[i]);
        }
    }
    return prime;
}
var arr = [10,2,3,98,45,76,35,14];
console.log(prime(arr));