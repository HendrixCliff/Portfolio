const projects = [
  {
    name: "MooreHotelAndSuites",
    description:
      "Hotel booking and management system built with ASP.NET Core Clean Architecture.",
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
    name: "E-Commerce API",
    description:
      "Scalable e-commerce backend with authentication and cloud storage.",
    technologies: [
      "ASP.NET Core",
      "PostgreSQL",
      "Cloudinary",
      "SMTP",
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