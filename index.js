const express = require("express");
const {connect} = require("./utils/db")
const presidentesRouter = require ("./src/api/routes/presidentes.routes")
const partidosRouter = require ("./src/api/routes/partidos.routes")
const PORT = 8000;

const app = express();
connect ();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/presidents" , presidentesRouter);
app.use("/parties", partidosRouter);
app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));