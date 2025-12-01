import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Upload, 
  Code, 
  Download, 
  Zap, 
  Play,
  ExternalLink,
  AlertTriangle,
  Info,
  ArrowRight
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Your Resume",
      description: "Simply drag and drop your existing PDF resume into our tool. We support all standard PDF formats and your file never leaves your browser for maximum privacy."
    },
    {
      number: "02",
      icon: Code,
      title: "Customize the Prompt",
      description: "Use our default AI-optimized prompt or customize your own injection text. The prompt is designed to influence AI screening systems to view your application more favorably."
    },
    {
      number: "03",
      icon: Download,
      title: "Download Optimized PDF",
      description: "Your resume is instantly processed and the hidden prompt is embedded in the PDF metadata. Download the optimized version and use it in your job applications."
    },
  ];

  const videos = [
    {
      id: "jrHRe9lSqqA",
      title: "AI Resume Screening Explained",
      description: "Learn how AI systems screen resumes and why many qualified candidates get rejected automatically."
    },
    {
      id: "Sv5OLj2nVAQ",
      title: "Prompt Injection in AI Systems",
      description: "Understand the concept of prompt injection and how it can be applied to bypass AI filters."
    },
  ];

  return (
    <>
      <Helmet>
        <title>How ATS Bypass Works - Complete Guide to Resume Optimization | ATSBypass</title>
        <meta name="description" content="Learn how our ATS bypass tool works. Step-by-step guide to optimizing your resume for AI screening systems with prompt injection techniques." />
        <meta name="keywords" content="how ATS bypass works, resume optimization guide, prompt injection tutorial, AI screening bypass" />
        <link rel="canonical" href="https://atsbypass.com/how-it-works" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              LEARN THE TECHNIQUE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="gradient-text">ATS Bypass</span> Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understand the technology behind AI-driven hiring systems and how prompt injection can help your resume stand out in automated screening.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Simple <span className="gradient-text">3-Step Process</span>
            </h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:glow-box transition-all duration-300"
                >
                  <div className="flex items-center gap-4 md:flex-col md:items-start">
                    <span className="text-4xl font-bold gradient-text font-mono">{step.number}</span>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/#tool">
                <Button variant="cyber" size="lg">
                  Try It Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Technical Explanation */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              The <span className="gradient-text">Technical Details</span>
            </h2>

            <div className="glass-card rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">What is Prompt Injection?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prompt injection is a technique where specially crafted text is inserted into a document or input field to influence the behavior of AI systems processing that content. In the context of resumes, this means embedding instructions that AI screening tools might interpret as directives to evaluate the candidate more favorably.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">How ATS Systems Work</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">1. Document Parsing:</strong> ATS systems extract text from your resume, including metadata, headers, and body content. Many systems use AI to understand context and relevance.
                </p>
                <p>
                  <strong className="text-foreground">2. Keyword Matching:</strong> Traditional systems scan for specific keywords matching the job description. Modern AI-powered systems go further, analyzing semantic meaning and context.
                </p>
                <p>
                  <strong className="text-foreground">3. AI Evaluation:</strong> Advanced systems use Large Language Models (LLMs) to evaluate candidates holistically, considering factors like experience relevance, skill match, and career progression.
                </p>
                <p>
                  <strong className="text-foreground">4. Ranking & Scoring:</strong> Based on the analysis, candidates are ranked and scored. Only top-scoring resumes proceed to human review.
                </p>
              </div>
            </div>

            <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Important Disclaimer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This tool is provided for educational purposes to demonstrate vulnerabilities in AI-driven hiring systems. The effectiveness of prompt injection varies depending on the specific ATS system, and some modern systems have protections against such techniques. Use this tool responsibly and ethically, understanding that misrepresenting your qualifications is not advisable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-4">
              Watch & <span className="gradient-text">Learn</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              These educational videos explain the concepts behind AI resume screening and prompt injection techniques.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="glass-card rounded-2xl overflow-hidden hover:glow-box transition-all duration-300">
                  <div className="relative aspect-video bg-secondary">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Is this legal to use?",
                  a: "The tool itself is legal as it simply modifies PDF metadata. However, misrepresenting your qualifications to employers may have ethical and potentially legal implications depending on your jurisdiction. We recommend using this tool for educational purposes and to understand how AI systems work."
                },
                {
                  q: "Does it work on all ATS systems?",
                  a: "The effectiveness varies. Some modern ATS systems have protections against prompt injection, while others may be more susceptible. This tool demonstrates a proof-of-concept that highlights vulnerabilities in AI-driven screening."
                },
                {
                  q: "Will employers see the injected text?",
                  a: "The prompt is embedded in the PDF metadata, which is typically not visible when viewing or printing the document. However, if an employer inspects the PDF metadata directly, they could potentially see the injected content."
                },
                {
                  q: "Is my resume data safe?",
                  a: "Yes. All processing happens locally in your browser. Your resume file is never uploaded to any server, ensuring complete privacy."
                },
              ].map((faq, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to <span className="gradient-text">Try It</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Now that you understand how it works, try the tool for yourself and see the technology in action.
            </p>
            <Link to="/#tool">
              <Button variant="cyber" size="xl">
                <Zap className="w-5 h-5" />
                Use Free Tool Now
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HowItWorks;
