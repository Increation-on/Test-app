const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require('express-validator');

router.post('/registration', controller.registartion);
router.post('/login', controller.login);
router.get('/users', controller.getUser);

module.exports = router;