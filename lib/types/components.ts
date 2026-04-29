import type { Text } from "./content";
import type { ImageAsset } from "./media";

export type ClassicCard = {
  title: Text;
  description: Text;
  image?: ImageAsset;
  href?: string;
  styles?: {
    cardBg?: string;
  };
};

export type SimpleHoverCard = {
  title: Text;
  description: Text;
  icon?: string;
  styles?: {
    cardBg?: string;
    cardBorder?: string;
    iconColor?: string;
    iconBackground?: string;
    hoverBorder?: string;
  };
};