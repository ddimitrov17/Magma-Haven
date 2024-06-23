const { getAllVolcanos, createVolcano, getVolcanoById, updateVolcano } = require("../services/volcanoService");

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
        const isOwner = volcano.owner.toString() == req?.user?.id;
        const isLogged = req?.user?.id;
        res.render('details', { volcano, isOwner, isLogged });
    },
    editGET: async (req, res) => {
        const id = req.params.id;
        const volcano = await getVolcanoById(id);
        const volcanoTypes = ['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield'];
        res.render('edit', { volcano, volcanoTypes });
    },
    editPOST: async (req, res) => {
        const volcanoData = req.body;
        const volcanoId = req.params.id;
        await updateVolcano(volcanoId, volcanoData)
        res.redirect('/details/' + volcanoId);
    }
}