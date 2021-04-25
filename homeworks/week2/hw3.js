function reverse(str) {
    var string = ''
    for(var i=str.length; i>0; i=i-1){
        var str_box = str[i-1]
        string = string + str_box
    }
    console.log(string)
}

reverse('1abc2');