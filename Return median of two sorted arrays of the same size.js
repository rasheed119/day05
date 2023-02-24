const median = function(arr_1,arr_2){
    var merge_arr = [...arr1,...arr2];
    var n = merge_arr.length;
    let temp;
    for(var i = 0 ; i < n ; i++){
        for(var j = i + 1 ; j < n ; j++){
            if(merge_arr[i] > merge_arr[j]){
                temp = merge_arr[i];
                merge_arr[i] = merge_arr[j];
                merge_arr[j] = temp
            }
        }
    }
    var median_1 = merge_arr[n/2];
    var median_2 = merge_arr[(n/2) - 1];
    return (median_1+median_2)/2;
}
var arr1 = [1,12,15,26,38];
var arr2 = [2,13,17,30,45];
console.log(median(arr1,arr2));