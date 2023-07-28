import React from "react";
import { ReactElement } from "react";

interface ButtonType {
  title: string;
  solid?: boolean;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
  icon?: ReactElement;
}

const CtaButton = ({
  title,
  solid,
  disabled,
  onClick,
  icon,
  className = "",
}: ButtonType) => {
  return (
    <button
      disabled={disabled}
      className={` ${solid ? "solid-button" : "custom-cta-button"} 
      flex items-center justify-around ${className}`}
      onClick={onClick}>
      <div className="button-title">{title}</div>
      {icon}
    </button>
  );
};

export default CtaButton;
