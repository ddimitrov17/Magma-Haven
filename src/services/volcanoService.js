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

async function getVolcanoById(id) {
    const volcano = await Volcano.findById(id).lean();
    return volcano;
}

async function updateVolcano(volcanoId,volcanoData) {
    let volcano = await Volcano.findById(volcanoId);
    volcano.name = volcanoData.name;
    volcano.location=volcanoData.location;
    volcano.type=volcanoData.type;
    volcano.elevation=volcanoData.elevation;
    volcano.lastErruption=volcanoData.lastErruption;
    volcano.description=volcanoData.description;

    volcano.save();
    return volcano;
}


module.exports = {
    getAllVolcanos,
    createVolcano,
    getVolcanoById,
    updateVolcano
}