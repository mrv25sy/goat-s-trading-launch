import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Privacy Policy — THE GOAT | GO AI Academy";
const DESCRIPTION =
  "How GO AI Academy collects, uses, stores and protects personal information from visitors and members of THE GOAT program.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Last updated: 1 January 2026"
      intro="This privacy policy is placeholder boilerplate and should be reviewed by qualified legal counsel before publication."
      sections={[
        {
          heading: "1. Information we collect",
          body: "We collect the information you provide directly, such as your name, email address and the content of messages you send us, along with basic technical data like browser type, device and pages visited.",
        },
        {
          heading: "2. How we use your information",
          body: "We use your information to respond to enquiries, deliver program access and support, improve our courses and website, and send service-related communications.",
        },
        {
          heading: "3. Legal basis for processing",
          body: "Where applicable law requires it, we process personal data on the basis of your consent, the performance of a contract with you, or our legitimate interest in operating and improving our services.",
        },
        {
          heading: "4. Cookies",
          body: "We use cookies and similar technologies to keep the site functioning smoothly and to understand aggregate usage. You can control cookies through your browser settings; disabling them may affect site functionality.",
        },
        {
          heading: "5. Sharing and disclosure",
          body: "We do not sell your personal information. We share data only with service providers who help us operate the website, payment processing and communications, and only as needed to perform those services, or when required by law.",
        },
        {
          heading: "6. Data retention",
          body: "We retain personal information for as long as needed to provide our services and to satisfy legal, accounting or reporting requirements, after which it is deleted or anonymised.",
        },
        {
          heading: "7. Security",
          body: "We apply reasonable technical and organisational measures to protect personal data. No method of transmission or storage is entirely secure, and we cannot guarantee absolute security.",
        },
        {
          heading: "8. Your rights",
          body: "Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal data, and to withdraw consent at any time. Contact us to exercise these rights.",
        },
        {
          heading: "9. Children's privacy",
          body: "Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.",
        },
        {
          heading: "10. Contact",
          body: "Privacy questions and requests can be sent to hello@goai-academy.example.",
        },
      ]}
    />
  );
}
