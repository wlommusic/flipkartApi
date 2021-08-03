const express = require('express')
const fs = require('fs');
const rateLimit = require('express-rate-limit');
const app = express()

const port = 5000

const limit = rateLimit({
    max: 100,// max requests
    windowMs: 60 * 60 * 1000, // 1 Hour
    message: 'Too many requests' // message to send
});

app.get('/', limit, (req, res) => {
    res.end(`<h1>welcome to the flipkart products rest APi</h1>
    <p>go to <a style = ' color:red' href ='/data'>/data</a> to see the prod Json data</p>
    <p>go to <a style = ' color:red' href ='/reviews'>/reviews</a> to see the review Json data</p>`)
});

app.get('/data', limit, (req, res) => {
    fs.readFile(__dirname + '/' + 'prod_data.json', 'utf-8', (err, data) => {
        if (err) fs.writeFileSync('ProdAPIerrorlogs.txt', err, { flag: 'a' })
        res.end(data);
    });
app.get('/reviews', limit, (req, res) => {
        fs.readFile(__dirname + '/' + 'reviews.json', 'utf8', (err, data) => {
            if (err) fs.writeFileSync('reviewAPIerrorlogs.txt', err, { flag: 'a' })
            return res.end(data)
        })
    })

})

app.use(express.json({ limit: '10kb' })) // limit set to 10 kb

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}....`)
});

