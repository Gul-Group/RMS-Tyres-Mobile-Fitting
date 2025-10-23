import Link from "next/link";

import {
  footerContact,
  footerLegal,
  footerLinkGroups,
  footerServiceAreas,
} from "@/lib/content/footer";

export function Footer() {
  return (
    <div className="bg-gray-900 text-gray-100" aria-labelledby="footer-heading">
      <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-red-400">
              24/7 mobile tyre fitting
            </p>
            <h2
              id="footer-heading"
              className="mt-4 text-2xl font-semibold text-white"
            >
              RMS Tyres Mobile Fitting
            </h2>
            <p className="mt-4 text-sm text-gray-300">
              Fast, professional mobile tyre fitting across Greater London and
              the South East. Same-day call-outs, premium tyre brands, and a
              12-month workmanship guarantee.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-200">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href={`tel:${footerContact.phone}`}
                >
                  {footerContact.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href={`mailto:${footerContact.email}`}
                >
                  {footerContact.email}
                </a>
              </p>
              <div className="pt-2">
                <p className="font-semibold">Address</p>
                <address className="not-italic text-gray-300">
                  {footerContact.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </div>
              <p>
                <span className="font-semibold">Hours:</span> {footerContact.openingHoursDisplay}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-red-400">
                Service areas
              </p>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm text-gray-200">
                {footerServiceAreas.map((area) => (
                  <li
                    key={area.label}
                    className="rounded-full border border-gray-700 px-3 py-1"
                  >
                    {area.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                {group.title}
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-xs text-gray-500">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {footerLegal.registeredName}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <span>Company No. {footerLegal.companyNumber}</span>
              <span>VAT {footerLegal.vatNumber}</span>
              <span>Established {footerLegal.yearStarted}</span>
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoService",
            "name": "RMS Tyres Mobile Fitting",
            "url": "https://rmstyres.co.uk",
            "telephone": footerContact.phone,
            "email": footerContact.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": footerContact.streetAddress,
              "addressLocality": footerContact.locality,
              "postalCode": footerContact.postalCode,
              "addressCountry": footerContact.countryCode,
            },
            "areaServed": footerServiceAreas.map((area) => ({
              "@type": "AdministrativeArea",
              "name": area.label,
            })),
            "openingHours": footerContact.openingHoursSchema,
          }),
        }}
      />
    </div>
  );
}

