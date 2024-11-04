const express = require('express')
const app = express()

const PORT = process.env.PORT
const HOST = process.env.HOST

/* app.use(express.json()) //d'ora in poi elabora il corpo delle richieste, così darà ccesso al body quando usiamo "post, put, petch" */

app.listen(PORT, (req, res) => {
  console.log(`Example app listening on port ${HOST}:${PORT}`)
})

//1-creo la prima rotta: /
app.get('/', (req, res) => {
    res.send('Express blog routing')
})

//importiamo quanto esportato da "posts_routers.js" (la rotta)
const posts_router = require("./routers/posts_routers.js")
//2-creo la seconda rotta
app.use("/posts", posts_router)