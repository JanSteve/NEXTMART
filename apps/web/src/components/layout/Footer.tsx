'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { FOOTER_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-100 bg-neutral-900 text-neutral-300">
      {/* Newsletter */}
      <div className="border-b border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">Stay in the loop</h3>
            <p className="mt-1 text-sm text-neutral-400">Get exclusive deals, new arrivals, and promotions straight to your inbox.</p>
          </div>
          <div className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
            <button className="shrink-0 rounded-lg bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Help</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Policy</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.policy.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Sell on NexMart</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.sell.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="mt-10 flex flex-col items-center gap-6 border-t border-neutral-800 pt-8 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
            <a href="mailto:support@nexmart.in" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Mail className="h-4 w-4" /> support@nexmart.in
            </a>
            <a href="tel:18001234567" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-4 w-4" /> 1800-123-4567
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Mumbai, India
            </span>
          </div>
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Youtube, label: 'YouTube' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="rounded-full bg-neutral-800 p-2 text-neutral-400 transition-colors hover:bg-primary-500 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-4 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <p>© 2026 NexMart Private Limited. All rights reserved. CIN: U74999MH2026PTC000001</p>
          <p className="flex items-center gap-1">
            Made with ❤️ in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}