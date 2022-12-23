export interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind: "primary" | "secondary" | "tertiary" | "danger";
  to?: string;
  text: string;
  hasIcon: boolean;
  icon?: React.ReactNode;
  isLoading?: boolean;
}
