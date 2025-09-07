const { json } = require('stream/consumers');

$(document).ready(function(){
    const fs = require('fs');
    const sampleData = [{
        name: ceron,
        age: 29,
        gender: Female
    }]

    
    fs.writeFileSync(
        './text/Output.txt',
        JSON.stringify(sampleData)
    )
});