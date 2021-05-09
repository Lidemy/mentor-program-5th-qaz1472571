const request = require('request')

request.get(
    'https://lidemy-book-store.herokuapp.com/books?_limit=10',
    function (error, response, body){
        let json = JSON.parse(body)
        try{
            for(let i=0; i<json.length; i++){
                console.log(json[i].id, json[i].name )
            }
        }catch {
            console.log('error')
        }  
    }
)

