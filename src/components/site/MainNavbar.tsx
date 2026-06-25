import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BrandMark from "./BrandMark";
import { productDropdownColumns } from "./nav-content";

const navItems = ["Pricing", "Customers", "Integrations", "Resources", "Partner With Us"];

export default function MainNavbar() {
  const [openMenu, setOpenMenu] = useState<null | "product" | "features">(null);

  return (
    <div className="sticky top-16 z-40 bg-primary-soft/70 backdrop-blur-md border-b border-border">
      <div className="container-x flex h-12 items-center gap-4">
        <a href="/" className="hidden md:flex items-center gap-2 shrink-0">
          <BrandMark label="logo 2" className="scale-90 origin-left" />
        </a>

        <nav className="hidden md:flex items-center gap-1 mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("product")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              onClick={() => setOpenMenu((current) => (current === "product" ? null : "product"))}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors ${
                openMenu === "product" ? "text-primary" : "text-ink hover:text-primary"
              }`}
              aria-expanded={openMenu === "product"}
            >
              Product
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>

            {openMenu === "product" && (
              <div className="absolute left-0 top-full pt-2 w-[min(760px,calc(100vw-1rem))] fade-up">
                <div className="rounded-2xl border border-border bg-white shadow-pop p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="contents">
                    {productDropdownColumns.map((column, columnIndex) => (
                      <div
                        key={columnIndex}
                        className={
                          columnIndex > 0 ? "border-t border-border pt-6 md:border-t-0 md:pt-0" : ""
                        }
                      >
                        <div className="space-y-6">
                          {column.groups.map((group) => (
                            <div key={group.title}>
                              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                                {group.title}
                              </div>
                              <ul className="space-y-2">
                                {group.links.map((link) => (
                                  <li key={link.label}>
                                    <a
                                      href={link.href}
                                      className="text-sm text-ink hover:text-primary transition-colors"
                                    >
                                      {link.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("features")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              onClick={() => setOpenMenu((current) => (current === "features" ? null : "features"))}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors ${
                openMenu === "features" ? "text-primary" : "text-ink hover:text-primary"
              }`}
              aria-expanded={openMenu === "features"}
            >
              Features
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>
            {openMenu === "features" && (
              <div className="absolute left-0 top-full pt-2 w-[min(760px,calc(100vw-1rem))] fade-up">
                <div className="rounded-2xl border border-border bg-white shadow-pop p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      Core HRMS
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#gps-biometric-attendance"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          GPS & Biometric Attendance
                        </a>
                      </li>
                      <li>
                        <a
                          href="#automated-payroll"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          Automated Payroll
                        </a>
                      </li>
                      <li>
                        <a
                          href="#leave-shift-management"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          Leave & Shift Management
                        </a>
                      </li>
                      <li>
                        <a
                          href="#employee-dashboard"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          Employee Dashboard
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      Workforce Tools
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#gps-biometric-attendance"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          GPS Attendance
                        </a>
                      </li>
                      <li>
                        <a
                          href="#reports-analytics"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          Reports & Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#mobile-friendly-access"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          Mobile Friendly Access
                        </a>
                      </li>
                      <li>
                        <a
                          href="#why-choose-us"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          Why teams switch
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      Bulk Email
                    </div>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#bulk-email-platform"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          Bulk Email Platform
                        </a>
                      </li>
                      <li>
                        <a
                          href="#bulk-email-campaigns"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          Campaign Builder
                        </a>
                      </li>
                      <li>
                        <a
                          href="#email-templates"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          Email Templates
                        </a>
                      </li>
                      <li>
                        <a
                          href="#automation"
                          className="text-sm text-ink hover:text-primary transition-colors"
                        >
                          Automation Workflows
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="px-3 py-1.5 text-sm font-medium text-ink hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <a
            href="#demo"
            className="hidden sm:inline text-sm font-medium text-primary hover:underline"
          >
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
