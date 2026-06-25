import { Timer, ShieldCheck, Eye, MapPin, Layers } from "lucide-react";

const reasons = [
  {
    icon: <Timer />,
    title: "Save HR time",
    desc: "Automate repetitive tasks and free your team for what matters.",
    tone: "primary",
  },
  {
    icon: <ShieldCheck />,
    title: "Reduce payroll errors",
    desc: "Pre-built compliance rules eliminate manual mistakes.",
    tone: "success",
  },
  {
    icon: <Eye />,
    title: "Improve transparency",
    desc: "Employees see attendance, leaves and payslips in real time.",
    tone: "primary",
  },
  {
    icon: <MapPin />,
    title: "Track field staff easily",
    desc: "Live GPS check-ins keep your distributed team accountable.",
    tone: "success",
  },
  {
    icon: <Layers />,
    title: "HR + marketing in one place",
    desc: "Stop juggling tools — one login, one bill, one platform.",
    tone: "primary",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-surface scroll-mt-24">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Why teams switch to us
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-ink">
            Designed for outcomes, not just features
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const isPrimary = r.tone === "primary";
            return (
              <div
                key={r.title}
                className={`rounded-2xl p-6 border ${
                  isPrimary
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-success text-success-foreground border-success"
                } ${i === 4 ? "lg:col-span-1 md:col-span-2" : ""} hover:scale-[1.02] transition-transform`}
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-white/15 backdrop-blur [&>svg]:h-5 [&>svg]:w-5">
                  {r.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold">{r.title}</h3>
                <p className="mt-1.5 text-sm opacity-90">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
