import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Shield, 
  Users, 
  Lightbulb,
  ArrowRight,
  BookOpen,
  Code,
  Heart
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We believe in exposing the hidden systems that affect job seekers. Understanding how AI screening works empowers everyone to navigate the modern job market."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Career opportunities shouldn't depend on whether you know the 'tricks' of the system. We make this knowledge freely available to all job seekers."
    },
    {
      icon: Lightbulb,
      title: "Education",
      description: "Our primary mission is education. We want everyone to understand how AI-driven hiring works, not just those with technical backgrounds."
    },
    {
      icon: Code,
      title: "Privacy First",
      description: "Your resume data is yours. All processing happens in your browser, and we never store or transmit your personal information."
    },
  ];

  const team = [
    {
      role: "Mission",
      description: "To level the playing field for job seekers by revealing how AI screening systems work and providing tools to navigate them effectively."
    },
    {
      role: "Vision",
      description: "A future where hiring decisions are fair, transparent, and based on genuine qualifications rather than algorithmic gatekeeping."
    },
  ];

  return (
    <>
      <Helmet>
        <title>About ATSBypass - Our Mission to Fair Hiring | ATSBypass</title>
        <meta name="description" content="Learn about ATSBypass and our mission to help job seekers navigate AI-driven hiring systems. We believe in transparency, education, and fair opportunities for all." />
        <meta name="keywords" content="about ATSBypass, fair hiring, AI transparency, job search help, resume optimization mission" />
        <link rel="canonical" href="https://atsbypass.com/about" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fighting for <span className="gradient-text">Fair Hiring</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to democratize access to AI hiring knowledge and help job seekers understand the systems that silently judge their applications.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ATSBypass was born from frustration. Like millions of job seekers, our founders experienced the modern hiring gauntlet: submitting countless applications into what felt like a black hole, never hearing back despite being qualified for positions.
                </p>
                <p>
                  The culprit? Applicant Tracking Systems (ATS) and AI screening tools that automatically reject up to 75% of resumes before a human ever sees them. These systems, designed to handle the volume of modern job applications, have created a new barrier to employment that disproportionately affects qualified candidates who don't know how to "speak" to the algorithm.
                </p>
                <p>
                  We discovered that these AI systems, like all AI, have vulnerabilities. Prompt injection techniques that work on chatbots can also work on resume screening AI. This isn't about cheating—it's about understanding and navigating a system that's already tilted against job seekers.
                </p>
                <p>
                  Our tool demonstrates these vulnerabilities while educating users about how AI hiring works. We believe that when everyone understands these systems, we can push for more transparent, fair hiring practices across all industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="gradient-text">Values</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-6 hover:glow-box transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((item, index) => (
                <div key={index} className="glass-card rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {index === 0 ? (
                      <Target className="w-6 h-6 text-primary" />
                    ) : (
                      <Lightbulb className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.role}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why This <span className="gradient-text">Matters</span>
            </h2>

            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Heart className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Human Cost of AI Screening</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Every day, qualified professionals are rejected by algorithms that can't truly understand human potential. A career changer with transferable skills gets filtered out. A self-taught developer without traditional credentials never gets seen. A parent returning to work after a gap year disappears into the void.
                    </p>
                    <p>
                      These aren't just statistics—they're real people with real bills to pay and dreams to pursue. The AI systems making these decisions weren't designed to be cruel, but their implementation often is.
                    </p>
                    <p>
                      By understanding how these systems work and sharing that knowledge freely, we hope to empower job seekers while also pushing the industry toward more transparent, equitable hiring practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join the <span className="gradient-text">Movement</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're a job seeker looking to optimize your resume or someone who wants to learn more about AI in hiring, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#tool">
                <Button variant="cyber" size="lg">
                  Try Our Free Tool
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  <BookOpen className="w-5 h-5" />
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

export default About;
