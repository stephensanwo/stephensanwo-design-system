import React from "react";
import "./style.css";
import { FooterInterface } from "./types";

const Footer: React.FC<FooterInterface> = (props) => {
  return (
    <footer className="footer" {...props}>
      <div className="footer-content">
        {props.hasFooterTitle && <h6>{props.footerTitle}</h6>}
        {props.children}
      </div>
    </footer>
  );
};

export default Footer;
