const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const authAdmin = require('../middleware/authAdmin');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/modify/user/:id', userCtrl.modifyUser);
router.get('/get/user', authAdmin, userCtrl.getAllUser);

module.exports = router;