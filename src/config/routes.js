const { Router } = require('express');
const { homeGET, catalogGET, searchGET, createGET, errorGET, createPOST } = require('../controllers/catalog');
const { registerGET, loginGET } = require('../controllers/user');

const router = Router();

router.get('/', homeGET);
router.get('/catalog', catalogGET);
router.get('/create/volcano',createGET);
router.get('/search',searchGET);
router.get('/register',registerGET);
router.get('/login',loginGET);

router.post('/create/volcano',createPOST);

router.get('*',errorGET);
module.exports = {
    router
}