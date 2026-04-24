import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of Krylox LLP services.",
  alternates: { canonical: "https://krylox.ai/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white pt-32 pb-16 border-b border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">Terms of Service</h1>
            <p className="mt-3 text-sm text-gray-400">Last updated: April 2026</p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-gray max-w-none">

            <h2>1. Parties</h2>
            <p>
              These terms govern the relationship between <strong>Krylox LLP</strong>, a limited
              liability partnership registered in India with its principal place of business in
              Chennai, Tamil Nadu (<em>&ldquo;Krylox&rdquo;</em>, <em>&ldquo;we&rdquo;</em>,{" "}
              <em>&ldquo;us&rdquo;</em>), and any individual or entity (<em>&ldquo;Client&rdquo;</em>,{" "}
              <em>&ldquo;you&rdquo;</em>) that engages Krylox for services or accesses this website.
            </p>

            <h2>2. Services</h2>
            <p>Krylox provides specialist MLOps engineering and AI inference optimization services, including but not limited to:</p>
            <ul>
              <li>Inference optimization (quantization, TensorRT, batching)</li>
              <li>MLOps pipeline design and implementation</li>
              <li>Model drift monitoring and automated retraining</li>
              <li>Reproducibility infrastructure</li>
              <li>Cloud cost optimization</li>
              <li>Managed GPU hosting on Krylox infrastructure</li>
            </ul>
            <p>
              The specific scope, deliverables, timeline, and fees for each engagement are defined
              in a separate Statement of Work (<em>&ldquo;SOW&rdquo;</em>) agreed in writing between
              the parties.
            </p>

            <h2>3. Fees and payment</h2>
            <p>
              Fees are as specified in the applicable SOW. Unless otherwise agreed, invoices are due
              within 14 days of the invoice date. Late payments accrue interest at 1.5% per month.
              Krylox reserves the right to suspend services for overdue accounts.
            </p>

            <h2>4. Intellectual property</h2>
            <p>
              Upon receipt of full payment, all custom work product created specifically for the
              Client under a SOW is assigned to the Client. Krylox retains ownership of its
              pre-existing tools, frameworks, methodologies, and general know-how. Open-source
              components remain subject to their respective licences.
            </p>

            <h2>5. Confidentiality</h2>
            <p>
              Each party agrees to keep confidential all non-public information disclosed by the
              other party in connection with an engagement, and not to disclose it to third parties
              without prior written consent. This obligation survives termination of the engagement
              for a period of 3 years.
            </p>

            <h2>6. Warranties and disclaimers</h2>
            <p>
              Krylox warrants that services will be performed with reasonable skill and care.
              Results such as latency improvements and cost reductions are documented outcomes from
              prior engagements and are not guaranteed for every client, they depend on the
              client&apos;s existing infrastructure and model architecture.
            </p>
            <p>
              To the maximum extent permitted by law, Krylox disclaims all other warranties,
              express or implied.
            </p>

            <h2>7. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Krylox&apos;s total liability to
              the Client for any claim arising out of or related to an engagement shall not exceed
              the total fees paid by the Client to Krylox in the 3 months preceding the claim.
              Krylox shall not be liable for any indirect, incidental, or consequential damages.
            </p>

            <h2>8. Termination</h2>
            <p>
              Either party may terminate an engagement with 14 days written notice. The Client
              remains liable for fees for work completed up to the termination date. Clauses 4, 5,
              7, and 10 survive termination.
            </p>

            <h2>9. Data protection</h2>
            <p>
              Each party agrees to comply with all applicable data protection laws in connection
              with any personal data processed under or in relation to these terms, including the
              Digital Personal Data Protection Act, 2023 (&ldquo;DPDPA&rdquo;). Where Krylox
              processes personal data on behalf of the Client as a Data Processor, the parties
              shall enter into a written data processing agreement as required under §8(2) of the
              DPDPA. Our practices regarding personal data collected through this website are
              described in our{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>

            <h2>10. Your obligations when exercising data rights</h2>
            <p>
              When you submit personal data to us or exercise rights under applicable data
              protection law, you agree to the following obligations as a Data Principal under
              §15 of the DPDPA:
            </p>
            <ul>
              <li>Comply with all applicable laws while exercising your rights.</li>
              <li>Not impersonate another person when providing personal data.</li>
              <li>Not suppress any material information when providing personal data for identity or address verification purposes.</li>
              <li>Not register a false or frivolous grievance or complaint with us.</li>
              <li>Furnish only information that is verifiably authentic when exercising the right to correction or erasure.</li>
            </ul>

            <h2>11. Governing law and jurisdiction</h2>
            <p>
              These terms are governed by the laws of India, including the Digital Personal Data
              Protection Act, 2023. Any dispute arising out of or in connection with these terms
              shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu,
              India.
            </p>

            <h2>12. Changes</h2>
            <p>
              Krylox may update these terms from time to time. Continued use of our services
              following notice of changes constitutes acceptance of the revised terms.
            </p>

            <h2>13. Contact</h2>
            <p>
              For any queries regarding these terms, contact us at{" "}
              <a href="mailto:hello@krylox.ai">hello@krylox.ai</a>.
            </p>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
