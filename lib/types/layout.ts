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
  logo?: {
    desktop?: {
      width?: string;
      height?: string;
    };
    mobile?: {
      width?: string;
      height?: string;
    };
  };
  showBreadcrumbHeader?: boolean;
  cta?: {
    label: string;
    href: string;
  };
  styles?: {
    background?: string;
    link?: string;
    linkHover?: string;
    dropdownBackground?: string;
    dropdownBorder?: string;
    phoneBg?: string;
    phoneText?: string;
    phoneIcon?: string;
    phoneIconBg?: string;
    ctaBg?: string;
    ctaText?: string;
    border?: string;
    mobileBackground?: string;
    mobileMenuBg?: string;
    mobileMenuIcon?: string;
    mobilePanelBg?: string;
    mobilePhoneIconBg?: string;
    mobilePhoneText?: string;
    desktopTopOffset?: string;
    mobileTopOffset?: string;
    heroContentOffset?: string;
    mobileHeroContentOffset?: string;
  };
};

export type Layout = {
  navbar: Navbar;
};