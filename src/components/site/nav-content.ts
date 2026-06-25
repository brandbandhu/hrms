export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  title: string;
  links: NavLink[];
};

export type ProductColumn = {
  groups: NavGroup[];
};

export const productDropdownColumns: ProductColumn[] = [
  {
    groups: [
      {
        title: "Global Core HR",
        links: [
          { label: "Compensation Planning", href: "#compensation-planning" },
          { label: "Localization", href: "#localization" },
        ],
      },
      {
        title: "Workforce Management",
        links: [
          { label: "Time & Attendance", href: "#time-attendance" },
          { label: "Scheduling", href: "#scheduling" },
        ],
      },
      {
        title: "People Analytics",
        links: [{ label: "People Analytics", href: "#reports-analytics" }],
      },
    ],
  },
  {
    groups: [
      {
        title: "Talent Management",
        links: [
          { label: "Performance Management", href: "#performance-management" },
          { label: "Talent Development", href: "#talent-development" },
          { label: "Skills Management", href: "#skills-management" },
          { label: "Succession Planning", href: "#succession-planning" },
          { label: "Recruitment", href: "#recruitment" },
          { label: "Onboarding", href: "#onboarding" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        title: "Payroll",
        links: [
          { label: "GCC", href: "#gcc" },
          { label: "India", href: "#india" },
          { label: "Indonesia", href: "#indonesia" },
          { label: "Malaysia", href: "#malaysia" },
          { label: "Philippines", href: "#philippines" },
          { label: "Singapore", href: "#singapore" },
          { label: "Thailand", href: "#thailand" },
          { label: "Unified Payroll", href: "#unified-payroll" },
        ],
      },
    ],
  },
];
