import {Schema, model} from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,   
    required: true,
    trim: true,
  },
  price: {  
    type: Number,
    required: true,
    trim: true,
  },
    description: {
    type: String,
    required: true,
    trim: true,
  }, }, {
  timestamps: true,
});

//export default model("Product", productSchema);

const productModel = model("Product", productSchema);
export default productModel;