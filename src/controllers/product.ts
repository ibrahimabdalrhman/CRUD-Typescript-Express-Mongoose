import Product from '../models/product';
import { Request,Response ,NextFunction} from 'express';
import {productType,updateProductType} from '../types/productTypes'


class ProductController{
    static async getAllProducts(req:Request,res:Response,next:NextFunction){
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            // Handle error appropriately
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async getProductById(req:Request,res:Response,next:NextFunction){
        try {
            const {prodId} =req.params;
            const products = await Product.findById(prodId);
            if(!products){
                return res.status(404).json({
                    msg:"No Product with this Id "
                })
            }
            res.json(products);
        } catch (error) {
            // Handle error appropriately
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async addProduct(req:Request,res:Response,next:NextFunction){
        try {
            const productData:productType= req.body;
            const products = await Product.create(productData);
            res.json(products);
        } catch (error) {
            // Handle error appropriately
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async updateProduct(req:Request,res:Response,next:NextFunction){
        try {
            const {prodId} =req.params;
            const productData:updateProductType =req.body;
            const products = await Product.findByIdAndUpdate(prodId,productData);
            if(!products){
                return res.status(404).json({
                    msg:"No Product with this Id "
                })
            }
            res.json(products);
        } catch (error) {
            // Handle error appropriately
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    static async deleteProduct(req:Request,res:Response,next:NextFunction){
        try {
            const {prodId} =req.params;
            const products = await Product.findByIdAndDelete(prodId);
            if(!products){
                return res.status(404).json({
                    msg:"No Product with this Id "
                })
            }
            res.json(products);
        } catch (error) {
            // Handle error appropriately
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default ProductController