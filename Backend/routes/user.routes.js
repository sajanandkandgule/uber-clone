const express = require('express');
const router = express.Router();
const  {body } = require('express-validator');
const userController = require('../controllers/user.controllers');
const authmiddleware = require('../middlewares/auth.middleware');

// Define user-related routes
router.post('/register',[body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({ min: 2 }).withMessage('Firstname must be at least 2 characters long'),
],
    userController.registerUser
    );

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
)


router.get('/profile', authmiddleware.authUser, userController.getUserProfile);
router.get("/logout", authmiddleware.authUser, userController.logoutUser);


module.exports = router;