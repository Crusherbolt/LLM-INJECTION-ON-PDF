import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Usage Guidelines | AROT</title>
        <meta name="description" content="Read the AROT terms of service. Understand our usage guidelines, disclaimers, and your responsibilities when using our ATS bypass tool." />
        <link rel="canonical" href="https://llm-injection-on-pdf.vercel.app/terms-of-service" />
      </Helmet>

      <Layout>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of <span className="gradient-text">Service</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using AROT ("the Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    AROT provides an educational tool that demonstrates how prompt injection techniques can be applied to PDF documents. The tool is designed to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Educate users about AI-driven hiring systems</li>
                    <li>Demonstrate vulnerabilities in Applicant Tracking Systems</li>
                    <li>Provide research and educational content about AI in recruitment</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Educational Purpose Disclaimer</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-medium text-foreground">
                    IMPORTANT: This tool is provided for educational and research purposes only.
                  </p>
                  <p>
                    The AROT tool is designed to demonstrate and educate users about the existence of vulnerabilities in AI-driven hiring systems. We do not guarantee that the techniques demonstrated will be effective against any particular ATS system, and effectiveness may vary widely.
                  </p>
                  <p>
                    Users are solely responsible for how they use the information and tools provided. We do not endorse or encourage any unethical use of this tool, including but not limited to misrepresenting qualifications or deceiving employers.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>By using this Service, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the tool only for lawful purposes</li>
                    <li>Not misrepresent your qualifications or experience to employers</li>
                    <li>Accept full responsibility for any consequences resulting from your use of the tool</li>
                    <li>Not use the service to engage in any fraudulent activity</li>
                    <li>Comply with all applicable employment laws and regulations in your jurisdiction</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">No Guarantees</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>We make no representations or warranties about:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The effectiveness of the prompt injection techniques against any specific ATS system</li>
                    <li>Your likelihood of receiving interviews or job offers</li>
                    <li>The legality of using such techniques in your jurisdiction or with specific employers</li>
                    <li>The accuracy, completeness, or usefulness of any information provided</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of AROT and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks may not be used in connection with any product or service without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">User Content</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    When you use our PDF processing tool, you retain all rights to your content. As stated in our Privacy Policy, your resume files are processed entirely in your browser and are never uploaded to our servers.
                  </p>
                  <p>
                    For any content you submit to our blog comments or contact forms, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content in connection with operating and improving the Service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    In no event shall AROT, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                    <li>Damages resulting from your use or inability to use the Service</li>
                    <li>Any conduct or content of any third party on the Service</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                    <li>Any employment decisions made by third parties</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless AROT and its licensees, licensors, employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt and expenses arising from your use of the Service, your violation of these Terms, or your violation of any third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service may contain links to third-party websites or services that are not owned or controlled by AROT. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that AROT shall not be responsible or liable for any damage or loss caused by use of any such content, goods, or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed and construed in accordance with applicable laws, without regard to conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after revisions become effective, you agree to be bound by the revised terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>Email: vidhan365@gmail.com</li>
                  <li>Website: <a href="/contact" className="text-primary hover:underline">Contact Form</a></li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TermsOfService;
