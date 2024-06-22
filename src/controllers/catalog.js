module.exports = {
    homeGET: (req,res) => {
        res.render('home');
    },
    catalogGET: (req,res) => {
        res.render('catalog');
    },
    createGET: (req,res) => {
        res.render('create');
    },
    searchGET: (req,res) => {
        res.render('search');
    },
    errorGET: (req,res) => {
        res.render('404');
    },
    createPOST: async (req,res) => {
        console.log(req.body);
    }
}