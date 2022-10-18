const Parties = require("../models/partidos.models");

const getAllParties = async (req,res)=> {
    try {
        const allParties = await Parties.find().populate("presidentes");
        return res.status(200).json(allParties);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postNewParties = async (req,res)=> {
    try{
        const {name, logo, established, presidentes} = req.body
        const newParty = new Parties({name, logo, established, presidentes});
        const createdParty = await newParty.save();
        return res.status(201).json(createdParty);
    } catch (error) {
        return res.status(500).json(error)
    }
};

module.exports = {getAllParties, postNewParties};