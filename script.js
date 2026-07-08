(function () {
  "use strict";

  /* =========================================================
     1. DADOS — cursos.json (agrupados por ano)
     ========================================================= */
  var CURSOS = [
    { ano: 2026, itens: [
      { nome: "Java", org: "Rocketseat", horas: "100" },
      { nome: "Angular", org: "Rocketseat", horas: "100" },
      { nome: "PostgreSQL", org: "Rocketseat", horas: "50h" },
      { nome: "n8n", org: "Rocketseat", horas: "3h" },
      { nome: "Python", org: "Rocketseat", horas: "100h" },
      { nome: "IA para Devs", org: "Rocketseat", horas: "50h" }
    ]},
    { ano: "2025", itens: [
      { nome: "Java Spring Boot", org: "Rocketseat", horas: "5h" },
      { nome: "Agile Methodologies", org: "Rocketseat", horas: "3h" },
      { nome: "Python Fundamentals", org: "Rocketseat", horas: "10h" },
      { nome: "Fundamentals of React Native", org: "Rocketseat", horas: "5h" },
      { nome: "SEO for Devs", org: "Rocketseat", horas: "2h" }
    ]},
    { ano: "2024", itens: [
      { nome: "Desenvolvimento Web: Front-End e Back-End", org: "IFES", horas: "320h" },
      { nome: "C# Fundamentals", org: "Rocketseat", horas: "7h" },
      { nome: "O Básico de Git e GitHub", org: "Rocketseat", horas: "1h" },
      { nome: "Laravel 11", org: "Celke", horas: "30h" },
      { nome: "Curso MongoDB", org: "Alura", horas: "24h" },
      { nome: "Tailwind CSS: estilizando página com classes utilitárias", org: "Alura", horas: "8h" },
      { nome: "Formação Black Belt", org: "Six Sigma", horas: "100h" },
      { nome: "LEAN Manufacturing", org: "—", horas: "40h" },
      { nome: ".NET Fundamentals", org: "Rocketseat", horas: "2h" }
    ]},
    { ano: "2023", itens: [
      { nome: "Redes parte 1: conceitos e prática", org: "Alura", horas: "10h" },
      { nome: "Curso MySQL", org: "Alura", horas: "26h" },
      { nome: "Curso PHP", org: "Alura", horas: "30h" }
    ]},
    { ano: "2022", itens: [
      { nome: "Linguagem C Básico", org: "Alura", horas: "8h" },
      { nome: "Linguagem Python Básico", org: "Alura", horas: "12h" },
      { nome: "Informática Básica", org: "PrimeCursos", horas: "40h" },
      { nome: "AI TODAY — IA e Machine Learning", org: "IGTI", horas: "20h" },
      { nome: "Pacote Office Básico 2016/2013", org: "Fundação Bradesco", horas: "41h" },
      { nome: "Introdução ao Power BI", org: "Fundação Bradesco", horas: "6h" },
      { nome: "Técnico Nível 2", org: "Samsung", horas: "—" },
      { nome: "Projeto PicPro — HTML, CSS e JavaScript", org: "—", horas: "30h" },
      { nome: "Formação White Belt", org: "Six Sigma", horas: "3h" },
      { nome: "Formação Green Belt", org: "Six Sigma", horas: "40h" },
      { nome: "C++: conhecendo a linguagem e a STL", org: "—", horas: "8h" },
      { nome: "Delphi: primeiros passos com a linguagem", org: "—", horas: "8h" },
      { nome: "Assistente de Tecnologia da Informação", org: "QualificarES", horas: "120h" },
      { nome: "Auxiliar Administrativo", org: "QualificarES", horas: "120h" },
      { nome: "BIZAGI: mapeamento de processos com BPMN", org: "Alura", horas: "10h" },
      { nome: "SQL 2017/2019", org: "Alura", horas: "40h" },
      { nome: "Agile Days III — Metodologias Ágeis", org: "—", horas: "20h" },
      { nome: "HTML5 e CSS3 parte 1: crie uma página da Web", org: "Alura", horas: "8h" },
      { nome: "Evento Data Universe", org: "XPe", horas: "10h" },
      { nome: "Power BI Aplicado ao Controle Externo", org: "Escola de Contas Públicas TCE-ES", horas: "6h" },
      { nome: "Introdução ao Tableau Aplicado ao Controle Externo", org: "—", horas: "5h" }
    ]},
    { ano: "2017", itens: [
      { nome: "Curso de Inglês", org: "Wizard", horas: "—" }
    ]},
    { ano: "2012", itens: [
      { nome: "Curso de Matemática", org: "Kumon", horas: "—" }
    ]}
  ];

  /* =========================================================
     2. RENDERIZA cursos.json com grupos dobráveis (code-folding)
     ========================================================= */
  function renderCursos() {
    var container = document.getElementById("jsonGroups");
    if (!container) return;

    CURSOS.forEach(function (grupo, idx) {
      var wrap = document.createElement("div");
      wrap.className = "json-year" + (idx === 0 ? "" : " collapsed");

      var head = document.createElement("div");
      head.className = "json-year-head";
      head.setAttribute("role", "button");
      head.setAttribute("tabindex", "0");
      head.setAttribute("aria-expanded", idx === 0 ? "true" : "false");
      head.innerHTML =
        '<span class="fold-caret" aria-hidden="true">' +
          '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>' +
        '</span>' +
        '<span class="json-year-key">"' + grupo.ano + '"</span>' +
        '<span class="tok-punct">:</span>' +
        '<span class="json-year-count">[' + grupo.itens.length + ' itens]</span>';

      var list = document.createElement("ul");
      list.className = "json-items";
      grupo.itens.forEach(function (item) {
        var li = document.createElement("li");
        li.innerHTML =
          '<span class="c-name">"' + item.nome + '"</span>' +
          ' <span class="tok-punct">·</span> ' +
          '<span class="c-org">' + item.org + '</span>' +
          ' <span class="tok-punct">·</span> ' +
          '<span class="c-hours">' + item.horas + '</span>';
        list.appendChild(li);
      });

      function toggle() {
        var collapsed = wrap.classList.toggle("collapsed");
        head.setAttribute("aria-expanded", String(!collapsed));
      }
      head.addEventListener("click", toggle);
      head.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });

      wrap.appendChild(head);
      wrap.appendChild(list);
      container.appendChild(wrap);
    });
  }

  /* =========================================================
     3. NAVEGAÇÃO — tabs, sidebar (explorer) e breadcrumb
     ========================================================= */
  var LANG_LABELS = {
    readme: "Markdown",
    formacao: "YAML",
    experiencia: "JavaScript",
    cursos: "JSON",
    contato: "Properties"
  };

  function activate(target) {
    document.querySelectorAll(".pane").forEach(function (p) {
      p.classList.toggle("active", p.id === "pane-" + target);
    });
    document.querySelectorAll(".tab").forEach(function (t) {
      t.classList.toggle("active", t.dataset.target === target);
    });
    document.querySelectorAll(".file-item").forEach(function (f) {
      var isActive = f.dataset.target === target;
      f.classList.toggle("active", isActive);
      f.setAttribute("aria-selected", String(isActive));
    });

    var crumb = document.getElementById("breadcrumbCurrent");
    var tabEl = document.querySelector('.tab[data-target="' + target + '"]');
    if (crumb && tabEl) {
      crumb.textContent = tabEl.textContent.trim().replace(/×$/, "").trim();
    }

    var statusLang = document.getElementById("statusLang");
    if (statusLang) statusLang.textContent = LANG_LABELS[target] || "Plain Text";

    // Em telas pequenas, fechar o explorer após escolher um arquivo
    if (window.innerWidth <= 860) closeSidebar();
  }

  function wireNavigation() {
    document.querySelectorAll(".file-item").forEach(function (item) {
      item.addEventListener("click", function () { activate(item.dataset.target); });
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(item.dataset.target); }
      });
    });
    document.querySelectorAll(".tab").forEach(function (tab) {
      tab.addEventListener("click", function () { activate(tab.dataset.target); });
    });
  }

  /* =========================================================
     4. SIDEBAR responsiva (mobile)
     ========================================================= */
  var sidebar = document.getElementById("sidebar");
  var toggleBtn = document.getElementById("sidebarToggle");

  function openSidebar() {
    sidebar.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
  }
  function closeSidebar() {
    sidebar.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
  }
  function wireSidebarToggle() {
    if (!toggleBtn) return;
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
    });
    document.addEventListener("click", function (e) {
      if (window.innerWidth > 860) return;
      if (!sidebar.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
        closeSidebar();
      }
    });
  }

  /* =========================================================
     INIT
     ========================================================= */
  document.addEventListener("DOMContentLoaded", function () {
    renderCursos();
    wireNavigation();
    wireSidebarToggle();
  });
})();