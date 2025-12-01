import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Your Data Security Matters | ATSBypass</title>
        <meta name="description" content="Read our privacy policy to understand how ATSBypass protects your data. We prioritize your privacy with local processing and zero data collection." />
        <link rel="canonical" href="https://atsbypass.com/privacy-policy" />
      </Helmet>

      <Layout>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At ATSBypass ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our ATS resume optimization tool. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <h3 className="text-lg font-medium text-foreground">Personal Data</h3>
                  <p>
                    We may collect personal identification information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fill out our contact form (name, email address)</li>
                    <li>Subscribe to our newsletter (email address)</li>
                    <li>Leave comments on our blog posts</li>
                  </ul>
                  
                  <h3 className="text-lg font-medium text-foreground mt-6">Resume Data</h3>
                  <p>
                    <strong className="text-foreground">Important:</strong> Our PDF optimization tool processes your resume entirely within your web browser. Your resume files are NEVER uploaded to our servers. All processing happens locally on your device, ensuring complete privacy of your resume content and personal information contained within.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mt-6">Automatically Collected Data</h3>
                  <p>
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>IP address (anonymized)</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you newsletters and marketing communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                  </p>
                  <p>Types of cookies we use:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong className="text-foreground">Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                  <p>
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>We may use third-party services that collect, monitor, and analyze data:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-foreground">Google Analytics:</strong> For website analytics</li>
                    <li><strong className="text-foreground">Google AdSense:</strong> For displaying advertisements</li>
                  </ul>
                  <p>
                    These third-party service providers have their own privacy policies addressing how they use such information.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The right to access your personal data</li>
                    <li>The right to rectification of inaccurate data</li>
                    <li>The right to erasure ("right to be forgotten")</li>
                    <li>The right to restrict processing</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>Email: privacy@atsbypass.com</li>
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

export default PrivacyPolicy;
