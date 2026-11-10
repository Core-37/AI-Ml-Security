window.ACADEMY_DATA = window.ACADEMY_DATA || {};

window.ACADEMY_DATA.dashboard = {
  id: "dashboard",
  title: "🏠 Главная Панель & Карта Пути",
  badge: "Core-37 Academy v3.5",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-cyan">🤖 AI/ML Security</span>
        <span class="badge badge-arch">🏹 Arch Linux Ready</span>
        <span class="badge badge-ubuntu">🐧 Ubuntu / Debian / WSL2</span>
        <span class="badge badge-emerald">🛡️ Offensive + Defensive + GRC</span>
      </div>
      <h1 class="hero-title">Интерактивная Академия Кибербезопасности и ИИ (С Нуля до Профи)</h1>
      <p class="hero-desc">
        Здесь собрано <strong>абсолютно всё</strong> из твоего курса (обе версии v2 и v3), полная энциклопедия веб-хакинга (Главы 1–10),
        перевод всех команд под твой <strong>Arch-based Linux</strong> (и Ubuntu/Debian), лучшие мировые ресурсы (PortSwigger, HTB AI Red Teamer, MITRE ATLAS, OWASP LLM Top 10, NIST CSF, Unix Guy GRC) и десятки наглядных <strong>аналогий из реальной жизни</strong>.
      </p>
    </div>

    <!-- Custom Visual SVG Roadmap -->
    <div class="card">
      <div class="card-title">🗺️ Визуальная Карта Твоего Маршрута (Нажми на любую фазу в меню слева!)</div>
      <div class="diagram-card" style="background:#090e1a;">
        <svg viewBox="0 0 1080 280" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gCyan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#06b6d4"/>
              <stop offset="100%" stop-color="#3b82f6"/>
            </linearGradient>
            <linearGradient id="gPurple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#8b5cf6"/>
              <stop offset="100%" stop-color="#ec4899"/>
            </linearGradient>
            <linearGradient id="gEmerald" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#10b981"/>
              <stop offset="100%" stop-color="#06b6d4"/>
            </linearGradient>
          </defs>
          <!-- Connecting Lines -->
          <path d="M 135 75 L 265 75 L 405 75 L 545 75 L 685 75 L 825 75 L 955 75" stroke="#334155" stroke-width="4" fill="none" stroke-dasharray="8,6"/>
          <path d="M 405 115 L 405 200 L 900 200" stroke="#10b981" stroke-width="2.5" fill="none" stroke-dasharray="5,5"/>

          <!-- Nodes -->
          <g transform="translate(20,30)">
            <rect width="120" height="90" rx="12" fill="#161f33" stroke="#06b6d4" stroke-width="2"/>
            <text x="60" y="28" fill="#22d3ee" font-size="12" font-weight="bold" text-anchor="middle">ФАЗА 0 (1 нед)</text>
            <text x="60" y="48" fill="#f1f5f9" font-size="11" text-anchor="middle">Полигон &amp; Arch</text>
            <text x="60" y="66" fill="#94a3b8" font-size="10" text-anchor="middle">Docker, Git, Burp</text>
          </g>

          <g transform="translate(155,30)">
            <rect width="120" height="90" rx="12" fill="#161f33" stroke="#1793d1" stroke-width="2"/>
            <text x="60" y="28" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ФАЗА 1 (4–5 нед)</text>
            <text x="60" y="48" fill="#f1f5f9" font-size="11" text-anchor="middle">Linux &amp; Arch</text>
            <text x="60" y="66" fill="#94a3b8" font-size="10" text-anchor="middle">pacman, Права, Bash</text>
          </g>

          <g transform="translate(290,30)">
            <rect width="120" height="90" rx="12" fill="#161f33" stroke="#3b82f6" stroke-width="2"/>
            <text x="60" y="28" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">ФАЗА 2 (6–8 нед)</text>
            <text x="60" y="48" fill="#f1f5f9" font-size="11" text-anchor="middle">Python &amp; Языки</text>
            <text x="60" y="66" fill="#94a3b8" font-size="10" text-anchor="middle">4 скрипта + SQL/JS</text>
          </g>

          <g transform="translate(425,30)">
            <rect width="125" height="90" rx="12" fill="#161f33" stroke="#f59e0b" stroke-width="2"/>
            <text x="62" y="28" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">ФАЗА 3 (8–10 нед)</text>
            <text x="62" y="48" fill="#f1f5f9" font-size="11" text-anchor="middle">Сети &amp; Веб-Хакинг</text>
            <text x="62" y="66" fill="#94a3b8" font-size="10" text-anchor="middle">HTTP, OWASP, JWT</text>
          </g>

          <g transform="translate(565,30)">
            <rect width="125" height="90" rx="12" fill="#161f33" stroke="#8b5cf6" stroke-width="2"/>
            <text x="62" y="28" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">ФАЗА 4 (8–10 нед)</text>
            <text x="62" y="48" fill="#f1f5f9" font-size="11" text-anchor="middle">ML, DL &amp; LLM</text>
            <text x="62" y="66" fill="#94a3b8" font-size="10" text-anchor="middle">PyTorch, Ollama, RAG</text>
          </g>

          <g transform="translate(705,30)">
            <rect width="125" height="90" rx="12" fill="#161f33" stroke="#f43f5e" stroke-width="2"/>
            <text x="62" y="28" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="middle">ФАЗА 5 (10–12 нед)</text>
            <text x="62" y="48" fill="#f1f5f9" font-size="11" text-anchor="middle">AI Security Core</text>
            <text x="62" y="66" fill="#94a3b8" font-size="10" text-anchor="middle">Injections, FGSM, Garak</text>
          </g>

          <g transform="translate(845,30)">
            <rect width="210" height="90" rx="12" fill="#161f33" stroke="#10b981" stroke-width="2"/>
            <text x="105" y="28" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">ФАЗА 6–7 (Портфолио &amp; Оффер)</text>
            <text x="105" y="48" fill="#f1f5f9" font-size="11" text-anchor="middle">5 Проектов, CTF, Bug Bounty</text>
            <text x="105" y="66" fill="#94a3b8" font-size="10" text-anchor="middle">GRC, Qualys, Forage, Резюме</text>
          </g>

          <!-- Early Job Exit Banner -->
          <rect x="430" y="172" width="520" height="52" rx="10" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="1.5"/>
          <text x="690" y="195" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">💡 РАННИЙ ВЫХОД НА ПЕРВУЮ РАБОТУ (уже после Фазы 3 + GRC модуля!):</text>
          <text x="690" y="213" fill="#e2e8f0" font-size="11" text-anchor="middle">Junior AppSec / Pentester • SOC Analyst Tier 1 • Junior GRC &amp; Vulnerability Management</text>
        </svg>
        <div class="diagram-caption">Маршрут построен так, чтобы уже на середине пути (после Фазы 3) ты мог претендовать на стартовые позиции в ИБ, продолжая осваивать AI Security.</div>
      </div>
    </div>

    <h2 class="section-heading">📊 Сводная таблица всех фаз и грейдов</h2>
    <div class="table-wrap">
      <table class="cyber-table">
        <thead>
          <tr>
            <th>Фаза</th>
            <th>Грейд</th>
            <th>Название модуля</th>
            <th>Срок (2–3 ч/день)</th>
            <th>Главный осязаемый результат</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Фаза 0</strong></td>
            <td><code class="inline-code">L0 (Pre-Intern)</code></td>
            <td>Подготовка, Arch Linux / Ubuntu, Docker, Git, Burp</td>
            <td>1 неделя</td>
            <td>Настроенный Linux, снапшоты Timeshift, Docker, VS Code, Obsidian, Burp Suite и 10 аккаунтов</td>
          </tr>
          <tr>
            <td><strong>Фаза 1</strong></td>
            <td><code class="inline-code">L1 (Junior Sys)</code></td>
            <td>Linux &amp; Arch Mastery с абсолютного нуля</td>
            <td>4–5 недель</td>
            <td>Свободная работа в терминале (<code class="inline-code">pacman</code>/<code class="inline-code">apt</code>), Bandit 0–25, права/SUID, 3 Bash-скрипта на GitHub</td>
          </tr>
          <tr>
            <td><strong>Фаза 2</strong></td>
            <td><code class="inline-code">L2 (SecDev)</code></td>
            <td>Python с нуля + Матрица языков кибербеза</td>
            <td>6–8 недель</td>
            <td>4 проекта на Python (сканер портов, HIBP k-anonymity, анализатор логов, аудитор заголовков) + база SQL/JS</td>
          </tr>
          <tr>
            <td><strong>Фаза 3</strong></td>
            <td><code class="inline-code">L3 (AppSec / Pentest)</code></td>
            <td>Сети, Веб-Хакинг (Главы 1–10), API и Security Basics</td>
            <td>8–10 недель</td>
            <td>Понимание TCP/IP, DNS, HTTP, SOP/CORS/CSP, JWT, Burp Suite, Nmap, Wireshark, 20+ лаб PortSwigger</td>
          </tr>
          <tr>
            <td><strong>Фаза 4</strong></td>
            <td><code class="inline-code">L4 (AI/ML Eng)</code></td>
            <td>Machine Learning, Deep Learning, LLM и RAG</td>
            <td>8–10 недель</td>
            <td>Понимание градиентов, весов, токенов и Attention; локальная LLM в Ollama + свой мини-RAG на Python</td>
          </tr>
          <tr>
            <td><strong>Фаза 5</strong></td>
            <td><code class="inline-code">L5 (AI Red Team)</code></td>
            <td>AI/ML Security Core: Атака и Защита ИИ</td>
            <td>10–12 недель</td>
            <td>OWASP LLM Top 10, MITRE ATLAS, Gandalf, PortSwigger Web LLM, лабы FGSM/Backdoor/Pickle, Garak, PyRIT</td>
          </tr>
          <tr>
            <td><strong>Фаза 6–7</strong></td>
            <td><code class="inline-code">L6 (Career Ready)</code></td>
            <td>Портфолио, CTF, Bug Bounty, GRC (Unix Guy) и Карьера</td>
            <td>8–12 недель</td>
            <td>5 проектов на GitHub, сертификат Qualys VM, стажировки Forage, NIST Risk Assessment, резюме и оффер</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="section-heading">🧠 7 Золотых Правил Обучения (Как не бросить через месяц)</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">1️⃣ Правило «1 к 3» (Побег из «Ада Туториалов»)</div>
        <p>Смотреть обучающие видео лёжа на диване — всё равно что смотреть, как кто-то плавает в бассейне: кажется, что всё понятно, но в воде сразу ко дну.</p>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия из жизни: Вождение автомобиля</div>
          Ты можешь посмотреть 100 часов роликов о том, как крутить руль и выжимать сцепление, но пока сам не заглохнешь на перекрёстке 10 раз — водить не научишься. <strong>На 20 минут видео — 60 минут практики в терминале!</strong> Специально делай опечатки в командах, чтобы перестать бояться текста ошибок.
        </div>
      </div>

      <div class="card">
        <div class="card-title">2️⃣ Метод Фейнмана и Активное Вспоминание</div>
        <p>Перечитывание конспекта создаёт иллюзию знания. Настоящая память включается только тогда, когда мозг <strong>пытается достать информацию изнутри</strong>.</p>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия из жизни: Объясни 10-летнему брату</div>
          После каждого раздела закрой экран и объясни тему вслух простыми словами, без умных слов. Если не можешь объяснить, чем <code class="inline-code">401</code> отличается от <code class="inline-code">403</code> на примере охранника на входе в клуб — значит, тему нужно перечитать!
        </div>
      </div>

      <div class="card">
        <div class="card-title">3️⃣ Правило 30 минут (Как не застревать на лабах)</div>
        <p>На уровнях Bandit, PortSwigger или CTF ты обязательно будешь застревать — это штатная часть работы инженера.</p>
        <ul style="margin-left:18px; margin-top:8px;">
          <li>Честно штурмуй задачу сам <strong>ровно 30 минут</strong>.</li>
          <li>Не вышло? Открой подсказку или разбор (Writeup), пойми принцип и реши.</li>
          <li><strong>Главный секрет:</strong> на следующий день открой эту же лабу и пройди её <strong>с нуля по памяти без подглядывания</strong>!</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title">4️⃣ «Второй Мозг» в Obsidian + Этика Белой Шляпы</div>
        <p>Ни один Senior не держит в голове все флаги <code class="inline-code">nmap</code> и <code class="inline-code">ffuf</code> — он держит их в своей базе заметок.</p>
        <div class="red-box">
          <strong>⚖️ Закон Белой Шляпы (White Hat):</strong> Сканировать и атаковать можно <strong>ТОЛЬКО</strong> свои локальные виртуалки/Docker-контейнеры, официальные полигоны (OverTheWire, TryHackMe, PortSwigger, HTB, Gandalf) и программы Bug Bounty строго в рамках их правил (Scope).
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">⚡ План на самый первый день (Сделай эти 6 шагов сегодня!)</div>
      <div class="check-row" data-check-id="day1-1"><input type="checkbox"><span><strong>Шаг 1 (15 мин):</strong> Открой терминал в своём Arch Linux (или WSL2 Ubuntu) и проверь базовое окружение по Фазе 0.</span></div>
      <div class="check-row" data-check-id="day1-2"><input type="checkbox"><span><strong>Шаг 2 (10 мин):</strong> Создай аккаунты на <strong>GitHub</strong>, <strong>TryHackMe</strong> и <strong>PortSwigger Academy</strong> (включи 2FA на почте).</span></div>
      <div class="check-row" data-check-id="day1-3"><input type="checkbox"><span><strong>Шаг 3 (16 мин):</strong> Посмотри <a class="res-link" href="https://www.youtube.com/watch?v=255Pv3Z9gj4" target="_blank">Основы Веб-Хакинга | Часть 1</a>.</span></div>
      <div class="check-row" data-check-id="day1-4"><input type="checkbox"><span><strong>Шаг 4 (17 мин):</strong> Посмотри <a class="res-link" href="https://youtu.be/j7O6Uqy6ZJY" target="_blank">WEB HACKING BASICS | Часть 2</a>.</span></div>
      <div class="check-row" data-check-id="day1-5"><input type="checkbox"><span><strong>Шаг 5 (20 мин):</strong> Перейди во вкладку <strong>Фаза 1 (Linux &amp; Arch)</strong> и пройди первые 3 уровня игры <strong>OverTheWire Bandit (0 → 3)</strong>.</span></div>
      <div class="check-row" data-check-id="day1-6"><input type="checkbox"><span><strong>Шаг 6 (10 мин):</strong> Перейди во вкладку <strong>Аналогии из Жизни</strong> и прочитай первые 5 карточек.</span></div>
    </div>
  `
};

window.ACADEMY_DATA.phase0 = {
  id: "phase0",
  title: "🛠️ Фаза 0: Подготовка, Arch Linux & Полигон",
  badge: "Неделя 1 • L0 Pre-Intern",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-arch">🏹 Arch-based Distro (EndeavourOS / Garuda / Manjaro / Arch)</span>
        <span class="badge badge-ubuntu">🐧 Ubuntu / Debian / WSL2</span>
        <span class="badge badge-cyan">🐳 Docker + Git + Burp Suite</span>
      </div>
      <h1 class="hero-title">Фаза 0 — Оборудуем твою лабораторию и рабочий Linux</h1>
      <p class="hero-desc">
        Ты выбрал для старта <strong>Arch-based дистрибутив Linux</strong> — и это отличный выбор для безопасника: ты получаешь самые свежие пакеты, ядро и прямое подключение к репозиторию <strong>BlackArch</strong> (более 2800 инструментов пентеста!). При этом ниже сохранены все команды и для <strong>Ubuntu/Debian/WSL2</strong>, чтобы ты свободно работал на любом сервере.
      </p>
    </div>

    <div class="analogy-box">
      <div class="analogy-header">🏠 Аналогия из жизни: Чем отличаются Arch Linux, Ubuntu и Kali/BlackArch?</div>
      <p>
        Представь, что операционная система — это <strong>квартира, в которую ты въезжаешь</strong>:<br>
        • <strong>Ubuntu / Linux Mint</strong> — квартира «под ключ» от застройщика: мебель уже стоит, всё надёжно, но модели мебели прошлогодние (пакеты обновляются консервативно).<br>
        • <strong>Arch-based (EndeavourOS, Manjaro, Garuda, CachyOS, чистый Arch)</strong> — современная модульная мастерская с <strong>доставкой самых свежих деталей прямо с завода каждый день</strong> (модель <em>Rolling Release</em>). А ещё у неё есть доступ к огромному народному складу чертежей — <strong>AUR (Arch User Repository)</strong>, где есть вообще любая программа в мире!<br>
        • <strong>Kali Linux / BlackArch</strong> — это просто та же самая квартира, в которую заранее принесли 2000 слесарных отмычек и сканеров. На любой Arch-дистрибутив можно в одну команду подключить склад <strong>BlackArch</strong> и ставить только те инструменты, которые реально нужны!
      </p>
    </div>

    <h2 class="section-heading">1. Настройка твоей системы: Arch-based Linux vs Ubuntu/WSL2</h2>

    <div class="grid-2">
      <div class="card arch-only">
        <div class="card-title">🏹 Вариант А (Твой основной): Arch-based Linux</div>
        <p>Если ты используешь <strong>EndeavourOS, Manjaro, Garuda, CachyOS или чистый Arch</strong>, твой главный менеджер пакетов — <strong><code class="inline-code">pacman</code></strong>, а помощник для пользовательского репозитория AUR — <strong><code class="inline-code">yay</code></strong> или <strong><code class="inline-code">paru</code></strong>.</p>
        <div class="arch-box">
          <strong>🛡️ Золотое правило выживания на Arch №1:</strong><br>
          Настрой автоматические снимки системы (<strong>Timeshift</strong> + Btrfs или rsync) перед обновлениями! Если после <code class="inline-code">sudo pacman -Syu</code> что-то пойдёт не так, ты откатишь систему за 30 секунд прямо из меню загрузки GRUB.
        </div>
        <div class="code-wrap">
          <div class="code-header"><span>Arch Linux — Первичная настройка и базовый набор</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block"># 1. Полное обновление системы (на Arch обновляем ВСЮ систему целиком!):
sudo pacman -Syu

# 2. Установка базовых утилит разработчика, Git, Python, Docker и сети:
sudo pacman -S --needed base-devel git curl wget vim nano htop tmux \\
  python python-pip python-virtualenv docker docker-compose \\
  nmap wireshark-qt inetutils bind netcat openssh ufw

# 3. Включаем службу Docker и добавляем себя в группу docker:
sudo systemctl enable --now docker
sudo usermod -aG docker $USER

# 4. Включаем базовый файрвол (защита твоего ноутбука в кафе/сетях):
sudo systemctl enable --now ufw
sudo ufw enable</pre>
        </div>

        <div class="code-wrap">
          <div class="code-header"><span>🏹 Как подключить репозиторий хакерских утилит BlackArch (по желанию)</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block"># Большинство главных утилит (nmap, ffuf, gobuster, sqlmap, john, hashcat, burpsuite)
# УЖЕ есть в обычном репозитории Arch или в AUR!
sudo pacman -S ffuf gobuster sqlmap john hashcat

# А если понадобится весь каталог BlackArch (2800+ утилит):
curl -O https://blackarch.org/strap.sh
# Проверь файл глазами перед запуском (привычка безопасника!):
less strap.sh
chmod +x strap.sh
sudo ./strap.sh</pre>
        </div>
      </div>

      <div class="card ubuntu-only">
        <div class="card-title">🐧 Вариант Б (На Windows / Серверах): WSL2 Ubuntu или VirtualBox VM</div>
        <p>Даже если дома у тебя Arch, 80% облачных серверов компаний и учебных машин работают на <strong>Ubuntu / Debian</strong> (менеджер пакетов <code class="inline-code">apt</code>). Поэтому держи под рукой и эти команды:</p>
        <div class="code-wrap">
          <div class="code-header"><span>PowerShell (Установка WSL2 на Windows)</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block"># В PowerShell от имени Администратора:
wsl --install
# Перезагрузи ПК -> придумай логин и пароль (символы пароля при вводе скрыты!)</pre>
        </div>
        <div class="code-wrap">
          <div class="code-header"><span>Ubuntu / Debian — Первичная настройка через apt</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block"># 1. Обновление списков пакетов и самой системы:
sudo apt update && sudo apt upgrade -y

# 2. Установка базового набора:
sudo apt install -y build-essential git curl wget vim nano htop tmux \\
  python3 python3-pip python3-venv nmap dnsutils netcat-openbsd</pre>
        </div>
        <p style="margin-top:10px; font-size:0.88rem; color:var(--text-secondary);">
          • Официальный гайд WSL: <a class="res-link" href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank">learn.microsoft.com/windows/wsl</a><br>
          • Видео по VirtualBox Ubuntu VM: <a class="res-link" href="https://www.youtube.com/watch?v=wX75Z-4MEoM" target="_blank">NetworkChuck — Ubuntu VM</a><br>
          • Видео по Dual Boot: <a class="res-link" href="https://www.youtube.com/watch?v=CWQMYN12QD8" target="_blank">Dual Boot Guide</a>
        </p>
      </div>
    </div>

    <h2 class="section-heading">2. Docker, Git и SSH-ключи (С аналогиями из жизни)</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">🐳 Docker — Учебные лаборатории в одну команду</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Морской грузовой контейнер</div>
          Раньше, чтобы запустить уязвимый сайт для тренировки (например, старый магазин на PHP + MySQL), приходилось ставить десяток программ прямо на свой компьютер, и они конфликтовали друг с другом. <strong>Docker-контейнер</strong> — это герметичный железный ящик, внутри которого уже упакован сайт со всеми его настройками. Одной командой ты ставишь ящик на стол, тренируешься ломать его, а потом одной кнопкой удаляешь без единого следа в системе!
        </div>
        <div class="code-wrap">
          <div class="code-header"><span>Проверка работы Docker</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block">docker run --rm hello-world
# Если видишь "Hello from Docker!" — твоя контейнерная лаборатория готова!</pre>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔑 Git и SSH-ключи — Твоё портфолио и цифровой замок</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Навесной замок (Public Key) и личный ключ (Private Key)</div>
          Как работают SSH-ключи? Ты создаёшь пару:<br>
          • <strong>Публичный ключ (<code class="inline-code">id_ed25519.pub</code>)</strong> — это <strong>открытый навесной замок</strong>. Ты можешь повесить его на дверь своего GitHub или любого сервера — пускай его видят все, взломать его нельзя.<br>
          • <strong>Приватный ключ (<code class="inline-code">id_ed25519</code> без .pub)</strong> — это <strong>единственный физический ключ в твоём кармане</strong>, который открывает этот замок. Его нельзя показывать никому!
        </div>
        <div class="code-wrap">
          <div class="code-header"><span>Настройка Git и генерация SSH-ключа</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block">git config --global user.name "Core-37"
git config --global user.email "your_email@example.com"

ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
# Скопируй вывод -> GitHub -> Settings -> SSH and GPG keys -> New SSH key
ssh -T git@github.com</pre>
        </div>
      </div>
    </div>

    <h2 class="section-heading">3. Инструменты и 10 бесплатных аккаунтов</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">🧰 Программы, которые нужно поставить сейчас</div>
        <ul style="margin-left:18px;">
          <li><strong>VS Code / VSCodium:</strong> (На Arch: <code class="inline-code">sudo pacman -S code</code> или <code class="inline-code">yay -S visual-studio-code-bin</code>). Установи расширения: <code class="inline-code">Python</code>, <code class="inline-code">Pylance</code>, <code class="inline-code">Jupyter</code>, <code class="inline-code">Docker</code>, <code class="inline-code">GitLens</code>.</li>
          <li><strong>Burp Suite Community Edition:</strong> Скачай с <a class="res-link" href="https://portswigger.net/burp/communitydownload" target="_blank">portswigger.net</a> (или на Arch: <code class="inline-code">yay -S burpsuite</code>).</li>
          <li><strong>Браузер Firefox + расширение FoxyProxy:</strong> Для переключения трафика на Burp в 1 клик (либо используй встроенный браузер внутри самого Burp Suite: <code class="inline-code">Proxy → Open Browser</code>).</li>
          <li><strong>Obsidian:</strong> Твоя база знаний (на Arch: <code class="inline-code">sudo pacman -S obsidian</code>).</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title">🌐 10 Аккаунтов (Создай на отдельную почту с 2FA)</div>
        <div class="table-wrap" style="margin:0;">
          <table class="cyber-table">
            <thead><tr><th>Платформа</th><th>Зачем нужна</th></tr></thead>
            <tbody>
              <tr><td><a class="res-link" href="https://github.com" target="_blank">GitHub</a></td><td>Хранение кода и портфолио (главный документ при найме)</td></tr>
              <tr><td><a class="res-link" href="https://portswigger.net/web-security" target="_blank">PortSwigger Academy</a></td><td>Лучшие бесплатные онлайн-лабы по вебу, API и взлому LLM</td></tr>
              <tr><td><a class="res-link" href="https://tryhackme.com" target="_blank">TryHackMe</a></td><td>Пошаговые учебные комнаты по Linux, сетям и пентесту</td></tr>
              <tr><td><a class="res-link" href="https://hackthebox.com" target="_blank">HackTheBox</a></td><td>Реалистичные машины + курс <strong>AI Red Teamer (с Google)</strong></td></tr>
              <tr><td><a class="res-link" href="https://kaggle.com" target="_blank">Kaggle</a></td><td>Интерактивные курсы Python/Pandas/ML + бесплатные GPU</td></tr>
              <tr><td><a class="res-link" href="https://huggingface.co" target="_blank">Hugging Face</a></td><td>Главный мировой каталог открытых моделей и датасетов ИИ</td></tr>
              <tr><td><a class="res-link" href="https://picoctf.org" target="_blank">picoCTF</a> &amp; <a class="res-link" href="https://ctftime.org" target="_blank">CTFtime</a></td><td>Первые соревнования Capture The Flag и архив разборов</td></tr>
              <tr><td><a class="res-link" href="https://www.qualys.com/training/" target="_blank">Qualys Training</a> &amp; <a class="res-link" href="https://www.theforage.com" target="_blank">Forage</a></td><td>Бесплатный корпоративный сертификат и виртуальные стажировки</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">🚪 Чек-лист готовности Фазы 0</div>
      <div class="check-row" data-check-id="p0-1"><input type="checkbox"><span>Настроен Linux (Arch-based дистрибутив или Ubuntu WSL2/VM), система обновлена.</span></div>
      <div class="check-row" data-check-id="p0-2"><input type="checkbox"><span>Работает <code class="inline-code">docker run --rm hello-world</code> и настроен SSH-ключ для GitHub (<code class="inline-code">ssh -T git@github.com</code>).</span></div>
      <div class="check-row" data-check-id="p0-3"><input type="checkbox"><span>Установлены VS Code, Obsidian и Burp Suite Community Edition.</span></div>
      <div class="check-row" data-check-id="p0-4"><input type="checkbox"><span>Созданы аккаунты на GitHub, PortSwigger, TryHackMe, Kaggle, HuggingFace.</span></div>
    </div>
  `
};

window.ACADEMY_DATA.phase1 = {
  id: "phase1",
  title: "🐧🏹 Фаза 1: Linux & Arch с абсолютного нуля",
  badge: "4–5 недель • L1 Junior Sys",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-arch">🏹 Полный курс выживания в Arch Linux</span>
        <span class="badge badge-ubuntu">🐧 + Команды Ubuntu / Debian</span>
        <span class="badge badge-emerald">🎮 OverTheWire Bandit 0–30</span>
      </div>
      <h1 class="hero-title">Фаза 1 — Linux и Терминал с Абсолютного Нуля</h1>
      <p class="hero-desc">
        На Linux работают 95% серверов интернета, облачные кластеры с видеокартами для ИИ и все хакерские утилиты. Когда ты освоишь терминал, права доступа, потоки и процессы — ты перестанешь бояться любого компьютера.
      </p>
    </div>

    <h2 class="section-heading">🧠 1. Как устроен Linux: Главные концепции на примерах из жизни</h2>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">🌳 Дерево папок от корня <code class="inline-code">/</code> (Вместо дисков C: и D:)</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Офисный небоскрёб</div>
          В Windows у каждого диска свой подъезд (<code class="inline-code">C:\\</code>, <code class="inline-code">D:\\</code>). А в Linux всё здание — это <strong>единый небоскрёб, начинающийся с первого этажа <code class="inline-code">/</code> (Корень / Root)</strong>:<br>
          • <strong><code class="inline-code">/home/username</code> (или тильда <code class="inline-code">~</code>)</strong> — твоя личная комната. Здесь лежат скрытые файлы с точкой: <code class="inline-code">.bashrc</code>, <code class="inline-code">.bash_history</code> (история всех введённых команд!), <code class="inline-code">.ssh/</code> и <code class="inline-code">.env</code>.<br>
          • <strong><code class="inline-code">/root</code></strong> — пентхаус генерального директора (суперпользователя <code class="inline-code">root</code>).<br>
          • <strong><code class="inline-code">/etc</code></strong> — щитовая и папка с приказами по зданию (все настройки системы). В <code class="inline-code">/etc/passwd</code> лежит открытый список всех жильцов, а в <code class="inline-code">/etc/shadow</code> — секретные хэши их паролей!<br>
          • <strong><code class="inline-code">/var/log</code></strong> — будка охраны с камерами наблюдения (все журналы входов и ошибок).<br>
          • <strong><code class="inline-code">/tmp</code></strong> — общий коридор со столом, куда <strong>любой прохожий</strong> может положить свой свёрток (именно сюда хакеры скачивают свои скрипты при взломе!).<br>
          • <strong><code class="inline-code">/proc</code></strong> — живое рентген-табло: «виртуальные файлы», показывающие память и запущенные программы прямо сейчас.
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔐 Права доступа (<code class="inline-code">rwx</code>, <code class="inline-code">755</code>, <code class="inline-code">600</code>) и бит <code class="inline-code">SUID</code></div>
        <div class="code-wrap">
          <div class="code-header"><span>Как читать строку ls -la</span></div>
          <pre class="code-block">-rwxr-x---  1  alice  devs  4096  deploy.sh
│└┬┘└┬┘└┬┘     │      └── Группа-владелец (devs)
│ │  │  │      └── Владелец файла (alice)
│ │  │  └── Права ВСЕХ ОСТАЛЬНЫХ (others): --- (0 = ничего нельзя)
│ │  └── Права ГРУППЫ (group):            r-x (4+0+1 = 5 = читать и запускать)
│ └── Права ВЛАДЕЛЬЦА (user):             rwx (4+2+1 = 7 = читать, менять, запускать)
└── Тип: - обычный файл, d папка, l ссылка</pre>
        </div>
        <p style="font-size:0.9rem; margin-top:8px;">
          Запомни всего 3 цифры: <strong><code class="inline-code">r = 4</code> (Read/Читать)</strong>, <strong><code class="inline-code">w = 2</code> (Write/Менять)</strong>, <strong><code class="inline-code">x = 1</code> (Execute/Запускать)</strong>.<br>
          • <code class="inline-code">chmod 600 id_ed25519</code> → <code class="inline-code">6 (4+2)</code> только тебе, <code class="inline-code">0</code> группе, <code class="inline-code">0</code> остальным (обязательно для SSH-ключей!).<br>
          • <code class="inline-code">chmod 755 script.sh</code> → ты можешь всё (<code class="inline-code">7</code>), остальные — читать и запускать (<code class="inline-code">5</code>).<br>
          • <code class="inline-code">chmod 777 file.sh</code> → <strong>дыра в безопасности!</strong> Любой может дописать в файл свой вредоносный код.
        </p>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия для SUID (<code class="inline-code">-rwsr-xr-x</code>): Корпоративная карта директора</div>
          Обычно любая программа работает с твоими правами. Но если на файле стоит бит <strong>SUID</strong> (буква <code class="inline-code">s</code> вместо <code class="inline-code">x</code>, например на <code class="inline-code">/usr/bin/passwd</code>), то эта программа запускается <strong>с правами своего владельца (root)</strong>! Это как если бы директор дал стажёру свою безлимитную корпоративную карту только чтобы купить бумагу для принтера (<code class="inline-code">passwd</code> меняет твой пароль в закрытом файле <code class="inline-code">/etc/shadow</code>). Но если директор по ошибке привязал свою карту к программе <code class="inline-code">vim</code>, <code class="inline-code">find</code> или <code class="inline-code">python</code> — стажёр открывает через неё терминал и мгновенно становится директором (<code class="inline-code">root</code>)! Справочник таких программ: <a class="res-link" href="https://gtfobins.github.io" target="_blank">GTFOBins</a>.
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">🚰 3 трубы каждой программы (<code class="inline-code">stdin</code>, <code class="inline-code">stdout</code>, <code class="inline-code">stderr</code>) и конвейер <code class="inline-code">|</code></div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Заводской конвейер с отводом брака</div>
          У каждой команды в Linux есть 1 вход и 2 выхода:<br>
          • <strong>Поток 0 (<code class="inline-code">stdin</code>)</strong> — воронка, куда засыпают сырьё (текст с клавиатуры или из файла).<br>
          • <strong>Поток 1 (<code class="inline-code">stdout</code>)</strong> — труба готовой продукции (обычный результат на экран).<br>
          • <strong>Поток 2 (<code class="inline-code">stderr</code>)</strong> — отдельная труба для сообщений об авариях и ошибках.<br>
          Когда ты пишешь <code class="inline-code">find / -name "*.conf" 2>/dev/null</code>, ты надеваешь шланг на <strong>трубу №2 (ошибки "Отказано в доступе")</strong> и сливаешь их в бездонную канализацию <code class="inline-code">/dev/null</code>, чтобы на экране остались только найденные файлы! А вертикальная черта <code class="inline-code">|</code> (Pipe) напрямую стыкует выход первого станка со входом второго.
        </div>
      </div>

      <div class="card">
        <div class="card-title">⚙️ Процессы (<code class="inline-code">kill</code> vs <code class="inline-code">kill -9</code>) и почему мы пишем <code class="inline-code">./script.sh</code></div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Вежливая просьба закрыть магазин vs Выбивание пробок</div>
          • Обычный <code class="inline-code">kill 1234</code> (сигнал <code class="inline-code">SIGTERM / -15</code>) — ты подходишь к продавцу и говоришь: «Закрываемся!». Программа спокойно сохраняет базу данных, закрывает файлы и выключается.<br>
          • Жёсткий <code class="inline-code">kill -9 1234</code> (сигнал <code class="inline-code">SIGKILL</code>) — ты молча вырубаешь рубильник электричества во всём здании. Программа умирает мгновенно.<br><br>
          <strong>Почему <code class="inline-code">./script.sh</code>?</strong> Переменная <code class="inline-code">$PATH</code> хранит список доверенных полок (<code class="inline-code">/usr/bin</code>), где система ищет команды. Текущая папка туда специально <strong>не входит</strong>: иначе хакер положил бы в <code class="inline-code">/tmp</code> вирус с именем <code class="inline-code">ls</code>, и как только админ зашёл бы в <code class="inline-code">/tmp</code> и набрал <code class="inline-code">ls</code> — сработал бы вирус! Поэтому свой скрипт мы вызываем явно из текущей папки: <code class="inline-code">./script.sh</code>.
        </div>
      </div>
    </div>

    <h2 class="section-heading">🏹🐧 2. Спецкурс для твоего Arch Linux (и сравнение с Ubuntu)</h2>
    <div class="card">
      <div class="card-title">🔄 Главные отличия Arch Linux от Ubuntu, о которых должен знать каждый безопасник</div>
      <div class="grid-2" style="margin-bottom:10px;">
        <div class="arch-box">
          <strong>1. Где лежат логи входов в Arch Linux?</strong><br>
          В старых учебниках Ubuntu везде пишут: «смотри файл <code class="inline-code">/var/log/auth.log</code>». В современном <strong>Arch Linux</strong> этого файла по умолчанию нет! Вся система пишет логи в единый бинарный журнал <strong><code class="inline-code">systemd-journald</code></strong>. Чтобы посмотреть логи SSH или sudo на Arch, используй:<br>
          • <code class="inline-code">journalctl -u sshd</code> — все события SSH-сервера<br>
          • <code class="inline-code">journalctl -p err -b</code> — все ошибки с момента текущей загрузки<br>
          • <code class="inline-code">journalctl -f</code> — следить за всеми событиями системы в прямом эфире!
        </div>
        <div class="arch-box">
          <strong>2. Безопасность AUR (<code class="inline-code">yay</code> / <code class="inline-code">paru</code>) — Твой первый урок Supply Chain Security!</strong><br>
          Официальные репозитории Arch проверяются мейнтейнерами. А <strong>AUR (Arch User Repository)</strong> — это рецепты сборки (<code class="inline-code">PKGBUILD</code>), которые выкладывают обычные пользователи интернета. Прежде чем нажать «Да» при установке пакета через <code class="inline-code">yay -S имя_пакета</code>, <strong>всегда читай <code class="inline-code">PKGBUILD</code></strong>: откуда скачивается архив (<code class="inline-code">source=</code>) и какие команды выполняются внутри <code class="inline-code">build()</code> и <code class="inline-code">package()</code>!
        </div>
      </div>

      <div class="table-wrap">
        <table class="cyber-table">
          <thead>
            <tr>
              <th>Задача</th>
              <th>🏹 Команда в твоём Arch Linux (<code class="inline-code">pacman</code> / <code class="inline-code">yay</code>)</th>
              <th>🐧 Команда в Ubuntu / Debian / Kali (<code class="inline-code">apt</code>)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Обновить всю систему</strong></td>
              <td><code class="inline-code">sudo pacman -Syu</code></td>
              <td><code class="inline-code">sudo apt update &amp;&amp; sudo apt upgrade -y</code></td>
            </tr>
            <tr>
              <td><strong>Установить программу</strong></td>
              <td><code class="inline-code">sudo pacman -S nmap</code></td>
              <td><code class="inline-code">sudo apt install nmap</code></td>
            </tr>
            <tr>
              <td><strong>Найти пакет по названию/описанию</strong></td>
              <td><code class="inline-code">pacman -Ss wireshark</code></td>
              <td><code class="inline-code">apt search wireshark</code></td>
            </tr>
            <tr>
              <td><strong>Посмотреть, какие файлы установил пакет</strong></td>
              <td><code class="inline-code">pacman -Ql nmap</code></td>
              <td><code class="inline-code">dpkg -L nmap</code></td>
            </tr>
            <tr>
              <td><strong>Узнать, какому пакету принадлежит файл</strong></td>
              <td><code class="inline-code">pacman -Qo /usr/bin/ss</code></td>
              <td><code class="inline-code">dpkg -S /usr/bin/ss</code></td>
            </tr>
            <tr>
              <td><strong>Чисто удалить пакет со всеми хвостами</strong></td>
              <td><code class="inline-code">sudo pacman -Rns имя_пакета</code></td>
              <td><code class="inline-code">sudo apt purge --autoremove имя_пакета</code></td>
            </tr>
            <tr>
              <td><strong>Посмотреть логи попыток входа</strong></td>
              <td><code class="inline-code">journalctl | grep "Failed password"</code></td>
              <td><code class="inline-code">grep "Failed password" /var/log/auth.log</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h2 class="section-heading">🛠️ 3. Полная шпаргалка команд терминала + 3 боевых Bash-скрипта</h2>
    <div class="table-wrap">
      <table class="cyber-table">
        <thead>
          <tr><th>Команда</th><th>Пример</th><th>Что делает и зачем нужна хакеру / защитнику</th></tr>
        </thead>
        <tbody>
          <tr><td><code class="inline-code">pwd</code></td><td><code class="inline-code">pwd</code></td><td>Показывает полный путь к текущей папке (где я сейчас стою).</td></tr>
          <tr><td><code class="inline-code">ls</code></td><td><code class="inline-code">ls -la</code></td><td>Список всех файлов, включая <strong>скрытые</strong> (начинаются с точки: <code class="inline-code">.env</code>, <code class="inline-code">.ssh</code>, <code class="inline-code">.git</code>).</td></tr>
          <tr><td><code class="inline-code">cd</code></td><td><code class="inline-code">cd /etc</code>, <code class="inline-code">cd ..</code>, <code class="inline-code">cd ~</code>, <code class="inline-code">cd -</code></td><td>Перемещение между папками (<code class="inline-code">..</code> — на уровень выше, <code class="inline-code">-</code> — вернуться назад).</td></tr>
          <tr><td><code class="inline-code">cat</code> / <code class="inline-code">less</code></td><td><code class="inline-code">cat flag.txt</code> / <code class="inline-code">less big.log</code></td><td>Чтение файлов (<code class="inline-code">less</code> открывает постранично, выход — клавиша <code class="inline-code">q</code>).</td></tr>
          <tr><td><code class="inline-code">head</code> / <code class="inline-code">tail</code></td><td><code class="inline-code">tail -n 20 -f app.log</code></td><td>Показать первые / последние строки (<code class="inline-code">-f</code> — следить за новыми строками в реальном времени).</td></tr>
          <tr><td><code class="inline-code">grep</code></td><td><code class="inline-code">grep -rni "password" /var/www/</code></td><td><strong>Команда №1 при поиске секретов!</strong> Ищет текст внутри всех файлов рекурсивно (<code class="inline-code">-r</code>), с номером строки (<code class="inline-code">-n</code>) и без учёта регистра (<code class="inline-code">-i</code>).</td></tr>
          <tr><td><code class="inline-code">find</code></td><td><code class="inline-code">find / -perm -4000 -type f 2>/dev/null</code></td><td>Поиск файлов по всему диску (данный пример ищет все <strong>SUID-файлы</strong> для повышения привилегий до <code class="inline-code">root</code>!).</td></tr>
          <tr><td><code class="inline-code">file</code> &amp; <code class="inline-code">strings</code></td><td><code class="inline-code">file data.bin</code> / <code class="inline-code">strings app.bin</code></td><td>Определяет реальный тип файла и вытаскивает все читаемые строки из бинарных программ.</td></tr>
          <tr><td><code class="inline-code">ss</code></td><td><code class="inline-code">ss -tulnp</code></td><td>Показывает все открытые сетевые порты и программы, которые их слушают.</td></tr>
          <tr><td><code class="inline-code">cut</code> / <code class="inline-code">sort</code> / <code class="inline-code">uniq</code></td><td><code class="inline-code">cut -d' ' -f1 access.log | sort | uniq -c | sort -rn</code></td><td>Классический конвейер анализа логов: вырезать IP → отсортировать → посчитать повторы.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="card">
      <div class="card-title">💻 Твои первые 3 боевых Bash-скрипта (Работают и на Arch, и на Ubuntu!)</div>
      <div class="code-wrap">
        <div class="code-header"><span>1. recon.sh — Быстрая разведка системы, портов и SUID</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
        <pre class="code-block">#!/bin/bash
echo "=== [1] Пользователь, группы и ядро ОС ==="
whoami && id && uname -a

echo "=== [2] Сетевые адреса и открытые порты ==="
ip -brief addr
ss -tulnp

echo "=== [3] Поиск файлов с SUID-битом (запуск от имени владельца/root) ==="
find / -perm -4000 -type f 2>/dev/null</pre>
      </div>

      <div class="code-wrap">
        <div class="code-header"><span>2. net_sweep.sh — Параллельный пинг-сканер локальной сети</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
        <pre class="code-block">#!/bin/bash
SUBNET="$1"
if [ -z "$SUBNET" ]; then
    echo "Использование: $0 <первые_3_числа_сети, например 192.168.1>"
    exit 1
fi
echo "Сканируем сеть $SUBNET.0/24..."
for ip in $(seq 1 254); do
    ping -c 1 -W 1 "$SUBNET.$ip" >/dev/null 2>&1 && echo "[+] Хост $SUBNET.$ip ЖИВОЙ" &
done
wait
echo "Сканирование завершено!"</pre>
      </div>

      <div class="code-wrap">
        <div class="code-header"><span>3. log_watch.sh — Поиск попыток взлома (поддерживает и Arch journalctl, и Ubuntu auth.log!)</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
        <pre class="code-block">#!/bin/bash
echo "=== Проверка последних неудачных попыток входа ==="
if [ -f "/var/log/auth.log" ]; then
    grep "Failed password" /var/log/auth.log | tail -n 10
else
    # Для Arch Linux и систем с systemd-journald:
    journalctl --no-pager 2>/dev/null | grep "Failed password" | tail -n 10
fi</pre>
      </div>
    </div>

    <h2 class="section-heading">📺 4. Все видео, книги и игра OverTheWire: Bandit</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">✅ Обязательный минимум (Видео + Книга)</div>
        <ol style="margin-left:18px;">
          <li>🎬 <a class="res-link" href="https://www.youtube.com/watch?v=rrB13utjYV4" target="_blank">Linux in 100 Seconds</a> (2 мин)</li>
          <li>🎬 <a class="res-link" href="https://www.youtube.com/watch?v=jRwans5sX_w" target="_blank">NetworkChuck — Full Linux Tutorial for Beginners</a> (1 час — повторяй каждую команду!)</li>
          <li>🎬 <a class="res-link" href="https://www.youtube.com/watch?v=I4EWvMFj37g" target="_blank">NetworkChuck — Linux Permissions (chmod/chown)</a></li>
          <li>🎬 <a class="res-link" href="https://www.youtube.com/watch?v=e7BufAVwDiM" target="_blank">Learn Linux TV — Bash Scripting</a></li>
          <li>📖 <strong>Книга (Бесплатно онлайн):</strong> <a class="res-link" href="https://linuxcommand.org/tlcl.php" target="_blank">The Linux Command Line (William Shotts)</a> — Главы 1–20 + написание скриптов.</li>
          <li>🛠️ Помощник по флагам: <a class="res-link" href="https://explainshell.com" target="_blank">explainshell.com</a> (разбирает любую команду по кусочкам).</li>
        </ol>
        <div style="margin-top:12px; padding-top:10px; border-top:1px solid var(--border-color); font-size:0.86rem; color:var(--text-secondary);">
          <strong>➕ Дополнительно:</strong>
          <a class="res-link" href="https://www.youtube.com/watch?v=YHFzr-akOas&list=PL-osiE80TeTvGhHkpvfmKWOiIPF8UVy6c" target="_blank">Плейлист Corey Schafer</a> •
          <a class="res-link" href="https://www.youtube.com/watch?v=HIXzJ3Rz9po" target="_blank">Linux File System</a> •
          <a class="res-link" href="https://www.youtube.com/watch?v=gd7BXuUQ91w" target="_blank">60 Linux Commands</a> •
          <a class="res-link" href="https://www.youtube.com/watch?v=ggSyF1SVFr4" target="_blank">Vim за 15 минут</a> •
          <a class="res-link" href="https://www.youtube.com/watch?v=sWbUDq4S6Y8" target="_blank">TechWorld with Nana (2 ч)</a> •
          <a class="res-link" href="https://www.youtube.com/watch?v=ZTiovQ6yCko" target="_blank">John Hammond — Linux Privilege Escalation</a> •
          <a class="res-link" href="https://www.youtube.com/watch?v=IPvYjXCsTg8" target="_blank">Linux Firewall (ufw/iptables)</a> •
          <a class="res-link" href="https://www.edx.org/course/introduction-to-linux" target="_blank">Linux Foundation LFS101x</a>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🎮 Главная практика: OverTheWire Bandit + TryHackMe</div>
        <p><strong>Bandit (<a class="res-link" href="https://overthewire.org/wargames/bandit/" target="_blank">overthewire.org/wargames/bandit</a>)</strong> — легендарный квест, где ты ищешь спрятанные пароли на реальном сервере по SSH:</p>
        <div class="code-wrap">
          <div class="code-header"><span>Подключение к Уровню 0 из твоего терминала</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block">ssh bandit0@bandit.labs.overthewire.org -p 2220
# Пароль для bandit0: bandit0</pre>
        </div>
        <p style="font-size:0.88rem; margin-top:8px;">
          • <strong>Уровни 0–10:</strong> файлы с пробелами, скрытые файлы, поиск по размеру через <code class="inline-code">find</code>, чтение <code class="inline-code">strings</code>, кодировка <code class="inline-code">base64</code>.<br>
          • <strong>Уровни 11–20:</strong> архивы (<code class="inline-code">tar</code>, <code class="inline-code">gzip</code>, <code class="inline-code">bzip2</code>), вход по приватным SSH-ключам (<code class="inline-code">ssh -i key</code>), отправка данных в порты через <code class="inline-code">nc</code> и <code class="inline-code">openssl s_client</code>.<br>
          • <strong>Уровни 21–30:</strong> задачи по расписанию <code class="inline-code">cron</code>, скрипты оболочки и поиск секретов в истории коммитов <code class="inline-code">git log -p</code>!<br><br>
          <strong>Плюс 3 комнаты на TryHackMe:</strong>
          <a class="res-link" href="https://tryhackme.com/room/linuxfundamentalspart1" target="_blank">Part 1</a> •
          <a class="res-link" href="https://tryhackme.com/room/linuxfundamentalspart2" target="_blank">Part 2</a> •
          <a class="res-link" href="https://tryhackme.com/room/linuxfundamentalspart3" target="_blank">Part 3</a>
        </p>
      </div>
    </div>

    <h2 class="section-heading">🧪 5. Проверь себя (Нажми на вопрос, чтобы открыть ответ)</h2>
    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-question"><span>1. Чем отличается перенаправление <code>&gt;</code> от <code>&gt;&gt;</code> и что делает <code>2&gt;/dev/null</code>?</span><span>▼</span></div>
      <div class="quiz-answer"><code>&gt;</code> полностью <strong>перезаписывает</strong> файл (стирая старый текст), а <code>&gt;&gt;</code> <strong>дописывает</strong> новые строки в конец. Конструкция <code>2&gt;/dev/null</code> перенаправляет поток ошибок (stderr, труба №2) в «чёрную дыру», чтобы сообщения <em>Permission denied</em> не засоряли экран.</div>
    </div>
    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-question"><span>2. Что означают права <code>-rwsr-xr-x 1 root root</code> и почему буква <code>s</code> критична для хакера?</span><span>▼</span></div>
      <div class="quiz-answer">Буква <code>s</code> на месте <code>x</code> у владельца — это бит <strong>SUID</strong>. Любой пользователь, запустивший эту программу, выполняет её <strong>с правами владельца файла (root)</strong>. Если SUID стоит на программе, умеющей читать файлы или вызывать оболочку (<code>find</code>, <code>vim</code>, <code>python</code>), обычный пользователь может мгновенно стать <code>root</code>.</div>
    </div>
    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-question"><span>3. Где смотреть логи неудачных попыток входа по SSH в твоём Arch Linux, если файла <code>/var/log/auth.log</code> нет?</span><span>▼</span></div>
      <div class="quiz-answer">В Arch Linux логи собирает служба <code>systemd-journald</code>. Их смотрят командой <code>journalctl -u sshd</code> или <code>journalctl | grep "Failed password"</code>.</div>
    </div>
  `
};

window.ACADEMY_DATA.phase2 = {
  id: "phase2",
  title: "🐍💻 Фаза 2: Python + Все Языки в Кибербезе",
  badge: "6–8 недель • L2 SecDev",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-cyan">🐍 Python 3 (Главный язык ИБ и ИИ)</span>
        <span class="badge badge-purple">💻 Матрица всех языков кибербеза</span>
        <span class="badge badge-emerald">🛠️ 4 боевых проекта в портфолио</span>
      </div>
      <h1 class="hero-title">Фаза 2 — Python с абсолютного нуля и Стек Языков Безопасника</h1>
      <p class="hero-desc">
        Готовые программы не всегда подходят под нестандартную защиту сайта или нового ИИ-агента. Когда ты знаешь Python, ты за 10 минут пишешь свой собственный инструмент, который проверяет порты, анализирует тысячи строк логов или тестирует нейросеть.
      </p>
    </div>

    <h2 class="section-heading">💻 1. Какие языки программирования реально нужны в Кибербезопасности?</h2>
    <div class="analogy-box">
      <div class="analogy-header">🏠 Аналогия из жизни: Инструменты в чемодане мастера</div>
      Новички часто думают, что нужно выучить сразу 10 языков (C++, Rust, Assembly, Go, PHP, Java, Python...) и выгорают за две недели. На самом деле языки делятся на <strong>3 эшелона</strong>:
      <br>• <strong>Эшелон 1 (Твой шуруповёрт и мультиметр — писать с нуля):</strong> <code class="inline-code">Python</code> + <code class="inline-code">Bash/PowerShell</code> + <code class="inline-code">SQL</code>.
      <br>• <strong>Эшелон 2 (Уметь читать чертежи здания — читать и понимать чужой код):</strong> <code class="inline-code">JavaScript/HTML</code> + <code class="inline-code">RegEx/YAML/KQL</code>.
      <br>• <strong>Эшелон 3 (Спецтехника для узких работ — НЕ трогать в первый год!):</strong> <code class="inline-code">Go</code>, <code class="inline-code">C/C++</code>, <code class="inline-code">Assembly</code>.
    </div>

    <div class="table-wrap">
      <table class="cyber-table">
        <thead>
          <tr>
            <th>Эшелон</th>
            <th>Язык</th>
            <th>Как глубоко учить</th>
            <th>Зачем в классической ИБ (Red &amp; Blue Team)</th>
            <th>Зачем в AI / ML Security</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>🥇 1. Ядро</strong></td>
            <td><strong>1. Python</strong></td>
            <td><strong>Писать свободно с нуля</strong></td>
            <td>Автоматизация атак, работа с сетью и HTTP API, парсинг логов, скрипты для CTF</td>
            <td><strong>99% всего ИИ:</strong> PyTorch, Ollama, RAG, агенты, Garak, PyRIT, IBM ART, ModelScan</td>
          </tr>
          <tr>
            <td><strong>🥇 1. Ядро</strong></td>
            <td><strong>2. Bash + PowerShell</strong></td>
            <td><strong>Однострочники и скрипты</strong></td>
            <td><strong>Bash</strong> — жизнь в Linux и Docker. <strong>PowerShell</strong> — защита и расследование в Windows / Active Directory (80% компаний)</td>
            <td>Развёртывание контейнеров, автоматизация прогона сканеров</td>
          </tr>
          <tr>
            <td><strong>🥇 1. Ядро</strong></td>
            <td><strong>3. SQL</strong></td>
            <td><strong>Запросы <code class="inline-code">SELECT / JOIN / WHERE</code></strong></td>
            <td>Понимание <strong>SQL-инъекций</strong> (Red Team) + выборка данных и аудит доступов (Blue Team / Google Cert)</td>
            <td>Атаки и защита ИИ-агентов с функцией <strong>Text-to-SQL</strong></td>
          </tr>
          <tr>
            <td><strong>🥈 2. Чтение</strong></td>
            <td><strong>4. JavaScript (+ HTML)</strong></td>
            <td><strong>Читать код + писать 5–10 строк</strong></td>
            <td>Понимание DOM, <strong>XSS</strong>, <strong>CSRF</strong>, <strong>CORS</strong>, поиск скрытых API-маршрутов в <code class="inline-code">.js</code> файлах сайта</td>
            <td>Много ИИ-агентов и <strong>MCP-серверов</strong> пишутся на Node.js/TypeScript; XSS через ответ LLM</td>
          </tr>
          <tr>
            <td><strong>🥈 2. Чтение</strong></td>
            <td><strong>5. RegEx + YAML + KQL/SPL</strong></td>
            <td><strong>Практическое применение</strong></td>
            <td><strong>RegEx</strong> — поиск шаблонов атак; <strong>YAML</strong> — правила Sigma/Nuclei; <strong>KQL/SPL</strong> — поиск угроз в SIEM</td>
            <td>Написание правил Guardrails и конфигов Promptfoo / Garak</td>
          </tr>
          <tr>
            <td><strong>🥉 3. Позже</strong></td>
            <td><strong>6. Go / C / C++ / Assembly</strong></td>
            <td><strong>Не трогать в первый год!</strong></td>
            <td><strong>Go</strong> — облака (K8s) и быстрые сканеры. <strong>C/C++ и Assembly</strong> — только для реверса бинарных вирусов и переполнения буфера</td>
            <td>Нужны только разработчикам низкоуровневых движков (<code class="inline-code">llama.cpp</code>)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="section-heading">🧠 2. Главные концепции Python на пальцах (и важный нюанс Arch Linux!)</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">📖 Словарь (<code class="inline-code">dict</code>) vs Список (<code class="inline-code">list</code>)</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Камера хранения с номерами vs Паспорт с графами</div>
          • <strong>Список (<code class="inline-code">list</code>: <code class="inline-code">[22, 80, 443]</code>)</strong> — это ряд ячеек в камере хранения, где у каждой ячейки есть только порядковый номер (<code class="inline-code">ports[0]</code>).<br>
          • <strong>Словарь (<code class="inline-code">dict</code>: <code class="inline-code">{"user": "ivan", "role": "admin"}</code>)</strong> — это анкета или паспорт, где у каждого значения есть понятное <strong>имя поля (ключ)</strong>. Почти весь интернет и все нейросети общаются в формате <strong>JSON</strong>, а JSON в Python — это и есть словари и списки!
        </div>
      </div>

      <div class="card">
        <div class="card-title">🏹 Почему на Arch Linux (и Ubuntu 24.04) обязателен <code class="inline-code">venv</code>?</div>
        <div class="arch-box">
          Если ты в своём Arch Linux просто введёшь <code class="inline-code">pip install requests</code>, система выдаст ошибку: <strong><code class="inline-code">error: externally-managed-environment (PEP 668)</code></strong>!<br>
          <strong>Почему?</strong> Потому что системными пакетами управляет <code class="inline-code">pacman</code>, и если <code class="inline-code">pip</code> начнёт перезаписывать системные библиотеки Python, он сломает ОС.<br>
          <strong>Решение (Золотой стандарт):</strong> для каждого проекта создавай изолированную комнату — виртуальное окружение <code class="inline-code">venv</code>!
        </div>
        <div class="code-wrap">
          <div class="code-header"><span>Создание виртуального окружения venv в Linux</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block">mkdir -p ~/projects/sec-tools && cd ~/projects/sec-tools
python3 -m venv .venv           # Создаём изолированную папку .venv
source .venv/bin/activate       # Входим в неё (в начале строки появится (.venv))
pip install requests pandas     # Теперь pip работает без ошибок!
pip freeze > requirements.txt   # Сохраняем список библиотек проекта</pre>
        </div>
      </div>
    </div>

    <h2 class="section-heading">🛠️ 3. Четыре обязательных Python-проекта для твоего GitHub</h2>

    <div class="card">
      <div class="card-title">Проект 1: Многопоточный TCP-сканер портов (<code class="inline-code">port_scanner.py</code>)</div>
      <p>Проверяет, какие «двери» (порты) открыты на твоей локальной машине или учебной виртуалке, используя параллельные потоки:</p>
      <div class="code-wrap">
        <div class="code-header"><span>port_scanner.py</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
        <pre class="code-block">import socket
import sys
from concurrent.futures import ThreadPoolExecutor

def check_port(host: str, port: int, timeout: float = 0.5) -> int | None:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(timeout)
        return port if sock.connect_ex((host, port)) == 0 else None

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "127.0.0.1"
    ports = [21, 22, 53, 80, 443, 3000, 5000, 8000, 8080, 11434]
    with ThreadPoolExecutor(max_workers=50) as pool:
        found = [p for p in pool.map(lambda p: check_port(target, p), ports) if p]
    print(f"[+] Открытые порты на {target}: {found}")</pre>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Проект 2: Безопасная проверка пароля по базам утечек через k-Anonymity (<code class="inline-code">pwned_check.py</code>)</div>
      <div class="analogy-box">
        <div class="analogy-header">🏠 Аналогия: Как спросить у детектива, не в розыске ли ты, не назвав своего имени?</div>
        Ты хочешь проверить свой пароль по базе из 800 миллионов украденных паролей <em>Have I Been Pwned</em>, но <strong>боишься отправлять сам пароль по интернету</strong>! Что делает скрипт? Он считает от пароля SHA-1 хэш (например, <code class="inline-code">5BAA61E4C9...</code>) и отправляет на сервер <strong>только первые 5 букв (<code class="inline-code">5BAA6</code>)</strong>. Сервер присылает обратно список из 500 хвостов, которые начинаются на <code class="inline-code">5BAA6</code>, и твой компьютер сам ищет совпадение локально! Сервер так и не узнал твой пароль!
      </div>
      <div class="code-wrap">
        <div class="code-header"><span>pwned_check.py</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
        <pre class="code-block">import hashlib
import getpass
import requests

def check_password_pwned(password: str) -> int:
    sha1 = hashlib.sha1(password.encode("utf-8")).hexdigest().upper()
    prefix, suffix = sha1[:5], sha1[5:]
    resp = requests.get(f"https://api.pwnedpasswords.com/range/{prefix}", timeout=10)
    resp.raise_for_status()
    for line in resp.text.splitlines():
        h_suffix, count = line.split(":")
        if h_suffix == suffix:
            return int(count)
    return 0

if __name__ == "__main__":
    pwd = getpass.getpass("Введи пароль для проверки (ввод скрыт): ")
    hits = check_password_pwned(pwd)
    print(f"[!] Пароль светился в утечках {hits} раз!" if hits else "[+] Чисто! В утечках не найден.")</pre>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">Проект 3: Аудитор защитных HTTP-заголовков и Cookie (<code class="inline-code">headers_audit.py</code>)</div>
        <div class="code-wrap">
          <div class="code-header"><span>headers_audit.py</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block">import sys
import requests

HEADERS = [
    "Content-Security-Policy",
    "Strict-Transport-Security",
    "X-Content-Type-Options",
    "X-Frame-Options",
]

def audit(url: str):
    r = requests.get(url, timeout=8)
    print(f"[*] {url} (Статус: {r.status_code})")
    for h in HEADERS:
        print(f"  {'[+]' if h in r.headers else '[!] НЕТ'} {h}")
    for sc in r.raw.headers.getlist("Set-Cookie"):
        name = sc.split("=", 1)[0]
        missing = [f for f in ("Secure", "HttpOnly", "SameSite") if f.lower() not in sc.lower()]
        if missing:
            print(f"  [!] Cookie {name} без флагов: {', '.join(missing)}")

if __name__ == "__main__":
    audit(sys.argv[1] if len(sys.argv) > 1 else "https://example.com")</pre>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Проект 4: Детектор атак в логах веб-сервера (<code class="inline-code">log_analyzer.py</code>)</div>
        <div class="code-wrap">
          <div class="code-header"><span>log_analyzer.py (с двойным URL-декодированием!)</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block">import re
import sys
from collections import Counter
from urllib.parse import unquote_plus

RULES = {
    "Path Traversal": re.compile(r"\.\./"),
    "XSS Attempt":    re.compile(r"<script|onerror\s*=|javascript:", re.I),
    "SQL Injection":  re.compile(r"union\s+select|'\s*or\s+'?1'?\s*=\s*'?1", re.I),
    "Sensitive File": re.compile(r"/etc/passwd|\.env\b|\.git/", re.I),
}
IP_RE = re.compile(r"^(\d{1,3}(?:\.\d{1,3}){3})")

def analyze(log_path: str):
    alerts = Counter()
    with open(log_path, encoding="utf-8", errors="ignore") as f:
        for line in f:
            decoded = unquote_plus(unquote_plus(line))
            ip = IP_RE.match(line)
            for name, rx in RULES.items():
                if ip and rx.search(decoded):
                    alerts[(ip.group(1), name)] += 1
    for (ip, attack), count in alerts.most_common(15):
        print(f"[ALERT] IP {ip:<15} | {attack:<16} | Попыток: {count}")

if __name__ == "__main__":
    analyze(sys.argv[1] if len(sys.argv) > 1 else "access.log")</pre>
        </div>
      </div>
    </div>

    <h2 class="section-heading">📺 4. Все курсы, видео и книги по Python</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">✅ Выбери ОДИН главный курс и пройди до конца</div>
        <ul style="margin-left:18px;">
          <li><strong>Вариант А (Университетский золотой стандарт с автопроверкой задач):</strong> <a class="res-link" href="https://cs50.harvard.edu/python/" target="_blank">Harvard CS50P</a> + <a class="res-link" href="https://www.youtube.com/watch?v=nLRL_NcnK-4" target="_blank">Видео на YouTube (16 ч)</a>.</li>
          <li><strong>Вариант Б (Быстрый практический старт за 4 часа):</strong> <a class="res-link" href="https://www.youtube.com/watch?v=rfscVS0vtbw" target="_blank">freeCodeCamp — Python Full Course</a>.</li>
          <li><strong>Вариант В (Самый плавный темп для абсолютных новичков):</strong> <a class="res-link" href="https://www.youtube.com/watch?v=8DvywoWv6fI" target="_blank">Python for Everybody (Dr. Chuck)</a>.</li>
          <li>📖 <strong>Бесплатная книга №1:</strong> <a class="res-link" href="https://automatetheboringstuff.com" target="_blank">Automate the Boring Stuff with Python (Al Sweigart)</a> — Главы 1–18.</li>
          <li>🎮 <strong>Интерактивно в браузере:</strong> <a class="res-link" href="https://www.kaggle.com/learn/python" target="_blank">Kaggle Python</a> и <a class="res-link" href="https://www.kaggle.com/learn/pandas" target="_blank">Kaggle Pandas</a>.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title">➕ Дополнительно (ООП, Анализ данных и Python для хакеров)</div>
        <ul style="margin-left:18px;">
          <li>🎬 <a class="res-link" href="https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7" target="_blank">Corey Schafer — Python Tutorials</a> и <a class="res-link" href="https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeRtZ" target="_blank">Python OOP (Классы)</a>.</li>
          <li>🎬 Анализ данных для ML и логов: <a class="res-link" href="https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS" target="_blank">Pandas (Corey Schafer)</a> • <a class="res-link" href="https://www.youtube.com/playlist?list=PLQVvvaa0QuDfSfqQuee6K8opKtZsh7sA9" target="_blank">NumPy (Sentdex)</a> • <a class="res-link" href="https://www.youtube.com/watch?v=0P7QnIQDBJY" target="_blank">Matplotlib (Keith Galli)</a>.</li>
          <li>🎬 Python для хакеров: <a class="res-link" href="https://www.youtube.com/watch?v=l68CqMzAhPY" target="_blank">TCM Security — Python 101 for Hackers</a> • <a class="res-link" href="https://www.youtube.com/watch?v=PLJJY5UFtqY" target="_blank">John Hammond — Hacking Scripts</a>.</li>
          <li>📖 Книга: <strong>Black Hat Python (2nd Edition)</strong> + <a class="res-link" href="https://developers.google.com/edu/python" target="_blank">Google's Python Class</a>.</li>
          <li>🎮 TryHackMe: <a class="res-link" href="https://tryhackme.com/room/pythonbasics" target="_blank">Python Basics</a> и <a class="res-link" href="https://tryhackme.com/room/pythonforpentesters" target="_blank">Python for Pentesters</a>.</li>
        </ul>
      </div>
    </div>
  `
};
