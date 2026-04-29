export type ImageAsset = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill";
  rounded?: string;
};

export type ImageGroup = ImageAsset[];

export type LogoItem = {
  title: string;
  src: string;
  alt?: string;
};