import data from './data.json' assert {type: 'json'};

let total_quotes = data["quotes"].length

for(let i=0; i<total_quotes;i++){
    let quote_id = parseInt(Math.random()*10)
    console.log(data["quotes"][quote_id])
}
