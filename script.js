/* ===== TechNova — O Futuro é Agora ===== */

// ---------- Artigos ----------
const posts = [
  {
    id: "ia-no-dia-a-dia",
    title: "Inteligência Artificial no dia a dia: como os assistentes estão mudando a forma como trabalhamos",
    date: "2026-10-08",
    labels: ["Inteligência Artificial", "Produtividade", "Futuro do Trabalho"],
    art: "ai",
    excerpt: "Dos e-mails às linhas de código, a IA generativa saiu dos laboratórios e entrou na rotina. Entenda o que muda, os riscos e como tirar proveito sem perder o senso crítico.",
    content: `
      <p>Há poucos anos, falar em inteligência artificial evocava imagens de ficção científica: robôs humanoides, computadores que tomam decisões sozinhos e um futuro distante. Hoje, a IA está em lugares bem mais discretos — no corretor do celular, nas recomendações do streaming, no filtro de spam e, cada vez mais, em assistentes capazes de escrever, resumir, traduzir e programar.</p>
      <h2>O que é IA generativa, afinal?</h2>
      <p>A IA generativa é uma categoria de modelos treinados com enormes volumes de dados para <strong>produzir conteúdo novo</strong>: textos, imagens, áudio, vídeo e código. Os chamados modelos de linguagem (LLMs) aprendem padrões estatísticos da linguagem humana e, a partir de uma instrução — o famoso <em>prompt</em> —, geram respostas coerentes e contextualizadas.</p>
      <p>A grande virada não foi apenas técnica, mas de interface: em vez de menus e comandos, conversamos com o computador em linguagem natural. Isso derrubou a barreira de entrada e colocou ferramentas poderosas nas mãos de qualquer pessoa.</p>
      <h2>Onde a IA já faz diferença</h2>
      <ul>
        <li><strong>Desenvolvimento de software:</strong> assistentes sugerem trechos de código, explicam erros, escrevem testes e ajudam a entender bases de código desconhecidas.</li>
        <li><strong>Atendimento ao cliente:</strong> agentes virtuais resolvem dúvidas simples 24 horas por dia e encaminham casos complexos para humanos.</li>
        <li><strong>Educação:</strong> tutores personalizados adaptam explicações ao ritmo de cada aluno.</li>
        <li><strong>Saúde:</strong> apoio na triagem, na análise de exames de imagem e na redução de tarefas burocráticas dos profissionais.</li>
        <li><strong>Escritório:</strong> resumo de reuniões, rascunho de e-mails, análise de planilhas e criação de apresentações.</li>
      </ul>
      <h2>De ferramentas a agentes</h2>
      <p>A tendência mais recente é a dos <strong>agentes de IA</strong>: sistemas que não apenas respondem perguntas, mas executam tarefas de várias etapas — pesquisam na web, preenchem formulários, escrevem e testam código, organizam agendas. Em vez de pedir “me ajude a escrever um e-mail”, passamos a pedir “organize a viagem da equipe para o evento do mês que vem”.</p>
      <blockquote>A pergunta deixou de ser “a IA consegue fazer isso?” e passou a ser “qual parte disso eu ainda quero fazer pessoalmente?”.</blockquote>
      <h2>Os cuidados necessários</h2>
      <p>Nem tudo são flores. Modelos de linguagem podem <strong>“alucinar”</strong>, ou seja, inventar fatos com total confiança. Também podem reproduzir vieses presentes nos dados de treinamento. Por isso, algumas boas práticas são essenciais:</p>
      <ul>
        <li>Verifique informações importantes em fontes confiáveis.</li>
        <li>Não compartilhe dados sensíveis, senhas ou informações confidenciais da empresa sem saber como serão tratados.</li>
        <li>Use a IA como copiloto, não como piloto automático: a responsabilidade final continua sendo sua.</li>
        <li>Fique atento à legislação de proteção de dados, como a LGPD no Brasil.</li>
      </ul>
      <h2>Conclusão</h2>
      <p>A inteligência artificial não vai substituir quem sabe usá-la — mas quem sabe usá-la provavelmente terá vantagem sobre quem não sabe. Aprender a formular bons pedidos, avaliar respostas criticamente e integrar essas ferramentas ao fluxo de trabalho é, hoje, uma habilidade tão básica quanto saber usar um editor de texto foi nos anos 1990. O futuro, como diz o nome deste blog, já chegou.</p>
    `
  },
  {
    id: "computacao-quantica",
    title: "Computação quântica explicada: o que são qubits e por que eles importam",
    date: "2026-09-21",
    labels: ["Computação Quântica", "Ciência", "Segurança"],
    art: "quantum",
    excerpt: "Superposição, emaranhamento e qubits parecem conceitos de outro mundo. Neste guia descomplicado, mostramos como funciona um computador quântico e o que ele pode mudar.",
    content: `
      <p>Os computadores que usamos hoje — do celular ao supercomputador — funcionam com <strong>bits</strong>, unidades de informação que valem 0 ou 1. Toda foto, música ou mensagem é, no fundo, uma longa sequência desses dois valores. A computação quântica propõe algo radicalmente diferente: usar as leis da mecânica quântica para processar informação de uma nova maneira.</p>
      <h2>O qubit: mais que 0 ou 1</h2>
      <p>A unidade básica de um computador quântico é o <strong>qubit</strong> (bit quântico). Graças a um fenômeno chamado <strong>superposição</strong>, um qubit pode existir em uma combinação de 0 e 1 ao mesmo tempo, até ser medido. Uma analogia comum é a de uma moeda girando no ar: enquanto gira, ela não é nem cara nem coroa — é uma mistura das duas possibilidades.</p>
      <p>Quando combinamos vários qubits, o número de estados que o sistema consegue representar cresce exponencialmente. Dois qubits representam quatro estados simultâneos; dez qubits, 1.024; trezentos qubits, mais estados do que há átomos no universo observável.</p>
      <h2>Emaranhamento: a “ação fantasmagórica”</h2>
      <p>Outro ingrediente fundamental é o <strong>emaranhamento</strong>. Quando dois qubits estão emaranhados, o estado de um está correlacionado ao do outro, não importa a distância entre eles. Einstein chamou isso de “ação fantasmagórica à distância”. Na prática, o emaranhamento permite que algoritmos quânticos explorem correlações que não têm equivalente na computação clássica.</p>
      <blockquote>Um computador quântico não é simplesmente um computador mais rápido. É um computador que pensa de outra forma — e por isso é excelente em alguns problemas e inútil em outros.</blockquote>
      <h2>Para que serve?</h2>
      <ul>
        <li><strong>Química e novos materiais:</strong> simular moléculas com precisão para criar remédios, baterias e fertilizantes mais eficientes.</li>
        <li><strong>Otimização:</strong> rotas logísticas, carteiras de investimento e cadeias de suprimento com milhares de variáveis.</li>
        <li><strong>Criptografia:</strong> algoritmos como o de Shor poderiam, em teoria, quebrar sistemas de criptografia usados hoje na internet.</li>
        <li><strong>Inteligência artificial:</strong> pesquisas exploram se algoritmos quânticos podem acelerar certas etapas do aprendizado de máquina.</li>
      </ul>
      <h2>Os desafios</h2>
      <p>Qubits são extremamente frágeis. Qualquer interferência — calor, vibração, radiação — pode destruir a superposição em um processo chamado <strong>decoerência</strong>. Por isso, muitos computadores quânticos operam em temperaturas próximas do zero absoluto, dentro de grandes refrigeradores de diluição.</p>
      <p>O grande objetivo da área é alcançar a <strong>correção de erros quânticos</strong> em larga escala, combinando muitos qubits físicos para formar qubits “lógicos” estáveis. Esse é o passo que separa os protótipos atuais de máquinas realmente úteis para problemas do mundo real.</p>
      <h2>E a segurança da internet?</h2>
      <p>Como computadores quânticos suficientemente poderosos poderiam ameaçar a criptografia atual, governos e empresas já trabalham na <strong>criptografia pós-quântica</strong>: novos algoritmos resistentes a ataques quânticos. A migração é lenta e complexa, e por isso começou bem antes de a ameaça se tornar real.</p>
      <h2>Conclusão</h2>
      <p>A computação quântica ainda está em sua fase inicial, comparável aos computadores de válvula dos anos 1940. Mas o ritmo de avanço é impressionante. Entender seus princípios hoje é se preparar para uma tecnologia que pode transformar a ciência, a indústria e a segurança digital nas próximas décadas.</p>
    `
  },
  {
    id: "6g-e-conectividade",
    title: "Do 5G ao 6G: a próxima revolução da conectividade e da Internet das Coisas",
    date: "2026-08-30",
    labels: ["Conectividade", "Internet das Coisas", "Futuro"],
    art: "network",
    excerpt: "Cidades inteligentes, carros conectados e hologramas em tempo real. Veja o que o 6G promete, quando deve chegar e como ele se conecta à Internet das Coisas.",
    content: `
      <p>Cada geração de rede móvel mudou a forma como usamos a tecnologia. O 2G trouxe as mensagens de texto; o 3G, a internet no celular; o 4G popularizou o streaming e os aplicativos de transporte; o 5G abriu caminho para conexões ultrarrápidas e de baixíssima latência. Agora, pesquisadores e empresas do mundo todo já trabalham na próxima etapa: o <strong>6G</strong>.</p>
      <h2>O que o 5G já entregou</h2>
      <p>O 5G não é apenas “internet mais rápida”. Ele foi projetado em torno de três pilares: <strong>banda larga móvel aprimorada</strong>, <strong>comunicação ultraconfiável de baixa latência</strong> e <strong>conexão massiva de dispositivos</strong>. Isso permite aplicações como fábricas automatizadas, cirurgias assistidas remotamente e milhares de sensores conectados em uma única área.</p>
      <h2>O que esperar do 6G</h2>
      <p>A expectativa da indústria é que o 6G comece a ser padronizado nos próximos anos e chegue comercialmente por volta de 2030. Entre as promessas estão:</p>
      <ul>
        <li><strong>Velocidades muito superiores</strong> às do 5G, usando frequências mais altas, incluindo a faixa de terahertz.</li>
        <li><strong>Latência próxima de zero</strong>, essencial para veículos autônomos e realidade estendida.</li>
        <li><strong>IA nativa na rede:</strong> a própria infraestrutura usará inteligência artificial para se otimizar em tempo real.</li>
        <li><strong>Integração com satélites</strong>, levando conectividade a regiões remotas, como áreas rurais e a Amazônia.</li>
        <li><strong>Sensoriamento:</strong> as ondas de rádio poderão detectar movimento, posição e até gestos, transformando a rede em um grande sensor.</li>
      </ul>
      <blockquote>Se o 5G conectou as coisas, o 6G promete conectar o mundo físico ao digital de forma praticamente instantânea.</blockquote>
      <h2>Internet das Coisas: tudo conectado</h2>
      <p>A <strong>Internet das Coisas (IoT)</strong> é a rede de objetos do dia a dia equipados com sensores e conexão: lâmpadas, geladeiras, relógios, medidores de energia, câmeras e máquinas industriais. Com redes mais rápidas e eficientes, a IoT ganha escala e passa a sustentar conceitos como:</p>
      <ul>
        <li><strong>Cidades inteligentes:</strong> semáforos que se ajustam ao trânsito, iluminação pública eficiente e coleta de lixo otimizada.</li>
        <li><strong>Agro 4.0:</strong> sensores no solo, drones e máquinas autônomas que aumentam a produtividade no campo — algo especialmente relevante para o Brasil.</li>
        <li><strong>Saúde conectada:</strong> monitoramento contínuo de pacientes a partir de dispositivos vestíveis.</li>
        <li><strong>Casas inteligentes:</strong> automação de energia, segurança e conforto.</li>
      </ul>
      <h2>Desafios pelo caminho</h2>
      <p>Mais dispositivos conectados significam também mais portas para ataques cibernéticos. A <strong>segurança</strong> e a <strong>privacidade</strong> precisam ser pensadas desde o projeto. Além disso, frequências mais altas têm alcance menor, o que exige muito mais antenas e investimento em infraestrutura. Há ainda o desafio da <strong>inclusão digital</strong>: de nada adianta uma rede ultrarrápida se boa parte da população continuar sem acesso.</p>
      <h2>Conclusão</h2>
      <p>O 6G ainda está sendo desenhado, mas suas bases são construídas agora. Assim como poucos imaginavam, nos tempos do 3G, que pediríamos comida e carros pelo celular, é provável que as aplicações mais transformadoras do 6G ainda nem tenham sido inventadas. A única certeza é que a conectividade continuará sendo a espinha dorsal do futuro digital.</p>
    `
  }
];

// ---------- Ilustrações SVG das capas ----------
function coverArt(type) {
  const arts = {
    ai: `
      <svg class="art" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs><linearGradient id="gAi" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#311b92"/><stop offset="1" stop-color="#e91e63"/></linearGradient></defs>
        <rect width="800" height="320" fill="url(#gAi)"/>
        <g stroke="#fff" stroke-opacity=".35" stroke-width="1.5">
          ${[[120,80,260,160],[260,160,400,90],[400,90,540,170],[540,170,680,100],[260,160,400,240],[400,240,540,170],[120,240,260,160],[540,170,680,250],[400,90,400,240]].map(l=>`<line x1="${l[0]}" y1="${l[1]}" x2="${l[2]}" y2="${l[3]}"/>`).join("")}
        </g>
        <g fill="#fff">
          ${[[120,80],[120,240],[260,160],[400,90],[400,240],[540,170],[680,100],[680,250]].map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="${i%3?7:11}" fill-opacity="${i%2?.9:.6}"><animate attributeName="r" values="${i%3?7:11};${i%3?10:15};${i%3?7:11}" dur="${2+i*.3}s" repeatCount="indefinite"/></circle>`).join("")}
        </g>
      </svg>`,
    quantum: `
      <svg class="art" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs><radialGradient id="gQ" cx=".5" cy=".5" r=".7"><stop offset="0" stop-color="#0277bd"/><stop offset="1" stop-color="#0d1137"/></radialGradient></defs>
        <rect width="800" height="320" fill="url(#gQ)"/>
        <g fill="none" stroke="#4dd0e1" stroke-width="2" stroke-opacity=".8" transform="translate(400 160)">
          <ellipse rx="180" ry="55"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="18s" repeatCount="indefinite"/></ellipse>
          <ellipse rx="180" ry="55" transform="rotate(60)" stroke="#ff8a65"><animateTransform attributeName="transform" type="rotate" from="60" to="420" dur="22s" repeatCount="indefinite"/></ellipse>
          <ellipse rx="180" ry="55" transform="rotate(120)" stroke="#ce93d8"><animateTransform attributeName="transform" type="rotate" from="120" to="480" dur="26s" repeatCount="indefinite"/></ellipse>
        </g>
        <circle cx="400" cy="160" r="22" fill="#fff"/>
        <circle cx="400" cy="160" r="40" fill="#4dd0e1" fill-opacity=".25"/>
      </svg>`,
    network: `
      <svg class="art" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs><linearGradient id="gN" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#004d40"/><stop offset="1" stop-color="#00b8d4"/></linearGradient></defs>
        <rect width="800" height="320" fill="url(#gN)"/>
        <g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" transform="translate(400 250)">
          ${[60,110,160,210].map((r,i)=>`<path d="M${-r} 0 A${r} ${r} 0 0 1 ${r} 0" stroke-opacity="${.9-i*.18}"><animate attributeName="stroke-opacity" values="${.9-i*.18};.1;${.9-i*.18}" dur="2.4s" begin="${i*.3}s" repeatCount="indefinite"/></path>`).join("")}
        </g>
        <rect x="392" y="230" width="16" height="70" rx="3" fill="#fff"/>
        <circle cx="400" cy="232" r="12" fill="#ffab40"/>
        <g fill="#fff" fill-opacity=".5">${Array.from({length:24},(_,i)=>`<circle cx="${(i*97)%800}" cy="${(i*53)%200+20}" r="2"/>`).join("")}</g>
      </svg>`
  };
  return arts[type] || arts.ai;
}

// ---------- Utilidades ----------
const $ = (s, el = document) => el.querySelector(s);
const main = $("#main");
const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const formatDate = d => {
  const [y, m, day] = d.split("-").map(Number);
  const dt = new Date(y, m - 1, day);
  return dt.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
};
const readingTime = html => Math.max(1, Math.round(html.replace(/<[^>]+>/g, "").split(/\s+/).length / 200));
const store = {
  get: (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const escapeHTML = s => s.replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const getComments = id => store.get("tn-comments-" + id, []);
const getLikes = () => store.get("tn-likes", {});
const getViews = () => store.get("tn-views", { "ia-no-dia-a-dia": 1240, "computacao-quantica": 980, "6g-e-conectividade": 760 });

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2600);
}

function setActiveTab(label) {
  document.querySelectorAll(".tab").forEach(t => {
    const isHome = t.hasAttribute("data-home") && !label;
    t.classList.toggle("active", isHome || (label && t.dataset.label === label));
  });
}

// ---------- Renderização: lista de posts ----------
function renderList({ label = null, query = "" } = {}) {
  let list = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  if (label) list = list.filter(p => p.labels.includes(label));
  const q = query.trim().toLowerCase();
  if (q) list = list.filter(p => (p.title + p.excerpt + p.content).toLowerCase().includes(q));

  const highlight = txt => q ? txt.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"), "<mark>$1</mark>") : txt;

  let html = "";
  if (label || q) {
    html += `<div class="filter-info">
      <span>${label ? `Mostrando postagens com o marcador <strong>${label}</strong>` : `Resultados para <strong>“${escapeHTML(query)}”</strong>`} — ${list.length} encontrada(s)</span>
      <button data-home>Mostrar todas as postagens</button></div>`;
  }
  if (!list.length) html += `<div class="widget"><p class="empty">Nenhuma postagem encontrada. Tente outro termo de pesquisa.</p></div>`;

  html += list.map((p, i) => `
    <article class="post-card" style="animation-delay:${i * 0.08}s">
      <div class="cover" data-open="${p.id}">
        ${coverArt(p.art)}
        <span class="cover-label">${p.labels[0]}</span>
      </div>
      <div class="post-body">
        <div class="post-date">${formatDate(p.date)}</div>
        <h2 class="post-title"><a href="#post/${p.id}">${highlight(p.title)}</a></h2>
        <p class="post-excerpt">${highlight(p.excerpt)}</p>
        <div class="post-footer">
          <div class="meta">
            <span>Por Luiz Felipe</span>
            <span>${readingTime(p.content)} min de leitura</span>
            <span>${getComments(p.id).length} comentário(s)</span>
          </div>
          <a class="read-more" href="#post/${p.id}">Leia mais »</a>
        </div>
      </div>
    </article>`).join("");

  main.innerHTML = html;
  setActiveTab(label);
}

// ---------- Renderização: artigo completo ----------
function renderPost(id) {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const idx = sorted.findIndex(p => p.id === id);
  const p = sorted[idx];
  if (!p) return renderList();

  const views = getViews();
  views[id] = (views[id] || 0) + 1;
  store.set("tn-views", views);

  const liked = !!getLikes()[id];
  const prev = sorted[idx - 1], next = sorted[idx + 1];

  main.innerHTML = `
    <article class="article">
      <div class="cover">${coverArt(p.art)}<span class="cover-label">${p.labels[0]}</span></div>
      <div class="article-body">
        <div class="breadcrumb"><a href="#" data-home>Início</a> › ${p.labels[0]}</div>
        <h1>${p.title}</h1>
        <div class="author-line">
          <div class="mini-avatar">LF</div>
          <span>Postado por <strong>Luiz Felipe</strong></span>
          <span>•</span><span>${formatDate(p.date)}</span>
          <span>•</span><span>${readingTime(p.content)} min de leitura</span>
          <span>•</span><span>${views[id].toLocaleString("pt-BR")} visualizações</span>
        </div>
        <div class="content">${p.content}</div>

        <div class="post-labels">Marcadores:
          ${p.labels.map(l => `<a href="#" class="label-chip" data-label="${l}">${l}</a>`).join("")}
        </div>

        <div class="actions">
          <button class="btn-ghost ${liked ? "liked" : ""}" id="likeBtn">${liked ? "♥ Curtido" : "♡ Curtir"}</button>
          <button class="btn-ghost" id="shareBtn">Compartilhar</button>
          <button class="btn-ghost" id="copyBtn">Copiar link</button>
        </div>

        <nav class="post-nav">
          ${prev ? `<a href="#post/${prev.id}"><small>« Postagem mais recente</small>${prev.title}</a>` : "<span></span>"}
          ${next ? `<a href="#post/${next.id}" style="text-align:right"><small>Postagem mais antiga »</small>${next.title}</a>` : "<span></span>"}
        </nav>

        <section class="comments">
          <h3 id="commentCount"></h3>
          <form class="comment-form" id="commentForm">
            <input type="text" id="cName" placeholder="Seu nome" required maxlength="40">
            <textarea id="cText" placeholder="Escreva um comentário..." required maxlength="600"></textarea>
            <button type="submit" class="btn">Publicar comentário</button>
          </form>
          <div id="commentList"></div>
        </section>
      </div>
    </article>`;

  renderComments(id);
  setActiveTab(null);
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  $("#likeBtn").onclick = e => {
    const likes = getLikes();
    likes[id] = !likes[id];
    store.set("tn-likes", likes);
    e.currentTarget.classList.toggle("liked", likes[id]);
    e.currentTarget.textContent = likes[id] ? "♥ Curtido" : "♡ Curtir";
    toast(likes[id] ? "Você curtiu esta postagem" : "Curtida removida");
  };
  $("#copyBtn").onclick = () => {
    const url = location.href;
    (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject())
      .then(() => toast("Link copiado"))
      .catch(() => toast("Não foi possível copiar o link"));
  };
  $("#shareBtn").onclick = () => {
    if (navigator.share) navigator.share({ title: p.title, url: location.href }).catch(() => {});
    else $("#copyBtn").click();
  };
  $("#commentForm").onsubmit = e => {
    e.preventDefault();
    const name = $("#cName").value.trim(), text = $("#cText").value.trim();
    if (!name || !text) return;
    const list = getComments(id);
    list.push({ name, text, date: new Date().toISOString() });
    store.set("tn-comments-" + id, list);
    e.target.reset();
    renderComments(id);
    toast("Comentário publicado");
  };

  window.scrollTo({ top: $(".container").offsetTop - 70, behavior: "smooth" });
  renderPopular();
}

function renderComments(id) {
  const list = getComments(id);
  $("#commentCount").textContent = `${list.length} comentário(s)`;
  $("#commentList").innerHTML = list.length
    ? list.slice().reverse().map(c => `
        <div class="comment">
          <div class="mini-avatar">${escapeHTML(c.name.slice(0, 2).toUpperCase())}</div>
          <div><strong>${escapeHTML(c.name)}</strong><time>${new Date(c.date).toLocaleString("pt-BR")}</time>
          <p>${escapeHTML(c.text)}</p></div>
        </div>`).join("")
    : `<p class="empty">Seja o primeiro a comentar.</p>`;
}

// ---------- Barra lateral ----------
function renderPopular() {
  const views = getViews();
  const list = [...posts].sort((a, b) => (views[b.id] || 0) - (views[a.id] || 0));
  $("#popularList").innerHTML = list.map(p => `
    <li data-open="${p.id}">
      <div class="thumb">${coverArt(p.art).replace('class="art"', "")}</div>
      <div><p>${p.title}</p><small>${(views[p.id] || 0).toLocaleString("pt-BR")} visualizações</small></div>
    </li>`).join("");
}

function renderSidebar() {
  const counts = {};
  posts.forEach(p => p.labels.forEach(l => counts[l] = (counts[l] || 0) + 1));
  $("#labelCloud").innerHTML = Object.keys(counts).sort()
    .map(l => `<a href="#" class="label-chip" data-label="${l}">${l} (${counts[l]})</a>`).join("");

  const tree = {};
  posts.forEach(p => {
    const [y, m] = p.date.split("-");
    tree[y] = tree[y] || {};
    (tree[y][m] = tree[y][m] || []).push(p);
  });
  $("#archiveList").innerHTML = Object.keys(tree).sort().reverse().map(y => `
    <li><details open><summary>${y} <span class="count">(${Object.values(tree[y]).flat().length})</span></summary>
      <ul>${Object.keys(tree[y]).sort().reverse().map(m => `
        <li><details><summary>${meses[+m - 1]} <span class="count">(${tree[y][m].length})</span></summary>
          <ul>${tree[y][m].map(p => `<li><a href="#post/${p.id}">${p.title}</a></li>`).join("")}</ul>
        </details></li>`).join("")}
      </ul></details></li>`).join("");

  renderPopular();
}

// ---------- Roteamento por hash ----------
function route() {
  const h = location.hash;
  $("#sidebar").classList.remove("open");
  if (h.startsWith("#post/")) renderPost(h.slice(6));
  else if (h === "#sobre") { renderList(); setTimeout(() => $("#sobre").scrollIntoView({ behavior: "smooth" }), 50); }
  else renderList();
}

// ---------- Eventos globais ----------
document.addEventListener("click", e => {
  const home = e.target.closest("[data-home]");
  const label = e.target.closest("[data-label]");
  const open = e.target.closest("[data-open]");
  if (home) {
    e.preventDefault();
    $("#searchInput").value = "";
    if (location.hash) history.pushState("", "", location.pathname);
    renderList();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (label) {
    e.preventDefault();
    if (location.hash) history.pushState("", "", location.pathname);
    renderList({ label: label.dataset.label });
    $("#sidebar").classList.remove("open");
    window.scrollTo({ top: $(".container").offsetTop - 70, behavior: "smooth" });
  } else if (open) {
    location.hash = "post/" + open.dataset.open;
  }
});

$("#searchForm").addEventListener("submit", e => e.preventDefault());
let searchTimer;
$("#searchInput").addEventListener("input", e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    if (location.hash) history.pushState("", "", location.pathname);
    renderList({ query: e.target.value });
  }, 250);
});

$("#menuToggle").onclick = () => $("#sidebar").classList.toggle("open");

// Tema claro/escuro
const moon = '<path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" fill="currentColor"/>';
const sun = '<circle cx="12" cy="12" r="5" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></g>';
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  $("#themeIcon").innerHTML = t === "dark" ? sun : moon;
}
applyTheme(store.get("tn-theme", matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("#themeToggle").onclick = () => {
  const t = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(t);
  store.set("tn-theme", t);
};

// Seguir
const followBtn = $("#followBtn");
const updateFollow = () => followBtn.textContent = store.get("tn-follow", false) ? "Seguindo ✓" : "Seguir";
followBtn.onclick = e => {
  e.preventDefault();
  const f = !store.get("tn-follow", false);
  store.set("tn-follow", f);
  updateFollow();
  toast(f ? "Agora você segue o TechNova" : "Você deixou de seguir");
};
updateFollow();

// Newsletter
$("#newsletterForm").onsubmit = e => {
  e.preventDefault();
  const email = $("#newsletterEmail").value.trim();
  store.set("tn-newsletter", email);
  $("#newsletterMsg").textContent = `Pronto! ${email} foi inscrito.`;
  e.target.reset();
};

// Barra de progresso de leitura + botão voltar ao topo
const progress = document.createElement("div");
progress.className = "progress";
document.body.appendChild(progress);
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (location.hash.startsWith("#post/") && max > 0 ? (scrollY / max) * 100 : 0) + "%";
  $("#backTop").classList.toggle("show", scrollY > 500);
}, { passive: true });
$("#backTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.addEventListener("hashchange", route);
$("#year").textContent = new Date().getFullYear();
renderSidebar();
route();