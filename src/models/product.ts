import {model,Schema} from "mongoose";

const Product:Schema=new Schema({
    title:{
        type:String,
        required:true,
        },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
    },

});

export default model('Product',Product) ;