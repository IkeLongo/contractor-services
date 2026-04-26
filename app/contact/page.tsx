import { defaultCompany } from "@/data/companies";
import { ContactSection } from "@/app/components/contact/ContactSectionContact";

export default function ContactPage() {
  const company = defaultCompany;

  return (
    <main>
      <ContactSection company={company} />
    </main>
  );
}
