const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="border-l-4 border-blue-600 pl-8">
          <div className="mb-10">
            <h3 className="text-2xl font-bold">
              Independent Backend Developer
            </h3>

            <p className="text-gray-500">
              July 2024 – Present
            </p>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>
                Built secure ASP.NET Core APIs using Clean Architecture.
              </li>

              <li>
                Implemented JWT Authentication with Access and Refresh Tokens.
              </li>

              <li>
                Designed PostgreSQL databases using Entity Framework Core.
              </li>

              <li>
                Containerized applications using Docker and Docker Compose.
              </li>

              <li>
                Implemented monitoring with Prometheus, Grafana and Seq.
              </li>

              <li>
                Automated build pipelines using GitHub Actions CI/CD.
              </li>

              <li>
                Integrated Redis caching for performance optimization.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;