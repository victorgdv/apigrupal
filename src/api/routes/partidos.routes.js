const express = require("express"); 

const router = express.Router ();


const {getAllParties, postNewParties} = require("../controllers/partidos.controllers");

router.get("/", getAllParties);

router.post("/", postNewParties);



module.exports = router;