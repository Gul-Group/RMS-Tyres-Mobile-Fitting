export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterContactInfo {
  phone: string;
  email: string;
  addressLines: string[];
  streetAddress: string;
  locality: string;
  postalCode: string;
  countryCode: string;
  openingHoursDisplay: string;
  openingHoursSchema: string;
}

export interface ServiceArea {
  label: string;
}

