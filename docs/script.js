const DATA = {
      projects: [
        {
          title: "Sistema Web de Horários Acadêmicos",
          type: "Acadêmico",
          desc: "Aplicação web com filtros por curso, ambiente, turno e turma. Destaque visual da sala selecionada e exibição de disciplinas/professores. Contribuição sendo Scrum Master, desenvolvedor front-end e back-end.",
          tech: ["HTML", "CSS", "JavaScript", "MySQL", "Scrum"],
          year: 2025,
        },
        {
          title: "Template de Rede Social (Figma)",
          type: "Acadêmico",
          desc: "Protótipo responsivo (mobile/desktop) com telas navegáveis: Login, Perfil, Feed e Lista de Contatos.",
          tech: ["Figma", "UX", "Prototipagem"],
          year: 2025,
        },
        {
          title: "Consulta de Mega-Sena",
          type: "Acadêmico",
          desc: "Site com banco de dados para consultar sorteios passados e explorar estatísticas básicas. Contribuição no front-end e back-end.",
          tech: ["HTML", "CSS", "JS", "Banco de Dados"],
          year: 2025,
        },
        {
          title: "Exercícios Node.js/Express",
          type: "Acadêmico",
          desc: "Criação de rotas e manipulação de parâmetros (URL, query e corpo). Contribuição no front-end e back-end.",
          tech: ["Node.js", "Express"],
          year: 2025,
        },
        {
          title: "Mapas de Andares da Faculdade",
          type: "Acadêmico",
          desc: "Lógica dinâmica para exibir salas nos pisos Térreo/1º/2º, com destaque e informações personalizadas. Contribuição no front-end e back-end.",
          tech: ["JavaScript", "UX", "Front-end"],
          year: 2025,
        },
        {
          title: "Sistema para Visualização e Disseminação de Dados Limnológicos",
          type: "Acadêmico",
          desc: "Aplicação web que disponibiliza dados limnológicos e metereológicos coletados nos reservatórios de Furnas Centrais Elétricas S.S., provenitentes do SIMA (Sistema Integrado de Monitoramento Ambiental) e de campanhas manuais em campo. Contribuindo como desenvolvedor no front-end e back-end.",
          tech: ["JavaScript", "UX", "TypeScript", "Node.js", "Express", "SQL", "Express", "React", "Vite", "Docker", "pgAdmin"],
          year: 2025,
        },
        {
          title: "Análise de Carteira",
          type: "Profissional",
          desc: "Recomendação de carteiras de investimentos com base na teoria de Markowitz, utilizando dados históricos para calcular retornos esperados e riscos. ",
          tech: ["CEA", "ANCORD", "B3"],
          year: 2023,
        },
        {
          title: "Conquista de Certificações Financeiras",
          type: "Profissional",
          desc: "Obtenção das certificações CPA-20,CEA, e ANCORD para aprimorar conhecimentos em investimentos e mercado financeiro. ",
          tech: ["CEA", "ANCORD", "B3", "investimentos"],
          year: 2023,
        },
        {
          title: "Estudo de Linguas",
          type: "Pessoal",
          desc: "Estudo de Espanhol e Inglês para aprimoramento pessoal e profissional. ",
          tech: ["Espanhol", "Ingles", "Linguas"],
          year: 2019,
        },
        

      ],
      certificates: [
        { name: "CEA — ANBIMA", date: "11/2022", validity: "11/2025", area: "Finanças" },
        { name: "CPA-20 — ANBIMA", date: "12/2020", area: "Finanças" },
        { name: "ANCORD", date: "03/2023", area: "Mercado" },
        { name: "Curso de Git", date: "02/2025", area: "Dev" },
        { name: "Cisco Packet Tracer", date: "05/2025", area: "Redes" },
        { name: "Linux (NDG)", date: "03/2025", area: "Sistemas" },
        { name: "Excel Básico/Intermediário", date: "2019", area: "Produtividade" },
        { name: "Idiomas: Inglês (pré-intermediário)", date: "2019", area: "Idiomas" },
        { name: "Idiomas: Espanhol (básico/intermediário)", date: "2019", area: "Idiomas" },
        { name: "Comunicação Interpessoal (Dorie Clark)", date: "03/2021", area: "Soft skills" },
        { name: "Oratória (Prof. Felipe Guedes)", date: "12/2020", area: "Soft skills" },
      ],
    };

    // ====== Utilidades ======
    const $ = (sel, el = document) => el.querySelector(sel);
    const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

    // ====== Build Projects ======
    const grid = document.getElementById('projectsGrid');
    function renderProjects(filter = null) {
      grid.innerHTML = '';
      const list = DATA.projects.filter(p => !filter || p.type === filter);
      for (const p of list) {
        const card = document.createElement('article');
        card.className = 'card col-4';
        card.innerHTML = `
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="tags">${p.tech.map(t => `<span class='tag'>${t}</span>`).join('')}</div>
          <div class="space"></div>
          <span class="tag" title="Tipo">${p.type}</span>
          <span class="tag" title="Ano">${p.year}</span>
        `;
        grid.appendChild(card);
      }
      if (list.length === 0) {
        grid.innerHTML = '<p class="col-12">Nenhum projeto nessa categoria ainda.</p>';
      }
    }

    // ====== Certificates Modal ======
    const certBtn = document.getElementById('certBtn');
    const certModal = document.getElementById('certModal');
    const closeModal = document.getElementById('closeModal');
    const certGrid = document.getElementById('certGrid');

    function renderCertificates() {
      certGrid.innerHTML = '';
      for (const c of DATA.certificates) {
        const box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = `
          <strong>${c.name}</strong>
          <span>${c.area || ''}</span>
          <span>Data: ${c.date}${c.validity ? ` • Validade: ${c.validity}` : ''}</span>
        `;
        certGrid.appendChild(box);
      }
    }

    // ====== Theme ======
    function setTheme(mode) {
      if (mode === 'light') document.documentElement.classList.add('light');
      else document.documentElement.classList.remove('light');
      localStorage.setItem('theme', mode);
    }
    const themeBtn = document.getElementById('themeBtn');
    themeBtn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);

    // ====== Mobile Menu ======
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => {
      const isOpen = mobileMenu.hasAttribute('hidden') ? false : true;
      mobileMenu.toggleAttribute('hidden');
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
    });

    // ====== To Top ======
    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll', () => {
      toTop.style.display = window.scrollY > 420 ? 'inline-flex' : 'none';
    });
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ====== Year & Init ======
    document.getElementById('year').textContent = new Date().getFullYear();
    renderProjects();

    // Certificates modal events
    certBtn.addEventListener('click', () => { renderCertificates(); certModal.showModal(); });
    closeModal.addEventListener('click', () => certModal.close());
    certModal.addEventListener('click', (e) => { if (e.target === certModal) certModal.close(); });

    // Filters
    document.getElementById('showAll').addEventListener('click', () => renderProjects());
    document.getElementById('showAcademic').addEventListener('click', () => renderProjects('Acadêmico'));
    document.getElementById('showPersonal').addEventListener('click', () => renderProjects('Pessoal'));
    document.getElementById('showProfissional').addEventListener('click', () => renderProjects('Profissional'));
