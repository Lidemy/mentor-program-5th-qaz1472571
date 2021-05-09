const request = require('request')

request.get(
    'https://restcountries.eu/rest/v2/name/' + process.argv[2],
    function (error, response, body){
        if(response.statusCode <= 200 && response.statusCode >= 300){
            const json = JSON.parse(body)
        
            console.log('============')
            console.log('國家:', json[0]["name"])
            console.log('首都:', json[0]["capital"])
            console.log('貨幣:', json[0]["cioc"])
            console.log('國碼:', json[0]["callingCodes"])
        }else {
            console.log('找不到國家資訊')
        }
    }
)