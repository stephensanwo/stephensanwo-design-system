import React from "react";
export interface InlineNotificationInterface
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  kind: "warning" | "error" | "disabled" | "success";
  children: React.ReactNode | string;
}
