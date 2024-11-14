const Mission = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Mission
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              At Mindect, we're on a mission to democratize AI education. We
              believe that by providing a unified, comprehensive learning
              platform, we can empower individuals to master the technologies
              shaping our future.
            </p>
            <p className="text-lg">
              Our curated courses and hands-on projects are designed to take you
              from novice to expert, ensuring you're equipped with the skills
              needed to thrive in the AI-driven world.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-64 bg-gray-300 dark:bg-neutral-950 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
              Illustration Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
