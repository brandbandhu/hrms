import { useState } from "react";
import { ChevronDown } from "lucide-react";

const features = {
  "Core HRMS": [
    "Attendance Management",
    "Payroll Automation",
    "Leave Management",
    "Employee Self Service",
    "Shift Management",
  ],
  "Workforce Tools": [
    "GPS Attendance",
    "Biometric Integration",
    "Live Tracking",
    "Reports & Analytics",
    "Employee Documents",
  ],
  "Bulk Email": [
    "Campaign Builder",
    "Email Templates",
    "Contact Segmentation",
    "Delivery Reports",
    "Marketing Automation",
  ],
};

const navItems = ["Features", "Pricing", "Customers", "Integrations", "Resources", "Partner With Us"];

export default function MainNavbar() {
  const [mega, setMega] = useState(false);

  return (
    <div className="sticky top-16 z-40 bg-primary-soft/70 backdrop-blur-md border-b border-border">
      <div className="container-x flex h-12 items-center justify-between">
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item === "Features" ? (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-ink hover:text-primary transition-colors">
                  {item}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
                {mega && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[760px] max-w-[95vw] fade-up">
                    <div className="rounded-2xl border border-border bg-white shadow-pop p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Object.entries(features).map(([cat, list]) => (
                        <div key={cat}>
                          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                            {cat}
                          </div>
                          <ul className="space-y-2">
                            {list.map((f) => (
                              <li key={f}>
                                <a
                                  href={`#${f}`}
                                  className="text-sm text-ink hover:text-primary transition-colors"
                                >
                                  {f}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item}
                href={`#${item}`}
                className="px-3 py-1.5 text-sm font-medium text-ink hover:text-primary transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <a href="#demo" className="hidden sm:inline text-sm font-medium text-primary hover:underline">
            Request Demo
          </a>
          <a
            href="#trial"
            className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-[#0a4fda] transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </div>
  );
}
