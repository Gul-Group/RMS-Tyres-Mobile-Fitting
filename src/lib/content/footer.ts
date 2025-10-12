import type {
  FooterContactInfo,
  FooterLinkGroup,
  ServiceArea,
} from "@/lib/types/footer";

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Mobile Tyre Fitting", href: "/services#mobile-tyre-fitting" },
      { label: "Emergency Call-Outs", href: "/services#breakdown-recovery" },
      { label: "Fleet Support", href: "/services#fleet" },
      { label: "Tyre Brands", href: "/#trusted-tyre-brands" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About RMS Tyres", href: "/services" },
      { label: "Customer Reviews", href: "/#reviews-heading" },
      { label: "Areas We Cover", href: "/services#coverage" },
      { label: "Contact Us", href: "/booking" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Tyre Care Tips", href: "/services#tyre-care" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      {
        label: "Facebook",
        href: "https://www.facebook.com/rmstyres",
        isExternal: true,
      },
    ],
  },
];

export const footerContact: FooterContactInfo = {
  phone: "07932030303",
  email: "info@rmstyres.co.uk",
  addressLines: [
    "RMS Tyres Mobile Fitting",
    "Unit 4, High Street Industrial Estate",
    "London",
    "RM1 1AA",
  ],
  streetAddress: "Unit 4, High Street Industrial Estate",
  locality: "London",
  postalCode: "RM1 1AA",
  countryCode: "GB",
  openingHoursDisplay: "24/7 Mobile Call-Out",
  openingHoursSchema: "Mo-Su 00:00-23:59",
};

export const footerServiceAreas: ServiceArea[] = [
  { label: "Greater London" },
  { label: "Essex" },
  { label: "Kent" },
  { label: "Hertfordshire" },
  { label: "Surrey" },
];

export const footerLegal = {
  registeredName: "RMS Tyres Mobile Fitting Ltd",
  companyNumber: "10567891",
  vatNumber: "GB312345678",
  yearStarted: 2016,
};

