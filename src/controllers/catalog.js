const { getAllVolcanos, createVolcano, getVolcanoById } = require("../services/volcanoService");

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
        const ownerId = req.user.id;
        await createVolcano(req.body, ownerId);
        res.redirect('/');
    },
    detailsGET: async (req, res) => {
        const id = req.params.id;
        const volcano = await getVolcanoById(id);
        res.render('details', { volcano });
    },
    editGET: async (req, res) => {
        const id = req.params.id;
        const volcano = await getVolcanoById(id);
        const volcanoTypes = ['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield'];
        res.render('edit', { volcano, volcanoTypes });
    }
}