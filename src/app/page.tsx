import { AskRiya, Audience, CreateSteps, Features, Hero, HowItWorks, Nav, TeacherBand, Ticker, TryBand, UseCases } from "@/components/Sections";
import { Pricing } from "@/components/Pricing";
import { DemoForm } from "@/components/DemoForm";
import { Faq, Footer } from "@/components/FaqFooter";

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
        <TryBand />
        <UseCases />
        <TeacherBand />
        <CreateSteps />
        <Audience />
        <Pricing />
        <DemoForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
