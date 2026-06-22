import {
  MapPin, Wallet, ShieldCheck, CalendarDays,
  LayoutDashboard, Mail, BarChart3, Smartphone,
} from "lucide-react";

const features = [
  { icon: <MapPin />, title: "GPS & Biometric Attendance", desc: "Track field & office staff accurately in real time." },
  { icon: <Wallet />, title: "Automated Payroll", desc: "Run salaries in minutes, not days." },
  { icon: <ShieldCheck />, title: "PF / ESI / TDS Ready", desc: "Stay compliant with Indian statutory rules." },
  { icon: <CalendarDays />, title: "Leave & Shift Management", desc: "Flexible policies for every team." },
  { icon: <LayoutDashboard />, title: "Employee Dashboard", desc: "Self-service for payslips, leaves & docs." },
  { icon: <Mail />, title: "Bulk Email Campaigns", desc: "Reach thousands of customers in one click." },
  { icon: <BarChart3 />, title: "Reports & Analytics", desc: "Deep insights across HR and marketing." },
  { icon: <Smartphone />, title: "Mobile Friendly Access", desc: "Work from anywhere on any device." },
];

export default function Features() {
  return (
    <section id="Features" className="py-20 bg-surface">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Everything you need</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-ink">
            Powerful features, beautifully simple
          </h2>
          <p className="mt-3 text-ink-soft">
            One platform that replaces multiple tools — built for modern Indian businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="soft-card p-6 group">
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
