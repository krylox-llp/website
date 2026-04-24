import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Krylox LLP collects, uses, and protects your personal data.",
  alternates: { canonical: "https://krylox.ai/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white pt-32 pb-16 border-b border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">Privacy Policy</h1>
            <p className="mt-3 text-sm text-gray-400">Last updated: April 2026</p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-gray max-w-none">

            <h2>1. Who we are</h2>
            <p>
              Krylox LLP is an MLOps and AI inference engineering firm registered in India
              (<strong>Data Fiduciary</strong> under the Digital Personal Data Protection Act, 2023,
              &ldquo;DPDPA&rdquo;). Our registered address and principal place of business is Chennai,
              Tamil Nadu, India. You can contact us at{" "}
              <a href="mailto:hello@krylox.ai">hello@krylox.ai</a>.
            </p>

            <h2>2. Data we collect</h2>
            <p>We collect only what is necessary to respond to your enquiry:</p>
            <ul>
              <li><strong>Contact form:</strong> first name, last name, work email, company name, service of interest, and a free-text message.</li>
              <li><strong>Usage data:</strong> standard server logs (IP address, browser type, pages visited). These are not linked to your identity and are retained for 30 days.</li>
            </ul>
            <p>We do not use advertising cookies, tracking pixels, or third-party analytics that profile you across sites.</p>

            <h2>3. Legal basis for processing</h2>
            <p>We process your personal data on the following bases under the DPDPA:</p>
            <ul>
              <li><strong>Consent (§6):</strong> when you submit our contact form, you consent to us processing the data provided for the purpose of responding to your enquiry. Your consent is free, specific, informed, and unambiguous.</li>
              <li><strong>Certain legitimate uses (§7):</strong> where you have voluntarily provided your personal data to us and have not indicated that you do not consent to its use for the purpose for which it was provided.</li>
            </ul>

            <h2>4. How we use your data</h2>
            <p>Your data is used solely to:</p>
            <ul>
              <li>Respond to your enquiry and assess your technical requirements.</li>
              <li>Send you information relevant to the services you asked about.</li>
            </ul>
            <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

            <h2>5. Data processors</h2>
            <p>
              We engage the following Data Processors under valid contracts, who process your data
              only on our behalf and for the purposes described above:
            </p>
            <ul>
              <li><strong>Resend Inc.</strong> (USA), email delivery. Processes your name and email address solely to transmit our reply.</li>
            </ul>
            <p>
              We remain responsible for compliance with the DPDPA in respect of all processing
              undertaken by these processors on our behalf (§8(1)).
            </p>

            <h2>6. Withdrawal of consent</h2>
            <p>
              Where consent is the basis of processing, you may withdraw it at any time. Withdrawal
              is as easy as giving consent, simply email{" "}
              <a href="mailto:hello@krylox.ai">hello@krylox.ai</a>. Upon withdrawal we will, within
              a reasonable time, cease processing and direct our Data Processors to do the same,
              unless processing without your consent is authorised under the DPDPA or any other law
              (§6(4)–(6)). Withdrawal does not affect the lawfulness of processing carried out before
              withdrawal.
            </p>

            <h2>7. Retention</h2>
            <p>
              Enquiry data is retained only for as long as necessary to fulfil the purpose for which
              it was collected, or as required by applicable law. Once the specified purpose is no
              longer being served, we erase the data and direct our processors to do the same (§8(7)).
              In practice this is typically no longer than 3 years after the last interaction.
            </p>

            <h2>8. Children&apos;s personal data</h2>
            <p>
              Our services are directed at businesses and professionals. We do not knowingly collect
              or process personal data of children (individuals under 18 years of age). If we become
              aware that we have inadvertently received personal data of a child, we will erase it
              without undue delay. We do not undertake behavioural monitoring of children or targeted
              advertising directed at children (§9).
            </p>

            <h2>9. Personal data breach notification</h2>
            <p>
              In the event of a personal data breach that compromises the confidentiality, integrity,
              or availability of your personal data, we will notify the Data Protection Board of India
              and each affected Data Principal in the manner prescribed under §8(6) of the DPDPA.
            </p>

            <h2>10. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal
              data against unauthorised access, loss, or disclosure, and to prevent personal data
              breaches (§8(4)–(5)). All data is transmitted over HTTPS.
            </p>

            <h2>11. Your rights (DPDPA 2023)</h2>
            <p>As a Data Principal you have the following rights under the DPDPA:</p>
            <ul>
              <li>
                <strong>Right to access information (§11):</strong> obtain a summary of the personal
                data we are processing about you, the processing activities undertaken, and the
                identities of any other Data Fiduciaries or Data Processors with whom your data
                has been shared.
              </li>
              <li>
                <strong>Right to correction, completion, and updating (§12):</strong> request that
                we correct inaccurate or misleading data, complete incomplete data, or update your
                data.
              </li>
              <li>
                <strong>Right to erasure (§12):</strong> request erasure of your personal data where
                it is no longer necessary for the specified purpose and retention is not required
                by law.
              </li>
              <li>
                <strong>Right to grievance redressal (§13):</strong> raise a grievance about the
                performance of our obligations or the exercise of your rights under the DPDPA.
                We will respond within 72 hours of receipt.
              </li>
              <li>
                <strong>Right to nominate (§14):</strong> nominate another individual to exercise
                these rights on your behalf in the event of your death or incapacity.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email our Grievance Officer at{" "}
              <a href="mailto:hello@krylox.ai">hello@krylox.ai</a>. If your grievance is not
              resolved to your satisfaction, you may approach the{" "}
              <strong>Data Protection Board of India</strong> in the manner prescribed under the
              DPDPA (§13(3)).
            </p>

            <h2>12. Cookies</h2>
            <p>
              This site uses only one functional cookie: a <code>cookie_consent</code> value stored
              in your browser&apos;s local storage to remember your preference. No analytics, advertising,
              or cross-site tracking cookies are set. We do not use Google Analytics or any other
              third-party tracking service.
            </p>

            <h2>13. Cross-border data transfers</h2>
            <p>
              Your data may be processed by our Data Processors outside India (see §5 above). Such
              transfers are subject to any restrictions notified by the Central Government under
              §16 of the DPDPA. We ensure that processors outside India are bound by contractual
              obligations equivalent to those required under the DPDPA.
            </p>

            <h2>14. Governing law</h2>
            <p>
              This policy is governed by the laws of India, including the Digital Personal Data
              Protection Act, 2023 and the Information Technology Act, 2000. Any disputes shall
              be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.
            </p>

            <h2>15. Changes</h2>
            <p>
              We may update this policy from time to time. Material changes will be noted at the top
              of this page with an updated date.
            </p>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
