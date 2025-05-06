import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "React Basics",
    description: "Learn the fundamentals of React.",
    icon: "📘",
  },
  {
    id: 2,
    title: "Advanced Tailwind",
    description: "Master complex layouts with TailwindCSS.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "JavaScript Pro",
    description: "Deep dive into JavaScript.",
    icon: "💻",
  },
];

const CoursesSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 border-t-4 border-blue-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {course.title}
              </h3>
              <p className="text-gray-600">{course.description}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition">
                Start Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
