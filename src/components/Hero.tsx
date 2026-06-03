import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lg text-blue-500 font-semibold">
            Backend & DevOps Engineer
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Godwin Chukwuebuka Igwegbe
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Building secure, scalable and observable systems using ASP.NET Core,
            PostgreSQL, Docker, CI/CD pipelines and modern monitoring tools.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-lg bg-black text-white"
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={profile}
            alt="Godwin"
            className="w-80 h-80 rounded-full object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;