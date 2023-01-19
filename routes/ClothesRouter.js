const express = require('express');
const router = express.Router();
const clothesContoller = require('../Controller/ClothesController');



router.get("/", clothesContoller.getAllClothes);
router.post("/", clothesContoller.addClothes);
router.get("/:id",clothesContoller.getById);
router.put("/:id", clothesContoller.updateClothes);
router.delete("/:id", clothesContoller.deleteClothes);
module.exports=router;