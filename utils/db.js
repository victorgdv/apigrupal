const mongoose = require("mongoose"); //Requerimos mongoose
//const dotenv = require ("dotenv");
//dotenv.config();

const DB_URL = "mongodb+srv://grupo3:grupo3@cluster0.5n6hg5m.mongodb.net/usapresidents?retryWrites=true&w=majority"

const connect = async () => {
    try {
        //Conectar a la BBDD
        const DB = await mongoose.connect(DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = DB.connection;

        console.log(`Connected to ${name} DB in host:${host}`);
    } catch (error) {
        console.log(`He tenido un error al contectar con mi BBDD ${error}`)
    }
}


module.exports = {connect}