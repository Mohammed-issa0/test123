"use client";

import { ChevronRight, Droplet, Utensils, Cross, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Clean Water",
    description:
      "Providing School Supplies And Supporting Children To Return To School And Build A Better Future.",
    icon: Droplet,
    color: "#1F88C1",
  },
  {
    title: "Food Baskets",
    description:
      "Providing Urgent Food, Medicine, And Shelter To Families Most Affected By The Humanitarian Situation.",
    icon: Utensils,
    color: "#1F88C1",
  },
  {
    title: "Medical Care",
    description:
      "Launching Small Initiatives To Employ And Provide Job Opportunities That Help Families Become Self-Sufficient.",
    icon: Cross,
    color: "#1F88C1",
  },
  {
    title: "Psychological Support For Women And Girls",
    description:
      "Providing Urgent Food, Medicine, And Shelter To Families Most Affected By The Humanitarian Situation.",
    icon: Heart,
    color: "#1F88C1",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full px-6 py-16 md:py-24 bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#061923] text-2xl md:text-3xl font-bold mb-6"
          >
            Our Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
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
            <h3 className="text-[#061923] text-2xl md:text-3xl font-bold">
              To Support The People Of El Fasher
            </h3>
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
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#061923] text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
          >
            Through This Campaign, We Seek To Implement Sustainable Projects
            That Directly Impact People's Lives, Focusing On Several Key Areas
            That Help Affected Families Get Back On Their Feet:
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-around"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.2 }}
                  className="w-16 h-16 flex items-center justify-center mb-4"
                >
                  <Icon className="w-8 h-8 text-[#1F88C1] fill-[#1F88C1]" />
                </motion.div>
                <h4 className="text-[#061923] text-xl font-bold mb-3">
                  {project.title}
                </h4>
                <p className="text-[#07334A] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#02273B] text-sm font-semibold flex items-center justify-end gap-1 hover:gap-2 transition-all w-full"
                >
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Show All Projects Button */}
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
              className="border-2 border-[#061923] text-[#061923] hover:bg-[#061923] hover:text-white px-8 py-3 rounded-lg font-semibold bg-transparent"
            >
              show all projects
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
