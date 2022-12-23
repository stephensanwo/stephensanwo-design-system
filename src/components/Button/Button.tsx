import React from "react";
import Icon from "../Icon";
import { IconTypes } from "../Icon/types";
import Loader from "../Loader";
import "./style.css";
import { ButtonInterface } from "./types";

const Button: React.FC<ButtonInterface> = ({
  kind,
  to,
  text,
  hasIcon,
  icon,
  ...props
}) => {
  return (
    <button className={`button button-${kind}`} {...props}>
      <h6>{text}</h6>
      {hasIcon && !props.isLoading ? (
        <Icon type={IconTypes.Arrow_Right} />
      ) : (
        <Loader size={16} />
      )}
    </button>
  );
};

export default Button;
