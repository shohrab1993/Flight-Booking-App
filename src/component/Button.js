import React from "react";

const Button = ({
  lebel,
  className,
  onClick,
  disable,
  styleName,
  id,
  d,
  ...rest
}) => {
  return (
    <>
      <button
        className={className}
        type="submit"
        id={id}
        disabled={disable}
        onClick={onClick}
      >
        <svg className={styleName} {...rest}>
          <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
        <span className="text-sm">{lebel}</span>
      </button>
    </>
  );
};

export default Button;
