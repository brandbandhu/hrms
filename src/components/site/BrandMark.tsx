type BrandMarkProps = {
  variant?: "light" | "dark";
  label?: string;
  className?: string;
};

export default function BrandMark({
  variant = "light",
  label = "PeoplePulse",
  className = "",
}: BrandMarkProps) {
  const textClassName = variant === "dark" ? "text-white" : "text-ink";
  const monogram = label.trim().charAt(0).toUpperCase() || "P";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`.trim()}>
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-base font-bold text-primary-foreground shadow-sm">
        {monogram}
      </span>
      <span className={`font-display text-[1.15rem] font-extrabold tracking-tight ${textClassName}`}>
        {label}
      </span>
    </span>
  );
}
