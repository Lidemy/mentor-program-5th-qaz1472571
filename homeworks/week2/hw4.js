function printFactor(n) {
    for(var i=1; i<=Math.floor(n/2); i++){
        if(n % i ===  0){
            console.log(i)
        }  
    }
    console.log(n)
}

printFactor(10);