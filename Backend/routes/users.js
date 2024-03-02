import express from "express";
import User from "../models/User.js";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../util/verifyToken.js";
import { register } from "../controllers/auth.js";

const router = express.Router();
  

/*router.get("/checkauthentication",verifyToken, (req,res,next) => {
    res.send("Hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req,res,next) => {
    res.send("Hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next) => {
    res.send("Hello admin you are logged in and you can delete all account")
})*/
router.post("/",register)
router.put("/:id",verifyUser,updateUser)
//router.delete("/:id",verifyUser,deleteUser) this did not work because user or admin need
router.delete("/:id",deleteUser) //temporary


// router.get("/:id",verifyUser,getUser)
//Chat
router.get("/:id", verifyUser, getUser);

router.get("/",getUsers)
//router.get("/",verifyAdmin,getUsers)

export default router;