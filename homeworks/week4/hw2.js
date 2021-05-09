const request = require('request')
const process = require('process')


if(process.argv[2] === 'list'){
    request.get(
        'https://lidemy-book-store.herokuapp.com/books?_limit=20',
        function (error, response, body){
            console.log(body)    
        }
    )
}else if(process.argv[2] === 'read'){
    request.get(
        'https://lidemy-book-store.herokuapp.com/books/' + process.argv[3],
        function (error, response, body){
            console.log(body)
        }
    )
}else if(process.argv[2] === 'delete'){
    request.delete(
        'https://lidemy-book-store.herokuapp.com/books/' + process.argv[3],
        function (error, response, body){
            console.log(body)
        }
    )
}else if(process.argv[2] === 'create'){
    request.post(
        {
            url:'https://lidemy-book-store.herokuapp.com/books/',
            form:{
                name:process.argv[3]
            }
        }
    )
}else if(process.argv[2] === 'update'){
    request.patch(
        {
            url:'https://lidemy-book-store.herokuapp.com/books/' + process.argv[3],
            form:{
                name:process.argv[4]
            }
        },
        function (error, response, body){
            console.log(body)
        }
    )
}
