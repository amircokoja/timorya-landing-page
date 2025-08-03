import { PainPoints } from "./components/pain-points";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Feature } from "./components/feature";
import { Pricing } from "./components/pricing";
import { FAQ } from "./components/faq/faq";
import { Footer } from "./components/footer";
import { ContactForm } from "./components/contact-form";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PainPoints />
      <Feature />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
