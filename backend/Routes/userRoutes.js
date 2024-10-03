const express =require("express")
const router = express.Router()

router.use("/signup",userController);
router.use("/signin",userController);
router.use("/")




module.exports = router