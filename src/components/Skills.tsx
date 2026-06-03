const skills = {
  Backend: [
    "ASP.NET Core",
    "C#",
    "Node.js",
    "NestJS",
    "GraphQL",
    "REST API",
    "JWT",
  ],

  Database: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Entity Framework Core",
    "TypeORM",
  ],

  DevOps: [
    "Docker",
    "Docker Compose",
    "GitHub Actions",
    "CI/CD",
    "Prometheus",
    "Grafana",
    "Seq",
  ],

  Cloud: [
    "Render",
    "Vercel",
    "Cloudinary",
    "Neon PostgreSQL",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, values]) => (
            <div key={category} className="border rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>

              <div className="flex flex-wrap gap-3">
                {values.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border"
                  >
                    {skill}
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

export default Skills;