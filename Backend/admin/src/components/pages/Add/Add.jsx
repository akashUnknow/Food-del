import React from "react";
import "./Add.css";
import { assets } from "../../../assets/assets.js";
const Add = () => {
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-image-upload flex-col">
          <p>Upload image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>product name</p>
          <input type="text" name="name" placeholder="type here" />
        </div>
        <div className="add-prodct-desc flex-col">
          <p>product description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="type here"
            required
          ></textarea>
        </div>
        <div className="add-category-pri">
          <div className="add-category flex-col">
            <p>product category</p>
            <select name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>product price</p>
            <input type="number" name="price" placeholder="$20" />
          </div>
        </div>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
