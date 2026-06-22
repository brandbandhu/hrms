import { useState } from "react";
import { ChevronDown, Menu, X, Mail, Users } from "lucide-react";
import BrandMark from "./BrandMark";

const hrmsLinks = [
  { label: "Attendance", desc: "GPS, biometric & shifts" },
  { label: "Payroll", desc: "Automated salary runs" },
  { label: "Leave Management", desc: "Policies & approvals" },
  { label: "Employee Management", desc: "Profiles & documents" },
  { label: "Reports", desc: "Insights & exports" },
];

const emailLinks = [
  { label: "Campaigns", desc: "Send at scale" },
  { label: "Templates", desc: "Drag & drop builder" },
  { label: "Contacts", desc: "Segmentation & lists" },
  { label: "Analytics", desc: "Open & click tracking" },
  { label: "Automation", desc: "Drip workflows" },
];

export default function TopNavbar() {
  const [activeTab, setActiveTab] = useState<"hrms" | "email">("hrms");
  const [open, setOpen] = useState<null | "hrms" | "email">(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <BrandMark label="HRMS" />
        </a>

        {/* Product tabs */}
        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          <ProductTab
            label="HRMS"
            icon={<Users className="h-4 w-4" />}
            active={activeTab === "hrms"}
            onClick={() => setActiveTab("hrms")}
            onHover={() => setOpen("hrms")}
            onLeave={() => setOpen(null)}
            isOpen={open === "hrms"}
            items={hrmsLinks}
          />
          <ProductTab
            label="Bulk Email"
            icon={<Mail className="h-4 w-4" />}
            active={activeTab === "email"}
            onClick={() => setActiveTab("email")}
            onHover={() => setOpen("email")}
            onLeave={() => setOpen(null)}
            isOpen={open === "email"}
            items={emailLinks}
          />
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a href="#contact" className="btn-ghost">Contact Sales</a>
          <a href="#login" className="btn-ghost">Login</a>
          <a href="#trial" className="btn-success">Start Free Trial</a>
        </div>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-surface"
          onClick={() => setMobile((s) => !s)}
          aria-label="Menu"
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      {mobile && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-4 space-y-3">
            <MobileGroup title="HRMS" items={hrmsLinks} />
            <MobileGroup title="Bulk Email" items={emailLinks} />
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a href="#login" className="btn-outline">Login</a>
              <a href="#trial" className="btn-success">Free Trial</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ProductTab({
  label, icon, active, onClick, onHover, onLeave, isOpen, items,
}: {
  label: string; icon: React.ReactNode; active: boolean;
  onClick: () => void; onHover: () => void; onLeave: () => void;
  isOpen: boolean; items: { label: string; desc: string }[];
}) {
  return (
    <div className="relative" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          active
            ? "bg-primary-soft text-primary"
            : "text-ink hover:bg-surface"
        }`}
      >
        {icon}
        {label}
        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full pt-2 w-72 fade-up">
          <div className="rounded-xl border border-border bg-white shadow-pop p-2">
            {items.map((it) => (
              <a
                key={it.label}
                href={`#${it.label}`}
                className="block px-3 py-2 rounded-lg hover:bg-primary-soft group"
              >
                <div className="text-sm font-semibold text-ink group-hover:text-primary">
                  {it.label}
                </div>
                <div className="text-xs text-ink-soft">{it.desc}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileGroup({ title, items }: { title: string; items: { label: string; desc: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-border p-2 space-y-1">
          {items.map((it) => (
            <a key={it.label} href={`#${it.label}`} className="block px-2 py-1.5 text-sm hover:bg-surface rounded">
              {it.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
