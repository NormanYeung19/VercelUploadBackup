const express = require("express");

const groupController = require("../controllers/groupController");

const router = express.Router();
router.get("/newGroups", groupController.getGroups);
router.post("/newGroups", groupController.createGorup);
router.put("/newGroups", groupController.updateGroup);
router.delete("/newGroups/:groupID", groupController.deleteGroup);
//  /newGroup/asfasfasfa
module.exports = router;

// Get and Delete Methods should not have a body
// Post and Put Methods should have a body
