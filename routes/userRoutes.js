const express = require('express');
const router = express.Router();
const { registerUser, loginUser, deleteUser, viewUser } = require('../controllers/userController');

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route for deleting a user
router.delete('/delete/:id', deleteUser);

// Route for viewing user details
router.get('/view/:id', viewUser);

module.exports = router;
