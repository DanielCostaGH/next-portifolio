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
  ExternalLink,
  Code2,
  Brain,
  Briefcase,
  User,
  Send,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card } from "@/src/components/ui/card";
import intl from "react-intl-universal";
import locales from "@/src/i18n/locales";
import AnimatedText from "@/src/components/ui/AnimatedText";
import ExperienceTimeline from "@/src/components/ui/ExperienceTimeline";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const resumeRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
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

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection(contactRef)}
            >
              {intl.formatMessage({ id: "contact" })}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <User className="h-6 w-6" /> {intl.formatMessage({id: "about_me"})}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {intl.formatMessage({id: "about"})}
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Workspace"
                className="rounded-lg shadow-xl"
              />
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
            <Brain className="h-6 w-6" /> {intl.formatMessage({id: "skills"})}
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
 
      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container mx-auto px-4"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
              <Mail className="h-6 w-6" /> Get in Touch
            </h2>
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <div className="mt-12 flex justify-center gap-6">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
