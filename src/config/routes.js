const { Router } = require('express');
const { homeGET, catalogGET, searchGET, createGET, errorGET, createPOST, detailsGET, editGET, editPOST, searchPOST } = require('../controllers/catalog');
const { registerGET, loginGET, registerPOST, loginPOST, logout } = require('../controllers/user');

const router = Router();

router.get('/', homeGET);
router.get('/catalog', catalogGET);
router.get('/create/volcano', createGET);
router.get('/search', searchGET);
router.get('/register', registerGET);
router.get('/login', loginGET);
router.get('/logout', logout);
router.get('/details/:id',detailsGET);
router.get('/edit/:id',editGET);

router.post('/create/volcano', createPOST);
router.post('/register', registerPOST);
router.post('/login', loginPOST);
router.post('/edit/:id',editPOST);
router.post('/search',searchPOST);

router.get('*', errorGET);
module.exports = {
    router
}