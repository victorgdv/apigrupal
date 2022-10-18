const express = require("express"); 

const router = express.Router ();

const {getAllPresidents, postNewPresidents} = require("../controllers/presidentes.controllers");

router.get("/", getAllPresidents);

router.post("/", postNewPresidents);

router.put("/", async (req,res) =>{
    res.send ("este es el put")
})
router.delete("/", async (req,res) =>{
    res.send ("este es el delete")
})





module.exports = router;