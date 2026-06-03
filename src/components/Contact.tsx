import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope />
              <span>
                godwincliff10@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <FaPhone />
              <span>
                07043455089
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub />
              <a
                href="https://github.com/HendrixCliff"
                target="_blank"
                rel="noreferrer"
              >
                github.com/HendrixCliff
              </a>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;