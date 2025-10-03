"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const articles = [
  {
    date: "10/12/2025",
    title: "From Hunger To Hope: The Impact Of Daily School Meals",
    description:
      "How One Warm Meal A Day Helps Children Focus, Learn, And Grow Healthier",
    image: "/happy-child-eating-school-meal.jpg",
  },
  {
    date: "10/12/2025",
    title: "From Hunger To Hope: The Impact Of Daily School Meals",
    description:
      "How One Warm Meal A Day Helps Children Focus, Learn, And Grow Healthier",
    image: "/smiling-girl-school-uniform.jpg",
  },
  {
    date: "10/12/2025",
    title: "From Hunger To Hope: The Impact Of Daily School Meals",
    description:
      "How One Warm Meal A Day Helps Children Focus, Learn, And Grow Healthier",
    image: "/diverse-children-learning.png",
  },
];

export function Media() {
  return (
    <section id="media" className="w-full px-6 py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="text-[#F5A623] text-xl"
            >
              ◆
            </motion.span>
            <h2 className="text-[#061923] text-3xl md:text-4xl font-bold">
              Media
            </h2>
            <motion.span
              animate={{ rotate: [0, -360] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="text-[#F5A623] text-xl"
            >
              ◆
            </motion.span>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-video overflow-hidden"
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#061923] text-sm font-medium mb-3"
                >
                  {article.date}
                </motion.div>
                <h4 className="text-[#061923] text-xl font-bold mb-3 line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-[#061923] text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-1 border-[#061923] text-[#061923] hover:bg-[#061923] hover:text-white px-8 py-3 rounded-lg font-semibold bg-transparent"
            >
              Explore all
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
