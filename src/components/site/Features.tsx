import {
  MapPin,
  Wallet,
  ShieldCheck,
  CalendarDays,
  LayoutDashboard,
  Mail,
  BarChart3,
  Smartphone,
} from "lucide-react";

const features = [
  {
    id: "gps-biometric-attendance",
    icon: <MapPin />,
    title: "GPS & Biometric Attendance",
    desc: "Track field & office staff accurately in real time.",
  },
  {
    id: "automated-payroll",
    icon: <Wallet />,
    title: "Automated Payroll",
    desc: "Run salaries in minutes, not days.",
  },
  {
    id: "pf-esi-tds-ready",
    icon: <ShieldCheck />,
    title: "PF / ESI / TDS Ready",
    desc: "Stay compliant with Indian statutory rules.",
  },
  {
    id: "leave-shift-management",
    icon: <CalendarDays />,
    title: "Leave & Shift Management",
    desc: "Flexible policies for every team.",
  },
  {
    id: "employee-dashboard",
    icon: <LayoutDashboard />,
    title: "Employee Dashboard",
    desc: "Self-service for payslips, leaves & docs.",
  },
  {
    id: "bulk-email-campaigns",
    icon: <Mail />,
    title: "Bulk Email Campaigns",
    desc: "Reach thousands of customers in one click.",
  },
  {
    id: "reports-analytics",
    icon: <BarChart3 />,
    title: "Reports & Analytics",
    desc: "Deep insights across HR and marketing.",
  },
  {
    id: "mobile-friendly-access",
    icon: <Smartphone />,
    title: "Mobile Friendly Access",
    desc: "Work from anywhere on any device.",
  },
];

export default function Features() {
  return (
    <section id="Features" className="py-20 bg-surface scroll-mt-24">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Everything you need
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-ink">
            Powerful features, beautifully simple
          </h2>
          <p className="mt-3 text-ink-soft">
            One platform that replaces multiple tools — built for modern Indian businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} id={f.id} className="soft-card p-6 group">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white transition-colors [&>svg]:h-5 [&>svg]:w-5">
                {f.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">{f.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
