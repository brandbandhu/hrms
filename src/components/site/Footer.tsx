import { Twitter, Linkedin, Facebook, Instagram, Youtube, Mail } from "lucide-react";
import BrandMark from "./BrandMark";

const cols = [
  { title: "Products", links: ["HRMS", "Bulk Email", "Attendance", "Payroll", "Leave Management"] },
  { title: "Features", links: ["GPS Attendance", "Biometric", "Campaign Builder", "Templates", "Automation"] },
  { title: "Company", links: ["About", "Careers", "Press", "Partner With Us", "Contact"] },
  { title: "Resources", links: ["Help Center", "Blog", "API Docs", "Webinars", "Case Studies"] },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <BrandMark variant="dark" label="HRMS" />
            <p className="mt-4 text-sm text-white/70 max-w-sm">
              The all-in-one HRMS and bulk email platform for modern Indian businesses.
            </p>

            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Subscribe to newsletter
              </label>
              <div className="mt-2 flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/10 border border-white/15 text-sm placeholder:text-white/40 focus:outline-none focus:border-primary"
                  />
                </div>
                <button type="submit" className="btn-success">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">{c.title}</div>
                <ul className="mt-3 space-y-2">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href={`#${l}`} className="text-sm text-white/80 hover:text-white transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-white/60">
            (c) {new Date().getFullYear()} HRMS. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            {[Twitter, Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#social"
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 hover:bg-primary transition-colors"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
