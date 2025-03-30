// src/i18n/locales.ts
import experienceLocales from "./experiences";

type LocaleKeys = 'en-US' | 'pt-BR';

type Translations = {
  [key in LocaleKeys]: Record<string, any>;
};

const locales: Translations = {
  'en-US': {
    full_stack_developer: "Full Stack Developer",
    greeting: "Hey there! I’m Daniel. Thanks for stopping by my portfolio!",
    contact: "Contact Me",
    projects: "View Projects",
    resume: "Resume",
    skills: "Skills & Technologies",
    language: "Languages",
    about_me: "About Me",
    about: "I’m a 23 year old Information Systems graduate with 3 years of experience in tech. I’ve worked as a DevOps, with solid knowledge in Azure, Digital Ocean, Laravel Forge, and strong skills in Bash and server management. I’ve developed mobile apps (React Native – Android/iOS) and whitelabel projects. Currently, I work with social security calculations and have done freelance work, including ERP, e-commerce, and marketplace development. My main programming languages are PHP and TypeScript.",
    present: "Current",
    months: {
      jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun",
      jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec",
    },
    experience: experienceLocales["en-US"],
  },
  'pt-BR': {
    full_stack_developer: "Desenvolvedor Full Stack",
    greeting: "Olá, meu nome é Daniel, seja bem vindo ao meu portfólio!",
    contact: "Fale Comigo",
    projects: "Ver Projetos",
    resume: "Currículo",
    skills: "Habilidades & Tecnologias",
    language: "Linguagens",
    about_me: "Sobre Mim",
    about: "Sou formado em Sistemas de Informação, tenho 23 anos e 3 anos de experiência na área de tecnologia. Já atuei como DevOps, com conhecimento em Azure, Digital Ocean, Laravel Forge, além de domínio em Bash e servidores. Trabalhei com apps mobile (React Native – Android/iOS) e projetos whitelabel. Atualmente, atuo com cálculos previdenciários e já realizei freelancers desenvolvendo ERP, e-commerce e marketplace. Minhas principais linguagens são PHP e TypeScript.",
    present: "Atual",
    months: {
      jan: "Jan", feb: "Fev", mar: "Mar", apr: "Abr", may: "Mai", jun: "Jun",
      jul: "Jul", aug: "Ago", sep: "Set", oct: "Out", nov: "Nov", dec: "Dez",
    },
    experience: experienceLocales["pt-BR"],
  },
};

export default locales;