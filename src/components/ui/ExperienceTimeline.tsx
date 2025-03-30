"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import intl from "react-intl-universal";
import { getExperience } from "@/src/i18n/utils";

// Função de tradução de datas
const formatPeriod = (start: string, end?: string) => {
  const translate = (date: string) => {
    const [monthRaw, year] = date.split(" ");
    const monthKey = monthRaw.toLowerCase().slice(0, 3);
    const month = intl.get(`months.${monthKey}`) || monthRaw;
    return `${month} ${year}`;
  };

  const startFormatted = translate(start);
  const endFormatted = end ? translate(end) : intl.get("present");

  return `${startFormatted} - ${endFormatted}`;
};

// Experiências mockadas com chave de tradução
const experiences = [
  { key: "topdown", start: "Jun 2021", end: "Dec 2022" },
  { key: "freelancer", start: "Jan 2022" }, // sem end = Atual
  { key: "codificar", start: "Mar 2023", end: "Sep 2024" },
  { key: "turace", start: "Oct 2024" },
];

export default function ExperienceTimeline() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          {intl.get("resume")}
        </h2>

        <div className="relative border-l border-gray-300 dark:border-gray-600 ml-4 pl-6">
          {experiences.map((exp, index) => {
            const data = getExperience(exp.key);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-10 relative"
              >
                <div className="absolute -left-4 top-1.5 w-3 h-3 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black" />
                <p className="text-sm text-gray-500 mb-1">
                  {formatPeriod(exp.start, exp.end)}
                </p>
                <h3 className="text-xl font-semibold">
                  {data.company}{" "}
                  <span className="text-blue-700 font-medium">
                    – {data.position}
                  </span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {data.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
