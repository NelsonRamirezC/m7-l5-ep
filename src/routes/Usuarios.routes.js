import { Router } from "express";
const router = Router();


// define the home page route
router.get("/", (req, res) => {
    res.json({ message: "ok!"} );
});

export default router;
