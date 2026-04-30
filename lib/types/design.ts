export type Theme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  border: string;
  eyebrow: string;
  title: string;
  buttons: {
    primary: {
      background: string;
      text: string;
      hoverBackground: string;
      hoverText: string;
    },
  },
  cards: {
    background: string;
    border: string;
    hoverBackground: string;
    hoverBorder: string;
    title: string;
    description: string;
  }
};