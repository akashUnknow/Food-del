import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item
const addFood = async (req, res) => {
  let image_Filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_Filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "food added" });
  } catch (error) {
    console.log("error");
    res.json({ success: false, message: "error" });
  }
};

//add food list

const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//remove food item

const removeFood = async (req, res) => {
  try {
    const food = foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "food remove" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { addFood, listFood, removeFood };
