const express = require('express');
const router = express.Router();
const sliderController=require('../controllers/sliderController')

router.get('/',sliderController.getAllSliders);
router.post('/',sliderController.addSlider);
router.get('/:id',sliderController.getById);
router.put('/:id',sliderController.updateSlider);
router.delete('/:id',sliderController.deleteSlider);



module.exports=router;
