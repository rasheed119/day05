const palindrome = function(arr){
    var store = [];
    var result = [];
    var index = 0;
    for(var i = 0 ; i < arr.length ; i++){
        var split = arr[i].split("");
        for(var j = split.length ; j <= split.length ; j--){
            if(j<=0){
                break;
            }
            else{
                store[index] = arr[i][j-1];
                index++;
            }
        }
        if(store.join("")==arr[i]){
            result.push(arr[i])
        }
        store = [];
        index = 0;
    }
    return result;
}
var arr = ["malayalam","stone","wow","son","madam"];
console.log(palindrome(arr));