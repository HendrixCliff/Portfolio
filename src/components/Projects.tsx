const projects = [
  {
    name: "MooreHotelAndSuites",
    description:
      "Full-scale hotel management and booking platform built with ASP.NET Core Clean Architecture. Features JWT authentication, Redis caching, PostgreSQL, Docker containerization, monitoring with Prometheus & Grafana, centralized logging with Seq, and CI/CD automation.",
    technologies: [
      "ASP.NET Core",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Prometheus",
      "Grafana",
      "Seq",
      "CI/CD",
    ],
  },

  {
    name: "PayVault",
    description:
      "FinTech savings and lending platform that enables users to save money, earn interest, and apply for loans. Integrated a Credit Score Service to evaluate loan eligibility and enforce lending rules. Built with secure authentication, PostgreSQL, and scalable ASP.NET Core architecture.",
    technologies: [
      "ASP.NET Core",
      "PostgreSQL",
      "Credit Score API",
      "JWT Authentication",
      "Entity Framework Core",
      "REST APIs",
    ],
  },

  {
    name: "E-Commerce API",
    description:
      "Scalable e-commerce backend supporting product management, user authentication, image uploads via Cloudinary, and email notifications through SMTP services.",
    technologies: [
      "ASP.NET Core",
      "PostgreSQL",
      "Cloudinary",
      "SMTP",
    ],
  },

  {
    name: "Product Expiry Tracker",
    description:
      "Web application that helps users monitor product expiration dates and receive alerts before products expire.",
    technologies: [
      "React",
      "TypeScript",
      "Vercel",
      "Node.js",
      "Cron"
    ],
  },

  {
    name: "Inventory Summarizer",
    description:
      "Inventory management application that summarizes stock levels and provides insights into inventory performance.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="border rounded-xl p-6">
              <h3 className="text-2xl font-bold">
                {project.name}
              </h3>

              <p className="mt-4 text-gray-600">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;