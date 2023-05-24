import express from "express";
import * as controller from "../controller/message.js";
const router = express.Router();
router.post('/send', controller.sendMessage);
router.get('/receive', controller.getMessage);
export default router;
//# sourceMappingURL=message.js.map