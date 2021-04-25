function join(arr, concatStr) {
    var str = arr[0];
    for(var i=1; i<arr.length; i++){
        str = str + concatStr + arr[i] 
    }
    return str
}


function repeat(str, times) {
    var str_answer = '';
    for(var i=1; i<=times; i++){
        str_answer = str_answer + str
    }
    return str_answer
}


console.log(join(["a", 1, "b", 2, "c", 3], ','));
console.log(repeat('yoyo', 2));