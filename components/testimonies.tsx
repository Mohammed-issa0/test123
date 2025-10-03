"use client";

import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonies = [
  {
    title: "From The Heart Of Suffering... A Thank-You Message To Donors",
    description:
      "Words Of Gratitude From One Of The Families Who Received Aid, Reminding Us Of The Value Of Every Contribution, No Matter How Small",
    thumbnail: "/grateful-family-sudan.jpg",
  },
  {
    title: "Certificate Of A Father Seeking A Livelihood For His Children",
    description:
      "A Grieving Father Shares His Daily Struggles To Feed His Family, And A Touching Message About The Power Of Patience.",
    thumbnail: "/father-with-children-sudan.jpg",
  },
  {
    title: "A Child From El Fasher Dreams Of Returning To School.",
    description:
      "Touching Scenes Of A Child Talking About His Simple Dream Of Returning To School After Circumstances Separated Him From It.",
    thumbnail: "/child-student-sudan.jpg",
  },
  {
    title: "A Mother Who Lost Her Home... But Did Not Lose Hope",
    description:
      "The Story Of A Brave Mother Who Lost Her Home In El Fasher, But Still Holds On To Hope For A Better Future For Her Children.",
    thumbnail: "/mother-children-sudan-hope.jpg",
  },
];

export function Testimonies() {
  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white">
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
              Testimonies From The Field
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonies.map((testimony, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={testimony.thumbnail || "/placeholder.svg"}
                  alt={testimony.title}
                  className="w-full h-full object-cover"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="w-16 h-16 bg-[#1F88C1] rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                  >
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </motion.div>
                </motion.button>
              </div>
              <div className="p-5">
                <h4 className="text-[#061923] text-base font-bold mb-2 line-clamp-2 leading-tight">
                  {testimony.title}
                </h4>
                <p className="text-[#061923] text-sm leading-relaxed mb-4 line-clamp-3">
                  {testimony.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#1F88C1] text-sm font-semibold flex items-center justify-end w-full gap-1 hover:gap-2 transition-all"
                >
                  Watch It
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
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
              className="border-2 border-[#061923] text-[#061923] hover:bg-[#061923] hover:text-white px-8 py-3 rounded-lg font-semibold bg-transparent"
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
