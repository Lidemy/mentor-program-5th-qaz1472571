function join(arr, concatStr) {
    var str = arr[0];
    for(var i=1; i<arr.length; i++){
        str = str + concatStr + arr[i] 
    }
    return str
}


function repeat(str, times) {
    var strAnswer = '';
    for(var i=1; i<=times; i++){
        strAnswer = strAnswer + str
    }
    return strAnswer
}


console.log(join(["aaa", "bb", "c", "dddd"], ',,'));
console.log(repeat('yoyo', 2));