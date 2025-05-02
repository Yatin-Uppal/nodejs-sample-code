import express from "express";

// Import controllers from
import { UserController } from "@/controllers/user-controller";

// Setup router
const router = express.Router();

// Register new user with email/password
router.get("/get-all-users", async (req, res) => {
    const userController = new UserController();
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const response = await userController.getAllUsers(page, limit);
    return res.status(response.status).json(response);
});


// Export router; should always export as default
export default router;
