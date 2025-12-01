import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      slug: "understanding-ats-systems",
      title: "Understanding ATS Systems: How Your Resume Gets Filtered Before Human Eyes See It",
      excerpt: "Discover the inner workings of Applicant Tracking Systems (ATS) and learn why up to 75% of resumes never reach human recruiters. This comprehensive guide reveals the algorithms behind modern hiring.",
      date: "December 1, 2024",
      readTime: "12 min read",
      category: "ATS Guide",
      featured: true
    },
    {
      slug: "ai-resume-screening",
      title: "The Rise of AI Resume Screening: What Job Seekers Need to Know in 2025",
      excerpt: "AI-powered resume screening is transforming the job market. Learn how Large Language Models evaluate candidates and what this means for your job search strategy.",
      date: "November 28, 2024",
      readTime: "10 min read",
      category: "AI Technology"
    },
    {
      slug: "prompt-injection-explained",
      title: "Prompt Injection in Resume Screening: A Technical Deep Dive",
      excerpt: "Explore the technical concept of prompt injection and understand how it can potentially influence AI-driven hiring systems. An educational look at AI vulnerabilities.",
      date: "November 25, 2024",
      readTime: "15 min read",
      category: "Technical"
    },
    {
      slug: "ethical-considerations-ats-bypass",
      title: "The Ethics of ATS Optimization: Where to Draw the Line",
      excerpt: "Is optimizing your resume for ATS systems ethical? We explore the moral considerations, legal implications, and best practices for job seekers navigating AI-driven hiring.",
      date: "November 22, 2024",
      readTime: "8 min read",
      category: "Ethics"
    },
    {
      slug: "future-of-ai-hiring",
      title: "The Future of AI in Hiring: Predictions and Trends for 2025-2030",
      excerpt: "What does the future hold for AI-driven recruitment? Industry experts weigh in on upcoming trends, technologies, and the evolving relationship between candidates and algorithms.",
      date: "November 18, 2024",
      readTime: "11 min read",
      category: "Industry Trends"
    },
    {
      slug: "resume-optimization-strategies",
      title: "Beyond Keywords: Advanced Resume Optimization Strategies for the AI Age",
      excerpt: "Move beyond basic keyword stuffing with these advanced techniques for making your resume stand out in both automated and human screening processes.",
      date: "November 15, 2024",
      readTime: "14 min read",
      category: "Career Tips"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - ATS Bypass Guides, AI Hiring Insights & Resume Tips | AROT</title>
        <meta name="description" content="Expert articles on ATS systems, AI resume screening, prompt injection techniques, and career optimization strategies. Stay informed about AI-driven hiring." />
        <meta name="keywords" content="ATS blog, resume optimization tips, AI hiring articles, career advice, prompt injection guide" />
        <link rel="canonical" href="https://llm-injection-on-pdf.vercel.app/blog" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              KNOWLEDGE BASE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The AROT <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth articles about AI-driven hiring, ATS systems, prompt injection techniques, and strategies for navigating the modern job market.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        {articles.filter(a => a.featured).map(article => (
          <section key={article.slug} className="pb-12 px-4">
            <div className="container mx-auto max-w-5xl">
              <Link to={`/blog/${article.slug}`} className="block">
                <article className="glass-card rounded-2xl p-8 md:p-12 hover:glow-box transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono">
                      FEATURED
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Tag className="w-4 h-4" />
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        ))}

        {/* Article Grid */}
        <section className="py-12 px-4 bg-card/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.filter(a => !a.featured).map((article) => (
                <Link key={article.slug} to={`/blog/${article.slug}`}>
                  <article className="glass-card rounded-xl p-6 h-full hover:glow-box transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest articles on AI hiring trends and resume optimization delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none"
              />
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
