import { Router } from "express";
const router=Router();
import ProductController from '../controllers/product'

router.get('/',ProductController.getAllProducts);
router.post('/',ProductController.addProduct);
router.get('/:prodId',ProductController.getProductById);
router.patch('/:prodId',ProductController.updateProduct);
router.delete('/:prodId',ProductController.deleteProduct);


export default router;

