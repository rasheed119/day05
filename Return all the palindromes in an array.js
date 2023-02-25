const palindrome = function(arr){
    var result = [];
    for(var i = 0 ; i < arr.length ; i++){
        var reverse_string = arr[i].split("").reverse().join("");
        if(reverse_string==arr[i]){
            result.push(arr[i])
        }
    }
    return result;
}
var arr = ["malayalam","stone","wow","son","madam"];
console.log(palindrome(arr));

//Arrow function:


const palindrome = (arr)=>{
    var result = [];
    for(var i = 0 ; i < arr.length ; i++){
        var reverse_string = arr[i].split("").reverse().join("");
        if(reverse_string==arr[i]){
            result.push(arr[i])
        }
    }
    return result;
}
var arr = ["malayalam","stone","wow","son","madam"];
console.log(palindrome(arr));