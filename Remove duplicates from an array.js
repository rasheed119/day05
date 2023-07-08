const duplicate = function(arr){
    var duplicate = arr.filter((item,index)=>arr.indexOf(item)==index);
    return duplicate;
}
var arr = [1,2,3,4,5,1,2,3,4,5];
console.log(duplicate(arr));

//Arrow Funtion

const duplicate = (arr)=> {
    var duplicate = arr.filter((item,index)=>arr.indexOf(item)==index);
    return duplicate;
}
var arr = [1,2,3,4,5,1,2,3,4,5];
console.log(duplicate(arr));



//IIFE

(function(){
    var arr = [1,2,3,4,5,1,2,3,4,5];
    var duplicate = arr.filter((item,index)=>arr.indexOf(item)==index);
    console.log(duplicate);
})()