"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCloudUploadAlt } from "react-icons/fa";
import {
  SiPhp,
  SiTypescript,
  SiJavascript,
  SiSharp,
  SiReact,
  SiReactivex,
  SiVuedotjs,
  SiAngular,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiDigitalocean,
} from "react-icons/si";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Brain,
  User,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import intl from "react-intl-universal";
import locales from "@/src/i18n/locales";
import AnimatedText from "@/src/components/ui/AnimatedText";
import ExperienceTimeline from "@/src/components/ui/ExperienceTimeline";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const resumeRef = useRef<HTMLElement | null>(null);
  const [initDone, setInitDone] = useState(false);
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "PHP", icon: <SiPhp className="text-xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-xl" /> },
        { name: "C#", icon: <SiSharp className="text-xl" /> },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <SiReact className="text-xl" /> },
        { name: "React Native", icon: <SiReactivex className="text-xl" /> },
        { name: "Vue", icon: <SiVuedotjs className="text-xl" /> },
        { name: "Angular", icon: <SiAngular className="text-xl" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Laravel", icon: <SiLaravel className="text-xl" /> },
        { name: "Node", icon: <SiNodedotjs className="text-xl" /> },
        { name: "Express", icon: <SiExpress className="text-xl" /> },
        { name: "SQL", icon: <SiMysql className="text-xl" /> },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", icon: <SiDocker className="text-xl" /> },
        { name: "CI/CD", icon: <SiGithubactions className="text-xl" /> },
        { name: "Forge", icon: <FaCloudUploadAlt className="text-xl" /> },
        { name: "Digital Ocean", icon: <SiDigitalocean className="text-xl" /> },
      ],
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentLocale = navigator.language || "en-US";
    intl
      .init({
        currentLocale,
        locales,
        fallbackLocale: "en-US",
      })
      .then(() => {
        setInitDone(true);
      });
  }, []);
  if (!initDone) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex items-center justify-center relative overflow-hidden min-h-[60vh]">
        <div className="absolute" />
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.95,
            y: 20,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="container mx-auto px-4 text-center"
        >
          <AnimatedText
            text={intl.formatMessage({ id: "full_stack_developer" })}
            className="text-4xl md:text-6xl font-bold mb-6"
          />

          <p className="text-xl text-muted-foreground mb-8">
            <AnimatedText
              text={intl.formatMessage({ id: "greeting" })}
              className="ttext-xl text-muted-foreground mb-8"
            />
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection(resumeRef)}
            >
              {intl.formatMessage({ id: "resume" })}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/70">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <User className="h-10 w-10" />{" "}
                {intl.formatMessage({ id: "about_me" })}
              </h2>
              <p className="text-lg text-muted-foreground mb-4 text-justify">
                {intl.formatMessage({ id: "about" })}
              </p>
            </div>

            {/* Social Media */}

            <div className="flex flex-wrap gap-10 justify-center  min-w-[320px] md:min-w-[500px]">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/daniel-costa-7058a2158/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:rounded-full"
              >
                <Button variant="outline" className="h-36 w-36 rounded-full p-2">
                  <Linkedin className="h-20 w-20" />
                </Button>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/DanielCostaGH"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:rounded-full"
              >
                <Button variant="outline" className="h-36 w-36 rounded-full">
                  <Github className="h-20 w-20" />
                </Button>
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&to=dfscs.costa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:rounded-full"
              >
                <Button variant="outline" className="h-36 w-36 rounded-full">
                  <Mail className="h-20 w-20" />
                </Button>
              </a>

              <a
                href="https://wa.me/5531980160125"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:rounded-full"
              >
                <Button variant="outline" className="h-36 w-36 rounded-full">
                  <Phone className="h-20 w-20" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Brain className="h-6 w-6" /> {intl.formatMessage({ id: "skills" })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {item.icon}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* experience Section */}
      <section id="experience" ref={resumeRef}>
        <ExperienceTimeline />
      </section>
    </div>
  );
}
