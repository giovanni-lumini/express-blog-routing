//importo express
const express = require ("express")
//definisco l'istanza di router
const router = express.Router()

//importiamo quanto esportato da "posts_controllers.js" (la logica)
const posts_router = require("../controllers/posts_controllers.js")

//creo le rotte
//NB: la rotta parte già da /posts (vedere nel file app.js)

//prima rotta
router.get("/", posts_router.posts)

//seconda rotta
router.get("/slug", posts_router.show_slug)

//esporto la rotta
module.exports = router