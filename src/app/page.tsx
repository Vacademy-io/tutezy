import { AskRiya, Audience, CreateSteps, Features, Hero, HowItWorks, Nav, TeacherBand, Ticker, TryBand, UseCases } from "@/components/Sections";
import { Pricing } from "@/components/Pricing";
import { DemoForm } from "@/components/DemoForm";
import { CaseStudies } from "@/components/CaseStudies";
import { Faq, Footer, Guides } from "@/components/FaqFooter";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AskRiya />
        <Ticker />
        <HowItWorks />
        <Features />
        <CaseStudies />
        <TryBand />
        <UseCases />
        <TeacherBand />
        <CreateSteps />
        <Audience />
        <Pricing />
        <DemoForm />
        <Faq />
        <Guides />
      </main>
      <Footer />
    </>
  );
}
