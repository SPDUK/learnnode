const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const { catchErrors } = require('../handlers/errorHandlers');

// home
router.get('/', catchErrors(storeController.getStores));

// stores
router.get('/stores', catchErrors(storeController.getStores));
// adding a new store
router.get('/add', storeController.addStore);
router.post('/add',
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.createStore));
router.post('/add/:id',
storeController.upload,
catchErrors(storeController.resize),
catchErrors(storeController.updateStore));

// editing a store
router.get('/stores/:id/edit', catchErrors(storeController.editStore));

// view for a storeController
router.get('/store/:slug', catchErrors(storeController.getStoreBySlug));

router.get('/tags', catchErrors(storeController.getStoresByTag));
router.get('/tags/:tag', catchErrors(storeController.getStoresByTag));

// login
router.get('/login', userController.loginForm);
router.get('/register', userController.registerForm);
// validate registration data
// register the user
// log them in
router.post('/register',
  userController.validateRegister,
  userController.register,
  authController.login
)
module.exports = router;
