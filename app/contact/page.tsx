
import { ContactSection } from "@/app/components/contact/ContactSectionContact";
import { getCompany } from "@/lib/get-company";

export default async function ContactPage() {
  const company = await getCompany();

  return (
    <main>
      <ContactSection company={company} />
    </main>
  );
}
