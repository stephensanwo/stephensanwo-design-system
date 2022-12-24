import React from "react";
export interface FooterInterface
  extends React.ButtonHTMLAttributes<HTMLElement> {
  kind: "basic";
  children: React.ReactNode | string;
  hasFooterTitle: boolean;
  footerTitle: string;
}
