//importiamo quanto esportato da "db.js" (array di objects)
const post_controllers = require ("../db/db.js");

//prima logica della futura rotta (ritorna l'array di objects)
const posts = (req, res) => {
    const response_data = {
        data: post_controllers,
        counter: post_controllers.length
    }
res.status(200).json(response_data)
}

//seconda logica della futura rotta
const show_slug = (req, res) => {
    //usiamo il ciclo find per ciclare e cercare lo slug corrispondente al post
    const post = post_controllers.find(post => post_controllers.slug === (req.params.slug))
    console.log(post);
    if(!post){
        return res.status(404).json({
            error: "404 not found"
        })
    }
    return res.json({
        data: post
    })
}

//esporto la logica
module.exports = {
    posts,
    show_slug
}