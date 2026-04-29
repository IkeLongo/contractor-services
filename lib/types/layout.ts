export type TopBar = {
  leftText: string;
  email: string;

  styles?: {
    background?: string;
    text?: string;
    link?: string;
    linkHover?: string;
    border?: string;
  };

  enabled?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};

export type NavDropdownItem = {
  label: string;
  href?: string;
  viewAllHref?: string;
  children: NavItem[];
};

export type NavigationItem = NavItem | NavDropdownItem;

export type NavbarVariant = "classic" | "centeredLogo";

export type Navbar = {
  variant?: NavbarVariant;
  topBar?: TopBar;
  items: NavigationItem[];

  styles?: {
    background?: string;
    link?: string;
    linkHover?: string;
    dropdownBackground?: string;
    dropdownBorder?: string;
    phoneText?: string;
    phoneIcon?: string;
  };
};

export type Layout = {
  navbar: Navbar;
};