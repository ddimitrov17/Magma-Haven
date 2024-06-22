const { Volcano } = require("../models/Volcano");

function createVolcano(volcanoData) {
    const volcano = new Volcano({
        name: volcanoData.name,
        location: volcanoData.location,
        elevation: volcanoData.elevation,
        lastEruption: volcanoData.lastEruption,
        image: volcanoData.image,
        type: volcanoData.type,
        description: volcanoData.description
    });
    volcano.save();
    return volcano;
}