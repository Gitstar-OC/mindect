import Image from "next/image";
import { Users } from "lucide-react";

//https://ui.aceternity.com/components/meteors for the review one

const Reviews = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          What Our Learners Say
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-neutral-950 rounded-2xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition duration-300">
            <div className="flex items-center mb-6">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="User Avatar"
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg">Shreyash </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Data Scientist
                </p>
              </div>
            </div>
            <p className="text-lg italic">
              "I was part thrilled part saddened after seeing it. It was so amazing I just loved it intensely but melancholic because I wish I could have that resource while learning Machine Learning then the journey wouldn't have been that hard."
            </p>
          </div>
          <div className="space-y-6">
            <Users className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-center">
              Join Thousands of Satisfied Learners
            </h3>
            <p className="text-lg text-center">
              Our community of learners is growing every day. Discover why
              Mindect is the preferred choice for aspiring AI professionals and
              enthusiasts worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
