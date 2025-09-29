const express = require('express')
const app = express()
const port = 8000

app.get('/',(require,response)=>{
    response.send(`
    <!doctype html>
    <html>
    <head>
        <title>Express.js</title>
    </head>
    <body>
        <h3>Welcome to Express.js</h3>
        <b>Express.js Fast, unopinionated, minimalist <br>
        web framwork for Node.js</b>
    </body>
    </html>
    `)
})
app.listen(port, () => console.log('Server listen on port' + port))