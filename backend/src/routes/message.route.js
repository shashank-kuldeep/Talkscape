import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSideBar ,getMessages,sendMessages} from "../contollers/message.controller.js";
const router = express.Router();
router.get("/users",protectRoute, getUsersForSideBar);
router.post("/send/:id",protectRoute,sendMessages);
router.get("/:id",protectRoute,getMessages);
export default router