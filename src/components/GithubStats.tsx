import { GitHubCalendar } from "react-github-calendar";

const GithubStats = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          GitHub Activity
        </h2>

        <div className="overflow-x-auto border rounded-xl p-6">
          <GitHubCalendar username="HendrixCliff" />
        </div>

        <div className="mt-8">
          <a
            href="https://github.com/HendrixCliff"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;