const request = require('request')
const process = require('process')
var counter = 10

if(process.argv[2] > 0){
    counter = process.argv[2]
}

request.get(
    {
        url: 'https://api.twitch.tv/kraken/games/top?limit=' + counter,
        headers: {
           'client-id':'2bk8ly5hq6b5hixelaogr0kg706z4z',
           'Accept':'application/vnd.twitchtv.v5+json'
        }
    },
    
    function (error, response, body){
        const json = JSON.parse(body)
        const games = json.top

        for(let i=0; i<counter; i++) {
            console.log(games[i].viewers, games[i].game.name)
        }
    }
)