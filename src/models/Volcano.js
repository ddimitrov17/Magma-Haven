const { Schema, SchemaTypes, model } = require('mongoose');

const volcanoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    elevation: {
        type: Number,
        required: true
    },
    lastErruption: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    voteList: [{
        type: Array,
        ref: 'User'
    }],
    owner: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }
});

const Volcano = model('Volcano', volcanoSchema);

module.exports = { Volcano };
