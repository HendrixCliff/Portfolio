const tools = [
  {
    title: "Docker",
    description: "Containerized applications and infrastructure.",
  },
  {
    title: "GitHub Actions",
    description: "CI/CD automation and build pipelines.",
  },
  {
    title: "Prometheus",
    description: "Application metrics and monitoring.",
  },
  {
    title: "Grafana",
    description: "Operational dashboards and visualization.",
  },
  {
    title: "Seq",
    description: "Centralized structured logging.",
  },
  {
    title: "Redis",
    description: "Caching and performance optimization.",
  },
];

const DevOps = () => {
  return (
    <section id="devops" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Monitoring & Observability
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="border rounded-xl p-6"
            >
              <h3 className="font-bold text-xl mb-3">
                {tool.title}
              </h3>

              <p className="text-gray-600">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOps;