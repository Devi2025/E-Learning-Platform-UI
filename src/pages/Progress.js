import React from "react";
import { motion } from "framer-motion";

const courses = [
  { title: "📘 React Basics", progress: 80 },
  { title: "🎨 Advanced Tailwind", progress: 50 },
  { title: "💻 JavaScript Pro", progress: 30 },
];

const Progress = () => {
  return (
    <section className="bg-white py-16 px-6 min-h-screen flex justify-center items-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          📊 Your Course Progress
        </h2>
        <div className="space-y-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-gray-800">
                  {course.title}
                </span>
                <span className="text-sm text-gray-600">
                  {course.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-4 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Progress;
