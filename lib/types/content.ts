export type Text = {
  content: string;
  styles?: {
    color?: string;
    size?: string;
    font?: string;
    weight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    align?: "left" | "center" | "right";
    margin?: string;
    padding?: string;
    transform?: "uppercase" | "lowercase" | "capitalize";
    decoration?: "none" | "underline" | "line-through";
  };
};

export type CTA = {
  label: string;
  href: string;
  styles?: {
    background?: string;
    text?: string;
    border?: string;
    highlightBg?: string;
    highlightText?: string;
    highlightBorder?: string;
  };
};