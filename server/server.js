const express = require('express')
const PORT =3001
const app = express()
app.get('/', (req,res)=>{
    res.send(`Bienvenue sur le port ${PORT}`)
})
app.listen(PORT, ()=>(console.log(`console en marche sur le port ${PORT}`)))