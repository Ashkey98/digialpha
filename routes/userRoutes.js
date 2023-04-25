const express = require('express');
const { registerUser, getUseById, updateProfile, deleteUser, getAllUsers } = require('../controller/userController');
const router = express.Router();


router.route("/register").post(registerUser);
router.route("/me/:id").get(getUseById);
router.route("/me/update/:id").put( updateProfile);
router.route("/deleteUser/:id").delete( deleteUser);
router.route("/users").get(getAllUsers);




module.exports = router;

