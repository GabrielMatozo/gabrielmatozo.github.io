(function () {
  'use strict';

  var LANG_KEY = 'portfolio-lang';
  var DEFAULT_LANG = 'pt';

  var translations = {
    pt: {
      nav_about: 'Sobre',
      nav_skills: 'Skills',
      nav_experience: 'Experiência',
      nav_highlights: 'Conquistas',
      nav_projects: 'Projetos',
      nav_contact: 'Contato',

      hero_greeting: 'Olá, eu sou',
      hero_description: 'Profissional de Cibersegurança com 3 anos protegendo ecossistemas financeiros contra fraudes.\nAutomação de investigações, resposta a incidentes e compliance (BACEN/LGPD).',
      hero_contact: 'Entre em contato',
      hero_projects: 'Ver projetos',
      hero_cv: 'Download CV',
      typing_phrases: [
        'Analista de Riscos em Cibersegurança',
        'Prevenção a Fraudes Financeiras',
        'Resposta a Incidentes (CSIRT)',
        'Automação de Segurança · Python',
        'Análise de Logs · SQL · Data-Driven',
        'BACEN · LGPD · Compliance'
      ],

      about_title: 'Sobre mim',
      about_subtitle: 'Análise de riscos, prevenção a fraudes e automação de segurança',
      about_p1: 'Profissional de <strong>Cibersegurança</strong> com <strong>3 anos</strong> de experiência dedicados à análise de riscos, prevenção a fraudes financeiras e segurança operacional. Minha atuação foca em proteger ecossistemas transacionais, unindo a inteligência na investigação de ameaças com a automação de processos de segurança.',
      about_p2: 'Atuo diretamente na identificação de padrões ilícitos utilizando <strong>cruzamento de dados</strong> e <strong>análise de logs</strong> de sistemas financeiros. Para escalar a operação de defesa, desenvolvo <strong>automações e ferramentas internas</strong> em Python que aceleram investigações e reduzem o tempo de resposta a incidentes.',
      about_p3: 'Meu objetivo é garantir agilidade na resposta a incidentes e apoiar as áreas de negócio com inteligência de dados, mitigando riscos e focando na adequação técnica a requisitos de segurança como <strong>BACEN</strong> e <strong>LGPD</strong>.',
      about_p4: 'Formado em <strong>Ciência da Computação</strong> pela <a href="https://www.ceunsp.edu.br/graduacao/ciencia-da-computacao/" target="_blank" rel="noopener noreferrer">CEUNSP</a>.',
      stat_years: 'Anos em Fraude e Risco',
      stat_roles: 'Funções na Topaz',
      stat_tech: 'Tecnologias-chave',

      skills_title: 'Competências & Tecnologias',
      skills_subtitle: 'Habilidades técnicas aplicadas à análise de riscos e segurança',
      skills_risk: 'Gestão de Riscos e Ameaças',
      skills_engineering: 'Automação e Engenharia de Segurança',
      skills_infra: 'Infraestrutura e Ferramentas',
      skills_languages: 'Idiomas',
      skill_cyber_risk: 'Análise de Riscos Cibernéticos',
      skill_fraud_prevention: 'Prevenção a Fraudes Financeiras',
      skill_incident_response: 'Resposta a Incidentes (CSIRT)',
      skill_log_analysis: 'Análise de Logs',
      skill_security_automation: 'Automação de Processos de Segurança (Python)',
      skill_data_analysis: 'Análise de Dados (SQL)',
      skill_automated_tests: 'Testes Automatizados (Pytest e Gherkin)',
      skill_compliance: 'Adequação Técnica a Requisitos (LGPD e BACEN)',
      skill_clean_architecture: 'Clean Architecture',
      skill_pt_native: 'Português (Nativo)',
      skill_en_intermediate: 'Inglês (Intermediário)',
      skill_es_basic: 'Espanhol (Básico)',

      experience_title: 'Experiência',
      experience_subtitle: 'Minha jornada profissional e acadêmica',
      exp1_date: 'Nov 2025 — Presente',
      exp1_title: 'Desenvolvedor Backend',
      exp1_company: 'Topaz · Indaiatuba, SP',
      exp1_desc: 'Engenharia de ferramentas de segurança para operações de monitoramento, investigação e detecção de fraudes.',
      exp1_li1: 'Desenvolvimento de APIs REST (FastAPI/Flask) aplicando Clean Architecture para suportar as operações críticas de monitoramento, investigação e detecção de fraudes',
      exp1_li2: 'Construção de ferramentas internas que dão suporte direto à operação e investigação do time de Cyber Security',
      exp1_li3: 'Garantia da qualidade e resiliência das automações de segurança através da implementação de testes automatizados (Pytest e Gherkin)',
      exp1_li4: 'Uso de Docker e Linux para padronização de ambientes seguros e suporte à infraestrutura de defesa',
      exp2_date: 'Nov 2022 — Nov 2025',
      exp2_title: 'Analista de Segurança da Informação',
      exp2_company: 'Topaz · Indaiatuba, SP',
      exp2_desc: 'Atuação estratégica na identificação e análise de riscos operacionais e cibernéticos voltados a ecossistemas de transações financeiras e prevenção a fraudes.',
      exp2_li1: 'Gestão e Mitigação de Riscos: Atuação estratégica na identificação e análise de riscos operacionais e cibernéticos voltados a ecossistemas de transações financeiras e prevenção a fraudes',
      exp2_li2: 'Investigação Técnica de Incidentes: Execução de investigações detalhadas através da análise de logs e cruzamento de dados com queries em SQL, focando na detecção de comportamentos anômalos e identificação de novos vetores de ataque',
      exp2_li3: 'Eficiência Operacional: Desenvolvimento de scripts e automações em Python para otimizar os fluxos de investigação, reduzindo o tempo de resposta a incidentes (CSIRT) e gerando relatórios precisos para suporte à tomada de decisão',
      exp2_li4: 'Colaboração Multidisciplinar: Apoio técnico em conjunto com os times de engenharia de software e infraestrutura para a implementação de melhorias e controles de segurança em sistemas críticos',
      exp3_date: 'Set 2021 — Nov 2022',
      exp3_title: 'Analista de Suporte Técnico',
      exp3_company: 'iTease Soluções em TI · Indaiatuba, SP',
      exp3_desc: 'Infraestrutura de TI, automações e resolução de incidentes para ambientes corporativos.',
      exp3_li1: 'Administração de infraestrutura de TI, incluindo servidores, redes e controle de acessos',
      exp3_li2: 'Diagnóstico e resolução de incidentes de média e alta complexidade, garantindo SLAs',
      exp3_li3: 'Desenvolvimento de automações para otimização do ambiente e suporte à disponibilidade contínua',
      edu_date: 'Formação',
      edu_title: 'Bacharelado em Ciência da Computação',
      edu_company: 'CEUNSP — Centro Universitário Nossa Senhora do Patrocínio',
      edu_desc: '2020 - 2024',

      highlights_title: 'Conquistas & Evolução',
      highlights_subtitle: 'Minha proposta de valor em análise de riscos e segurança',
      highlight_investigation_title: 'Investigação e Análise de Logs',
      highlight_investigation_desc: 'Cruzamento de dados (SQL) para identificar padrões suspeitos e apoiar a operação de prevenção a fraudes',
      highlight_automation_title: 'Automação de Segurança',
      highlight_automation_desc: 'Criação de scripts (Python) que dão agilidade à resposta a incidentes e otimizam processos repetitivos',
      highlight_defense_title: 'Engenharia de Defesa',
      highlight_defense_desc: 'Ferramentas e APIs internas que dão suporte direto e escalabilidade às operações do time de Cyber Security',
      highlight_compliance_title: 'Compliance e Gestão de Riscos',
      highlight_compliance_desc: 'Adequação técnica a requisitos de segurança como BACEN e LGPD, com relatórios de exposição a riscos',
      badge_investigation: 'Investigação',
      badge_automation: 'Automação',
      badge_defense: 'Defesa',
      badge_compliance: 'Compliance',

      projects_title: 'Projetos',
      projects_subtitle: 'Carregados dinamicamente do GitHub',
      projects_loading: 'Carregando repositórios...',
      projects_more: 'Ver todos no GitHub',
      projects_no_description: 'Sem descrição disponível.',
      projects_empty: 'Nenhum repositório público encontrado.',
      projects_error: 'Não foi possível carregar os projetos.',
      projects_error_link: 'Ver no GitHub',

      contact_title: 'Vamos conversar?',
      contact_subtitle: 'Aberto a oportunidades em cibersegurança, análise de riscos e prevenção a fraudes.',
      contact_email: 'E-mail',
      contact_location: 'Localização',
      contact_location_value: 'Indaiatuba, São Paulo, Brasil',
      contact_linkedin: 'LinkedIn',
      form_name: 'Nome',
      form_email: 'E-mail',
      form_message: 'Mensagem',
      form_submit: 'Enviar mensagem',
      form_sending: 'Enviando...',
      form_success: 'Mensagem enviada com sucesso!',
      form_error: 'Erro ao enviar. Tente novamente ou envie um e-mail diretamente.',

      aria_open_menu: 'Abrir menu',
      aria_close_menu: 'Fechar menu',
      skip_link: 'Pular para conteúdo',

      footer_copyright: '© 2026 Gabriel Matozo. Todos os direitos reservados.',
    },

    en: {
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_experience: 'Experience',
      nav_highlights: 'Highlights',
      nav_projects: 'Projects',
      nav_contact: 'Contact',

      hero_greeting: 'Hello, I am',
      hero_description: 'Cybersecurity professional with 3 years protecting financial ecosystems against fraud.\nInvestigation automation, incident response and compliance (BACEN/LGPD).',
      hero_contact: 'Get in touch',
      hero_projects: 'View projects',
      hero_cv: 'Download CV',
      typing_phrases: [
        'Cybersecurity Risk Analyst',
        'Financial Fraud Prevention',
        'Incident Response (CSIRT)',
        'Security Automation · Python',
        'Log Analysis · SQL · Data-Driven',
        'BACEN · LGPD · Compliance'
      ],

      about_title: 'About me',
      about_subtitle: 'Risk analysis, fraud prevention and security automation',
      about_p1: '<strong>Cybersecurity</strong> professional with <strong>3 years</strong> of experience dedicated to risk analysis, financial fraud prevention and operational security. My work focuses on protecting transactional ecosystems by combining threat investigation intelligence with security process automation.',
      about_p2: 'I work directly on identifying illicit patterns using <strong>data cross-referencing</strong> and <strong>log analysis</strong> from financial systems. To scale defense operations, I develop <strong>automations and internal tools</strong> in Python that accelerate investigations and reduce incident response time.',
      about_p3: 'My goal is to ensure agility in incident response and support business areas with data intelligence, mitigating risks and focusing on technical compliance with security requirements such as <strong>BACEN</strong> and <strong>LGPD</strong>.',
      about_p4: 'Graduated in <strong>Computer Science</strong> from <a href="https://www.ceunsp.edu.br/graduacao/ciencia-da-computacao/" target="_blank" rel="noopener noreferrer">CEUNSP</a>.',
      stat_years: 'Years in Fraud & Risk',
      stat_roles: 'Roles at Topaz',
      stat_tech: 'Key Technologies',

      skills_title: 'Skills & Expertise',
      skills_subtitle: 'Technical skills applied to risk analysis and security',
      skills_risk: 'Risk & Threat Management',
      skills_engineering: 'Automation & Security Engineering',
      skills_infra: 'Infrastructure & Tools',
      skills_languages: 'Languages',
      skill_cyber_risk: 'Cyber Risk Analysis',
      skill_fraud_prevention: 'Financial Fraud Prevention',
      skill_incident_response: 'Incident Response (CSIRT)',
      skill_log_analysis: 'Log Analysis',
      skill_security_automation: 'Security Process Automation (Python)',
      skill_data_analysis: 'Data Analysis (SQL)',
      skill_automated_tests: 'Automated Testing (Pytest & Gherkin)',
      skill_compliance: 'Regulatory Compliance (LGPD & BACEN)',
      skill_clean_architecture: 'Clean Architecture',
      skill_pt_native: 'Portuguese (Native)',
      skill_en_intermediate: 'English (Intermediate)',
      skill_es_basic: 'Spanish (Basic)',

      experience_title: 'Experience',
      experience_subtitle: 'My professional and academic journey',
      exp1_date: 'Nov 2025 — Present',
      exp1_title: 'Backend Developer',
      exp1_company: 'Topaz · Indaiatuba, SP',
      exp1_desc: 'Security tooling engineering for monitoring, investigation and fraud detection operations.',
      exp1_li1: 'Development of REST APIs (FastAPI/Flask) applying Clean Architecture to support critical monitoring, investigation and fraud detection operations',
      exp1_li2: 'Building internal tools that directly support the Cyber Security team operations and investigations',
      exp1_li3: 'Ensuring quality and resilience of security automations through automated testing (Pytest and Gherkin)',
      exp1_li4: 'Using Docker and Linux for secure environment standardization and defense infrastructure support',
      exp2_date: 'Nov 2022 — Nov 2025',
      exp2_title: 'Information Security Analyst',
      exp2_company: 'Topaz · Indaiatuba, SP',
      exp2_desc: 'Strategic work in identifying and analyzing operational and cyber risks related to financial transaction ecosystems and fraud prevention.',
      exp2_li1: 'Risk Management: Strategic identification and analysis of operational and cyber risks related to financial transaction ecosystems and fraud prevention',
      exp2_li2: 'Technical Incident Investigation: Detailed investigations through log analysis and data cross-referencing with SQL queries, focusing on anomalous behavior detection and new attack vector identification',
      exp2_li3: 'Operational Efficiency: Development of Python scripts and automations to optimize investigation workflows, reducing incident response time (CSIRT) and generating precise reports for decision-making support',
      exp2_li4: 'Multidisciplinary Collaboration: Technical support alongside software engineering and infrastructure teams for implementing security improvements and controls in critical systems',
      exp3_date: 'Sep 2021 — Nov 2022',
      exp3_title: 'Technical Support Analyst',
      exp3_company: 'iTease IT Solutions · Indaiatuba, SP',
      exp3_desc: 'IT infrastructure, automation and incident resolution for corporate environments.',
      exp3_li1: 'IT infrastructure administration, including servers, networks and access control',
      exp3_li2: 'Diagnosis and resolution of medium and high complexity incidents, ensuring SLAs',
      exp3_li3: 'Development of automations for environment optimization and continuous availability support',
      edu_date: 'Education',
      edu_title: 'Bachelor in Computer Science',
      edu_company: 'CEUNSP — Centro Universitário Nossa Senhora do Patrocínio',
      edu_desc: '2020 - 2024',

      highlights_title: 'Highlights & Evolution',
      highlights_subtitle: 'My value proposition in risk analysis and security',
      highlight_investigation_title: 'Investigation & Log Analysis',
      highlight_investigation_desc: 'Data cross-referencing (SQL) to identify suspicious patterns and support fraud prevention operations',
      highlight_automation_title: 'Security Automation',
      highlight_automation_desc: 'Python scripts that speed up incident response and optimize repetitive processes',
      highlight_defense_title: 'Defense Engineering',
      highlight_defense_desc: 'Internal tools and APIs that directly support and scale the Cyber Security team operations',
      highlight_compliance_title: 'Compliance & Risk Management',
      highlight_compliance_desc: 'Technical compliance with security requirements such as BACEN and LGPD, with risk exposure reports',
      badge_investigation: 'Investigation',
      badge_automation: 'Automation',
      badge_defense: 'Defense',
      badge_compliance: 'Compliance',

      projects_title: 'Projects',
      projects_subtitle: 'Loaded dynamically from GitHub',
      projects_loading: 'Loading repositories...',
      projects_more: 'View all on GitHub',
      projects_no_description: 'No description available.',
      projects_empty: 'No public repositories found.',
      projects_error: 'Unable to load projects.',
      projects_error_link: 'View on GitHub',

      contact_title: 'Let\'s talk?',
      contact_subtitle: 'Open to opportunities in cybersecurity, risk analysis and fraud prevention.',
      contact_email: 'Email',
      contact_location: 'Location',
      contact_location_value: 'Indaiatuba, São Paulo, Brazil',
      contact_linkedin: 'LinkedIn',
      form_name: 'Name',
      form_email: 'Email',
      form_message: 'Message',
      form_submit: 'Send message',
      form_sending: 'Sending...',
      form_success: 'Message sent successfully!',
      form_error: 'Error sending. Try again or send an email directly.',

      aria_open_menu: 'Open menu',
      aria_close_menu: 'Close menu',
      skip_link: 'Skip to content',

      footer_copyright: '© 2026 Gabriel Matozo. All rights reserved.',
    },

    es: {
      nav_about: 'Acerca de',
      nav_skills: 'Habilidades',
      nav_experience: 'Experiencia',
      nav_highlights: 'Logros',
      nav_projects: 'Proyectos',
      nav_contact: 'Contacto',

      hero_greeting: 'Hola, soy',
      hero_description: 'Profesional de Ciberseguridad con 3 años protegiendo ecosistemas financieros contra fraudes.\nAutomatización de investigaciones, respuesta a incidentes y compliance (BACEN/LGPD).',
      hero_contact: 'Ponerse en contacto',
      hero_projects: 'Ver proyectos',
      hero_cv: 'Descargar CV',
      typing_phrases: [
        'Analista de Riesgos en Ciberseguridad',
        'Prevención de Fraudes Financieros',
        'Respuesta a Incidentes (CSIRT)',
        'Automatización de Seguridad · Python',
        'Análisis de Logs · SQL · Data-Driven',
        'BACEN · LGPD · Compliance'
      ],

      about_title: 'Acerca de mí',
      about_subtitle: 'Análisis de riesgos, prevención de fraudes y automatización de seguridad',
      about_p1: 'Profesional de <strong>Ciberseguridad</strong> con <strong>3 años</strong> de experiencia dedicados al análisis de riesgos, prevención de fraudes financieros y seguridad operacional. Mi actuación se enfoca en proteger ecosistemas transaccionales, uniendo la inteligencia en la investigación de amenazas con la automatización de procesos de seguridad.',
      about_p2: 'Actúo directamente en la identificación de patrones ilícitos utilizando <strong>cruce de datos</strong> y <strong>análisis de logs</strong> de sistemas financieros. Para escalar la operación de defensa, desarrollo <strong>automatizaciones y herramientas internas</strong> en Python que aceleran investigaciones y reducen el tiempo de respuesta a incidentes.',
      about_p3: 'Mi objetivo es garantizar agilidad en la respuesta a incidentes y apoyar las áreas de negocio con inteligencia de datos, mitigando riesgos y enfocándome en la adecuación técnica a requisitos de seguridad como <strong>BACEN</strong> y <strong>LGPD</strong>.',
      about_p4: 'Graduado en <strong>Ciencias de la Computación</strong> por <a href="https://www.ceunsp.edu.br/graduacao/ciencia-da-computacao/" target="_blank" rel="noopener noreferrer">CEUNSP</a>.',
      stat_years: 'Años en Fraude y Riesgo',
      stat_roles: 'Roles en Topaz',
      stat_tech: 'Tecnologías Clave',

      skills_title: 'Habilidades y Experiencia',
      skills_subtitle: 'Habilidades técnicas aplicadas al análisis de riesgos y seguridad',
      skills_risk: 'Gestión de Riesgos y Amenazas',
      skills_engineering: 'Automatización e Ingeniería de Seguridad',
      skills_infra: 'Infraestructura y Herramientas',
      skills_languages: 'Idiomas',
      skill_cyber_risk: 'Análisis de Riesgos Cibernéticos',
      skill_fraud_prevention: 'Prevención de Fraudes Financieros',
      skill_incident_response: 'Respuesta a Incidentes (CSIRT)',
      skill_log_analysis: 'Análisis de Logs',
      skill_security_automation: 'Automatización de Procesos de Seguridad (Python)',
      skill_data_analysis: 'Análisis de Datos (SQL)',
      skill_automated_tests: 'Pruebas Automatizadas (Pytest y Gherkin)',
      skill_compliance: 'Adecuación Técnica a Requisitos (LGPD y BACEN)',
      skill_clean_architecture: 'Clean Architecture',
      skill_pt_native: 'Portugués (Nativo)',
      skill_en_intermediate: 'Inglés (Intermedio)',
      skill_es_basic: 'Español (Básico)',

      experience_title: 'Experiencia',
      experience_subtitle: 'Mi trayectoria profesional y académica',
      exp1_date: 'Nov 2025 — Presente',
      exp1_title: 'Desarrollador Backend',
      exp1_company: 'Topaz · Indaiatuba, SP',
      exp1_desc: 'Ingeniería de herramientas de seguridad para operaciones de monitoreo, investigación y detección de fraudes.',
      exp1_li1: 'Desarrollo de APIs REST (FastAPI/Flask) aplicando Clean Architecture para soportar las operaciones críticas de monitoreo, investigación y detección de fraudes',
      exp1_li2: 'Construcción de herramientas internas que dan soporte directo a la operación e investigación del equipo de Cyber Security',
      exp1_li3: 'Garantía de la calidad y resiliencia de las automatizaciones de seguridad a través de la implementación de pruebas automatizadas (Pytest y Gherkin)',
      exp1_li4: 'Uso de Docker y Linux para estandarización de ambientes seguros y soporte a la infraestructura de defensa',
      exp2_date: 'Nov 2022 — Nov 2025',
      exp2_title: 'Analista de Seguridad de la Información',
      exp2_company: 'Topaz · Indaiatuba, SP',
      exp2_desc: 'Actuación estratégica en la identificación y análisis de riesgos operacionales y cibernéticos dirigidos a ecosistemas de transacciones financieras y prevención de fraudes.',
      exp2_li1: 'Gestión y Mitigación de Riesgos: Actuación estratégica en la identificación y análisis de riesgos operacionales y cibernéticos dirigidos a ecosistemas de transacciones financieras y prevención de fraudes',
      exp2_li2: 'Investigación Técnica de Incidentes: Ejecución de investigaciones detalladas a través del análisis de logs y cruce de datos con queries en SQL, enfocando en la detección de comportamientos anómalos e identificación de nuevos vectores de ataque',
      exp2_li3: 'Eficiencia Operacional: Desarrollo de scripts y automatizaciones en Python para optimizar los flujos de investigación, reduciendo el tiempo de respuesta a incidentes (CSIRT) y generando informes precisos para soporte a la toma de decisiones',
      exp2_li4: 'Colaboración Multidisciplinar: Apoyo técnico en conjunto con los equipos de ingeniería de software e infraestructura para la implementación de mejoras y controles de seguridad en sistemas críticos',
      exp3_date: 'Sep 2021 — Nov 2022',
      exp3_title: 'Analista de Soporte Técnico',
      exp3_company: 'iTease Soluciones en TI · Indaiatuba, SP',
      exp3_desc: 'Infraestructura de TI, automatizaciones y resolución de incidentes para ambientes corporativos.',
      exp3_li1: 'Administración de infraestructura de TI, incluyendo servidores, redes y control de accesos',
      exp3_li2: 'Diagnóstico y resolución de incidentes de media y alta complejidad, garantizando SLAs',
      exp3_li3: 'Desarrollo de automatizaciones para optimización del ambiente y soporte a la disponibilidad continua',
      edu_date: 'Formación',
      edu_title: 'Licenciatura en Ciencias de la Computación',
      edu_company: 'CEUNSP — Centro Universitário Nossa Senhora do Patrocínio',
      edu_desc: '2020 - 2024',

      highlights_title: 'Logros y Evolución',
      highlights_subtitle: 'Mi propuesta de valor en análisis de riesgos y seguridad',
      highlight_investigation_title: 'Investigación y Análisis de Logs',
      highlight_investigation_desc: 'Cruce de datos (SQL) para identificar patrones sospechosos y apoyar la operación de prevención de fraudes',
      highlight_automation_title: 'Automatización de Seguridad',
      highlight_automation_desc: 'Scripts (Python) que dan agilidad a la respuesta a incidentes y optimizan procesos repetitivos',
      highlight_defense_title: 'Ingeniería de Defensa',
      highlight_defense_desc: 'Herramientas y APIs internas que dan soporte directo y escalabilidad a las operaciones del equipo de Cyber Security',
      highlight_compliance_title: 'Compliance y Gestión de Riesgos',
      highlight_compliance_desc: 'Adecuación técnica a requisitos de seguridad como BACEN y LGPD, con informes de exposición a riesgos',
      badge_investigation: 'Investigación',
      badge_automation: 'Automatización',
      badge_defense: 'Defensa',
      badge_compliance: 'Compliance',

      projects_title: 'Proyectos',
      projects_subtitle: 'Cargados dinámicamente desde GitHub',
      projects_loading: 'Cargando repositorios...',
      projects_more: 'Ver todos en GitHub',
      projects_no_description: 'Sin descripción disponible.',
      projects_empty: 'No se encontraron repositorios públicos.',
      projects_error: 'No se pudieron cargar los proyectos.',
      projects_error_link: 'Ver en GitHub',

      contact_title: '¿Hablamos?',
      contact_subtitle: 'Abierto a oportunidades en ciberseguridad, análisis de riesgos y prevención de fraudes.',
      contact_email: 'Correo',
      contact_location: 'Ubicación',
      contact_location_value: 'Indaiatuba, São Paulo, Brasil',
      contact_linkedin: 'LinkedIn',
      form_name: 'Nombre',
      form_email: 'Correo',
      form_message: 'Mensaje',
      form_submit: 'Enviar mensaje',
      form_sending: 'Enviando...',
      form_success: '¡Mensaje enviado correctamente!',
      form_error: 'Error al enviar. Intenta de nuevo o envía un correo directamente.',

      aria_open_menu: 'Abrir menú',
      aria_close_menu: 'Cerrar menú',
      skip_link: 'Saltar al contenido',

      footer_copyright: '© 2026 Gabriel Matozo. Todos los derechos reservados.',
    }
  };

  function getBrowserLanguage() {
    var lang = (navigator.language || '').split('-')[0];
    return translations[lang] ? lang : DEFAULT_LANG;
  }

  function initLanguage() {
    var saved = localStorage.getItem(LANG_KEY);
    window.currentLanguage = saved && translations[saved] ? saved : getBrowserLanguage();
  }

  function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var translation = window.i18n.t(key);
      if (translation === key) return;

      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    });
  }

  initLanguage();

  window.i18n = {
    setLanguage: function (lang) {
      if (translations[lang]) {
        localStorage.setItem(LANG_KEY, lang);
        window.currentLanguage = lang;
        updateTranslations();
      }
    },

    getLanguage: function () {
      return window.currentLanguage || DEFAULT_LANG;
    },

    t: function (key) {
      var lang = window.currentLanguage || DEFAULT_LANG;
      return translations[lang][key] !== undefined
        ? translations[lang][key]
        : (translations[DEFAULT_LANG][key] !== undefined ? translations[DEFAULT_LANG][key] : key);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateTranslations);
  } else {
    updateTranslations();
  }

})();
