const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-lg leading-8 text-gray-600">
          I am a Backend & DevOps Engineer focused on building secure,
          maintainable and scalable systems using ASP.NET Core and modern cloud
          infrastructure.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-xl border">
            <h3 className="font-bold mb-3">Backend</h3>
            <ul className="space-y-2">
              <li>ASP.NET Core</li>
              <li>Clean Architecture</li>
              <li>JWT Authentication</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-bold mb-3">Database</h3>
            <ul className="space-y-2">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
              <li>Entity Framework Core</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-bold mb-3">DevOps</h3>
            <ul className="space-y-2">
              <li>Docker</li>
              <li>GitHub Actions</li>
              <li>Prometheus</li>
              <li>Grafana</li>
              <li>Seq</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;