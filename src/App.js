export default function Portfolio() {
  const projects = [
    {
      title: "Benjamin Bridge Campaigns",
      description:
        "Developed social media campaigns, event promotions, and digital storytelling content for a luxury Nova Scotia winery.",
      tags: ["Social Media", "Brand Marketing", "Email Campaigns"],
    },
    {
      title: "Festival & Event Marketing",
      description:
        "Created engaging promotional content for seasonal events, giveaways, and hospitality experiences designed to increase audience engagement and attendance.",
      tags: ["Event Marketing", "Content Creation", "Campaign Strategy"],
    },
    {
      title: "Annapolis Valley Social",
      description:
        "Provided freelance marketing services including branding, SEO optimization, social media management, and content creation for local businesses.",
      tags: ["Freelance", "Branding", "Digital Strategy"],
    },
    {
      title: "PurelyPrintedPaperCo",
      description:
        "Designed and marketed editable digital templates through Etsy while managing product branding, SEO, and online customer engagement.",
      tags: ["E-Commerce", "Graphic Design", "SEO"],
    },
  ];

  const skills = [
    "Social Media Strategy",
    "Content Creation",
    "Digital Marketing",
    "Photography",
    "Email Marketing",
    "SEO Optimization",
    "Brand Development",
    "Graphic Design",
    "Creative Direction",
    "Campaign Planning",
  ];

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-neutral-500 mb-4">
              Marketing Portfolio
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Emily Hartnell
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
              Creative marketer specializing in social media strategy, digital
              campaigns, content creation, and brand storytelling across
              hospitality, tourism, lifestyle, and event industries.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-black text-white text-sm font-medium shadow-lg hover:scale-105 transition-transform">
                View My Work
              </button>
              <button className="px-6 py-3 rounded-2xl border border-neutral-300 bg-white text-sm font-medium hover:bg-neutral-100 transition">
                Contact Me
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 rounded-3xl bg-neutral-300"></div>
            <div className="h-40 rounded-3xl bg-neutral-200 mt-12"></div>
            <div className="h-40 rounded-3xl bg-neutral-200 -mt-8"></div>
            <div className="h-64 rounded-3xl bg-neutral-300"></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            I am a creative and results-driven marketing professional with
            experience in social media management, campaign development, event
            marketing, digital storytelling, and audience engagement. I love
            building brands that feel elevated, authentic, and visually
            compelling.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200">
          <h3 className="text-xl font-semibold mb-6">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-neutral-100 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Selected Work</h2>
            <p className="text-neutral-500">Marketing • Social • Creative</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200 hover:-translate-y-1 transition-transform shadow-sm"
              >
                <div className="h-52 rounded-2xl bg-neutral-300 mb-6"></div>
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-white border border-neutral-200 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-10 border border-neutral-200 text-center shadow-sm">
            <h3 className="text-5xl font-bold mb-3">4+</h3>
            <p className="text-neutral-600">Years of Marketing Experience</p>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-neutral-200 text-center shadow-sm">
            <h3 className="text-5xl font-bold mb-3">100+</h3>
            <p className="text-neutral-600">
              Campaigns & Social Assets Created
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-neutral-200 text-center shadow-sm">
            <h3 className="text-5xl font-bold mb-3">10+</h3>
            <p className="text-neutral-600">Brands & Projects Supported</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-neutral-400 mb-6">
            Let’s Work Together
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Building impactful brands through creative storytelling.
          </h2>

          <div className="space-y-2 text-neutral-300 text-lg">
            <p>Emily Hartnell</p>
            <p>your@email.com</p>
            <p>Halifax, Nova Scotia</p>
          </div>
        </div>
      </section>
    </div>
  );
}
