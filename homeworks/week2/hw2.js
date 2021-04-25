function capitalize(str) {     // a=97 z=122
    var arr = []
    var answer = [];
    for(var i=0; i<str.length; i++){
        arr.push(str[i].charCodeAt(0))
    }
    
    if(97<=arr[0] && arr[0]<=122){
       arr[0] = arr[0]-32
    }

    answer = arr.map(
        function (x){
            return String.fromCharCode(x)   
        }
    )

    return (answer.join(''))
}

console.log(capitalize(',hello'));