import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const TITLE = "Terms of Service — THE GOAT | GO AI Academy";
const DESCRIPTION =
  "The terms that govern your use of THE GOAT program and the GO AI Academy website, including enrollment, payments and acceptable use.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="Last updated: 1 January 2026"
      intro="These terms are placeholder boilerplate and should be reviewed by qualified legal counsel before publication."
      sections={[
        {
          heading: "1. Acceptance of terms",
          body: "By accessing this website or enrolling in THE GOAT program, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use the site or our services.",
        },
        {
          heading: "2. Educational purpose only",
          body: "All content, courses, systems, signals and recommendations provided by GO AI are for educational and informational purposes only. Nothing offered constitutes financial, investment, tax or legal advice, and no outcome or profit is guaranteed. Trading financial markets involves substantial risk of loss.",
        },
        {
          heading: "3. Enrollment and accounts",
          body: "You are responsible for providing accurate information at enrollment and for maintaining the confidentiality of your account credentials. Access is granted to you personally and may not be shared, resold or transferred.",
        },
        {
          heading: "4. Payments and plan duration",
          body: "Plan prices and access periods are shown on the pricing section of this website. Payment is due in full before access is granted. Access ends automatically at the close of the stated period unless renewed.",
        },
        {
          heading: "5. Refunds and cancellation",
          body: "Refund eligibility, if any, is described at the point of purchase. Where no refund policy is stated, purchases are considered final once program materials have been accessed.",
        },
        {
          heading: "6. Intellectual property",
          body: "All course materials, AI systems, recordings and written content remain the property of GO AI. You may not copy, redistribute, publish or create derivative works from them without prior written permission.",
        },
        {
          heading: "7. Acceptable use",
          body: "You agree not to misuse our community spaces or support channels, including harassment, spam, solicitation, or sharing of protected material. We may suspend or terminate access for violations without refund.",
        },
        {
          heading: "8. Limitation of liability",
          body: "To the fullest extent permitted by law, GO AI shall not be liable for any trading losses or for any indirect, incidental or consequential damages arising from your use of the site, the program or any signal or recommendation.",
        },
        {
          heading: "9. Changes to these terms",
          body: "We may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.",
        },
        {
          heading: "10. Contact",
          body: "Questions about these terms can be sent to hello@goai-academy.example.",
        },
      ]}
    />
  );
}
