import React from "react";

const SelectBox = ({ children, lebel, image, ...rest }) => {
  return (
    <>
      <div className="des-from">
        <p>{lebel}</p>
        <div className="flex flex-row">
          <img src={image} alt="" />
          <select className="outline-none px-2 py-2 w-full" {...rest} required>
            <option value="" hidden>
              Please Select
            </option>
            {children}
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectBox;
