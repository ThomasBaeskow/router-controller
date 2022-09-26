import express from "express";
import {get,post,patch,deleteToy} from "../controllers/itemController.js"

let router = express.Router()

router
.route("/toys")
.get(get)
.post(post)

router
.route("/toys/:id")
.patch(patch)
.delete(deleteToy)



export default router