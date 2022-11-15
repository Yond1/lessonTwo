import React from "react";
import dataImage from "../../image/imgData";

const Toolbar = ({ filters, selected }) => {
  return selected === "All" ? (
    <div className="container-image">
      {dataImage.map((item, indx) => {
        {
          return <img key={indx} src={item.img} />;
        }
      })}
    </div>
  ) : (
    <div className="container-image">
      {dataImage.map((item, indx) => {
        if (item.category === selected) {
          return <img key={indx} src={item.img} />;
        }
      })}
    </div>
  );
};

export default Toolbar;
