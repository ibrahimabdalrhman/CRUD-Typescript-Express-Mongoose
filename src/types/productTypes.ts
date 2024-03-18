const { type } = require("os");

export type productType = {
    title:string,
    price:number,
    desc?:string
};
export type updateProductType = {
    title?:string,
    price?:number,
    desc?:string
};

