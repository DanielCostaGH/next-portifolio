type LocaleKeys = 'en-US' | 'pt-BR';

type Translations = {
  [key in LocaleKeys]: Record<string, string>;
};

const locales: Translations = {
  'en-US': {
    full_stack_developer: "Full Stack Developer",
    greeting: "Building responsive and scalable web applications",
    contact: "Contact Me",
    projects: "View Projects",
  },
  'pt-BR': {
    full_stack_developer: "Desenvolvedor Full Stack",
    greeting: "Construindo aplicações web responsivas e escaláveis",
    contact: "Fale Comigo",
    projects: "Ver Projetos",
  },
};

export default locales;