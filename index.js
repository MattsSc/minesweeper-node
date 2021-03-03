const express = require('express')
const axios = require('axios')
var bodyParser = require('body-parser')


const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})


//SERVICES

app.post('/user/:username', async (req, res) => {
    try{
        let username = req.params.username;
        let response = await axios.post(
            'https://minesweeper-java-sc.herokuapp.com/api/minesweeper/user',
            {username: username},
            {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }});
        res.json(response.data)
    }catch(error){
        console.log(error);
        res.status(500).send('ERROR');
    }
})


app.post('/game', async (req, res) => {
    try{
        let body = req.body;
        let response = await axios.post(
            'https://minesweeper-java-sc.herokuapp.com/api/minesweeper/game',
            body,
            {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }});
        res.json(response.data)
    }catch(error){
        console.log(error);
        res.status(500).send('ERROR');
    }
})

app.post('/game/:gameId/flag/:row/:column', async (req, res) => {
    try{
        let gameId = req.params.gameId;
        let row = req.params.row;
        let column = req.params.column;
        let response = await axios.post(
            'https://minesweeper-java-sc.herokuapp.com/api/minesweeper/game/' + gameId,
            {
                action: 'FLAG_MARK',
                row = row,
                column = column
            },
            {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }});
        res.json(response.data)
    }catch(error){
        console.log(error);
        res.status(500).send('ERROR');
    }
})

app.post('/game/:gameId/question-mark/:row/:column', async (req, res) => {
    try{
        let gameId = req.params.gameId;
        let row = req.params.row;
        let column = req.params.column;
        let response = await axios.post(
            'https://minesweeper-java-sc.herokuapp.com/api/minesweeper/game/' + gameId,
            {
                action: 'QUESTION_MARK',
                row = row,
                column = column
            },
            {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }});
        res.json(response.data)
    }catch(error){
        console.log(error);
        res.status(500).send('ERROR');
    }
})

app.post('/game/:gameId/dismark/:row/:column', async (req, res) => {
    try{
        let gameId = req.params.gameId;
        let row = req.params.row;
        let column = req.params.column;
        let response = await axios.post(
            'https://minesweeper-java-sc.herokuapp.com/api/minesweeper/game/' + gameId,
            {
                action: 'DISMARK',
                row = row,
                column = column
            },
            {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }});
        res.json(response.data)
    }catch(error){
        console.log(error);
        res.status(500).send('ERROR');
    }
})

app.post('/game/:gameId/open/:row/:column', async (req, res) => {
    try{
        let gameId = req.params.gameId;
        let row = req.params.row;
        let column = req.params.column;
        let response = await axios.post(
            'https://minesweeper-java-sc.herokuapp.com/api/minesweeper/game/' + gameId,
            {
                action: 'OPEN',
                row = row,
                column = column
            },
            {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }});
        res.json(response.data)
    }catch(error){
        console.log(error);
        res.status(500).send('ERROR');
    }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})