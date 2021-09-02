import path from "path";

// Import models
import { ProductModel } from "../models/ProductModel.js";
const Product = new ProductModel();


export class ProductController {
    async getAllProducts(req, res){
        let searchTerm = req.query.q || ''
        // console.log(searchTerm)
        try{
            let result = await Product.getAllProducts(searchTerm)
            res.end(JSON.stringify(result))
        } catch(e) {
            throw e;
        }
      }

    async getProductById(req, res){
        try{
            let productId = req.params.id
            let result = await Product.getProductById(productId)
            res.end(JSON.stringify(result))
        }catch(e) {
            throw e;
        }
    }
}