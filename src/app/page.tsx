import { Audience, Features, Hero, HowItWorks, Nav, TeacherBand, Ticker } from "@/components/Sections";
import { Pricing } from "@/components/Pricing";
import { DemoForm } from "@/components/DemoForm";
import { Faq, Footer } from "@/components/FaqFooter";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <Features />
        <TeacherBand />
        <Audience />
        <Pricing />
        <DemoForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
