/* ============================================================
   DataLab presenta · Eternit — Tres retos, tres historias
   Visor de propuesta: deck desktop (16:9) + historias móvil (9:16)
   Contenido tomado literalmente de la propuesta; marca DataLab.
   ============================================================ */

(() => {
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  const CONTACTO = 'juan.garcia@wearedatalab.co';
  const WEB = 'wearedatalab.com';

  /* ---------- Modo: desktop (deck) o móvil (historias) ---------- */
  const qs = new URLSearchParams(location.search);
  const forzado = qs.get('m');
  const ua = navigator.userAgent || '';
  const esTelefono =
    /iPhone|iPod|Android.*Mobile|Windows Phone|BlackBerry|BB10|IEMobile|Opera Mini/i.test(ua) ||
    (matchMedia('(max-width: 820px)').matches && matchMedia('(pointer: coarse)').matches) ||
    matchMedia('(max-width: 640px)').matches;
  let modo = forzado === 'movil' ? 'movil' : forzado === 'desktop' ? 'desktop' : (esTelefono ? 'movil' : 'desktop');
  document.body.dataset.modo = modo;

  const LOGO = 'img/logo-datalab.png';
  const PIN = '<svg viewBox="0 0 24 24" width="1.4em" height="1.4em" fill="none" stroke="#39FF14" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>';
  const CHIP = '<svg viewBox="0 0 24 24" width="1.4em" height="1.4em" fill="none" stroke="#39FF14" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3"/></svg>';
  const IG = (p, fill) => `<svg viewBox="0 0 24 24" fill="${fill||'none'}" stroke="#262626" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  const IG_HEART = IG('<path d="M20.8 5.1a5 5 0 0 0-7.1 0l-.7.7-.7-.7a5 5 0 1 0-7.1 7.1l.7.7 7.1 7.1 7.1-7.1.7-.7a5 5 0 0 0 0-7.1z"/>');
  const IG_COMMENT = IG('<path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.5A8.4 8.4 0 1 1 21 11.5z"/>');
  const IG_SHARE = IG('<path d="M22 2 11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>');
  const IG_SAVE = IG('<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>');
  const IG_FILM = '<svg viewBox="0 0 24 24" fill="#fff"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2.5 2H5v2h1.5V5zm11 0H16v2h1.5V5zM10 8.5v7l6-3.5-6-3.5z"/></svg>';
  const IG_SOUND = '<svg viewBox="0 0 24 24" fill="#fff"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path class="x" d="M16.5 9.5l5 5M21.5 9.5l-5 5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';
  const waLink = (txt) => 'https://wa.me/?text=' + encodeURIComponent(txt || `Mira la propuesta de DataLab para Eternit — Tres retos, tres historias: ${location.href.split('?')[0]}`);

  const triangulos = () => {
    let h = '<div class="triangulos">';
    for (let i = 0; i < 22; i++) h += `<i style="left:${(i * 4.4 + 2) % 100}cqi;top:${(i * 37) % 100}%;transform:rotate(${i % 3 * 12}deg);opacity:${.4 + (i % 4) * .15}"></i>`;
    return h + '</div>';
  };

  /* ============================================================
     DEFINICIÓN DE SLIDES (deck + historia)
     ============================================================ */
  const DEFS = {

    portada: {
      deck: `
        <div class="estrellas"></div><div class="nebulosa"></div>${triangulos()}
        <img class="ast-portada" src="img/astronauta.png" alt="">
        <img class="logo-dl grande" src="${LOGO}" alt="DataLab" style="position:absolute;right:6cqi;bottom:4cqi">
        <div class="lienzo s-portada-in">
          <div class="kick2 anim">Propuesta comercial 2026</div>
          <h1 class="titulo it anim">Tres retos,<br>tres historias</h1>
          <div class="meta anim">Concepto creativo de las piezas audiovisuales · Licitación ETE-MERCADEO-349</div>
          <div class="meta2 anim">Eternit Colombiana S.A.<span>·</span>Agencia de mercadeo y publicidad</div>
        </div>`,
      story: { fondo: 'img/reto3-a.jpg', estrellas: true, html: `
        <span class="h-kicker h-anim">Propuesta comercial 2026</span>
        <h1 class="h-titulo it h-anim">Tres retos,<br>tres historias</h1>
        <div class="h-linea h-anim"></div>
        <p class="h-sub h-anim">Concepto creativo de las piezas audiovisuales · Licitación ETE-MERCADEO-349. <b>Eternit Colombiana S.A.</b> Toca para avanzar →</p>` },
    },

    weare: {
      deck: `
        <div class="estrellas"></div>
        <img class="ast-abajo" src="img/astronauta.png" alt="" style="position:absolute;left:3cqi;bottom:-3cqi;width:18cqi;z-index:3">
        <img class="logo-dl" src="${LOGO}" alt="" style="position:absolute;top:4cqi;right:6cqi">
        <div class="lienzo" style="align-items:center;justify-content:center;text-align:center">
          <div class="weare-tit anim">We are <img src="${LOGO}" alt="DataLab" style="height:6cqi;vertical-align:middle;margin-left:1cqi"></div>
          <div class="weare-box anim">La agencia digital que te ayudará a plasmar tus ideas.</div>
        </div>`,
      story: { fondo: 'img/astronauta.png', estrellas: true, html: `
        <span class="h-kicker h-anim">We are DataLab</span>
        <h2 class="h-titulo h-anim">La agencia digital que te ayudará a plasmar tus ideas<span class="v">.</span></h2>
        <div class="h-linea h-anim"></div>
        <p class="h-sub h-anim">Marketing y tecnología, enfocados en crecimiento basado en datos.</p>` },
    },

    quienes: {
      deck: `
        <div class="lienzo">
          <div class="split s-quienes-split" style="grid-template-columns:1fr 1fr">
            <div class="col-txt">
              <div class="kicker anim" style="position:static;margin-bottom:1.6cqi">We are DataLab</div>
              <h2 class="titulo anim" style="font-size:4.4cqi">Quiénes somos</h2>
              <div class="linea-v anim"></div>
              <p class="sub anim">Somos la agencia independiente líder de marketing y tecnología, enfocada en crecimiento basada en datos. Diseñamos e implementamos estrategias que optimizan la adquisición de clientes generando resultados reales al negocio.</p>
              <div class="quienes-tags anim">
                <span>Marketing</span><span>Tecnología</span><span>Data-driven</span>
              </div>
            </div>
            <div class="foto-panel anim" style="height:66cqi;align-self:center;background:radial-gradient(circle at 50% 42%, rgba(57,255,20,.12), transparent 68%)">
              <video src="img/astronauta-loop.mp4" poster="img/astronauta-poster.jpg" muted loop autoplay playsinline data-igvideo style="object-fit:contain"></video>
            </div>
          </div>
        </div>
        <img class="logo-dl" src="${LOGO}" alt="" style="position:absolute;top:4cqi;right:6cqi">`,
      story: { fondo: 'img/astronauta.png', html: `
        <span class="h-kicker h-anim">We are DataLab</span>
        <h2 class="h-titulo h-anim">Quiénes somos</h2>
        <div class="h-linea h-anim"></div>
        <p class="h-sub h-anim">Somos la agencia independiente líder de <b>marketing y tecnología</b>, enfocada en crecimiento basada en datos. Estrategias que optimizan la adquisición de clientes y generan resultados reales.</p>` },
    },

    presencia: {
      deck: `
        <div class="cabecera"><div class="kicker anim" style="position:static">Presencia Regional</div><img class="logo-dl" src="${LOGO}" alt=""></div>
        <div class="lienzo" style="padding-top:7cqi">
          <div class="presencia-grid">
            <div class="pres-izq">
              <h2 class="titulo anim" style="font-size:4cqi">Presencia Regional</h2>
              <p class="anim" style="font-size:1.9cqi;color:var(--gris);margin-top:.6cqi">Alcance global, entendimiento local<span class="v">.</span></p>
              <div class="linea-v anim"></div>
              <div class="pais-lista">
                <div class="pais-row anim"><span class="pais-ico">${PIN}</span><span class="pais-txt"><b>Colombia</b><em>Sede principal · Bogotá</em></span></div>
                <div class="pais-row anim"><span class="pais-ico">${PIN}</span><span class="pais-txt"><b>México</b></span></div>
                <div class="pais-row anim"><span class="pais-ico">${PIN}</span><span class="pais-txt"><b>Perú</b></span></div>
                <div class="pais-row anim"><span class="pais-ico">${PIN}</span><span class="pais-txt"><b>Chile</b></span></div>
                <div class="pais-row anim"><span class="pais-ico">${CHIP}</span><span class="pais-txt"><b>Estados Unidos</b></span></div>
              </div>
              <p class="anim" style="font-size:1.2cqi;color:var(--gris-2);margin-top:2.4cqi;max-width:44cqi">Equipos disponibles en varias geografías para acompañamiento regional.</p>
            </div>
            <div class="pres-mapa anim">
              <img src="img/mapa-siluta.png" class="mapa-sil" alt="Mapa de América">
              <svg class="mapa-svg" viewBox="0 0 92.1 100" preserveAspectRatio="none">
                <defs><filter id="nglow" x="-90%" y="-90%" width="280%" height="280%"><feGaussianBlur stdDeviation="1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
                <path class="arco" d="M48.3,54.5 Q34,42 33.6,29.8"/>
                <path class="arco" d="M48.3,54.5 Q36,49.5 30.1,44"/>
                <path class="arco" d="M48.3,54.5 Q43.5,61 46.2,66.5"/>
                <path class="arco" d="M48.3,54.5 Q42,70 51.8,83.1"/>
                <g filter="url(#nglow)">
                  ${[[33.6,29.8],[30.1,44],[46.2,66.5],[51.8,83.1]].map(([x,y]) => `<circle class="nodo-ring" cx="${x}" cy="${y}" r="1.3"><animate attributeName="r" values="1.3;4.7;1.3" dur="2.9s" repeatCount="indefinite"/><animate attributeName="opacity" values=".7;0;.7" dur="2.9s" repeatCount="indefinite"/></circle><circle class="nodo-core" cx="${x}" cy="${y}" r="1.3"/>`).join('')}
                  <circle class="nodo-ring hub" cx="48.3" cy="54.5" r="1.9"><animate attributeName="r" values="1.9;6.2;1.9" dur="2.9s" repeatCount="indefinite"/><animate attributeName="opacity" values=".85;0;.85" dur="2.9s" repeatCount="indefinite"/></circle>
                  <circle class="nodo-core hub" cx="48.3" cy="54.5" r="1.9"/>
                </g>
              </svg>
            </div>
          </div>
        </div>`,
      story: { fondo: 'img/mapa.jpg', html: `
        <span class="h-kicker h-anim">Presencia Regional</span>
        <h2 class="h-titulo h-anim">Alcance global, entendimiento local<span class="v">.</span></h2>
        <div class="h-linea h-anim"></div>
        <div class="h-lista h-anim h-paises">
          <div class="h-item"><span class="h-pin">${PIN}</span><span><b>Colombia</b> · Sede principal: Bogotá</span></div>
          <div class="h-item"><span class="h-pin">${PIN}</span><span><b>México</b></span></div>
          <div class="h-item"><span class="h-pin">${PIN}</span><span><b>Perú</b></span></div>
          <div class="h-item"><span class="h-pin">${PIN}</span><span><b>Chile</b></span></div>
          <div class="h-item"><span class="h-pin">${CHIP}</span><span><b>Estados Unidos</b></span></div>
        </div>
        <p class="h-sub h-anim" style="font-size:.82rem;color:var(--gris-2);margin-top:1rem">Equipos disponibles en varias geografías para acompañamiento regional.</p>` },
    },

    clientes: {
      deck: `
        <div class="cabecera"><div class="kicker anim">Algunos de nuestros clientes</div><img class="logo-dl" src="${LOGO}" alt=""></div>
        <div class="lienzo" style="padding-top:6cqi">
          <h2 class="titulo anim" style="font-size:2.4cqi;margin-bottom:.3cqi">Marcas que confían en nosotros</h2>
          <div class="linea-v anim" style="margin:.8cqi 0 1.2cqi"></div>
          <div class="clientes-grid">
            ${['holcim','davivienda','nuam','liberty','elcorral','camara','krispy','beerstation','eternit','rubbermaid','heinsohn','honda','papajohns','herbalife','ideas','carvajal','marykay','kare','hyundai','hocol'].map((l,i) => `<div class="cliente-card" style="--i:${i}"><img src="img/clientes/${l}.png" alt="${l}"></div>`).join('')}
          </div>
        </div>`,
      story: { estrellas: true, html: `
        <span class="h-kicker h-anim">Algunos de nuestros clientes</span>
        <h2 class="h-titulo h-anim" style="font-size:1.35rem">Marcas que confían en nosotros</h2>
        <div class="h-linea h-anim"></div>
        <div class="h-clientes h-anim">
          ${['holcim','davivienda','nuam','liberty','elcorral','camara','krispy','beerstation','eternit','rubbermaid','heinsohn','honda','papajohns','herbalife','ideas','carvajal','marykay','kare','hyundai','hocol'].map(l => `<div class="h-cli"><img src="img/clientes/${l}.png" alt="${l}"></div>`).join('')}
        </div>` },
    },

    agencia360: {
      deck: `<img src="img/agencia360.jpg" alt="Una agencia 360 Digital — Marketing Digital, Dedicados y Tecnología" class="slide-img anim">`,
      story: { estrellas: true, html: `
        <span class="h-kicker h-anim">Nuestros servicios</span>
        <h2 class="h-titulo h-anim">Una agencia <span class="v">360</span> Digital</h2>
        <div class="h-linea h-anim"></div>
        <div class="h-lista h-anim">
          <div class="h-item"><span>📈 <b>Marketing Digital</b> · SEO, paid media, social, CRM, CDP</span></div>
          <div class="h-item"><span>👥 <b>Dedicados</b> · headhunting, servicios y Data People</span></div>
          <div class="h-item"><span>⚙️ <b>Tecnología</b> · software a la medida, web, IA, e-learnings</span></div>
        </div>` },
    },

    agilidad: {
      deck: `
        <div class="cabecera"><div class="kicker anim">Cómo trabajamos</div><img class="logo-dl" src="${LOGO}" alt=""></div>
        <div class="lienzo" style="padding-top:8cqi">
          <div class="split" style="grid-template-columns:1.05fr .95fr;align-items:center">
            <div class="col-txt">
              <h2 class="titulo anim" style="font-size:4.2cqi">Agilidad y Eficiencia</h2>
              <div class="linea-v anim"></div>
              <p class="sub anim" style="font-size:1.8cqi;font-weight:700;color:#fff">Trabajamos bajo la metodología Scrum.</p>
              <p class="sub anim" style="font-size:1.5cqi;margin-top:1cqi">Nuestra metodología garantiza la entrega de valor incremental, permitiendo flexibilidad y velocidad en el desarrollo de proyectos complejos.</p>
              <div class="checks" style="margin-top:2.4cqi;gap:1cqi">
                <div class="check anim" style="font-size:1.35cqi">Adaptabilidad a cambios en tiempo real.</div>
                <div class="check anim" style="font-size:1.35cqi">Equipos multidisciplinarios y auto-organizados.</div>
                <div class="check anim" style="font-size:1.35cqi">Entregas rápidas y constantes (Sprints).</div>
              </div>
            </div>
            <div class="scrum-viz anim">
              <div class="loop-anim"><svg viewBox="0 0 24 24" class="loop-icon"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg></div>
              <div class="scrum-labels"><b>Sprint</b> · Daily Scrum · Review · Retrospective</div>
              <div class="scrum-flow">Product Backlog → Sprint Backlog → <span class="v">Increment</span></div>
            </div>
          </div>
        </div>`,
      story: { fondo: 'img/reto2-b.jpg', html: `
        <span class="h-kicker h-anim">Cómo trabajamos</span>
        <h2 class="h-titulo h-anim">Agilidad y Eficiencia</h2>
        <div class="h-linea h-anim"></div>
        <p class="h-sub h-anim"><b>Metodología Scrum:</b> entrega de valor incremental con flexibilidad y velocidad.</p>
        <div class="h-lista h-anim">
          <div class="h-item"><span>✓ Adaptabilidad a cambios en tiempo real</span></div>
          <div class="h-item"><span>✓ Equipos multidisciplinarios y auto-organizados</span></div>
          <div class="h-item"><span>✓ Entregas rápidas y constantes (Sprints)</span></div>
        </div>` },
    },

    acreditados: {
      deck: `
        <div class="estrellas"></div>
        <img class="ast-abajo" src="img/astronauta.png" alt="" style="position:absolute;left:3cqi;bottom:-3cqi;width:16cqi;z-index:3">
        <img class="logo-dl" src="${LOGO}" alt="" style="position:absolute;top:4cqi;right:6cqi">
        <div class="lienzo" style="justify-content:center">
          <div class="split" style="grid-template-columns:1fr 1fr;align-items:center">
            <div class="col-txt" style="padding-left:6cqi">
              <div style="font-size:4cqi;line-height:1.05;font-weight:800">
                <span style="color:#fff">ESTAMOS</span><br><span class="v">ACREDITADOS</span>
              </div>
            </div>
            <div class="anim" style="text-align:center">
              <img src="img/iso.png" alt="ISO 9001:2015" style="width:30cqi;max-width:100%;filter:drop-shadow(0 0 3cqi rgba(57,255,20,.18))">
            </div>
          </div>
        </div>`,
      story: { estrellas: true, html: `
        <div style="text-align:center">
          <img src="img/iso.png" alt="ISO" class="h-anim" style="width:52%;margin:0 auto 1.4rem;display:block">
          <h2 class="h-titulo h-anim">Estamos <span class="v">acreditados</span></h2>
          <div class="h-linea h-anim" style="margin:.9rem auto"></div>
          <p class="h-sub h-anim">Certificación <b>ISO 9001:2015</b> en gestión de calidad.</p>
        </div>` },
    },

    caso: {
      deck: `
        <div class="cabecera"><div class="kicker anim">Caso de éxito · Consumo masivo y retail</div><img class="logo-dl" src="${LOGO}" alt=""></div>
        <div class="lienzo s-caso" style="padding-top:9cqi">
          <div class="cont">
            <div>
              <h2 class="titulo anim" style="font-size:4.2cqi">Rubbermaid Commercial Products</h2>
              <div class="linea-v anim"></div>
              <p class="caso-desc anim">Rubbermaid Commercial Products fabrica y comercializa productos de plástico y soluciones duraderas para el sector comercial e institucional. DataLab construyó un equipo digital interno para operar e-commerce, contenido, diseño y pauta en México y Colombia.</p>
              <div class="caso-tags anim"><b>Objetivo</b>Pasar la operación de e-commerce de reactiva a estratégica: VTEX, Amazon, redes sociales y pauta digital.</div>
              <div class="caso-tags anim"><b>Canales</b>VTEX · Amazon · Google Ads · Meta · TikTok · WhatsApp · Mailing · Portales</div>
            </div>
            <div class="metricas">
              <div class="metrica anim"><div class="n">+120 %</div><div class="l">Crecimiento en sellout vs. año 1 (MX y COL)</div></div>
              <div class="metrica anim"><div class="n">+400</div><div class="l">Claves activadas en VTEX</div></div>
              <div class="metrica anim"><div class="n">+200</div><div class="l">Claves de Amazon optimizadas en SEO</div></div>
              <div class="metrica anim"><div class="n">+90 %</div><div class="l">Cumplimiento en alcance, engagement y comunidad</div></div>
            </div>
          </div>
        </div>
        <div class="barra-claim anim">Un equipo comprometido con la presencia y la conversión digital: el mismo modelo que proponemos para Eternit.</div>`,
      story: { fondo: 'img/rubber-3.jpg', html: `
        <span class="h-kicker h-anim">Caso de éxito · Retail</span>
        <h2 class="h-titulo h-anim">Rubbermaid Commercial Products</h2>
        <div class="h-linea h-anim"></div>
        <p class="h-sub h-anim">DataLab construyó un <b>equipo digital interno</b> para operar e-commerce, contenido, diseño y pauta en México y Colombia.</p>
        <div class="h-metricas h-anim">
          <div class="h-metrica"><div class="n">+120%</div><div class="l">Sellout vs. año 1 (MX y COL)</div></div>
          <div class="h-metrica"><div class="n">+400</div><div class="l">Claves activadas en VTEX</div></div>
          <div class="h-metrica"><div class="n">+200</div><div class="l">Claves de Amazon en SEO</div></div>
          <div class="h-metrica"><div class="n">+90%</div><div class="l">Cumplimiento en alcance</div></div>
        </div>` },
    },

    concepto: {
      deck: `
        <div class="estrellas"></div>
        <img class="logo-dl" src="${LOGO}" alt="" style="position:absolute;top:4cqi;right:6cqi">
        <img class="ast-abajo" src="img/astronauta.png" alt="" style="position:absolute;left:3cqi;bottom:-3cqi;width:20cqi;z-index:3">
        <div class="lienzo s-seccion">
          <div class="num anim">01</div>
          <div class="stit anim">El concepto creativo</div>
          <div class="linea-v anim"></div>
          <div class="ssub anim">Tres videos · Tres formatos · Una misma promesa: que se sienta real</div>
        </div>`,
      story: { fondo: 'img/reto1-a.jpg', html: `
        <div class="num h-anim" style="font-size:5rem;font-weight:800;color:var(--verde);line-height:.9">01</div>
        <h2 class="h-titulo h-anim" style="margin-top:.6rem">El concepto creativo</h2>
        <div class="h-linea h-anim"></div>
        <p class="h-sub h-anim"><b>Tres videos · tres formatos ·</b> una misma promesa: que se sienta real.</p>` },
    },

    idea: {
      deck: `
        <div class="cabecera"><div class="kicker anim">La idea detrás de los tres retos</div><img class="logo-dl" src="${LOGO}" alt=""></div>
        <div class="lienzo" style="padding-top:6cqi;padding-bottom:7.5cqi">
          <h2 class="titulo anim" style="font-size:3.1cqi;max-width:80cqi">No hicimos tres videos publicitarios. Contamos tres verdades.</h2>
          <div class="linea-v anim" style="margin:1.6cqi 0"></div>
          <p class="sub anim" style="max-width:none;font-size:1.45cqi;line-height:1.55">Eternit nos pidió tres piezas generadas con inteligencia artificial (IA). Nosotros decidimos que ninguna se viera como publicidad: cada una toma un formato que la gente ya consume con confianza y deja que el producto se defienda solo, en boca de quienes lo viven todos los días.</p>
          <div class="tarjetas-3">
            <div class="tarjeta-reto anim"><div class="tn">01</div><div class="tt">Historias de un maestro</div><div class="tf">Reto 1 · Cubierta Sevillana · 1:20</div><div class="td">Entrevista documental sobre el techo. Los expertos que nadie muestra cuentan, con su propia voz, por qué la teja de barro se ve bonita pero no para el agua.</div></div>
            <div class="tarjeta-reto anim"><div class="tn">02</div><div class="tt">Secretos de un ingeniero</div><div class="tf">Reto 2 · Eterboard · 1:30</div><div class="td">Pódcast entre dos arquitectos que llevan veinte años discutiendo. Dos visiones de construcción, cara a cara, con proyectos reales en vez de argumentos de catálogo.</div></div>
            <div class="tarjeta-reto anim"><div class="tn">03</div><div class="tt">El techo de Marta</div><div class="tf">Reto 3 · Campaña de reposición · 1:40</div><div class="td">Historia animada en plastilina, narrada en primera persona. Un techo que cambia una casa y, con ella, la vida de quienes la habitan.</div></div>
          </div>
        </div>
        <div class="barra-claim anim">Tres formatos distintos, una misma promesa: que el espectador olvide que fue hecho con IA.</div>`,
      story: { fondo: 'img/reto2-a.jpg', html: `
        <span class="h-kicker h-anim">La idea detrás de los tres retos</span>
        <h2 class="h-titulo h-anim" style="font-size:1.7rem">No hicimos tres videos publicitarios. Contamos tres verdades.</h2>
        <div class="h-linea h-anim"></div>
        <div class="h-lista h-anim">
          <div class="h-item"><span class="hn">01</span><span><b>Historias de un maestro</b> · Cubierta Sevillana · 1:20</span></div>
          <div class="h-item"><span class="hn">02</span><span><b>Secretos de un ingeniero</b> · Eterboard · 1:30</span></div>
          <div class="h-item"><span class="hn">03</span><span><b>El techo de Marta</b> · Reposición · 1:40</span></div>
        </div>` },
    },

    reto1: retoDeck({
      kicker: 'Reto 1 · Cubierta fibrocemento Sevillana · Video 1',
      titulo: 'Historias de un maestro',
      formato: 'Entrevista documental · 1:20 · 100 % IA (imagen, video y voz)',
      concepto: 'Los techos de Colombia no los construyen los que salen en la publicidad: los construyen maestros de obra que llevan desde las seis de la mañana bajando teja. Este video les da la cámara a ellos. No actúan, no venden: cuentan lo que ven cada día sobre un techo de barro que hay que destapar entero, y por qué, cuando saben, le recomiendan al cliente la cubierta Sevillana.',
      quote: '“La teja de barro no para el agua. La teja de barro se ve bonita.”',
      qa: 'Wilmer, maestro de obra · minuto 0:30',
      checks: [
        'Formato entrevista a cámara, estilo documental: los expertos que nadie muestra, en primer plano.',
        'Lenguaje técnico-popular real y humor cercano, sin caricaturas. Voz costeña generada con IA.',
        'Comparación honesta con la teja de barro: manto, madera, mantenimiento cada diez años.',
      ],
      claim: '«Uno está pa\' decirle lo mejor al cliente»: el maestro que recomienda Eternit porque sabe, no porque le pagan.',
      video: 'video/reto1.mp4', poster: 'img/reto1-c.jpg', hero: 'img/reto1-b.jpg', badge: 'Video 1',
    }),

    reto2: retoDeck({
      kicker: 'Reto 2 · Eterboard · Video 2',
      titulo: 'Secretos de un ingeniero',
      formato: 'Pódcast en estudio · 1:30 · 100 % IA (imagen, video y voz)',
      concepto: 'Dos arquitectos, veinte años de amistad y una discusión que nunca cierran: ladrillo o construcción en seco. Lo pusimos en una cabina de pódcast, sin obra a la vista, porque la credibilidad no está en mostrar el producto sino en escuchar a dos profesionales contar lo que vivieron en sus proyectos. Las dos visiones se respetan; gana la que tiene mejores ejemplos.',
      quote: '“Tres semanas de aguacero y nosotros montando muros adentro. Dos muchachos y un atornillador.”',
      qa: 'Mauricio, arquitecto · sobre el conjunto de Chía',
      checks: [
        'Formato pódcast: tres cámaras fijas, conversación real, lenguaje propio de arquitecto.',
        'Atributos contados como anécdotas: rapidez de obra, menos escombro, ahorro en mano de obra, diseño.',
        'El escéptico no es tonto: su experiencia con placa de yeso explica el malentendido y lo resuelve.',
      ],
      claim: 'Dos visiones de construcción frente a frente: el contraste convence más que cualquier argumento de catálogo.',
      video: 'video/reto2.mp4', poster: 'img/reto2-a.jpg', hero: 'img/reto2-b.jpg', badge: 'Video 2',
    }),

    reto3: retoDeck({
      kicker: 'Reto 3 · Campaña de reposición de cubiertas · Video 3',
      titulo: 'El techo de Marta',
      formato: 'Animación stop motion · 1:40 · 100 % IA (imagen, video y voz)',
      concepto: 'Una casa de plastilina en un barrio de montaña y una mujer que aguantó tres inviernos con el techo roto. Marta narra en primera persona su error (la teja de acero barata que se oxidó en dos años) y su decisión: fibrocemento de Eternit. La animación permite mostrar el óxido, la gotera y la transformación de la casa con una calidez que una toma real no logra, y habla a cualquier familia del país.',
      quote: '“Terminé pagando dos veces el mismo techo. La tercera vez pregunté bien.”',
      qa: 'Marta · minuto 0:52',
      checks: [
        'Stop motion en plastilina generado con IA: emocional, memorable y sin límites de locación.',
        'Arco completo: techo roto, tentación del acero, óxido, decisión y casa transformada en dos días.',
        'Beneficios verificados en la cartilla Eternit: sin metal por dentro, no se oxida, confort térmico y acústico.',
      ],
      claim: '«Cubiertas Eternit. Para no volver a empezar»: un techo que cambia la casa y la vida de quien la habita.',
      video: 'video/reto3.mp4', poster: 'img/reto3-a.jpg', hero: 'img/reto3-c.jpg', badge: 'Video 3',
    }),

    seccionEjemplos: {
      deck: `
        <div class="estrellas"></div>
        <img class="logo-dl" src="${LOGO}" alt="" style="position:absolute;top:4cqi;right:6cqi">
        <img class="ast-abajo" src="img/astronauta.png" alt="" style="position:absolute;left:3cqi;bottom:-3cqi;width:20cqi;z-index:3">
        <div class="lienzo s-seccion">
          <div class="num anim">02</div>
          <div class="stit anim">Ejemplos de uso</div>
          <div class="linea-v anim"></div>
          <div class="ssub anim">Así se ve el contenido publicado en redes sociales</div>
        </div>`,
      story: { fondo: 'img/reto2-a.jpg', html: `
        <div class="num h-anim" style="font-size:5rem;font-weight:800;color:var(--verde);line-height:.9">02</div>
        <h2 class="h-titulo h-anim" style="margin-top:.6rem">Ejemplos de uso</h2>
        <div class="h-linea h-anim"></div>
        <p class="h-sub h-anim">Así se ve el contenido publicado en redes sociales.</p>` },
    },

    seccion02: {
      deck: `
        <div class="estrellas"></div>
        <img class="logo-dl" src="${LOGO}" alt="" style="position:absolute;top:4cqi;right:6cqi">
        <img class="ast-abajo" src="img/astronauta.png" alt="" style="position:absolute;left:3cqi;bottom:-3cqi;width:20cqi;z-index:3">
        <div class="lienzo s-seccion">
          <div class="num anim">03</div>
          <div class="stit anim">Alcance y límites del servicio</div>
          <div class="linea-v anim"></div>
          <div class="ssub anim">Equipo · Pauta digital · Seguimiento</div>
        </div>`,
      story: { fondo: 'img/reto3-c.jpg', html: `
        <div class="num h-anim" style="font-size:5rem;font-weight:800;color:var(--verde);line-height:.9">03</div>
        <h2 class="h-titulo h-anim" style="margin-top:.6rem">Alcance y límites del servicio</h2>
        <div class="h-linea h-anim"></div>
        <p class="h-sub h-anim"><b>Equipo · Pauta digital · Seguimiento</b></p>` },
    },

    alcance: {
      deck: `
        <div class="cabecera"><div class="kicker anim">Reglas claras para una relación de dos a tres años</div><img class="logo-dl" src="${LOGO}" alt=""></div>
        <div class="lienzo" style="padding-top:6cqi;padding-bottom:3.4cqi">
          <div style="display:flex;align-items:baseline;gap:1.6cqi">
            <div class="num anim" style="font-size:5cqi;font-weight:800;color:var(--verde);line-height:.9">03</div>
            <h2 class="titulo anim" style="font-size:3.2cqi">Alcance y límites del servicio</h2>
          </div>
          <div class="alcance-cols">
            <div class="alcance-col anim">
              <div class="rt">Tiempo mensual por rol</div>
              <table class="tabla-roles">
                <thead><tr><th>Rol</th><th>Dedicación</th><th>Horas / mes</th></tr></thead>
                <tbody>
                  <tr><td>Gerente General</td><td>5 %</td><td>8 h</td></tr>
                  <tr><td>Director(a) de Cuenta <span>KAM · Key Account Manager</span></td><td>10 %</td><td>16 h</td></tr>
                  <tr><td>Director(a) Creativo(a) y Estratégico(a)</td><td>10 %</td><td>16 h</td></tr>
                  <tr><td>Diseñador(a) Gráfico(a)</td><td>60 %</td><td>96 h</td></tr>
                  <tr><td>Community Manager</td><td>50 %</td><td>80 h</td></tr>
                </tbody>
              </table>
              <div class="inv-box anim"><span class="inv-lbl">Inversión mensual del servicio</span><span class="inv-val">$8.000.000 <b>COP / mes</b> + IVA</span></div>
              <div class="regla-nota">Horas calculadas sobre una base de 160 horas al mes por persona. Las horas no consumidas no se acumulan.</div>
              <div class="regla-nota" style="border-left:.3cqi solid var(--verde);padding-left:1cqi;color:var(--gris)">Las <b style="color:#fff">reuniones internas y el seguimiento del equipo</b> también hacen parte del consumo del tiempo mensual.</div>
            </div>
            <div class="alcance-col anim">
              <div class="rt">Pauta digital</div>
              <div class="regla-li">Fee de administración del 6 % sobre la inversión mensual en medios.</div>
              <div class="regla-li">Inversión mínima del cliente: $8.000.000 COP / mes (medios aparte, antes de IVA).</div>
              <div class="regla-li">Hasta cuatro (4) campañas activas al mes.</div>
              <div class="regla-li">Se pauta únicamente en Meta (Facebook e Instagram).</div>
              <div class="regla-li">El fee sube si el cliente quiere sumar canales (Google, YouTube, TikTok).</div>
              <div class="rt" style="margin-top:1.5cqi">Seguimiento y reportes</div>
              <div class="regla-li">Reunión de seguimiento semanal con el equipo de Mercadeo de Eternit.</div>
              <div class="regla-li">Informe de cierre mensual con métricas de pauta y comportamiento de las redes sociales.</div>
              <div class="regla-nota" style="text-align:right">Valores en pesos colombianos (COP). No incluyen IVA.</div>
            </div>
          </div>
        </div>
        <div class="barra-claim anim">Todo lo que exceda estos límites se cotiza por separado antes de ejecutarse.</div>`,
      story: { fondo: 'img/reto2-b.jpg', html: `
        <span class="h-kicker h-anim">03 · Alcance y límites del servicio</span>
        <h2 class="h-titulo h-anim" style="font-size:1.7rem">Reglas claras para una relación de 2 a 3 años</h2>
        <div class="h-linea h-anim"></div>
        <div class="rt-h h-anim">Tiempo mensual por rol</div>
        <table class="h-tabla-roles h-anim">
          <thead><tr><th>Rol</th><th>Ded.</th><th>h/mes</th></tr></thead>
          <tbody>
            <tr><td>Gerente General</td><td>5 %</td><td>8 h</td></tr>
            <tr><td>Dir. de Cuenta (KAM)</td><td>10 %</td><td>16 h</td></tr>
            <tr><td>Dir. Creativo(a) y Estratégico(a)</td><td>10 %</td><td>16 h</td></tr>
            <tr><td>Diseñador(a) Gráfico(a)</td><td>60 %</td><td>96 h</td></tr>
            <tr><td>Community Manager</td><td>50 %</td><td>80 h</td></tr>
          </tbody>
        </table>
        <p class="h-nota h-anim">Base de 160 h/mes por persona. Las horas no consumidas no se acumulan.</p>
        <div class="h-lista h-anim">
          <div class="h-item"><span><b>Pauta:</b> fee 6 % sobre medios · mínimo $8.000.000 COP/mes · hasta 4 campañas · solo Meta.</span></div>
          <div class="h-item"><span><b>Seguimiento:</b> reunión semanal con Mercadeo e informe de cierre mensual.</span></div>
        </div>
        <p class="h-sub h-anim" style="font-size:.78rem;color:var(--gris-2)">Valores en COP, sin IVA. Lo que exceda estos límites se cotiza aparte.</p>` },
    },

    ejemplos: {
      deck: `
        <div class="cabecera"><div class="kicker anim">Lo que produce el equipo mes a mes</div><img class="logo-dl" src="${LOGO}" alt=""></div>
        <div class="lienzo" style="padding-top:6cqi;padding-bottom:6.5cqi">
          <h2 class="titulo anim" style="font-size:3.2cqi">Ejemplos de contenido que podemos hacer</h2>
          <div class="linea-v anim" style="margin:1cqi 0 0"></div>
          <div class="ejemplos">
            ${[
              {i:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M21 15l-5-4L6 20"/>', t:'Pieza plana', d:'Post estático para feed, historia o banner, sobre la línea gráfica de Eternit.'},
              {i:'<rect x="7" y="4.5" width="10" height="15" rx="1.5"/><path d="M4 7.5v9M20 7.5v9"/>', t:'Galería o carrusel', d:'Secuencia de hasta 5 láminas para explicar un producto o un paso a paso.'},
              {i:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10.5 9.2l4.5 2.8-4.5 2.8z" fill="#39FF14" stroke="none"/>', t:'Reel o video corto con voz', d:'Hasta 30 s, con voz generada con IA, música y textos en pantalla.'},
              {i:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M4 15h16M9 4v16M15 4v16"/>', t:'Historia animada', d:'Animación tipo stop motion o motion para contar una historia de marca.'},
              {i:'<rect x="9" y="3" width="6" height="10" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v3M8.5 20.5h7"/>', t:'Contenido de expertos', d:'Entrevistas y pódcast con maestros, arquitectos e ingenieros.'},
              {i:'<path d="M4 8h3l1.4-2.1h7.2L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.3"/>', t:'Fotografía y piezas de producto', d:'Fotos, fichas, flyers y catálogos para ventas y punto de venta.'},
            ].map(e => `<div class="ejemplo anim"><div class="ei"><svg viewBox="0 0 24 24" fill="none" stroke="#39FF14" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${e.i}</svg></div><div class="et">${e.t}</div><div class="ed">${e.d}</div></div>`).join('')}
          </div>
        </div>
        <div class="barra-claim anim">Sin límite de piezas gráficas y digitales: el límite lo pone la bolsa de horas de cada rol.</div>`,
      story: { fondo: 'img/reto1-b.jpg', html: `
        <span class="h-kicker h-anim">Lo que produce el equipo mes a mes</span>
        <h2 class="h-titulo h-anim" style="font-size:1.7rem">Ejemplos de contenido</h2>
        <div class="h-linea h-anim"></div>
        <div class="h-lista h-anim">
          <div class="h-item"><span>🖼️ <b>Pieza plana</b> · post estático para feed, historia o banner.</span></div>
          <div class="h-item"><span>🗂️ <b>Galería o carrusel</b> · hasta 5 láminas.</span></div>
          <div class="h-item"><span>🎬 <b>Reel con voz IA</b> · hasta 30 s con música y textos.</span></div>
          <div class="h-item"><span>🎙️ <b>Contenido de expertos</b> · entrevistas y pódcast.</span></div>
          <div class="h-item"><span>📸 <b>Producto</b> · fotos, fichas, flyers y catálogos.</span></div>
        </div>` },
    },

    tiempos: {
      deck: `
        <div class="cabecera"><div class="kicker anim">Cómo se consumen las horas del equipo</div><img class="logo-dl" src="${LOGO}" alt=""></div>
        <div class="lienzo" style="padding-top:7.5cqi;padding-bottom:6cqi">
          <h2 class="titulo anim" style="font-size:3.4cqi">Tiempos estimados de creación de contenido</h2>
          <div class="linea-v anim" style="margin:1.2cqi 0 1.8cqi"></div>
          <table class="tabla-t anim">
            <thead><tr><th>Pieza</th><th>Qué incluye</th><th>Tiempo estimado</th></tr></thead>
            <tbody>
              <tr><td>Imagen plana (post estático, un formato)</td><td>Diseño sobre línea gráfica aprobada</td><td>30 min a 1 h</td></tr>
              <tr><td>Adaptación de formato (feed, historia, banner)</td><td>Misma pieza en otra proporción</td><td>20 min</td></tr>
              <tr><td>Carrusel o galería (hasta 5 láminas)</td><td>Diseño de secuencia con copy incluido</td><td>2 h</td></tr>
              <tr><td>Historia o pieza animada (hasta 15 s)</td><td>Motion sencillo sobre pieza gráfica</td><td>2 h</td></tr>
              <tr><td>Reel o video corto sin voz (hasta 30 s)</td><td>Edición de material del cliente o generado con IA, música y textos</td><td>3 h</td></tr>
              <tr><td>Video de 30 s con voz</td><td>Guion corto, voz generada con IA, música y montaje</td><td>4 h</td></tr>
              <tr><td>Video de 60 a 90 s con personajes y voz (tipo retos)</td><td>Guion, storyboard, generación de imagen y video, voz y montaje</td><td>12 h</td></tr>
              <tr><td>Pieza impresa (flyer, ficha, pendón)</td><td>Diseño y arte final listo para impresión</td><td>3 h</td></tr>
              <tr><td>Copy para publicación</td><td>Texto, llamado a la acción y hashtags</td><td>15 min</td></tr>
              <tr><td>Guion de video</td><td>Estructura, diálogo o narración y notas de dirección</td><td>40 min</td></tr>
              <tr><td>Ajuste sobre pieza entregada</td><td>Cada ronda de cambios se registra por separado</td><td>10 min mínimo</td></tr>
            </tbody>
          </table>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.4cqi 3cqi;margin-top:1.4cqi">
            <div class="check anim" style="font-size:1.1cqi">Tiempos base por pieza, sin contar rondas de ajustes. Cada ajuste equivale a 10 minutos como mínimo.</div>
            <div class="check anim" style="font-size:1.1cqi">El seguimiento de tiempos se hace en Asana y se entrega un reporte de consumo mensual de horas por rol.</div>
          </div>
        </div>
        <div class="barra-claim anim">Las horas se descuentan de la dedicación mensual de cada rol; lo que exceda la bolsa se cotiza aparte.</div>`,
      story: { fondo: 'img/reto1-c.jpg', html: `
        <span class="h-kicker h-anim">Cómo se consumen las horas del equipo</span>
        <h2 class="h-titulo h-anim" style="font-size:1.7rem">Tiempos estimados de creación</h2>
        <div class="h-linea h-anim"></div>
        <div class="h-lista h-anim">
          <div class="h-item"><span><b>Imagen plana</b> · 30 min a 1 h</span></div>
          <div class="h-item"><span><b>Carrusel</b> (hasta 5 láminas) · 2 h</span></div>
          <div class="h-item"><span><b>Reel con voz IA</b> (30 s) · 3–4 h</span></div>
          <div class="h-item"><span><b>Video tipo reto</b> (60–90 s) · 12 h</span></div>
          <div class="h-item"><span><b>Pieza impresa</b> · 3 h</span></div>
        </div>
        <p class="h-sub h-anim" style="font-size:.78rem;color:var(--gris-2)">Seguimiento en Asana; lo que exceda la bolsa de horas se cotiza aparte.</p>` },
    },

    cierre: {
      deck: `
        <div class="estrellas"></div>
        <img class="logo-dl grande" src="${LOGO}" alt="" style="position:absolute;top:4cqi;right:6cqi">
        <div class="lienzo s-cierre">
          <h2 class="titulo anim">¿Listos para llevar<br>estas historias al aire<span class="v">?</span></h2>
          <div class="pasos-4">
            <div class="paso anim"><div class="pn">1</div><div class="pt">Reunión de kickoff</div><div class="pd">Revisamos objetivos y accesos.</div></div>
            <div class="paso anim"><div class="pn">2</div><div class="pt">Elección de plan</div><div class="pd">Básico o Integral, para los 2 sitios.</div></div>
            <div class="paso anim"><div class="pn">3</div><div class="pt">Aprobación y contrato</div><div class="pd">Firma del acuerdo a 12 meses.</div></div>
            <div class="paso anim"><div class="pn">4</div><div class="pt">¡Comenzamos!</div><div class="pd">Onboarding y primer informe.</div></div>
          </div>
          <div class="contacto anim"><b>Contáctanos:</b> <a href="mailto:${CONTACTO}">${CONTACTO}</a></div>
        </div>
        <div class="barra-claim anim">IN DATA WE TRUST — ${WEB}</div>`,
      story: { fondo: 'img/reto3-b.jpg', html: `
        <span class="h-kicker h-anim">Hablemos</span>
        <h2 class="h-titulo h-anim">¿Listos para llevar estas historias al aire<span class="v">?</span></h2>
        <div class="h-linea h-anim"></div>
        <div class="h-lista h-anim">
          <div class="h-item"><span class="hn">1</span><span><b>Kickoff</b> · objetivos y accesos</span></div>
          <div class="h-item"><span class="hn">2</span><span><b>Elección de plan</b> · Básico o Integral</span></div>
          <div class="h-item"><span class="hn">3</span><span><b>Contrato</b> · acuerdo a 12 meses</span></div>
          <div class="h-item"><span class="hn">4</span><span><b>¡Comenzamos!</b> · onboarding e informe</span></div>
        </div>
        <p class="h-sub h-anim" style="margin-top:.8rem">IN DATA WE TRUST — <b>${WEB}</b></p>` },
    },

    ejemploCarrusel: {
      deck: `
        <div class="cabecera"><div class="kicker anim">Ejemplo real · Así se ve en redes</div><img class="logo-dl" src="${LOGO}" alt=""></div>
        <div class="lienzo" style="padding-top:6cqi">
          <h2 class="titulo anim" style="font-size:2.5cqi">Carrusel educativo para el feed</h2>
          <div class="linea-v anim" style="margin:.9cqi 0 1.6cqi"></div>
          <div class="redes-split">
            <div class="ig-post anim">
              <div class="ig-head">
                <div class="ig-avatar"><img src="img/clientes/eternit.png" alt=""></div>
                <div class="ig-user"><b>eternit.colombia</b><span>Publicidad</span></div>
                <div class="ig-more">•••</div>
              </div>
              <div class="ig-media" data-igcarousel>
                <div class="ig-carousel">
                  <img class="on" src="img/carrusel/1.jpg" alt="Portada">
                  <img src="img/carrusel/2.jpg" alt="Tip 1">
                  <img src="img/carrusel/3.jpg" alt="Tip 2">
                  <img src="img/carrusel/4.jpg" alt="Cierre">
                </div>
                <span class="ig-counter"><b class="cur">1</b>/4</span>
                <div class="ig-chev l">‹</div><div class="ig-chev r">›</div>
                <div class="ig-dots"><i class="on"></i><i></i><i></i><i></i></div>
              </div>
              <div class="ig-actions">${IG_HEART}${IG_COMMENT}${IG_SHARE}<span class="save">${IG_SAVE}</span></div>
              <div class="ig-likes">2.847 Me gusta</div>
              <div class="ig-cap"><b>eternit.colombia</b> 💧 El Fenómeno del Niño llegó y cada gota cuenta. Desliza para ver 2 tips simples… <span class="mas">más</span></div>
              <div class="ig-time">Hace 2 horas</div>
            </div>
            <div class="redes-copy anim">
              <div class="rc-k">Copy sugerido para la publicación</div>
              <div class="rc-body">
                <p>💧 El Fenómeno del Niño llegó y cada gota cuenta.</p>
                <p>En Eternit sabemos que cuidar el agua empieza en casa, con acciones simples que hacen la diferencia:</p>
                <p>1️⃣ Repara las fugas en grifos y tuberías: una gotera desperdicia litros cada día.<br>2️⃣ Reutiliza el agua lluvia para regar tus plantas o lavar pisos.</p>
                <p>Pequeñas acciones hoy aseguran el agua del mañana. 🌱 <b>¡Cuidemos juntos cada gota!</b></p>
              </div>
              <div class="rc-tags">#ConstruimosEnEvolución #AhorraAgua #FenómenoDelNiño #Eternit #CuidaElAgua</div>
              <div class="rc-meta">Carrusel de 4 láminas · 1080×1080 · Feed e Historias · Facebook e Instagram</div>
            </div>
          </div>
        </div>`,
      story: { estrellas: true, html: `
        <span class="h-kicker h-anim">Ejemplo real · Así se ve en redes</span>
        <h2 class="h-titulo h-anim" style="font-size:1.5rem">Carrusel educativo</h2>
        <div class="ig-post h-anim">
          <div class="ig-head">
            <div class="ig-avatar"><img src="img/clientes/eternit.png" alt=""></div>
            <div class="ig-user"><b>eternit.colombia</b><span>Publicidad</span></div>
            <div class="ig-more">•••</div>
          </div>
          <div class="ig-media" data-igcarousel>
            <div class="ig-carousel">
              <img class="on" src="img/carrusel/1.jpg" alt=""><img src="img/carrusel/2.jpg" alt=""><img src="img/carrusel/3.jpg" alt=""><img src="img/carrusel/4.jpg" alt="">
            </div>
            <span class="ig-counter"><b class="cur">1</b>/4</span>
            <div class="ig-dots"><i class="on"></i><i></i><i></i><i></i></div>
          </div>
          <div class="ig-actions">${IG_HEART}${IG_COMMENT}${IG_SHARE}<span class="save">${IG_SAVE}</span></div>
          <div class="ig-cap"><b>eternit.colombia</b> 💧 Cada gota cuenta durante el Fenómeno del Niño: repara fugas y reutiliza el agua lluvia. <b>¡Cuidemos juntos cada gota!</b></div>
        </div>
        <p class="rc-tags h-anim" style="font-size:.74rem;margin-top:.6rem">#ConstruimosEnEvolución #AhorraAgua #Eternit</p>` },
    },

    ejemploVideo: {
      deck: `
        <div class="cabecera"><div class="kicker anim">Ejemplo real · Así se ve en redes</div><img class="logo-dl" src="${LOGO}" alt=""></div>
        <div class="lienzo" style="padding-top:6cqi">
          <h2 class="titulo anim" style="font-size:2.5cqi">Video para el feed · «El techo de Marta»</h2>
          <div class="linea-v anim" style="margin:.9cqi 0 1.6cqi"></div>
          <div class="redes-split">
            <div class="ig-post anim">
              <div class="ig-head">
                <div class="ig-avatar"><img src="img/clientes/eternit.png" alt=""></div>
                <div class="ig-user"><b>eternit.colombia</b><span>Publicidad</span></div>
                <div class="ig-more">•••</div>
              </div>
              <div class="ig-media video">
                <video src="video/reto3.mp4" poster="img/poster-reto3.jpg" muted loop playsinline preload="metadata" data-igvideo></video>
                <span class="ig-badge">${IG_FILM} Video</span>
                <span class="ig-sound" title="Activar sonido">${IG_SOUND}</span>
              </div>
              <div class="ig-actions">${IG_HEART}${IG_COMMENT}${IG_SHARE}<span class="save">${IG_SAVE}</span></div>
              <div class="ig-likes">4.129 reproducciones</div>
              <div class="ig-cap"><b>eternit.colombia</b> 🏠 «Terminé pagando dos veces el mismo techo. La tercera vez, pregunté bien.» … <span class="mas">más</span></div>
              <div class="ig-time">Hace 5 horas</div>
            </div>
            <div class="redes-copy anim">
              <div class="rc-k">Copy sugerido para la publicación</div>
              <div class="rc-body">
                <p>🏠 «Terminé pagando dos veces el mismo techo. La tercera vez, pregunté bien.» — Marta</p>
                <p>La historia de Marta es la de miles de familias que descubrieron que un buen techo lo cambia todo. Una pieza <b>100 % hecha con IA</b>: imagen, animación y voz.</p>
                <p>Sin metal por dentro, no se oxida, con confort térmico y acústico. <b>Cubiertas Eternit. Para no volver a empezar.</b></p>
              </div>
              <div class="rc-tags">#ConstruimosEnEvolución #CubiertasEternit #HistoriasQueInspiran #Eternit #TechoSeguro</div>
              <div class="rc-meta">Video para feed y Reels · voz generada con IA · música y subtítulos · 100 % IA</div>
            </div>
          </div>
        </div>`,
      story: { estrellas: true, html: `
        <span class="h-kicker h-anim">Ejemplo real · Así se ve en redes</span>
        <h2 class="h-titulo h-anim" style="font-size:1.5rem">Video · «El techo de Marta»</h2>
        <div class="ig-post h-anim">
          <div class="ig-head">
            <div class="ig-avatar"><img src="img/clientes/eternit.png" alt=""></div>
            <div class="ig-user"><b>eternit.colombia</b><span>Publicidad</span></div>
            <div class="ig-more">•••</div>
          </div>
          <div class="ig-media video">
            <video src="video/reto3.mp4" poster="img/poster-reto3.jpg" muted loop playsinline preload="metadata" data-igvideo></video>
            <span class="ig-badge">${IG_FILM} Video</span>
            <span class="ig-sound" title="Activar sonido">${IG_SOUND}</span>
          </div>
          <div class="ig-actions">${IG_HEART}${IG_COMMENT}${IG_SHARE}<span class="save">${IG_SAVE}</span></div>
          <div class="ig-cap"><b>eternit.colombia</b> 🏠 «Terminé pagando dos veces el mismo techo…» Cubiertas Eternit. <b>Para no volver a empezar.</b></div>
        </div>
        <p class="rc-tags h-anim" style="font-size:.74rem;margin-top:.6rem">#ConstruimosEnEvolución #CubiertasEternit #Eternit</p>` },
    },
  };

  function retoDeck(o) {
    return {
      video: o.video,
      deck: `
        <div class="cabecera"><div class="kicker anim">${o.kicker}</div></div>
        <div class="lienzo s-reto">
          <h2 class="titulo anim">${o.titulo}</h2>
          <div class="reto-fmt anim">${o.formato.replace('100 % IA', '<b>100 % IA</b>')}</div>
          <div class="cont">
            <div class="col-izq">
              <div class="concepto-lbl anim">El concepto</div>
              <p class="concepto-txt anim">${o.concepto}</p>
              <div class="quote anim"><div class="q">${o.quote}</div><div class="qa">${o.qa}</div></div>
              <div class="concepto-lbl anim">Lo que ve el cliente</div>
              <div class="checks">${o.checks.map(c => `<div class="check anim">${c}</div>`).join('')}</div>
            </div>
            <div class="col-der">
              <div class="video-reto anim" data-video>
                <video src="${o.video}" poster="${o.poster}" playsinline preload="none"></video>
                <span class="badge">${o.badge}</span>
                <button class="play" aria-label="Reproducir"><span class="circ">▶</span></button>
              </div>
            </div>
          </div>
        </div>
        <div class="barra-claim anim">${o.claim}</div>`,
      story: {
        fondo: o.hero, html: `
        <span class="h-kicker h-anim">${o.kicker}</span>
        <h2 class="h-titulo h-anim" style="font-size:1.6rem">${o.titulo}</h2>
        <div class="h-fmt h-anim">${o.formato}</div>
        <div class="h-video-card h-anim">
          <div class="h-video" data-video><video src="${o.video}" poster="${o.poster}" playsinline preload="none"></video><button class="play" aria-label="Reproducir"><span class="circ">▶</span></button><span class="h-vbadge">${o.badge}</span></div>
        </div>
        <div class="h-lqc h-anim">El concepto</div>
        <p class="h-concepto h-anim">${o.concepto}</p>
        <div class="h-quote-box h-anim"><p class="h-quote">${o.quote}</p><span class="h-qa">${o.qa}</span></div>
        <div class="h-lqc h-anim">Lo que ve el cliente</div>
        <div class="h-lista h-anim">${o.checks.map(c => `<div class="h-item"><span>${c}</span></div>`).join('')}</div>
        <div class="h-claim h-anim">${o.claim}</div>` },
    };
  }

  const ORDEN = ['portada', 'weare', 'quienes', 'presencia', 'clientes', 'agencia360', 'agilidad', 'acreditados', 'caso', 'concepto', 'idea', 'reto1', 'reto2', 'reto3', 'seccionEjemplos', 'ejemplos', 'ejemploCarrusel', 'ejemploVideo', 'seccion02', 'alcance', 'tiempos', 'cierre'];
  const slides = ORDEN.filter(id => DEFS[id]);

  /* ============================================================
     RENDER DECK
     ============================================================ */
  const marco = $('#deck-marco');
  let idx = 0;

  slides.forEach(id => {
    const s = document.createElement('section');
    s.className = `slide s-${id}`;
    s.dataset.id = id;
    s.innerHTML = DEFS[id].deck;
    marco.appendChild(s);
  });

  const puntos = $('#puntos');
  slides.forEach((id, i) => {
    const b = document.createElement('button');
    b.className = 'punto-nav';
    b.setAttribute('aria-label', `Slide ${i + 1}`);
    b.addEventListener('click', () => irA(i));
    puntos.appendChild(b);
  });

  function pausarVideos(raiz) {
    $$('video', raiz).forEach(v => v.pause());
    $$('[data-video], .h-video', raiz).forEach(m => m.classList.remove('reproduciendo'));
  }

  function irA(n) {
    idx = Math.max(0, Math.min(slides.length - 1, n));
    $$('.slide', marco).forEach((s, i) => {
      const activo = i === idx;
      if (!activo && s.classList.contains('activo')) pausarVideos(s);
      s.classList.toggle('activo', activo);
    });
    $$('.punto-nav', puntos).forEach((p, i) => p.classList.toggle('activo', i === idx));
    $('#contador').textContent = `${String(idx + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    $('#prog').style.width = ((idx + 1) / slides.length * 100) + '%';
    const igv = marco.querySelector('.slide.activo video[data-igvideo]');
    if (igv) igv.play().catch(() => {});
  }

  marco.addEventListener('click', (e) => {
    if (document.body.dataset.modo !== 'desktop') return;
    if (e.target.closest('a,button,video,.video-reto,.puntos')) return;
    const r = marco.getBoundingClientRect();
    irA((e.clientX - r.left) < r.width * 0.18 ? idx - 1 : idx + 1);
  });

  /* puntos de navegación: aparecen solo al acercar el mouse a la zona inferior */
  marco.addEventListener('mousemove', (e) => {
    const r = marco.getBoundingClientRect();
    marco.classList.toggle('nav-visible', (e.clientY - r.top) > r.height * 0.80);
  });
  marco.addEventListener('mouseleave', () => marco.classList.remove('nav-visible'));

  document.addEventListener('keydown', (e) => {
    if (document.body.dataset.modo !== 'desktop') return;
    if (e.key === ' ' && (e.target.tagName === 'VIDEO' || marco.querySelector('.slide.activo [data-video].reproduciendo'))) return;
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); irA(idx + 1); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); irA(idx - 1); }
    if (e.key === 'Home') irA(0);
    if (e.key === 'End') irA(slides.length - 1);
  });

  let wheelLock = 0, dPrev = 0, tPrev = 0;
  document.addEventListener('wheel', (e) => {
    if (document.body.dataset.modo !== 'desktop') return;
    const t = Date.now(), d = Math.abs(e.deltaY);
    const nuevo = d > dPrev * 1.2 || t - tPrev > 200;
    dPrev = d; tPrev = t;
    if (d < 24 || !nuevo || t - wheelLock < 900) return;
    wheelLock = t; irA(idx + (e.deltaY > 0 ? 1 : -1));
  }, { passive: true });

  $$('[data-video]', marco).forEach(m => {
    const v = $('video', m);
    $('.play', m).addEventListener('click', () => { m.classList.add('reproduciendo'); v.controls = true; v.play(); });
    v.addEventListener('play', () => m.classList.add('reproduciendo'));
    v.addEventListener('pause', () => { if (v.currentTime < v.duration) m.classList.remove('reproduciendo'); });
  });

  /* ============================================================
     RENDER HISTORIAS (móvil)
     ============================================================ */
  const cont = $('#historias');
  let hIdx = 0;

  const prog = document.createElement('div');
  prog.className = 'h-prog';
  prog.innerHTML = slides.map(() => '<span class="h-seg"><span class="f"></span></span>').join('');
  cont.appendChild(prog);

  const cab = document.createElement('div');
  cab.className = 'h-cab';
  cab.innerHTML = `<img src="${LOGO}" alt="DataLab"><span class="paso" id="h-paso"></span>`;
  cont.appendChild(cab);

  slides.forEach(id => {
    const def = DEFS[id].story;
    const p = document.createElement('section');
    p.className = `panel-h ph-${id}`;
    if (def.video) {
      p.innerHTML = `
        <div class="h-video" data-video><video src="${def.video}" poster="${def.poster}" playsinline preload="none"></video>
          <button class="play" aria-label="Reproducir"><span class="circ">▶</span></button></div>
        <div class="h-scrim" style="pointer-events:none"></div>
        <div class="h-cont">${def.html}</div>`;
    } else {
      p.innerHTML = `
        ${def.fondo ? `<img class="h-fondo" src="${def.fondo}" alt="">` : ''}
        ${def.estrellas ? '<div class="h-estrellas"></div>' : ''}
        <div class="h-scrim"></div>
        <div class="h-cont">${def.html}</div>`;
    }
    cont.appendChild(p);
  });

  const zonas = document.createElement('div');
  zonas.className = 'h-zonas';
  zonas.innerHTML = '<button aria-label="Anterior"></button><button aria-label="Siguiente"></button>';
  cont.appendChild(zonas);
  const [zI, zD] = $$('button', zonas);
  zI.addEventListener('click', () => irH(hIdx - 1));
  zD.addEventListener('click', () => irH(hIdx + 1));

  const firma = document.createElement('div');
  firma.className = 'h-firma';
  firma.innerHTML = `<img src="${LOGO}" alt=""><span style="font-size:.72rem;color:var(--gris)">Propuesta para Eternit</span><a class="cta" href="mailto:${CONTACTO}">Contactar</a>`;
  cont.appendChild(firma);

  let tx = null, ty = null;
  cont.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  cont.addEventListener('touchend', (e) => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) irH(hIdx + (dx < 0 ? 1 : -1));
    tx = ty = null;
  }, { passive: true });

  function irH(n) {
    hIdx = Math.max(0, Math.min(slides.length - 1, n));
    $$('.panel-h', cont).forEach((p, i) => {
      const activo = i === hIdx;
      if (!activo && p.classList.contains('activo')) pausarVideos(p);
      p.classList.toggle('activo', activo);
    });
    $$('.h-seg', prog).forEach((s, i) => { s.classList.toggle('hecho', i < hIdx); s.classList.toggle('activo', i === hIdx); });
    $('#h-paso').textContent = `${hIdx + 1} / ${slides.length}`;
    const igv = cont.querySelector('.panel-h.activo video[data-igvideo]');
    if (igv) igv.play().catch(() => {});
  }

  $$('.h-video', cont).forEach(m => {
    const v = $('video', m), btn = $('.play', m);
    if (!v || !btn) return;
    btn.addEventListener('click', () => { m.classList.add('reproduciendo'); v.controls = true; v.play(); });
    v.addEventListener('play', () => m.classList.add('reproduciendo'));
    v.addEventListener('pause', () => { if (v.currentTime < v.duration) m.classList.remove('reproduciendo'); });
  });

  /* ============================================================
     BIENVENIDA + WALKTHROUGH
     ============================================================ */
  const carga = $('#carga');
  let msgIdx = 0;
  const MSJ = ['Cargando las tres historias', 'Preparando los videos con IA', 'Dando los últimos toques'];
  const det = $('#carga-det');
  const rot = setInterval(() => {
    msgIdx++;
    if (msgIdx >= MSJ.length) return;
    det.style.opacity = 0;
    setTimeout(() => { det.textContent = MSJ[msgIdx]; det.style.opacity = 1; }, 300);
  }, 1000);
  det.textContent = MSJ[0];

  setTimeout(() => {
    clearInterval(rot);
    carga.classList.add('oculto');
    setTimeout(() => carga.remove(), 800);
    let visto = null;
    try { visto = localStorage.getItem('dl_eternit_tour'); } catch (e) {}
    if (!visto) mostrarTour();
  }, 3100);

  function pasosTour() {
    if (document.body.dataset.modo === 'movil') {
      return [
        { ico: '👆', tit: 'Navega con un toque', txt: 'Toca el <b>lado derecho</b> para avanzar y el <b>izquierdo</b> para volver. También puedes deslizar.' },
        { ico: '🎬', tit: 'Mira los videos', txt: 'En los tres retos, <b>toca el video</b> para reproducir la pieza generada con IA.' },
        { ico: '💬', tit: 'Hablemos', txt: 'Abajo tienes el botón para <b>contactar a DataLab</b> en cualquier momento.' },
      ];
    }
    return [
      { ico: '🖱️', tit: 'Navega con un clic', txt: 'Haz <b>clic en la pantalla</b> para avanzar, o usa las <b>flechas ← → del teclado</b>. El borde izquierdo te devuelve.' },
      { ico: '🎬', tit: 'Reproduce las historias', txt: 'En los tres retos encontrarás el <b>video real</b> generado con IA: dale play para verlo.' },
      { ico: '⚪', tit: 'Salta a cualquier parte', txt: 'Los <b>puntos de abajo</b> marcan tu avance; haz clic para ir directo a un slide.' },
      { ico: '📄', tit: 'Compártela', txt: 'Arriba puedes <b>descargar la propuesta en PDF</b> o verla en <b>versión móvil</b>.' },
    ];
  }

  function mostrarTour() {
    if ($('.tour')) return;
    const pasos = pasosTour();
    let pi = 0;
    const t = document.createElement('div');
    t.className = 'tour';
    t.innerHTML = `<div class="tour-card"><span class="tour-ico"></span><div class="tour-tit"></div><p class="tour-txt"></p>
      <div class="tour-pasos">${pasos.map(() => '<span></span>').join('')}</div>
      <div class="tour-btns"><button class="tour-b sec" data-x>Saltar</button><button class="tour-b pri" data-n>Siguiente</button></div></div>`;
    document.body.appendChild(t);
    const pintar = () => {
      const p = pasos[pi];
      $('.tour-ico', t).textContent = p.ico; $('.tour-tit', t).textContent = p.tit; $('.tour-txt', t).innerHTML = p.txt;
      $$('.tour-pasos span', t).forEach((s, i) => s.classList.toggle('activo', i === pi));
      $('[data-n]', t).textContent = pi === pasos.length - 1 ? '¡Empezar! 🚀' : 'Siguiente';
      $('[data-x]', t).style.visibility = pi === pasos.length - 1 ? 'hidden' : 'visible';
    };
    const cerrar = () => { try { localStorage.setItem('dl_eternit_tour', '1'); } catch (e) {} t.remove(); };
    $('[data-n]', t).addEventListener('click', () => { if (pi === pasos.length - 1) { cerrar(); return; } pi++; pintar(); });
    $('[data-x]', t).addEventListener('click', cerrar);
    pintar();
  }
  $('#ayuda').addEventListener('click', mostrarTour);

  /* ---------- Toggle modo + compartir ---------- */
  const toggle = $('#modo-toggle');
  const pintarToggle = () => { toggle.textContent = document.body.dataset.modo === 'desktop' ? '📱 Ver versión móvil' : '🖥️ Ver versión desktop'; };
  toggle.addEventListener('click', () => {
    modo = document.body.dataset.modo === 'desktop' ? 'movil' : 'desktop';
    document.body.dataset.modo = modo;
    pintarToggle(); pausarVideos(document);
    if (modo === 'desktop') irA(idx); else irH(hIdx);
  });
  pintarToggle();

  const toast = (m) => { const t = $('#toast'); t.textContent = m; t.classList.add('visible'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('visible'), 2400); };

  /* ---------- Descargar PDF ---------- */
  const cargarScript = (src) => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error(src)); document.head.appendChild(s); });
  let libs = null;
  async function pdf() {
    const btn = $('#pdf');
    if (btn.dataset.busy) return; btn.dataset.busy = '1';
    const ov = document.createElement('div');
    ov.className = 'pdf-overlay';
    ov.innerHTML = '<div class="pdf-caja"><span class="pdf-spin"></span><span><b>Generando tu PDF…</b><br><span id="pdf-est" style="color:var(--gris)">Preparando</span></span></div>';
    document.body.appendChild(ov);
    const est = $('#pdf-est', ov);
    try {
      if (!window.htmlToImage) await cargarScript('js/vendor/html-to-image.js');
      if (!window.jspdf) await cargarScript('js/vendor/jspdf.umd.min.js');
      const hti = window.htmlToImage, jsPDF = window.jspdf.jsPDF;
      pausarVideos(document);
      const sl = $$('.slide', marco), rect = marco.getBoundingClientRect();
      const ratio = Math.max(2, 2400 / rect.width);
      const PAG = [338.7, 190.5];
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: PAG, compress: true });
      let fuente = ''; try { fuente = await hti.getFontEmbedCSS(marco); } catch (e) {}
      for (let i = 0; i < sl.length; i++) {
        est.textContent = `Slide ${i + 1} de ${sl.length}`;
        const s = sl[i]; s.classList.add('pdf-captura');
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        const swaps = [];
        $$('video', s).forEach(v => { const im = document.createElement('img'); im.src = v.poster; im.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover'; v.style.visibility = 'hidden'; v.parentElement.insertBefore(im, v); swaps.push({ v, im }); });
        try {
          const jpg = await hti.toJpeg(s, { pixelRatio: ratio, quality: .92, fontEmbedCSS: fuente, backgroundColor: '#0a0a0a' });
          if (i > 0) doc.addPage(PAG, 'landscape');
          doc.addImage(jpg, 'JPEG', 0, 0, PAG[0], PAG[1], undefined, 'FAST');
        } finally { swaps.forEach(({ v, im }) => { im.remove(); v.style.visibility = ''; }); s.classList.remove('pdf-captura'); }
      }
      est.textContent = 'Guardando…';
      doc.save('DataLab-Eternit-Tres-retos-tres-historias.pdf');
    } catch (e) { console.error(e); alert('No se pudo generar el PDF. Usa Ctrl+P como alternativa.'); }
    finally { delete btn.dataset.busy; ov.remove(); }
  }
  $('#pdf').addEventListener('click', pdf);

  /* ---------- Mockups de redes: carruseles auto y sonido ---------- */
  $$('[data-igcarousel]').forEach(m => {
    const imgs = $$('.ig-carousel img', m);
    const dots = $$('.ig-dots i', m);
    const cur = $('.ig-counter .cur', m);
    if (imgs.length < 2) return;
    let i = 0;
    const go = (n) => {
      i = (n + imgs.length) % imgs.length;
      imgs.forEach((im, k) => im.classList.toggle('on', k === i));
      dots.forEach((d, k) => d.classList.toggle('on', k === i));
      if (cur) cur.textContent = i + 1;
    };
    const rearmar = () => { clearInterval(m._iv); m._iv = setInterval(() => go(i + 1), 2800); };
    const cl = $('.ig-chev.l', m), cr = $('.ig-chev.r', m);
    if (cl) cl.addEventListener('click', (e) => { e.stopPropagation(); go(i - 1); rearmar(); });
    if (cr) cr.addEventListener('click', (e) => { e.stopPropagation(); go(i + 1); rearmar(); });
    dots.forEach((d, k) => d.addEventListener('click', (e) => { e.stopPropagation(); go(k); rearmar(); }));
    rearmar();
  });
  $$('.ig-sound').forEach(btn => btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const media = btn.closest('.ig-media');
    const v = $('video', media);
    if (!v) return;
    v.muted = !v.muted;
    media.classList.toggle('sound-on', !v.muted);
    if (!v.muted) v.play().catch(() => {});
  }));
  $$('video[data-igvideo]').forEach(v => v.addEventListener('click', (e) => {
    e.stopPropagation();
    if (v.paused) v.play().catch(() => {}); else v.pause();
  }));

  /* ---------- Inicio ---------- */
  irA(0); irH(0);
})();
