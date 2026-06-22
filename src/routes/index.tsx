import { createFileRoute } from "@tanstack/react-router";
import TopNavbar from "@/components/site/TopNavbar";
import MainNavbar from "@/components/site/MainNavbar";
import Hero from "@/components/site/Hero";
import ProductCards from "@/components/site/ProductCards";
import Features from "@/components/site/Features";
import DashboardShowcase from "@/components/site/DashboardShowcase";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PeoplePulse - HRMS, Payroll & Bulk Email Platform" },
      {
        name: "description",
        content:
          "All-in-one cloud HRMS with attendance, payroll, leaves and a powerful bulk email platform - built for growing Indian businesses.",
      },
      { property: "og:title", content: "PeoplePulse - HRMS & Bulk Email Platform" },
      {
        property: "og:description",
        content:
          "Manage employees, attendance, payroll, leaves and marketing campaigns from one cloud platform.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />
      <MainNavbar />
      <main>
        <Hero />
        <ProductCards />
        <Features />
        <DashboardShowcase />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
