window.ACADEMY_DATA = window.ACADEMY_DATA || {};

// Add Bilingual Glossary & Workspace Files Hub
window.ACADEMY_DATA.glossary = {
  id: "glossary",
  title: "📖📂 Двуязычный Глоссарий (RU/EN) и Локальные Файлы Проекта",
  badge: "35+ терминов + Прямые ссылки",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-cyan">📖 35+ Главных Терминов (RU / EN)</span>
        <span class="badge badge-emerald">📂 Прямые ссылки на все файлы и лабы папки Security</span>
      </div>
      <h1 class="hero-title">Словарь Кибербезопасника (RU/EN) и Навигатор по Файлам Проекта</h1>
      <p class="hero-desc">
        На собеседованиях и в зарубежных отчётах (Writeups) используются английские термины. Используй живой поиск ниже для мгновенного перевода и объяснения простыми словами!
      </p>
    </div>

    <h2 class="section-heading">📂 1. Все локальные файлы и лабораторные работы в папке Security</h2>
    <div class="card">
      <div class="card-title">🗂️ Быстрый доступ к исходным файлам и Python-лабам</div>
      <div class="grid-2">
        <div class="arch-box" style="margin:0;">
          <strong>📘 Учебники и Курсы (Markdown):</strong>
          <ul style="margin-left:18px; margin-top:8px;">
            <li><a class="res-link" href="../00-Roadmap/Полный-Курс-Энциклопедия.md" target="_blank">Полный-Курс-Энциклопедия.md (Оригинал v2 — нетронутый)</a></li>
            <li><a class="res-link" href="../00-Roadmap/Полный-Курс-Энциклопедия-v3.md" target="_blank">Полный-Курс-Энциклопедия-v3.md (Расширенная версия v3)</a></li>
            <li><a class="res-link" href="../00-Roadmap/Что-изменено-в-v3.md" target="_blank">Что-изменено-в-v3.md (Сравнение версий v2 и v3)</a></li>
            <li><a class="res-link" href="../01-Theory-Notes/Веб-Хакинг-Полная-Энциклопедия-1-9.md" target="_blank">Веб-Хакинг-Полная-Энциклопедия-1-9.md (Главы 1–10)</a></li>
            <li><a class="res-link" href="../01-Theory-Notes/Языки-Программирования-в-Кибербезе.md" target="_blank">Языки-Программирования-в-Кибербезе.md</a></li>
            <li><a class="res-link" href="../07-Career-and-Resume/07-Карьера-GRC-и-Шаблон-Резюме.md" target="_blank">07-Карьера-GRC-и-Шаблон-Резюме.md (Unix Guy Blueprint)</a></li>
          </ul>
        </div>
        <div class="blue-box" style="margin:0;">
          <strong>🧪 Готовые Python-Лабы и Ресурсы:</strong>
          <ul style="margin-left:18px; margin-top:8px;">
            <li><a class="res-link" href="../02-Labs/02-AI-Security-Labs/fgsm_lab.py" target="_blank">fgsm_lab.py (Лаба №1: Атака FGSM + Adversarial Training)</a></li>
            <li><a class="res-link" href="../02-Labs/02-AI-Security-Labs/backdoor_lab.py" target="_blank">backdoor_lab.py (Лаба №2: Отравление данных + Детектор)</a></li>
            <li><a class="res-link" href="../02-Labs/02-AI-Security-Labs/pickle_demo.py" target="_blank">pickle_demo.py (Лаба №3: Опасность Pickle vs Safetensors)</a></li>
            <li><a class="res-link" href="../04-Resources-and-Tools/Все-Бесплатные-Ресурсы-Мира.md" target="_blank">Все-Бесплатные-Ресурсы-Мира.md</a></li>
            <li><a class="res-link" href="../03-Cheatsheets/Шпаргалка-Команды-и-Инструменты.md" target="_blank">Шпаргалка-Команды-и-Инструменты.md</a></li>
            <li><a class="res-link" href="../06-Checklists/Трекер-Прогресса.md" target="_blank">Трекер-Прогресса.md</a></li>
          </ul>
        </div>
      </div>
    </div>

    <h2 class="section-heading">📖 2. Интерактивный Двуязычный Глоссарий (RU / EN)</h2>
    <div class="card">
      <input type="text" class="search-input" style="max-width:100%; margin-bottom:16px;" placeholder="🔎 Поиск по словарю терминов (например: IDOR, RAG, SUID, GRC, SIEM, Gradient, Pickle)..." oninput="filterGlossaryTable(this.value)">
      <div class="table-wrap" style="margin:0;">
        <table class="cyber-table" id="glossaryTable">
          <thead>
            <tr>
              <th>Термин (EN)</th>
              <th>Как говорят по-русски</th>
              <th>Понятное объяснение и аналогия</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>CIA Triad</strong></td><td>Триада ИБ (Конфиденциальность, Целостность, Доступность)</td><td>Три главных свойства безопасности: <strong>C</strong>onfidentiality (чужие не прочитают), <strong>I</strong>ntegrity (чужие не подменят), <strong>A</strong>vailability (сервис работает 24/7).</td></tr>
            <tr><td><strong>Red Team / Offensive Security</strong></td><td>Атакующая безопасность (Пентест)</td><td>Команда «белых хакеров», которая имитирует реальную атаку на компанию, чтобы найти дыры раньше преступников.</td></tr>
            <tr><td><strong>Blue Team / Defensive Security (SOC)</strong></td><td>Защитная безопасность</td><td>Команда защитников: настраивают файрволы, SIEM, читают логи, ловят атаки в реальном времени и расследуют инциденты.</td></tr>
            <tr><td><strong>GRC (Governance, Risk, Compliance)</strong></td><td>Управление, Риски и Соответствие стандартам</td><td>Бизнес-уровень безопасности: разработка политик (Governance), оценка ущерба в деньгах (Risk) и соответствие законам ISO 27001 / NIST CSF / GDPR (Compliance).</td></tr>
            <tr><td><strong>SIEM (Security Information &amp; Event Management)</strong></td><td>Система мониторинга событий ИБ (Splunk, Wazuh, ELK)</td><td>«Центральный пульт охраны», куда стекаются логи со всех серверов, компьютеров и файрволов компании для поиска атак.</td></tr>
            <tr><td><strong>CVE (Common Vulnerabilities and Exposures)</strong></td><td>Международный идентификатор уязвимости</td><td>Уникальный «паспортный номер» публично известной ошибки безопасности (например, <code class="inline-code">CVE-2021-44228</code> — Log4Shell).</td></tr>
            <tr><td><strong>CVSS (Common Vulnerability Scoring System)</strong></td><td>Шкала критичности уязвимости (от 0.0 до 10.0)</td><td>Оценка опасности бага: <code class="inline-code">9.0–10.0</code> — Critical (пожар, чинить немедленно!).</td></tr>
            <tr><td><strong>RCE (Remote Code Execution)</strong></td><td>Удалённое выполнение кода</td><td>Самая опасная уязвимость: хакер может запускать любые системные команды на чужом сервере через интернет.</td></tr>
            <tr><td><strong>PrivEsc (Privilege Escalation)</strong></td><td>Повышение привилегий</td><td>Превращение обычного пользователя с минимальными правами (<code class="inline-code">www-data</code>) в полного хозяина системы (<code class="inline-code">root</code>).</td></tr>
            <tr><td><strong>SUID (Set Owner User ID)</strong></td><td>Бит запуска от имени владельца</td><td>Специальный флаг файла в Linux (<code class="inline-code">-rwsr-xr-x</code>), позволяющий обычному юзеру запустить программу с правами <code class="inline-code">root</code>.</td></tr>
            <tr><td><strong>AUR (Arch User Repository)</strong></td><td>Пользовательский репозиторий Arch Linux</td><td>Огромная база рецептов сборки (<code class="inline-code">PKGBUILD</code>) от сообщества Arch. Устанавливается через <code class="inline-code">yay</code> или <code class="inline-code">paru</code>; требует проверки рецепта глазами.</td></tr>
            <tr><td><strong>IDOR (Insecure Direct Object Reference)</strong></td><td>Небезопасная прямая ссылка на объект (BOLA)</td><td>Баг №1 в вебе: замена <code class="inline-code">?id=105</code> на <code class="inline-code">?id=106</code> в адресной строке позволяет прочитать чужой профиль или чек без проверки владельца.</td></tr>
            <tr><td><strong>SQLi (SQL Injection)</strong></td><td>SQL-инъекция</td><td>Внедрение команд базы данных через поле ввода (например, <code class="inline-code">' OR 1=1 --</code>). Лечится на 100% через <strong>Prepared Statements</strong>.</td></tr>
            <tr><td><strong>XSS (Cross-Site Scripting)</strong></td><td>Межсайтовый скриптинг</td><td>Внедрение вредоносного JavaScript-кода, который выполняется в браузере других посетителей сайта.</td></tr>
            <tr><td><strong>CSRF (Cross-Site Request Forgery)</strong></td><td>Межсайтовая подделка запроса</td><td>Заставляет браузер жертвы незаметно отправить запрос на сайт банка, используя автоматически прикреплённые куки.</td></tr>
            <tr><td><strong>SSRF (Server-Side Request Forgery)</strong></td><td>Подделка запросов на стороне сервера</td><td>Обман сервера, заставляющий его самого зайти во внутреннюю сеть (<code class="inline-code">127.0.0.1</code> или облачные метаданные <code class="inline-code">169.254.169.254</code>).</td></tr>
            <tr><td><strong>SOP / CORS / CSP</strong></td><td>Три механизма защиты браузера</td><td><strong>SOP</strong> изолирует вкладки разных сайтов; <strong>CORS</strong> разрешает обмен данными доверенным доменам; <strong>CSP</strong> запрещает запуск чужих скриптов.</td></tr>
            <tr><td><strong>JWT (JSON Web Token)</strong></td><td>Токен авторизации с цифровой подписью</td><td>Электронный бейдж из 3 частей (<code class="inline-code">Header.Payload.Signature</code>) в кодировке Base64URL. Виден всем, но защищён от изменений криптографической печатью.</td></tr>
            <tr><td><strong>Weights &amp; Biases</strong></td><td>Веса и смещения нейросети</td><td>Миллиарды числовых коэффициентов внутри модели (файлы <code class="inline-code">.safetensors</code>), в которых хранится весь её выученный опыт.</td></tr>
            <tr><td><strong>Loss Function &amp; Gradient</strong></td><td>Функция потерь и Градиент</td><td><strong>Loss</strong> — штраф за ошибку модели. <strong>Градиент</strong> — направление, куда нужно подкрутить веса (при обучении) или пиксели (при атаке FGSM).</td></tr>
            <tr><td><strong>Token &amp; Embedding</strong></td><td>Токен и Векторное представление</td><td>Кусочек слова (токен), превращённый в список из сотен чисел-координат (эмбеддинг) на карте смыслов.</td></tr>
            <tr><td><strong>RAG (Retrieval-Augmented Generation)</strong></td><td>Генерация, дополненная поиском</td><td>Связка LLM с векторной базой документов компании: бот сначала ищет абзацы в базе, а затем отвечает по ним.</td></tr>
            <tr><td><strong>Direct vs Indirect Prompt Injection</strong></td><td>Прямая и Косвенная промпт-инъекция</td><td><strong>Direct</strong> — атака через окно чата. <strong>Indirect</strong> — скрытая инструкция внутри внешнего документа, сайта или письма, который читает ИИ-агент.</td></tr>
            <tr><td><strong>Excessive Agency (OWASP LLM06)</strong></td><td>Избыточная автономия ИИ-агента</td><td>Опасная ситуация, когда нейросети дали доступ к почте, БД или терминалу без подтверждения человеком (Human-in-the-Loop).</td></tr>
            <tr><td><strong>Evasion Attack (FGSM / PGD)</strong></td><td>Состязательная атака уклонения</td><td>Добавление невидимого глазу математического шума к картинке или тексту, заставляющее нейросеть ошибиться с уверенностью 99%.</td></tr>
            <tr><td><strong>Data Poisoning &amp; Backdoor</strong></td><td>Отравление данных и Бэкдор в нейросети</td><td>Внедрение закладок в обучающий датасет, из-за которых модель подчиняется секретному триггеру атакующего.</td></tr>
            <tr><td><strong>Insecure Deserialization (Pickle RCE)</strong></td><td>Небезопасная десериализация моделей</td><td>Загрузка файла <code class="inline-code">.pkl</code> через <code class="inline-code">pickle.load()</code> автоматически выполняет вшитый вредоносный Python-код. Стандарт защиты — <code class="inline-code">safetensors</code>.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
};

const NAV_STRUCTURE = [
  {
    group: "НАВИГАЦИЯ И СТАРТ",
    items: [
      { id: "dashboard", icon: "🏠", label: "Главная & Карта Пути", badge: "Старт" },
      { id: "phase0", icon: "🛠️", label: "Фаза 0: Arch / Linux & Среда", badge: "Нед 1" }
    ]
  },
  {
    group: "БАЗА И ПРОГРАММИРОВАНИЕ",
    items: [
      { id: "phase1", icon: "🐧", label: "Фаза 1: Linux, Arch & Bash", badge: "Мес 1" },
      { id: "phase2", icon: "🐍", label: "Фаза 2: Python и 8 Языков ИБ", badge: "Мес 2" }
    ]
  },
  {
    group: "СЕТИ И ВЕБ-ХАКИНГ",
    items: [
      { id: "phase3a", icon: "📡", label: "Фаза 3А: Сети, TCP/IP, HTTP", badge: "Мес 3" },
      { id: "phase3b", icon: "🕸️", label: "Фаза 3Б: Веб-Хакинг, Burp, JWT", badge: "Гл 1–10" }
    ]
  },
  {
    group: "НЕЙРОСЕТИ И AI SECURITY",
    items: [
      { id: "phase4", icon: "🧠", label: "Фаза 4: Математика, ML, LLM, RAG", badge: "Мес 4–5" },
      { id: "phase5", icon: "🛡️", label: "Фаза 5: AI Security & 3 Лабы", badge: "Мес 6–7" }
    ]
  },
  {
    group: "КАРЬЕРА И СПРАВОЧНИКИ",
    items: [
      { id: "phase67", icon: "🏆", label: "Фазы 6–7: GRC, Портфолио, Резюме", badge: "Оффер" },
      { id: "analogies", icon: "💡", label: "Банк Аналогий из Жизни", badge: "16+" },
      { id: "commands", icon: "🔄", label: "Переводчик Arch ↔ Ubuntu", badge: "CLI" },
      { id: "gallery_checklist", icon: "🖼️", label: "Галерея Схем & Чек-лист", badge: "9 схем" },
      { id: "glossary", icon: "📖", label: "Глоссарий RU/EN & Файлы", badge: "35+" }
    ]
  }
];

const ORDERED_IDS = NAV_STRUCTURE.flatMap(g => g.items.map(i => i.id));
const STORAGE_CHECKS_KEY = "core37_academy_checks_v1";
const STORAGE_THEME_KEY = "core37_academy_theme_v1";
const STORAGE_DISTRO_KEY = "core37_academy_distro_v1";
const STORAGE_TAB_KEY = "core37_academy_active_tab_v1";

let currentSectionId = "dashboard";
let switchTimer = null;

function getSavedChecks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_CHECKS_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

function saveChecks(obj) {
  try {
    localStorage.setItem(STORAGE_CHECKS_KEY, JSON.stringify(obj));
  } catch (e) {}
}

function buildSidebar() {
  const navList = document.getElementById("navList");
  if (!navList) return;
  let html = "";
  for (const group of NAV_STRUCTURE) {
    html += `<li class="nav-group-label">${group.group}</li>`;
    for (const item of group.items) {
      const activeClass = item.id === currentSectionId ? "active" : "";
      html += `
        <li class="nav-item ${activeClass}" data-nav-id="${item.id}" onclick="renderSection('${item.id}')">
          <span class="nav-icon">${item.icon}</span>
          <span>${item.label}</span>
          <span class="nav-badge">${item.badge}</span>
        </li>
      `;
    }
  }
  navList.innerHTML = html;
}

function injectTOCAndStagger(container) {
  // Build automatic in-page Table of Contents if there are section-headings
  const headings = Array.from(container.querySelectorAll("h2.section-heading"));
  const hero = container.querySelector(".hero-banner");
  if (headings.length > 1 && hero) {
    const tocBar = document.createElement("div");
    tocBar.className = "toc-bar";
    let pillsHtml = `<span class="toc-label">На странице:</span>`;
    headings.forEach((h, i) => {
      const anchorId = `sec-anchor-${i}`;
      h.id = anchorId;
      const cleanTitle = (h.textContent || "").replace(/^[^\wА-Яа-яЁё0-9]+/, "").trim();
      pillsHtml += `<button class="toc-pill" onclick="document.getElementById('${anchorId}').scrollIntoView({behavior:'smooth', block:'start'})">${cleanTitle}</button>`;
    });
    tocBar.innerHTML = pillsHtml;
    hero.insertAdjacentElement("afterend", tocBar);
  }

  // Apply staggered cascade reveal to direct children
  const children = Array.from(container.children);
  children.forEach((el, idx) => {
    el.classList.add("stagger-item");
    el.style.setProperty("--stagger-idx", Math.min(idx, 14));
  });
}

function renderSection(id, instant = false) {
  if (!window.ACADEMY_DATA[id]) {
    id = "dashboard";
  }
  currentSectionId = id;
  try {
    localStorage.setItem(STORAGE_TAB_KEY, id);
  } catch (e) {}

  // Update active state in sidebar
  document.querySelectorAll(".nav-item").forEach(el => {
    el.classList.toggle("active", el.getAttribute("data-nav-id") === id);
  });

  // Close mobile sidebar if open
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.remove("mobile-open");

  const sectionData = window.ACADEMY_DATA[id];
  const contentArea = document.getElementById("contentArea");
  if (!contentArea) return;

  // Build prev/next footer navigation
  const idx = ORDERED_IDS.indexOf(id);
  const prevId = idx > 0 ? ORDERED_IDS[idx - 1] : null;
  const nextId = idx >= 0 && idx < ORDERED_IDS.length - 1 ? ORDERED_IDS[idx + 1] : null;

  let pagerHtml = `<div style="display:flex; justify-content:space-between; gap:14px; margin-top:44px; padding-top:24px; border-top:1px solid var(--border-color); flex-wrap:wrap;">`;
  if (prevId && window.ACADEMY_DATA[prevId]) {
    pagerHtml += `<button class="btn-action" onclick="renderSection('${prevId}')">← Назад: ${window.ACADEMY_DATA[prevId].title}</button>`;
  } else {
    pagerHtml += `<div></div>`;
  }
  if (nextId && window.ACADEMY_DATA[nextId]) {
    pagerHtml += `<button class="btn-action" style="border-color:var(--border-bright);" onclick="renderSection('${nextId}')">Далее: ${window.ACADEMY_DATA[nextId].title} →</button>`;
  }
  pagerHtml += `</div>`;

  const applyDOM = () => {
    contentArea.innerHTML = sectionData.html + pagerHtml;
    injectTOCAndStagger(contentArea);
    contentArea.classList.remove("tab-switching-out");
    window.scrollTo({ top: 0, behavior: "smooth" });
    bindCheckboxes();
    updateXPWidget();
  };

  if (instant) {
    applyDOM();
  } else {
    if (switchTimer) clearTimeout(switchTimer);
    contentArea.classList.add("tab-switching-out");
    switchTimer = setTimeout(applyDOM, 145);
  }
}

function bindCheckboxes() {
  const checks = getSavedChecks();
  document.querySelectorAll(".check-row[data-check-id]").forEach(row => {
    const cid = row.getAttribute("data-check-id");
    const cb = row.querySelector('input[type="checkbox"]');
    if (!cb) return;
    const isChecked = !!checks[cid];
    cb.checked = isChecked;
    row.classList.toggle("completed", isChecked);

    row.onclick = (e) => {
      if (e.target.tagName.toLowerCase() === "a") return;
      if (e.target !== cb) {
        cb.checked = !cb.checked;
      }
      const updated = getSavedChecks();
      updated[cid] = cb.checked;
      saveChecks(updated);
      row.classList.toggle("completed", cb.checked);
      updateXPWidget();
    };
  });
}

function updateXPWidget() {
  const checks = getSavedChecks();
  const allIds = new Set();
  Object.values(window.ACADEMY_DATA).forEach(sec => {
    if (!sec || !sec.html) return;
    const matches = sec.html.matchAll(/data-check-id="([^"]+)"/g);
    for (const m of matches) {
      allIds.add(m[1]);
    }
  });

  const total = allIds.size || 35;
  let completed = 0;
  allIds.forEach(id => {
    if (checks[id]) completed++;
  });

  const pct = Math.min(100, Math.round((completed / total) * 100));
  const fillEl = document.getElementById("xpFill");
  const textEl = document.getElementById("xpText");
  const rankEl = document.getElementById("xpRank");

  if (fillEl) fillEl.style.width = `${pct}%`;
  if (textEl) textEl.textContent = `${completed} / ${total} (${pct}%)`;

  let rank = "L0 Новобранец";
  if (pct >= 90) rank = "L6 AI Security Pro";
  else if (pct >= 70) rank = "L5 AI Red Teamer";
  else if (pct >= 50) rank = "L4 Web Bug Hunter";
  else if (pct >= 30) rank = "L3 Python & Net Sec";
  else if (pct >= 15) rank = "L2 Arch Linux Ninja";
  else if (pct > 0) rank = "L1 Практикант";

  if (rankEl) rankEl.textContent = rank;
}

// Copy Code Button Handler
window.copyCode = function(btn) {
  const header = btn.closest(".code-header");
  if (!header) return;
  const pre = header.nextElementSibling;
  if (!pre) return;
  const text = pre.innerText || pre.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.textContent;
    btn.textContent = "Скопировано ✓";
    btn.style.background = "#ffffff";
    btn.style.color = "#000000";
    setTimeout(() => {
      btn.textContent = old;
      btn.style.background = "";
      btn.style.color = "";
    }, 1800);
  });
};

// Lightbox Modal
window.openLightbox = function(src) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  if (modal && img) {
    img.src = src;
    modal.classList.add("active");
  }
};

window.closeLightbox = function() {
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.remove("active");
};

// Distro Switcher (both | arch | ubuntu)
window.setDistroMode = function(mode) {
  document.body.setAttribute("data-distro-mode", mode);
  document.querySelectorAll(".distro-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-distro") === mode);
  });
  try {
    localStorage.setItem(STORAGE_DISTRO_KEY, mode);
  } catch (e) {}
};

// Theme Switcher
window.toggleTheme = function() {
  const isLight = document.body.classList.toggle("light-theme");
  const btn = document.getElementById("themeBtn");
  if (btn) {
    btn.innerHTML = isLight ? "🌙 Obsidian" : "☀️ Light";
  }
  try {
    localStorage.setItem(STORAGE_THEME_KEY, isLight ? "light" : "dark");
  } catch (e) {}
};

// Mobile Sidebar
window.toggleMobileSidebar = function() {
  const sb = document.getElementById("sidebar");
  if (sb) sb.classList.toggle("mobile-open");
};

// Filter Analogies by Category
window.filterAnalogies = function(cat) {
  document.querySelectorAll(".analogy-card").forEach(card => {
    if (cat === "all" || card.getAttribute("data-cat") === cat) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
};

// Filter Command Table
window.filterCommandTable = function(query) {
  const q = (query || "").toLowerCase().trim();
  const table = document.getElementById("cmdMasterTable");
  if (!table) return;
  table.querySelectorAll("tbody tr").forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(q) ? "" : "none";
  });
};

// Filter Glossary Table
window.filterGlossaryTable = function(query) {
  const q = (query || "").toLowerCase().trim();
  const table = document.getElementById("glossaryTable");
  if (!table) return;
  table.querySelectorAll("tbody tr").forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(q) ? "" : "none";
  });
};

// Export & Reset Progress
window.exportProgress = function() {
  const data = getSavedChecks();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "core37_cybersecurity_progress.json";
  a.click();
  URL.revokeObjectURL(url);
};

window.resetProgress = function() {
  if (confirm("Точно сбросить все отмеченные галочки прогресса?")) {
    saveChecks({});
    bindCheckboxes();
    updateXPWidget();
  }
};

// Global Search across all modules
window.handleGlobalSearch = function(query) {
  const q = (query || "").trim().toLowerCase();
  if (q.length < 2) {
    renderSection(currentSectionId, true);
    return;
  }

  const results = [];
  for (const id of ORDERED_IDS) {
    const sec = window.ACADEMY_DATA[id];
    if (!sec) continue;
    const tmp = document.createElement("div");
    tmp.innerHTML = sec.html;
    const plain = tmp.innerText || tmp.textContent || "";
    const lower = plain.toLowerCase();
    const pos = lower.indexOf(q);
    if (pos !== -1 || sec.title.toLowerCase().includes(q)) {
      const start = Math.max(0, pos - 90);
      const end = Math.min(plain.length, pos + 190);
      let snippet = plain.slice(start, end).replace(/\s+/g, " ");
      results.push({
        id: sec.id,
        title: sec.title,
        badge: sec.badge,
        snippet: snippet
      });
    }
  }

  const contentArea = document.getElementById("contentArea");
  if (!contentArea) return;

  let html = `
    <div class="hero-banner stagger-item">
      <h1 class="hero-title">🔎 Поиск: «${query.replace(/</g, "&lt;")}»</h1>
      <p class="hero-desc">Найдено разделов: <strong>${results.length}</strong>. Нажми на любую карточку для мгновенного перехода или нажми <code class="inline-code">Esc</code> для возврата.</p>
    </div>
  `;

  if (results.length === 0) {
    html += `<div class="card stagger-item"><p>Ничего не найдено. Попробуй другое ключевое слово (например: <code class="inline-code">pacman</code>, <code class="inline-code">burp</code>, <code class="inline-code">jwt</code>, <code class="inline-code">rag</code>, <code class="inline-code">fgsm</code>, <code class="inline-code">suid</code>, <code class="inline-code">qualys</code>).</p></div>`;
  } else {
    results.forEach((r, idx) => {
      html += `
        <div class="card stagger-item" style="cursor:pointer; --stagger-idx:${idx + 1};" onclick="document.getElementById('globalSearchInput').value=''; renderSection('${r.id}')">
          <div class="card-title" style="justify-content:space-between;">
            <span>${r.title}</span>
            <span class="badge">${r.badge}</span>
          </div>
          <p style="font-size:0.9rem; color:var(--text-secondary);">...${r.snippet.replace(/</g, "&lt;")}...</p>
        </div>
      `;
    });
  }

  contentArea.innerHTML = html;
};

// Interactive Cursor Spotlight Effect on Cards & Callouts
document.addEventListener("mousemove", (e) => {
  const targets = document.querySelectorAll(".card, .hero-banner, .analogy-box, .red-box, .blue-box, .arch-box, .ubuntu-box");
  targets.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (
      e.clientY >= rect.top - 120 &&
      e.clientY <= rect.bottom + 120 &&
      e.clientX >= rect.left - 120 &&
      e.clientX <= rect.right + 120
    ) {
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    }
  });
});

// Reading Progress Bar & Scroll-to-Top Button
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
  const bar = document.getElementById("readingProgressBar");
  if (bar) bar.style.width = `${pct}%`;

  const topBtn = document.getElementById("scrollTopBtn");
  if (topBtn) {
    topBtn.classList.toggle("visible", scrollTop > 380);
  }
});

// Keyboard Shortcuts (Ctrl+K / Cmd+K for Search, Esc to close/clear, Alt+Arrows for tab switching)
window.addEventListener("keydown", (e) => {
  const searchInput = document.getElementById("globalSearchInput");
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  } else if (e.key === "Escape") {
    closeLightbox();
    if (searchInput && document.activeElement === searchInput && searchInput.value) {
      searchInput.value = "";
      renderSection(currentSectionId, true);
      searchInput.blur();
    }
  } else if (e.altKey && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
    e.preventDefault();
    const idx = ORDERED_IDS.indexOf(currentSectionId);
    if (e.key === "ArrowRight" && idx < ORDERED_IDS.length - 1) {
      renderSection(ORDERED_IDS[idx + 1]);
    } else if (e.key === "ArrowLeft" && idx > 0) {
      renderSection(ORDERED_IDS[idx - 1]);
    }
  }
});

// Initialize App on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  try {
    const savedTheme = localStorage.getItem(STORAGE_THEME_KEY);
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      const btn = document.getElementById("themeBtn");
      if (btn) btn.innerHTML = "🌙 Obsidian";
    }
  } catch (e) {}

  try {
    const savedDistro = localStorage.getItem(STORAGE_DISTRO_KEY) || "both";
    setDistroMode(savedDistro);
  } catch (e) {}

  try {
    const savedTab = localStorage.getItem(STORAGE_TAB_KEY);
    if (savedTab && window.ACADEMY_DATA[savedTab]) {
      currentSectionId = savedTab;
    }
  } catch (e) {}

  buildSidebar();
  renderSection(currentSectionId, true);
});
