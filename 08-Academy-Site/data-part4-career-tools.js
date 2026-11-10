window.ACADEMY_DATA = window.ACADEMY_DATA || {};

window.ACADEMY_DATA.phase67 = {
  id: "phase67",
  title: "🏆💼 Фазы 6–7: Портфолио, CTF, GRC (Unix Guy) и Карьера",
  badge: "Выход на работу • L6 Security Pro",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-emerald">🏆 5 Боевых Проектов на GitHub</span>
        <span class="badge badge-amber">🏛️ GRC + NIST CSF 2.0 + Qualys + Forage (Unix Guy)</span>
        <span class="badge badge-cyan">💰 CTF, Bug Bounty и Готовое Резюме</span>
      </div>
      <h1 class="hero-title">Фазы 6 и 7 — Портфолио, CTF, Bug Bounty, Система GRC (Unix Guy) и Выход на Оффер</h1>
      <p class="hero-desc">
        Диплом без практики мало кого впечатляет, а сильный GitHub из 5 проектов + понимание бизнес-рисков (GRC / NIST CSF) + бесплатный корпоративный сертификат Qualys и виртуальные стажировки Forage выделяют тебя среди 95% кандидатов без опыта!
      </p>
    </div>

    <h2 class="section-heading">🏛️ 1. Спецмодуль GRC, Управление Уязвимостями и Стратегия Unix Guy</h2>
    <div class="analogy-box">
      <div class="analogy-header">🏠 Аналогия из жизни: Что такое GRC (Governance, Risk, and Compliance)?</div>
      Представь управление дорожным движением и автопарком крупной компании:<br>
      • <strong>Governance (Управление / Политики)</strong> — это <strong>Правила дорожного движения компании</strong>: кто имеет право садиться за руль, с какой скоростью ездить и где хранить ключи от гаража (политика паролей, ролей IAM и использования ИИ).<br>
      • <strong>Risk Management (Управление рисками)</strong> — это <strong>расчёт страховки и подушек безопасности</strong>: «Если откажут тормоза на грузовике (уязвимость), мы потеряем миллион долларов. Значит, ставим двойные тормоза и проверяем их раз в неделю!».<br>
      • <strong>Compliance (Соответствие стандартам)</strong> — это <strong>ежегодный государственный техосмотр</strong> по официальному чек-листу (стандарты <strong>NIST CSF 2.0</strong>, <strong>ISO 27001</strong>, <strong>GDPR</strong>, <strong>PCI DSS</strong>, <strong>NIST AI RMF</strong>).
    </div>

    <!-- Custom SVG for NIST CSF 2.0 6 Functions -->
    <div class="card">
      <div class="card-title">🧭 6 Функций стандарта NIST Cybersecurity Framework (CSF 2.0)</div>
      <div class="diagram-card" style="background:#090e1a;">
        <svg viewBox="0 0 1020 130" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(15,15)">
            <rect width="150" height="95" rx="10" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
            <text x="75" y="30" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">1. GOVERN</text>
            <text x="75" y="52" fill="#e2e8f0" font-size="11" text-anchor="middle">Политики ИБ, роли,</text>
            <text x="75" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">ответственность</text>
          </g>
          <g transform="translate(182,15)">
            <rect width="150" height="95" rx="10" fill="#161f33" stroke="#3b82f6" stroke-width="2"/>
            <text x="75" y="30" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">2. IDENTIFY</text>
            <text x="75" y="52" fill="#e2e8f0" font-size="11" text-anchor="middle">Учёт активов (Assets)</text>
            <text x="75" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">и оценка рисков</text>
          </g>
          <g transform="translate(349,15)">
            <rect width="150" height="95" rx="10" fill="#0c291e" stroke="#10b981" stroke-width="2"/>
            <text x="75" y="30" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">3. PROTECT</text>
            <text x="75" y="52" fill="#e2e8f0" font-size="11" text-anchor="middle">IAM, MFA, DLP,</text>
            <text x="75" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">шифрование, тренинги</text>
          </g>
          <g transform="translate(516,15)">
            <rect width="150" height="95" rx="10" fill="#292112" stroke="#f59e0b" stroke-width="2"/>
            <text x="75" y="30" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">4. DETECT</text>
            <text x="75" y="52" fill="#e2e8f0" font-size="11" text-anchor="middle">SIEM, мониторинг</text>
            <text x="75" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">логов и аномалий</text>
          </g>
          <g transform="translate(683,15)">
            <rect width="150" height="95" rx="10" fill="#2a121f" stroke="#f43f5e" stroke-width="2"/>
            <text x="75" y="30" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="middle">5. RESPOND</text>
            <text x="75" y="52" fill="#e2e8f0" font-size="11" text-anchor="middle">Изоляция атаки,</text>
            <text x="75" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">Incident Response</text>
          </g>
          <g transform="translate(850,15)">
            <rect width="150" height="95" rx="10" fill="#0f292e" stroke="#06b6d4" stroke-width="2"/>
            <text x="75" y="30" fill="#22d3ee" font-size="13" font-weight="bold" text-anchor="middle">6. RECOVER</text>
            <text x="75" y="52" fill="#e2e8f0" font-size="11" text-anchor="middle">Бэкапы и возврат</text>
            <text x="75" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">бизнеса в строй</text>
          </g>
        </svg>
      </div>

      <div class="grid-2" style="margin-top:16px;">
        <div class="blue-box">
          <strong>✅ Бесплатный сертификат №1: Qualys Vulnerability Management Foundation</strong><br>
          Зарегистрируйся на <a class="res-link" href="https://www.qualys.com/training/" target="_blank">qualys.com/training</a> (100% бесплатно, без карты) и пройди курс <em>Vulnerability Management — Foundation</em> (3–4 часа). Ты получишь официальный PDF-сертификат вендора, чьим сканером пользуются тысячи корпораций мира!
        </div>
        <div class="blue-box">
          <strong>✅ Бесплатные виртуальные стажировки №2: Forage Job Simulations</strong><br>
          Зайди на <a class="res-link" href="https://www.theforage.com" target="_blank">theforage.com</a> (раздел Cybersecurity) и пройди 2 симуляции (по 3–4 часа каждая) от <strong>Mastercard, AIG, Telstra, PwC или Datacom</strong>. После завершения ты официально указываешь их в графе <em>Virtual Experience</em> своего резюме!
        </div>
      </div>
    </div>

    <h2 class="section-heading">📊 2. Готовый проект для резюме: Матрица оценки рисков (NIST CSF &amp; AI Risk Register)</h2>
    <div class="table-wrap">
      <table class="cyber-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Актив компании (Asset)</th>
            <th>Угроза / Уязвимость</th>
            <th>Функция NIST CSF / AI RMF</th>
            <th>Риск ДО</th>
            <th>Мера контроля (Security Control)</th>
            <th>Риск ПОСЛЕ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="inline-code">R-01</code></td>
            <td>Учётные записи сотрудников и админов</td>
            <td>Кража паролей через фишинг или утечки</td>
            <td><code class="inline-code">PR.AA (IAM)</code></td>
            <td><span class="badge badge-rose">20 (High)</span></td>
            <td>Обязательный MFA (2FA), принцип минимальных привилегий (RBAC), проверка паролей через HIBP.</td>
            <td><span class="badge badge-emerald">5 (Low)</span></td>
          </tr>
          <tr>
            <td><code class="inline-code">R-02</code></td>
            <td>Внешние веб-серверы и REST API</td>
            <td>Эксплуатация CVE, IDOR, SQLi, XSS</td>
            <td><code class="inline-code">ID.RA (Vuln Mgmt)</code></td>
            <td><span class="badge badge-rose">20 (High)</span></td>
            <td>Регулярное сканирование Qualys VM, аудит в Burp Suite, WAF и патч-менеджмент (SLA 14 дней).</td>
            <td><span class="badge badge-emerald">6 (Low)</span></td>
          </tr>
          <tr>
            <td><code class="inline-code">R-03</code></td>
            <td>Корпоративный ИИ-бот с базой RAG</td>
            <td>Indirect Prompt Injection и утечка секретных документов (PII)</td>
            <td><code class="inline-code">NIST AI RMF / LLM01, LLM02</code></td>
            <td><span class="badge badge-rose">25 (Critical)</span></td>
            <td>Проверка прав доступа (ACL) <strong>до</strong> поиска в RAG, DLP-фильтрация, Llama Guard и подтверждение человеком (HITL).</td>
            <td><span class="badge badge-emerald">6 (Low)</span></td>
          </tr>
          <tr>
            <td><code class="inline-code">R-04</code></td>
            <td>Веса ML-моделей из открытых хабов</td>
            <td>Выполнение кода (RCE) при загрузке <code class="inline-code">.pkl</code></td>
            <td><code class="inline-code">GV.SC (Supply Chain)</code></td>
            <td><span class="badge badge-amber">16 (High)</span></td>
            <td>Переход на безопасный формат <strong><code class="inline-code">safetensors</code></strong> и автоматическая проверка через <strong>ModelScan</strong> в CI/CD.</td>
            <td><span class="badge badge-emerald">2 (Low)</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="section-heading">🛠️ 3. Пять Боевых Проектов для Портфолио на GitHub + Bug Bounty</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">🚀 5 Проектов, которые нужно закрепить (Pin) на GitHub</div>
        <ol style="margin-left:18px; font-size:0.9rem;">
          <li><strong>LLM Security Scanner &amp; Hardened RAG Sandbox (★★):</strong> твой RAG-бот на Ollama с переключателем <em>Vulnerable / Protected</em> и автотестом через Garak.</li>
          <li><strong>Adversarial ML &amp; Backdoor Defense Lab (★★★):</strong> репозиторий со скриптами <code class="inline-code">fgsm_lab.py</code>, <code class="inline-code">backdoor_lab.py</code>, <code class="inline-code">pickle_demo.py</code> и графиками точности до/после защиты.</li>
          <li><strong>Python Security Automation Suite (★★):</strong> многопоточный сканер портов, HIBP k-anonymity чекер, аудитор HTTP-заголовков и анализатор логов с двойным URL-декодированием.</li>
          <li><strong>PortSwigger &amp; Gandalf CTF Writeups (★★):</strong> твои разборы лабораторных работ с обязательным пунктом <em>«Remediation: как исправить баг в коде»</em>.</li>
          <li><strong>Enterprise NIST CSF &amp; AI Risk Assessment Report (★★★):</strong> полный GRC-аудит (реестр активов, таблица рисков, политики IAM/DLP/AI).</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-title">💰 Программы Bug Bounty в сфере ИИ и Веба</div>
        <div class="table-wrap" style="margin:0;">
          <table class="cyber-table">
            <thead><tr><th>Платформа</th><th>Награды</th><th>Что именно ищут</th></tr></thead>
            <tbody>
              <tr><td><a class="res-link" href="https://huntr.com" target="_blank">Huntr (Protect AI)</a></td><td><code class="inline-code">$100–$5,000+</code> (+CVE)</td><td>Баги (SSRF, RCE, Path Traversal, Pickle) в открытых AI-репозиториях (LangChain, Ollama, Gradio)</td></tr>
              <tr><td><a class="res-link" href="https://0din.ai" target="_blank">0din (Mozilla)</a></td><td><code class="inline-code">$500–$15,000+</code></td><td>Системные обходы защит и эксфильтрация данных в LLM</td></tr>
              <tr><td><a class="res-link" href="https://bughunters.google.com" target="_blank">Google AI VRP</a></td><td><code class="inline-code">$500–$31,337+</code></td><td>Indirect Prompt Injection с действием в аккаунте жертвы, кража данных</td></tr>
              <tr><td><a class="res-link" href="https://hackerone.com/directory/programs" target="_blank">OpenAI / Anthropic (H1)</a></td><td><code class="inline-code">$200–$20,000+</code></td><td>Уязвимости API, сессий, плагинов и инфраструктуры</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <h2 class="section-heading">📄 4. Шаблон твоего Резюме (по системе Unix Guy + Core-37) и 5 Вопросов с Собеседований</h2>
    <div class="card">
      <div class="card-title">📋 Готовая структура резюме (Скопируй и заполни своими данными)</div>
      <div class="code-wrap">
        <div class="code-header"><span>Resume Template — Core-37 (Junior Cybersecurity & AI/AppSec Specialist)</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
        <pre class="code-block">[Имя и Фамилия] | Junior Cybersecurity & AI/AppSec Specialist
Email: your.email@example.com | Location: City / Remote | GitHub: github.com/Core-37/Security37

SUMMARY
Aspiring cybersecurity professional building practical skills across both technical security (Arch/Ubuntu Linux, Python, SQL, Web/API Pentesting, AI/LLM Security) and Governance, Risk, and Compliance (GRC, NIST CSF 2.0, Vulnerability Management).

TRAINING & CERTIFICATIONS
• Google Cybersecurity Curriculum & Hands-On Labs: Linux, Bash, MySQL (SQL), Python automation, Wireshark, SIEM.
• Cyber Security GRC & NIST CSF Mastery: Risk Management, Security Audit, Asset Management, IAM, DLP, Incident Response, Third-Party Risk Management.
• Qualys Vulnerability Management Foundation: Certified in asset discovery, CVSS prioritization, and patch lifecycle.
• PortSwigger Web Security Academy: Hands-on labs across OWASP Top 10 and Web LLM Attacks.

PRACTICAL PROJECTS
• Enterprise NIST CSF 2.0 & AI Security Risk Assessment: Conducted an end-to-end risk assessment for an enterprise RAG/LLM deployment; authored asset inventory, risk register, and IAM/DLP/Guardrail controls.
• Python Security Automation & Log Hunting Suite: Built a multi-threaded TCP port scanner, k-anonymity password leak checker, HTTP security header auditor, and double-URL-decoding web log analyzer.
• AI/ML Security Lab (Ollama RAG, FGSM & Supply Chain): Implemented a local RAG assistant, tested Direct/Indirect Prompt Injections with NVIDIA Garak, and built PyTorch FGSM adversarial training & Pickle RCE demos.

VIRTUAL EXPERIENCE (FORAGE)
• Cybersecurity Analyst Job Simulations (Mastercard / AIG / Telstra) — 2026:
  - Analyzed CISA vulnerability advisories, triaged phishing and firewall logs, and drafted remediation guidance.</pre>
      </div>
    </div>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-question"><span>🎤 Вопрос собеседования 1: «Почему обычный фильтр по запрещённым словам не спасёт от Prompt Injection?»</span><span>▼</span></div>
      <div class="quiz-answer">Потому что LLM понимает смысл на сотне языков, в Base64, по буквам через точку (Token Smuggling) и в ролевых сценариях, а главное — инструкции разработчика и внешние данные лежат в одном потоке токенов. Надёжная защита строится на архитектуре: минимальные права инструментов агента, проверка прав доступа к документам до RAG, классификаторы намерений (Llama Guard) и подтверждение человеком (Human-in-the-Loop).</div>
    </div>
    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-question"><span>🎤 Вопрос собеседования 2: «Чем Direct Prompt Injection отличается от Indirect, и какая опаснее для бизнеса?»</span><span>▼</span></div>
      <div class="quiz-answer">При Direct-инъекции сам пользователь пишет вредоносный промпт в своём окне чата. При Indirect-инъекции атакующий прячет инструкцию во внешнем источнике (в письме, PDF-резюме, на веб-странице или в базе RAG). Когда корпоративный бот сотрудника читает этот документ, промпт перехватывает управление и может украсть данные сотрудника или вызвать инструменты от его имени.</div>
    </div>
    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-question"><span>🎤 Вопрос собеседования 3: «Как классические веб-баги (XSS, SQLi, SSRF, IDOR) появляются внутри ИИ-приложений?»</span><span>▼</span></div>
      <div class="quiz-answer">По стандарту OWASP LLM05 (Improper Output Handling) и LLM06 (Excessive Agency): если ответ нейросети рендерится в браузере через <code>innerHTML</code> без очистки — срабатывает XSS; если агент генерирует SQL без параметризации — возникает SQLi; если плагин открывает ссылки без фильтрации внутренних IP — возникает SSRF; а если API чата не проверяет владельца <code>chat_id</code> — это классический IDOR.</div>
    </div>
  `
};

window.ACADEMY_DATA.analogies = {
  id: "analogies",
  title: "🏠💡 Банк Аналогий из Реальной Жизни (30+ карточек)",
  badge: "Понятно с первого раза",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-amber">🏠 Бытовые примеры без заумных слов</span>
        <span class="badge badge-cyan">🔍 Мгновенный фильтр по темам</span>
      </div>
      <h1 class="hero-title">Банк Аналогий: Секреты Кибербезопасности и ИИ на примерах из Повседневной Жизни</h1>
      <p class="hero-desc">
        Любой сложный технический термин — это просто обычное жизненное правило, переведённое на язык компьютеров. Используй фильтр ниже, чтобы быстро вспомнить суть любой темы перед практикой или собеседованием!
      </p>
    </div>

    <div style="margin-bottom:20px; display:flex; gap:8px; flex-wrap:wrap;">
      <button class="btn-action" onclick="filterAnalogies('all')">Все (30)</button>
      <button class="btn-action" onclick="filterAnalogies('linux')">🐧 Linux &amp; Arch</button>
      <button class="btn-action" onclick="filterAnalogies('net')">📡 Сети &amp; Протоколы</button>
      <button class="btn-action" onclick="filterAnalogies('web')">🕸️ Веб-Хакинг &amp; OWASP</button>
      <button class="btn-action" onclick="filterAnalogies('ai')">🤖 Нейросети &amp; AI Security</button>
      <button class="btn-action" onclick="filterAnalogies('grc')">🏛️ GRC &amp; Защита</button>
    </div>

    <div class="grid-2" id="analogyGrid">
      <div class="card analogy-card" data-cat="linux">
        <div class="card-title">🏹 1. Официальный репо (<code class="inline-code">pacman</code>) vs AUR (<code class="inline-code">yay</code>)</div>
        <p><strong>В жизни:</strong> Официальный супермаркет с госконтролем качества vs Книга народных рецептов на рынке, куда любой житель может вписать свой рецепт.</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Пакеты в <code class="inline-code">pacman</code> проверены мейнтейнерами Arch. А в AUR лежат скрипты сборки <code class="inline-code">PKGBUILD</code> от обычных пользователей — всегда читай рецепт глазами перед установкой!</p>
      </div>

      <div class="card analogy-card" data-cat="linux">
        <div class="card-title">💳 2. Бит <code class="inline-code">SUID</code> (<code class="inline-code">-rwsr-xr-x</code>)</div>
        <p><strong>В жизни:</strong> Директор компании дал курьеру свою личную безлимитную банковскую карту, чтобы тот купил пачку бумаги для офиса.</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Программа с SUID запускается с правами своего владельца (<code class="inline-code">root</code>). Если по ошибке повесить SUID на <code class="inline-code">vim</code>, <code class="inline-code">find</code> или <code class="inline-code">python</code>, обычный юзер откроет через них консоль суперпользователя!</p>
      </div>

      <div class="card analogy-card" data-cat="linux">
        <div class="card-title">🐳 3. Docker-контейнер vs Виртуальная машина</div>
        <p><strong>В жизни:</strong> Виртуальная машина — это отдельный гостевой дом со своим фундаментом и котельной. А Docker-контейнер — это лёгкая изолированная капсула-комната внутри твоего дома.</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Контейнер запускается за 1 секунду и использует общее ядро Linux, позволяя поднять уязвимый стенд Juice Shop и удалить его без мусора в ОС.</p>
      </div>

      <div class="card analogy-card" data-cat="linux">
        <div class="card-title">🚰 4. Потоки <code class="inline-code">stdout (1)</code>, <code class="inline-code">stderr (2)</code> и <code class="inline-code">2&gt;/dev/null</code></div>
        <p><strong>В жизни:</strong> Соковыжималка, у которой из одного носика течёт чистый сок (<code class="inline-code">stdout</code>), а из боковой трубки вылетает жмых и мусор (<code class="inline-code">stderr</code>).</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> При поиске по всему диску <code class="inline-code">find /</code> выдаёт сотни ошибок «Отказано в доступе». Направив трубку №2 в мусорное ведро (<code class="inline-code">2&gt;/dev/null</code>), мы видим на экране только чистый результат!</p>
      </div>

      <div class="card analogy-card" data-cat="net">
        <div class="card-title">🏢 5. IP-адрес vs Порт vs Протокол HTTP</div>
        <p><strong>В жизни:</strong> IP-адрес — это адрес бизнес-центра на улице. Порт (0–65535) — номер конкретного кабинета внутри здания. Протокол — язык, на котором говорят внутри кабинета.</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Кабинет <code class="inline-code">22</code> — админская SSH, <code class="inline-code">80/443</code> — приёмная сайта, <code class="inline-code">3306</code> — сейф БД MySQL, <code class="inline-code">11434</code> — кабинет локальной нейросети Ollama.</p>
      </div>

      <div class="card analogy-card" data-cat="net">
        <div class="card-title">📬 6. Протокол TCP vs Протокол UDP</div>
        <p><strong>В жизни:</strong> TCP — заказное письмо с уведомлением о вручении и описью каждого листа. UDP — перекидывание теннисных мячей через забор без остановок.</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Веб-страницы, пароли и код передаются по надёжному TCP. А видеозвонки, стримы и быстрые DNS-запросы летят по UDP.</p>
      </div>

      <div class="card analogy-card" data-cat="net">
        <div class="card-title">🕵️ 7. Nmap Stealth Scan (<code class="inline-code">nmap -sS</code>)</div>
        <p><strong>В жизни:</strong> Позвонить в домофон квартиры и, как только хозяин ответит «Кто там?», молча положить трубку и записать в блокнот: «В квартире №80 кто-то есть!».</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Отправляем <code class="inline-code">SYN</code>, получаем <code class="inline-code">SYN-ACK</code> (порт открыт!) и сразу шлём сброс <code class="inline-code">RST</code>, не завершая полное трёхстороннее рукопожатие.</p>
      </div>

      <div class="card analogy-card" data-cat="net">
        <div class="card-title">🪧 8. DNS и атака Subdomain Takeover</div>
        <p><strong>В жизни:</strong> Компания закрыла свой филиал в арендованном павильоне, но забыла снять официальную вывеску-указатель на главной дороге. Мошенник арендовал тот же павильон и принимает клиентов под вывеской компании!</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Забытая запись <code class="inline-code">CNAME</code> в DNS указывает на удалённый облачный сервис в Azure/AWS/GitHub Pages, который хакер регистрирует на своё имя.</p>
      </div>

      <div class="card analogy-card" data-cat="web">
        <div class="card-title">🎟️ 9. Аутентификация vs Сессия vs Авторизация</div>
        <p><strong>В жизни:</strong> 1) Показать паспорт на ресепшене отеля (Аутентификация). 2) Получить бумажный браслет на руку, чтобы не носить паспорт на пляж (Сессия / Cookie). 3) Попытаться открыть этим браслетом служебную дверь кухни и получить отказ (Авторизация).</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Ошибка №1 в вебе (<strong>IDOR</strong>) возникает, когда сервер проверяет браслет (ты вошёл), но не проверяет, от твоего ли номера ключ!</p>
      </div>

      <div class="card analogy-card" data-cat="web">
        <div class="card-title">🧱 10. Три столпа браузера: SOP, CORS и CSP</div>
        <p><strong>В жизни:</strong> <strong>SOP</strong> — глухие стены между номерами отеля (вкладками). <strong>CORS</strong> — официальное окошко выдачи между двумя дружественными офисами по списку пропусков. <strong>CSP</strong> — охранник внутри комнаты, запрещающий включать чужие электроприборы (скрипты).</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> SOP защищает вкладку банка от вкладки с фильмами; кривой CORS позволяет украсть ответы API; строгий CSP блокирует XSS.</p>
      </div>

      <div class="card analogy-card" data-cat="web">
        <div class="card-title">🪪 11. Токен JWT (<code class="inline-code">Header.Payload.Signature</code>)</div>
        <p><strong>В жизни:</strong> Прозрачный пластиковый бейдж сотрудника, на котором открытым текстом написана его должность, а внизу стоит гербовая сургучная печать директора.</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> JWT <strong>не зашифрован</strong> (текст в Base64 видит любой!). Поэтому туда нельзя класть секреты. А если печать слабая (<code class="inline-code">secret1</code>) или сервер принимает бейдж без печати (<code class="inline-code">alg: none</code>) — хакер вписывает себе роль <code class="inline-code">admin</code>!</p>
      </div>

      <div class="card analogy-card" data-cat="web">
        <div class="card-title">🥩 12. Кодирование vs Хэширование vs Шифрование</div>
        <p><strong>В жизни:</strong> Кодирование (Base64) — перевод текста на азбуку Морзе (читает любой). Хэширование (SHA-256, Argon2) — проворачивание мяса в фарш (обратно в корову не собрать!). Шифрование (AES, TLS) — запирание документа в сейф с ключом.</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Пароли в базе хранят только в виде медленных хэшей с солью (<code class="inline-code">Argon2 / bcrypt</code>), а передают по сети внутри зашифрованного канала TLS.</p>
      </div>

      <div class="card analogy-card" data-cat="ai">
        <div class="card-title">🎛️ 13. Веса нейросети (Weights), Loss и Градиент</div>
        <p><strong>В жизни:</strong> Настройка микшерного пульта с миллиардом крутилок при спуске с горы в тумане. Ты нащупываешь наклон под ногой (градиент) и делаешь шаг вниз (обучение). А при атаке <strong>FGSM</strong> хакер толкает картинку строго вверх в гору, чтобы модель максимально ошиблась!</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Изменение яркости пикселей всего на 5–10% в направлении градиента ошибки роняет точность незащищённой нейросети с 97.6% до 0.7%.</p>
      </div>

      <div class="card analogy-card" data-cat="ai">
        <div class="card-title">👨‍🍳 14. Prompt Injection vs Indirect Prompt Injection</div>
        <p><strong>В жизни:</strong> Direct — посетитель в зале пытается уговорить официанта отдать блюдо бесплатно. Indirect — конкурент подбросил в папку с бухгалтерскими накладными фальшивый приказ директора «Перевести выручку на этот счёт», и робот-бухгалтер при чтении накладных выполнил его!</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> В архитектуре трансформера инструкции и внешние данные из RAG/почты попадают в одно контекстное окно, поэтому нельзя давать агенту опасные инструменты без подтверждения человека (HITL).</p>
      </div>

      <div class="card analogy-card" data-cat="ai">
        <div class="card-title">📦 15. Опасный <code class="inline-code">.pkl</code> (Pickle) vs Безопасный <code class="inline-code">.safetensors</code></div>
        <p><strong>В жизни:</strong> <code class="inline-code">safetensors</code> — это коробка с обычными деревянными досками (числами весов). А <code class="inline-code">.pkl</code> — это коробка, из которой при открытии крышки выскакивает программируемый робот и выполняет любой приказ, написанный отправителем!</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Вызов <code class="inline-code">pickle.load()</code> выполняет произвольный код через <code class="inline-code">__reduce__</code>. Всегда используй <code class="inline-code">safetensors</code> и сканер <code class="inline-code">ModelScan</code>.</p>
      </div>

      <div class="card analogy-card" data-cat="grc">
        <div class="card-title">🏰 16. Эшелонированная защита (Defense-in-Depth)</div>
        <p><strong>В жизни:</strong> Средневековый замок: даже если враг переплыл ров, перед ним внешняя стена, затем решётка ворот, внутренняя цитадель и личная стража короля.</p>
        <p style="margin-top:6px; font-size:0.88rem; color:var(--text-secondary);"><strong>В компьютере:</strong> Мы никогда не надеемся на один фильтр промптов: мы ставим проверку прав до RAG + Llama Guard + минимальные права плагинов + песочницу Docker + экранирование вывода.</p>
      </div>
    </div>
  `
};

window.ACADEMY_DATA.commands = {
  id: "commands",
  title: "🔄🏹 Переводчик Команд (Arch ↔ Ubuntu + Хакинг)",
  badge: "Живой поиск + Копирование",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-arch">🏹 Arch Linux (pacman / yay / systemctl)</span>
        <span class="badge badge-ubuntu">🐧 Ubuntu / Debian / Kali (apt)</span>
        <span class="badge badge-cyan">⚡ Сети, Разведка и AI Security</span>
      </div>
      <h1 class="hero-title">Интерактивный Переводчик и Справочник Команд Безопасника</h1>
      <p class="hero-desc">
        Введи любое слово в строку быстрого фильтра ниже (например: <code class="inline-code">пакет</code>, <code class="inline-code">порт</code>, <code class="inline-code">лог</code>, <code class="inline-code">suid</code>, <code class="inline-code">ffuf</code>, <code class="inline-code">garak</code>, <code class="inline-code">jwt</code>), чтобы мгновенно найти нужную команду для своего Arch Linux или сервера Ubuntu!
      </p>
    </div>

    <div class="card">
      <input type="text" id="cmdFilterInput" class="search-input" style="max-width:100%; margin-bottom:16px;" placeholder="🔎 Быстрый фильтр по командам (например: pacman, nmap, suid, логи, ffuf, ollama, hashcat)..." oninput="filterCommandTable(this.value)">

      <div class="table-wrap" style="margin:0;">
        <table class="cyber-table" id="cmdMasterTable">
          <thead>
            <tr>
              <th>Категория</th>
              <th>Что нужно сделать</th>
              <th>🏹 В твоём Arch Linux</th>
              <th>🐧 В Ubuntu / Debian / Kali</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Пакеты ОС</td><td>Полностью обновить систему</td><td><code class="inline-code">sudo pacman -Syu</code></td><td><code class="inline-code">sudo apt update &amp;&amp; sudo apt upgrade -y</code></td></tr>
            <tr><td>Пакеты ОС</td><td>Установить пакет</td><td><code class="inline-code">sudo pacman -S nmap</code></td><td><code class="inline-code">sudo apt install nmap</code></td></tr>
            <tr><td>Пакеты ОС</td><td>Установить пакет из AUR (Arch)</td><td><code class="inline-code">yay -S burpsuite</code></td><td>Скачать <code class="inline-code">.deb</code> или скрипт с сайта</td></tr>
            <tr><td>Пакеты ОС</td><td>Найти пакет в репозитории</td><td><code class="inline-code">pacman -Ss wireshark</code></td><td><code class="inline-code">apt search wireshark</code></td></tr>
            <tr><td>Пакеты ОС</td><td>Удалить пакет со всеми настройками и лишними зависимостями</td><td><code class="inline-code">sudo pacman -Rns pkg</code></td><td><code class="inline-code">sudo apt purge --autoremove pkg</code></td></tr>
            <tr><td>Пакеты ОС</td><td>Узнать, какому пакету принадлежит файл в системе</td><td><code class="inline-code">pacman -Qo /usr/bin/ss</code></td><td><code class="inline-code">dpkg -S /usr/bin/ss</code></td></tr>
            <tr><td>Службы и Логи</td><td>Проверить статус и запустить службу (например Docker или SSH)</td><td><code class="inline-code">sudo systemctl enable --now docker</code></td><td><code class="inline-code">sudo systemctl enable --now docker</code></td></tr>
            <tr><td>Службы и Логи</td><td>Посмотреть логи неудачных входов по SSH</td><td><code class="inline-code">journalctl -u sshd | grep "Failed"</code></td><td><code class="inline-code">grep "Failed" /var/log/auth.log</code></td></tr>
            <tr><td>Поиск и PrivEsc</td><td>Найти все файлы с битом SUID (повышение привилегий до root)</td><td colspan="2"><code class="inline-code">find / -perm -4000 -type f 2&gt;/dev/null</code></td></tr>
            <tr><td>Поиск и PrivEsc</td><td>Рекурсивно найти слово password или api_key во всех файлах папки</td><td colspan="2"><code class="inline-code">grep -rniE "password|api_key|secret" /var/www/ 2&gt;/dev/null</code></td></tr>
            <tr><td>Сеть и Порты</td><td>Посмотреть все открытые порты и слушающие программы на своём ПК</td><td colspan="2"><code class="inline-code">sudo ss -tulnp</code></td></tr>
            <tr><td>Сеть и Порты</td><td>Быстрое скрытное SYN-сканирование всех 65535 портов и версий</td><td colspan="2"><code class="inline-code">sudo nmap -sS -sV -p- -T4 127.0.0.1</code></td></tr>
            <tr><td>Веб-Разведка</td><td>Фаззинг скрытых папок и файлов на сайте через ffuf</td><td colspan="2"><code class="inline-code">ffuf -u https://target.com/FUZZ -w common.txt -mc 200,301,302,403 -fc 404</code></td></tr>
            <tr><td>Веб-Разведка</td><td>Сканирование на известные CVE и утечки конфигов через nuclei</td><td colspan="2"><code class="inline-code">nuclei -u https://target.com -severity critical,high</code></td></tr>
            <tr><td>Крипто и JWT</td><td>Взлом слабого секретного ключа JWT-токена по словарю rockyou</td><td colspan="2"><code class="inline-code">hashcat -a 0 -m 16500 jwt.txt rockyou.txt</code></td></tr>
            <tr><td>AI Security</td><td>Установить и запустить локальную LLM в Ollama</td><td><code class="inline-code">sudo pacman -S ollama &amp;&amp; ollama run llama3.2</code></td><td><code class="inline-code">curl -fsSL https://ollama.com/install.sh | sh &amp;&amp; ollama run llama3.2</code></td></tr>
            <tr><td>AI Security</td><td>Просканировать локальную модель в Ollama сканером уязвимостей Garak</td><td colspan="2"><code class="inline-code">python -m garak --target_type ollama --target_name llama3.2 --probes promptinject,encoding</code></td></tr>
            <tr><td>AI Security</td><td>Проверить скачанный файл весов модели на закладки и RCE</td><td colspan="2"><code class="inline-code">modelscan -p ./model.pkl</code></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
};

window.ACADEMY_DATA.gallery_checklist = {
  id: "gallery_checklist",
  title: "🖼️✅ Галерея Схем, Глоссарий & Мастер Чек-лист",
  badge: "Прогресс сохраняется автоматически",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-emerald">✅ Интерактивный Трекер Прогресса (LocalStorage)</span>
        <span class="badge badge-purple">🖼️ Вся визуальная база твоих конспектов</span>
        <span class="badge badge-cyan">📖 Русско-Английский Глоссарий</span>
      </div>
      <h1 class="hero-title">Галерея Визуальных Схем, Двуязычный Глоссарий и Главный Чек-лист Курса</h1>
      <p class="hero-desc">
        Все галочки, которые ты отмечаешь на сайте, автоматически сохраняются в памяти твоего браузера и повышают твой уровень в левой панели. Ты также можешь скачать резервную копию своего прогресса в JSON!
      </p>
    </div>

    <div class="card">
      <div class="card-title" style="justify-content:space-between; flex-wrap:wrap;">
        <span>🎯 Мастер Чек-лист Прогресса (Отмечай выполненные шаги!)</span>
        <div style="display:flex; gap:8px;">
          <button class="btn-action" onclick="exportProgress()">💾 Скачать бэкап прогресса</button>
          <button class="btn-action" onclick="resetProgress()">🔄 Сбросить галочки</button>
        </div>
      </div>

      <h4 style="margin:14px 0 6px; color:var(--accent-cyan);">🛠️ Фаза 0 и Фаза 1 — Рабочая среда, Linux и Arch Mastery</h4>
      <div class="check-row" data-check-id="m-1"><input type="checkbox"><span>Настроен рабочий Linux (Arch-based дистрибутив с Timeshift или Ubuntu WSL2/VM), работают Docker, Git и Burp Suite.</span></div>
      <div class="check-row" data-check-id="m-2"><input type="checkbox"><span>Посмотрены и разобраны оба базовых видео «Основы Веб-Хакинга (Часть 1 и Часть 2)».</span></div>
      <div class="check-row" data-check-id="m-3"><input type="checkbox"><span>Пройдены уровни <strong>OverTheWire Bandit 0–20</strong> и записаны команды в Obsidian.</span></div>
      <div class="check-row" data-check-id="m-4"><input type="checkbox"><span>Пройдены комнаты <strong>TryHackMe Linux Fundamentals (Part 1, 2, 3)</strong>.</span></div>
      <div class="check-row" data-check-id="m-5"><input type="checkbox"><span>Написаны и выложены на GitHub 3 собственных Bash-скрипта (<code class="inline-code">recon.sh</code>, <code class="inline-code">net_sweep.sh</code>, <code class="inline-code">log_watch.sh</code>).</span></div>

      <h4 style="margin:18px 0 6px; color:var(--accent-blue);">🐍 Фаза 2 — Python и База Языков Кибербеза</h4>
      <div class="check-row" data-check-id="m-6"><input type="checkbox"><span>Пройден основной курс по Python (Harvard CS50P или freeCodeCamp) + курсы Kaggle Python и Kaggle Pandas.</span></div>
      <div class="check-row" data-check-id="m-7"><input type="checkbox"><span>Освоена работа с виртуальными окружениями <code class="inline-code">venv</code> и защитой секретов через <code class="inline-code">.gitignore</code>.</span></div>
      <div class="check-row" data-check-id="m-8"><input type="checkbox"><span>Написаны и загружены на GitHub 4 проекта на Python (<code class="inline-code">port_scanner.py</code>, <code class="inline-code">pwned_check.py</code>, <code class="inline-code">headers_audit.py</code>, <code class="inline-code">log_analyzer.py</code>).</span></div>

      <h4 style="margin:18px 0 6px; color:var(--accent-amber);">🌐 Фаза 3 — Сети, Веб-Хакинг, Burp Suite и OWASP Top 10</h4>
      <div class="check-row" data-check-id="m-9"><input type="checkbox"><span>Изучены ключевые модули Professor Messer Network+ и Security+, проверен TCP Handshake в Wireshark.</span></div>
      <div class="check-row" data-check-id="m-10"><input type="checkbox"><span>Изучены все 10 глав Энциклопедии Веб-Хакинга (HTTP, SOP/CORS/CSP, JWT, Sources &amp; Sinks, Recon Flow).</span></div>
      <div class="check-row" data-check-id="m-11"><input type="checkbox"><span>Решено минимум <strong>20 лабораторных работ на PortSwigger Academy</strong> (IDOR, SQLi, XSS, CSRF, SSRF, JWT).</span></div>
      <div class="check-row" data-check-id="m-12"><input type="checkbox"><span>Запущен локальный стенд <strong>OWASP Juice Shop / DVWA в Docker</strong> и решено 10+ задач через Burp Suite.</span></div>

      <h4 style="margin:18px 0 6px; color:var(--accent-purple);">🤖 Фаза 4 и 5 — ML, LLM, RAG и AI/ML Security Core</h4>
      <div class="check-row" data-check-id="m-13"><input type="checkbox"><span>Просмотрены плейлисты 3Blue1Brown (Линейная алгебра, Нейросети, Attention) и лекции Андрея Карпаты.</span></div>
      <div class="check-row" data-check-id="m-14"><input type="checkbox"><span>Пройдены курсы Kaggle Intro to ML / Deep Learning и главы 1–4 курса Hugging Face LLM.</span></div>
      <div class="check-row" data-check-id="m-15"><input type="checkbox"><span>Развёрнута локальная модель в <strong>Ollama</strong> и собран собственный мини-RAG на Python (<code class="inline-code">mini_rag.py</code>).</span></div>
      <div class="check-row" data-check-id="m-16"><input type="checkbox"><span>Пройдены все 8 уровней <strong>Gandalf</strong> и все лабораторные раздела <strong>PortSwigger Web LLM Attacks</strong>.</span></div>
      <div class="check-row" data-check-id="m-17"><input type="checkbox"><span>Выполнены 3 лабораторные работы в папке <code class="inline-code">02-Labs/02-AI-Security-Labs/</code> (<code class="inline-code">fgsm_lab.py</code>, <code class="inline-code">backdoor_lab.py</code>, <code class="inline-code">pickle_demo.py</code>).</span></div>
      <div class="check-row" data-check-id="m-18"><input type="checkbox"><span>Проведено автоматическое сканирование локальной модели через <strong>NVIDIA Garak</strong>.</span></div>

      <h4 style="margin:18px 0 6px; color:var(--accent-emerald);">🏆 Фаза 6 и 7 — Портфолио, GRC (Unix Guy), Qualys и Выход на Работу</h4>
      <div class="check-row" data-check-id="m-19"><input type="checkbox"><span>Получен бесплатный официальный сертификат <strong>Qualys Vulnerability Management Foundation</strong>.</span></div>
      <div class="check-row" data-check-id="m-20"><input type="checkbox"><span>Пройдены 2 бесплатные виртуальные стажировки на платформе <strong>Forage</strong> (Mastercard / AIG / Telstra).</span></div>
      <div class="check-row" data-check-id="m-21"><input type="checkbox"><span>Оформлен проект оценки рисков <strong>NIST CSF 2.0 &amp; AI Risk Assessment</strong> и все 5 репозиториев портфолио на GitHub.</span></div>
      <div class="check-row" data-check-id="m-22"><input type="checkbox"><span>Составлено резюме по шаблону Core-37 / Unix Guy и оформлен профиль LinkedIn.</span></div>
    </div>

    <h2 class="section-heading">🖼️ 2. Визуальная Галерея Схем и Конспектов Проекта (Нажми на любую картинку для увеличения)</h2>
    <div class="grid-3">
      <div class="diagram-card">
        <img src="../05-Assets/network_path.svg" alt="Путь пакета по сети" onclick="openLightbox(this.src)">
        <div class="diagram-caption">1. Полный путь пакета по сети (Инкапсуляция TCP/IP)</div>
      </div>
      <div class="diagram-card">
        <img src="../05-Assets/browser_security_3_pillars.svg" alt="Три столпа безопасности браузера" onclick="openLightbox(this.src)">
        <div class="diagram-caption">2. Три столпа безопасности браузера (SOP, CORS, CSP)</div>
      </div>
      <div class="diagram-card">
        <img src="../05-Assets/burp_suite_architecture.svg" alt="Архитектура Burp Suite" onclick="openLightbox(this.src)">
        <div class="diagram-caption">3. Архитектура перехвата в Burp Suite</div>
      </div>
      <div class="diagram-card">
        <img src="../05-Assets/web_vulnerabilities_map.svg" alt="Карта веб-уязвимостей" onclick="openLightbox(this.src)">
        <div class="diagram-caption">4. Карта главных веб-уязвимостей (XSS, CSRF, SSRF, IDOR)</div>
      </div>
      <div class="diagram-card">
        <img src="../05-Assets/jwt_structure_and_attacks.svg" alt="Анатомия и взлом JWT" onclick="openLightbox(this.src)">
        <div class="diagram-caption">5. Структура JWT-токена и 5 векторов атаки</div>
      </div>
      <div class="diagram-card">
        <img src="../05-Assets/recon_automation_pipeline.svg" alt="Конвейер авто-разведки" onclick="openLightbox(this.src)">
        <div class="diagram-caption">6. Конвейер автоматизированной разведки (Recon Flow)</div>
      </div>
      <div class="diagram-card">
        <img src="../Images pasted/Pasted image 20261108224425.png" alt="Конспект 1" onclick="openLightbox(this.src)">
        <div class="diagram-caption">7. Визуальный конспект из базы знаний #1</div>
      </div>
      <div class="diagram-card">
        <img src="../Images pasted/Pasted image 20261108230426.png" alt="Конспект 2" onclick="openLightbox(this.src)">
        <div class="diagram-caption">8. Визуальный конспект из базы знаний #2</div>
      </div>
      <div class="diagram-card">
        <img src="../Images pasted/Pasted image 20261108231451.png" alt="Конспект 3" onclick="openLightbox(this.src)">
        <div class="diagram-caption">9. Визуальный конспект из базы знаний #3</div>
      </div>
    </div>

    <h2 class="section-heading">📅 3. Идеальное Расписание на Неделю (2 часа в день без выгорания)</h2>
    <div class="table-wrap">
      <table class="cyber-table">
        <thead><tr><th>День недели</th><th>Первые 45 минут (Теория и Аналогии)</th><th>Вторые 75 минут (Руками в Терминале / Лабе)</th></tr></thead>
        <tbody>
          <tr><td><strong>Понедельник</strong></td><td>Чтение объяснения фазы на сайте + видеоурок</td><td>Повторение всех команд урока в своём терминале Arch Linux + заметка в Obsidian</td></tr>
          <tr><td><strong>Вторник</strong></td><td>Разбор карточек аналогий и кода примеров</td><td>Практика на тренажёре (Bandit / PortSwigger / Kaggle / Ollama)</td></tr>
          <tr><td><strong>Среда</strong></td><td>Следующий видеоразбор / глава книги</td><td>Написание своего скрипта в VS Code + проверка ошибок</td></tr>
          <tr><td><strong>Четверг</strong></td><td>Изучение нового инструмента (Nmap / Burp / ffuf / Garak)</td><td>Тестирование инструмента на локальном Docker-стенде + коммит на GitHub</td></tr>
          <tr><td><strong>Пятница</strong></td><td>Чтение 1 зарубежного Writeup (Embrace The Red / PortSwigger)</td><td>Решение 1–2 CTF-задач (Gandalf / PortSwigger / picoCTF)</td></tr>
          <tr><td><strong>Суббота</strong></td><td colspan="2"><strong>Большая практика (2–3 часа):</strong> сборка проекта в портфолио или прохождение модуля Qualys / Forage</td></tr>
          <tr><td><strong>Воскресенье</strong></td><td colspan="2">Отдых + 15 минут самопроверки по вопросам «Проверь себя» без подглядывания в ответы</td></tr>
        </tbody>
      </table>
    </div>
  `
};
