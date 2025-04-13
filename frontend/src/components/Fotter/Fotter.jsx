import React from "react";
import "./Fotter.css";
import { assets } from "../../assets/assets";

const Fotter = () => {
  return (
    <div className="fotter" id="fotter">
      <div className="fotter-content">
        <div className="fotter-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            deleniti soluta cum delectus laudantium vero molestiae possimus
            dolores quod inventore.
          </p>
          <div className="fotter-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="fotter-content-center">
          <h2>company</h2>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Delevery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="fotter-content-right">
          <h2>get in touch</h2>
          <ul>
            <li>+919548401805</li>
            <li>ak771842@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="fotter-copyright">CopyRighs</p>
    </div>
  );
};

export default Fotter;
