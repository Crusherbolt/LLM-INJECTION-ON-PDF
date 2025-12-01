import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import PDFInjector from "@/components/PDFInjector";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Bot,
  FileSearch,
  Award
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Bypass ATS Filters",
      description: "Inject optimized prompts that help your resume pass through automated screening systems used by 98% of Fortune 500 companies."
    },
    {
      icon: Bot,
      title: "AI-Optimized Prompts",
      description: "Our carefully crafted prompts are designed to influence AI resume screening tools to view your application more favorably."
    },
    {
      icon: Target,
      title: "Increase Interview Chances",
      description: "Stand out in the initial screening phase and increase your chances of getting that crucial first interview."
    },
    {
      icon: FileSearch,
      title: "Hidden Metadata Injection",
      description: "Prompts are embedded invisibly in PDF metadata, appearing normal to human readers while influencing AI systems."
    },
  ];

  const stats = [
    { value: "98%", label: "Fortune 500 use ATS" },
    { value: "75%", label: "Resumes rejected by ATS" },
    { value: "6 sec", label: "Avg. human review time" },
    { value: "24/7", label: "AI screening active" },
  ];

  const benefits = [
    "No signup required - completely free",
    "Your resume never leaves your browser",
    "Works with any PDF resume format",
    "Instant download of optimized PDF",
    "Educational demonstrations included",
    "Privacy-focused approach"
  ];

  return (
    <>
      <Helmet>
        <title>ATS Resume Bypass Tool - Beat AI Hiring Systems | AROT</title>
        <meta name="description" content="Free ATS resume bypass tool that helps job seekers optimize resumes to pass automated screening systems. Inject AI prompts to stand out in AI-driven hiring." />
        <meta name="keywords" content="ATS bypass, resume optimizer, AI hiring, applicant tracking system, job search, resume screening, prompt injection" />
        <link rel="canonical" href="https://llm-injection-on-pdf.vercel.app" />
        <meta property="og:title" content="ATS Resume Bypass Tool - Beat AI Hiring Systems" />
        <meta property="og:description" content="Free tool to optimize your resume for ATS systems and AI-driven hiring." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-primary">AI Resume Optimization Tool</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="text-foreground">Beat the </span>
                <span className="gradient-text">ATS Algorithm</span>
                <br />
                <span className="text-foreground">Get Interviews</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                A smart tech platform that helps job seekers optimize resumes to bypass ATS filters and stand out in AI‑driven hiring processes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <a href="#tool">
                  <Button variant="cyber" size="xl">
                    Try Free Tool
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <Link to="/how-it-works">
                  <Button variant="cyber-outline" size="xl">
                    Learn How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-border bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Your Resume Gets <span className="gradient-text">Rejected</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Applicant Tracking Systems and AI screening tools silently reject qualified candidates. 
                Our tool helps you fight back with the same technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 hover:glow-box transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <PDFInjector />

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Choose <span className="gradient-text">AROT</span>?
                  </h2>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-8 glow-box">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Educational Purpose</h3>
                      <p className="text-muted-foreground text-sm">Learn how AI systems work</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This tool demonstrates vulnerabilities in AI-driven hiring systems. Understanding how these systems work empowers job seekers to navigate the modern job market more effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Resources Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Learn More About <span className="gradient-text">ATS & AI Hiring</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our in-depth articles to understand how AI-driven hiring works and how to optimize your job search strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/understanding-ats-systems" className="glass-card rounded-xl p-6 hover:glow-box transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <FileSearch className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  Understanding ATS Systems
                </h3>
                <p className="text-muted-foreground text-sm">
                  Learn how Applicant Tracking Systems filter resumes and why 75% get rejected before human review.
                </p>
              </Link>

              <Link to="/blog/resume-optimization-strategies" className="glass-card rounded-xl p-6 hover:glow-box transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  Optimization Strategies
                </h3>
                <p className="text-muted-foreground text-sm">
                  Advanced techniques for making your resume stand out in both automated and human screening.
                </p>
              </Link>

              <Link to="/blog/ai-resume-screening" className="glass-card rounded-xl p-6 hover:glow-box transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  AI Resume Screening
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover how AI-powered screening is transforming the job market in 2025.
                </p>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  View All Articles
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Beat the Algorithm</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of job seekers who are using AI to fight AI. 
              Your dream job might be one optimized resume away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#tool">
                <Button variant="cyber" size="xl">
                  Start Optimizing Free
                  <Zap className="w-5 h-5" />
                </Button>
              </a>
              <Link to="/blog">
                <Button variant="outline" size="xl">
                  Read Our Research
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
