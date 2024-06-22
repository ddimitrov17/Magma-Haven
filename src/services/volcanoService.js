const { Volcano } = require("../models/Volcano");

function createVolcano(volcanoData,ownerId) {
    const volcano = new Volcano({
        name: volcanoData.name,
        location: volcanoData.location,
        elevation: volcanoData.elevation,
        lastErruption: volcanoData.lastErruption,
        image: volcanoData.image,
        type: volcanoData.type,
        description: volcanoData.description,
        owner: ownerId
    });
    volcano.save();
    return volcano;
};

async function getAllVolcanos() {
    const volcanos=await Volcano.find().lean();
    return volcanos; 
}


module.exports = {
    getAllVolcanos,
    createVolcano
}