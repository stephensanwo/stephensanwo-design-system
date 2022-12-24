import React from "react";
import Icon from "../Icon";
import { IconTypes } from "../Icon/types";
import "./style.css";
import { LinkButtonInterface } from "./types";

const LinkButton: React.FC<LinkButtonInterface> = ({
  kind,
  href,
  text,
  hasIcon,
  icon,
  ...rest
}) => {
  return (
    <a
      className={`link-button link-button-${kind}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h6>{text}</h6>
      {hasIcon && <Icon type={IconTypes.Arrow_NE} />}
    </a>
  );
};

export default LinkButton;
