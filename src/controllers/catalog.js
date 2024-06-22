const { getAllVolcanos, createVolcano } = require("../services/volcanoService");

module.exports = {
    homeGET: (req, res) => {
        res.render('home');
    },
    catalogGET: async (req, res) => {
        const volcanos = await getAllVolcanos();
        res.render('catalog', { volcanos });
    },
    createGET: (req, res) => {
        res.render('create');
    },
    searchGET: (req, res) => {
        res.render('search');
    },
    errorGET: (req, res) => {
        res.render('404');
    },
    createPOST: async (req, res) => {
        const ownerId=req.user.id;
        await createVolcano(req.body,ownerId);
        res.redirect('/');
    }
}