'use strict';

/* ==========================================================
   WILL STORE — main.js
   Proyecto 100% HTML + CSS + JavaScript (sin backend).
   - Productos identificados y organizados en un solo array
   - Precios editables en un bloque claramente marcado
   - Carrito, filtros, busqueda, tallas y checkout funcionales
   - Imagenes cargadas desde archivos normales en la carpeta imagenes/
   ========================================================== */

(function () {
  const WHATSAPP_NUMBER = '573226102028';
  const GALLERY_SIZES = [35, 36, 37, 38, 39, 40, 41, 42, 43];

  const currencyFmt = new Intl.NumberFormat('es-CO', {
    style: 'currency', currency: 'COP', maximumFractionDigits: 0
  });

  /* ============================================================
     ==============================
     PRECIOS DE LOS PRODUCTOS
     ==============================
     Cada producto tiene su precio en la propiedad "price".
     Si el producto esta en oferta, agrega "oldPrice" con el
     precio anterior (o "null" si no aplica).
     Modifica los valores de aqui para actualizar precios.
     ============================================================ */
  const PRODUCTS = [
    { id:'g001', name:'Air Jordan 6 Infrared', price:100000, oldPrice:null, image:'g001', cat:['todos','galeria','unisex','vendido'], sizes:GALLERY_SIZES, color:null },
    { id:'g002', name:'Sandalias Coach', price:65000, oldPrice:null, image:'g002', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g003', name:'Air Jordan 14 Negras', price:90000, oldPrice:null, image:'g003', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g004', name:'Air Jordan 14 Amarillas', price:90000, oldPrice:null, image:'g004', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g005', name:'Sandalias Prada', price:80000, oldPrice:null, image:'g005', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g006', name:'Air Jordan 14 Blancas', price:110000, oldPrice:null, image:'g006', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g007', name:'Sandalias Chanel', price:65000, oldPrice:null, image:'g007', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g008', name:'Sandalias Miu Miu', price:65000, oldPrice:null, image:'g008', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g009', name:'Air Jordan Roja', price:80000, oldPrice:null, image:'g009', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g010', name:'Sandalias Calvin Klein', price:65000, oldPrice:null, image:'g010', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g011', name:'Sandalias Gucci', price:80000, oldPrice:null, image:'g011', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g012', name:'Sandalias Calvin Klein', price:65000, oldPrice:null, image:'g012', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g013', name:'Sandalia LV Forrada', price:80000, oldPrice:null, image:'g013', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g014', name:'Sandalia LV Forrada', price:80000, oldPrice:null, image:'g014', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g015', name:'Sandalia Louis Vuitton', price:65000, oldPrice:null, image:'g015', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g016', name:'Sandalias Prada', price:65000, oldPrice:null, image:'g016', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g017', name:'Air Jordan Retro 5 Azules', price:110000, oldPrice:null, image:'g017', cat:['todos','galeria','unisex','vendido'], sizes:GALLERY_SIZES, color:null },
    { id:'g018', name:'Air Jordan Retro 5 Azul Oscuro', price:110000, oldPrice:null, image:'g018', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g019', name:'Air Jordan Retro 5', price:110000, oldPrice:null, image:'g019', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g020', name:'Air Jordan Retro 5 Blanca', price:110000, oldPrice:null, image:'g020', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g021', name:'Air Jordan Retro 5 Cafe', price:110000, oldPrice:null, image:'g021', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g022', name:'Air Jordan Retro 5 Dorada', price:110000, oldPrice:null, image:'g022', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g023', name:'Air Jordan Retro 5 Morada', price:110000, oldPrice:null, image:'g023', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g024', name:'Air Jordan Retro 5 Negras', price:110000, oldPrice:null, image:'g024', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g025', name:'Adidas Samba Plataforma', price:85000, oldPrice:null, image:'g025', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g026', name:'Adidas Samba Blancas', price:90000, oldPrice:null, image:'g026', cat:['todos','galeria','unisex','vendido'], sizes:GALLERY_SIZES, color:null },
    { id:'g027', name:'New Balance 530', price:90000, oldPrice:null, image:'g027', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g028', name:'Louis Vuitton Trainer', price:100000, oldPrice:null, image:'g028', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g029', name:'Adidas Plataforma', price:100000, oldPrice:null, image:'g029', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g030', name:'Nike V2K Dama', price:110000, oldPrice:null, image:'g030', cat:['todos','galeria','unisex','vendido'], sizes:GALLERY_SIZES, color:null },
    { id:'g031', name:'Nike V2K', price:110000, oldPrice:null, image:'g031', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g032', name:'Nike V2K Dama', price:110000, oldPrice:null, image:'g032', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g033', name:'Air Jordan Retro 5 Rosas', price:110000, oldPrice:null, image:'g033', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g039', name:'Tenis Deportivo Todas las Tallas', price:85000, oldPrice:null, image:'g039', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g034', name:'Puma Cali Court Crema/Azul', price:90000, oldPrice:null, image:'g034', cat:['todos','galeria','nuevo','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g035', name:'Puma Cali Court Lila', price:90000, oldPrice:null, image:'g035', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g036', name:'Puma Caven 2.0 Blanco/Negro', price:85000, oldPrice:null, image:'g036', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g037', name:'Nike V2K Bronce', price:115000, oldPrice:130000, image:'g037', cat:['todos','galeria','oferta','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g038', name:'Nike V2K Negro/Blanco', price:115000, oldPrice:null, image:'g038', cat:['todos','galeria','vendido','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g040', name:'Puma Suede Mayu Cafe', price:90000, oldPrice:null, image:'g040', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g041', name:'Puma Suede Mayu Cafe', price:90000, oldPrice:null, image:'g041', cat:['todos','galeria','mujer'], sizes:GALLERY_SIZES, color:null },
    { id:'g042', name:'Puma Cali Court Gris', price:90000, oldPrice:null, image:'g042', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g043', name:'Puma Cali Court Crema/Azul', price:90000, oldPrice:null, image:'g043', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g044', name:'Puma Caven Negro', price:85000, oldPrice:null, image:'g044', cat:['todos','galeria','vendido','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g045', name:'Puma Cali Court Verde', price:90000, oldPrice:null, image:'g045', cat:['todos','galeria','nuevo','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g046', name:'Nike SB Dunk Low Gris', price:105000, oldPrice:null, image:'g046', cat:['todos','galeria','hombre'], sizes:GALLERY_SIZES, color:null },
    { id:'g047', name:'Nike SB Dunk Low Crema/Verde', price:110000, oldPrice:null, image:'g047', cat:['todos','galeria','nuevo','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g048', name:'Puma Cali Court Gris', price:90000, oldPrice:null, image:'g048', cat:['todos','galeria','unisex'], sizes:GALLERY_SIZES, color:null },
    { id:'g049', name:'Under Armour Tactica Kaki', price:110000, oldPrice:null, image:'g049', cat:['todos','galeria','hombre'], sizes:GALLERY_SIZES, color:null },
    { id:'g050', name:'On Running Cloudmonster', price:145000, oldPrice:165000, image:'g050', cat:['todos','galeria','oferta','nuevo','unisex'], sizes:GALLERY_SIZES, color:null },
  ];

  /* ============================================================
     IMAGENES DE LOS PRODUCTOS
     ==============================
     Cada producto carga su foto desde la carpeta "imagenes/"
     usando el nombre exacto indicado en su propiedad "image".
     Por ejemplo, image:'g001' carga el archivo imagenes/g001.jpg

     PARA CAMBIAR UNA FOTO:
     1) Ve a la carpeta "imagenes/" del proyecto.
     2) Reemplaza el archivo (ej: g001.jpg) por tu propia foto,
        dejando EXACTAMENTE el mismo nombre y extension .jpg.
     3) Guarda y listo, no hay que tocar nada mas.

     PARA AGREGAR UN PRODUCTO NUEVO:
     1) Sube tu foto a "imagenes/" con un nombre nuevo, ej: g051.jpg
     2) Agrega un producto nuevo en el array PRODUCTS de arriba con
        image:'g051'

     Si una imagen no existe o no carga, se muestra automaticamente
     un icono de zapatilla como respaldo (no se rompe el sitio).
     ============================================================ */
  const IMAGE_FOLDER = 'imagenes/';
  const IMAGE_EXT = '.jpg';

  /* -------- SVG shoe placeholder (fallback si falta una imagen) -------- */
  function shoeSVG(colorA, colorB, uid) {
    colorA = colorA || '#E10F35';
    colorB = colorB || '#FF2D87';
    return `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sneaker">
      <defs>
        <linearGradient id="g${uid}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${colorA}"/>
          <stop offset="100%" stop-color="${colorB}"/>
        </linearGradient>
      </defs>
      <path d="M15 135 C 30 110, 55 90, 90 82 C 112 78, 124 68, 138 56 C 152 45, 170 42, 182 49 C 189 54, 186 63, 193 70 C 210 66, 238 70, 258 88 C 272 102, 279 120, 279 135 L 279 150 C 279 157, 272 161, 264 161 L 34 161 C 23 161, 14 154, 15 140 Z" fill="url(#g${uid})"/>
      <path d="M90 82 C 112 78, 124 68, 138 56 C 152 45, 170 42, 182 49" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>
      <path d="M45 128 L 255 128" stroke="#000" stroke-width="7" stroke-linecap="round" opacity=".2"/>
      <path d="M34 161 C 34 171, 45 178, 68 178 L 248 178 C 266 178, 279 171, 279 159 L 279 150 L 34 150 Z" fill="#0A0A0C"/>
    </svg>`;
  }

  function productImageSrc(p) {
    return p.image ? `${IMAGE_FOLDER}${p.image}${IMAGE_EXT}` : '';
  }

  function buildMedia(p, uidSuffix) {
    const el = document.createElement('div');
    const src = productImageSrc(p);
    if (src) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = p.name;
      img.loading = 'lazy';
      img.onerror = () => { el.innerHTML = shoeSVG(p.color && p.color[0], p.color && p.color[1], p.id + uidSuffix); };
      el.appendChild(img);
    } else {
      el.innerHTML = shoeSVG(p.color && p.color[0], p.color && p.color[1], p.id + uidSuffix);
    }
    return el;
  }

  /* -------- State -------- */
  let activeFilter = 'todos';
  let searchTerm = '';
  const selectedSizes = {};
  const gallerySelectedSizes = {};
  let cart = loadCart();

  /* -------- Cart persistence -------- */
  function loadCart() {
    try {
      const raw = window.localStorage.getItem('ksport_cart');
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(it =>
        it && typeof it.id === 'string' &&
        PRODUCTS.some(p => p.id === it.id) &&
        Number.isInteger(it.qty) && it.qty > 0 && it.qty <= 20 &&
        Number.isInteger(it.size)
      );
    } catch (e) { return []; }
  }
  function saveCart() {
    try { window.localStorage.setItem('ksport_cart', JSON.stringify(cart)); } catch (e) {}
  }

  /* ============================================================
     CATALOGO PRINCIPAL (filtros por genero, nuevo, mas vendido, oferta)
     ============================================================ */
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');

  function matchesFilter(p) {
    if (activeFilter === 'todos') return true;
    return p.cat.includes(activeFilter);
  }
  function matchesSearch(p) {
    if (!searchTerm) return true;
    return p.name.toLowerCase().includes(searchTerm);
  }

  function renderGrid() {
    const list = PRODUCTS.filter(p => matchesFilter(p) && matchesSearch(p));
    grid.textContent = '';
    noResults.hidden = list.length > 0;

    list.forEach(p => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.dataset.id = p.id;

      const media = buildMedia(p, '-cat');
      media.className = 'card-media';

      if (p.cat.includes('nuevo')) {
        const b = document.createElement('span'); b.className = 'badge nuevo'; b.textContent = 'Nuevo'; media.appendChild(b);
      } else if (p.cat.includes('vendido')) {
        const b = document.createElement('span'); b.className = 'badge vendido'; b.textContent = 'Mas vendido'; media.appendChild(b);
      }
      if (p.oldPrice) {
        const discount = Math.round(100 - (p.price / p.oldPrice) * 100);
        const b = document.createElement('span'); b.className = 'badge oferta'; b.textContent = `-${discount}%`; media.appendChild(b);
      }

      const body = document.createElement('div'); body.className = 'card-body';
      const name = document.createElement('p'); name.className = 'card-name'; name.textContent = p.name;
      const catLine = document.createElement('p'); catLine.className = 'card-cat';
      catLine.textContent = p.cat.filter(c => ['hombre', 'mujer', 'unisex'].includes(c)).join(' · ') || 'Unisex';

      const priceRow = document.createElement('div'); priceRow.className = 'card-price-row';
      const now = document.createElement('span'); now.className = 'price-now'; now.textContent = currencyFmt.format(p.price);
      priceRow.appendChild(now);
      if (p.oldPrice) {
        const old = document.createElement('span'); old.className = 'price-old'; old.textContent = currencyFmt.format(p.oldPrice);
        priceRow.appendChild(old);
      }

      const sizeRow = document.createElement('div'); sizeRow.className = 'size-row';
      p.sizes.forEach(sz => {
        const chip = document.createElement('button');
        chip.type = 'button'; chip.className = 'size-chip'; chip.textContent = String(sz);
        chip.setAttribute('aria-label', `Talla ${sz}`);
        if (selectedSizes[p.id] === sz) chip.classList.add('selected');
        chip.addEventListener('click', () => {
          selectedSizes[p.id] = sz;
          sizeRow.querySelectorAll('.size-chip').forEach(c => c.classList.remove('selected'));
          chip.classList.add('selected');
        });
        sizeRow.appendChild(chip);
      });

      const actions = document.createElement('div'); actions.className = 'card-actions';
      const addBtn = document.createElement('button');
      addBtn.type = 'button'; addBtn.className = 'btn btn-primary'; addBtn.textContent = '🛒 Agregar';
      addBtn.addEventListener('click', () => addToCart(p.id, selectedSizes));

      const waBtn = document.createElement('a');
      waBtn.className = 'btn btn-outline'; waBtn.target = '_blank'; waBtn.rel = 'noopener noreferrer';
      waBtn.textContent = '📲 WhatsApp';
      waBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const size = selectedSizes[p.id];
        const sizeTxt = size ? `Talla ${size}` : 'talla por confirmar';
        const msg = `Hola K SPORT 🔥, estoy interesado(a) en el modelo "${p.name}" (${sizeTxt}). ¿Me confirman disponibilidad y precio?`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
      });

      actions.appendChild(addBtn); actions.appendChild(waBtn);
      body.appendChild(name); body.appendChild(catLine); body.appendChild(priceRow); body.appendChild(sizeRow); body.appendChild(actions);
      card.appendChild(media); card.appendChild(body);
      grid.appendChild(card);
      cardObserver.observe(card);
    });
  }

  /* -------- Catalog filters -------- */
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      renderGrid();
    });
  });

  /* -------- Search (navbar) -------- */
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const searchInput = document.getElementById('searchInput');

  searchToggle.addEventListener('click', () => {
    const isOpen = searchBar.classList.toggle('open');
    searchToggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) searchInput.focus();
  });

  searchInput.addEventListener('input', () => {
    searchTerm = searchInput.value.slice(0, 60).toLowerCase();
    renderGrid();
    gallerySearch = searchTerm;
    if (gallerySearchInput) gallerySearchInput.value = searchInput.value;
    renderGallery();
  });

  /* ============================================================
     GALERIA COMPLETA (todas las referencias, con su propia busqueda)
     ============================================================ */
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryNoResults = document.getElementById('galleryNoResults');
  const galleryCount = document.getElementById('galleryCount');
  const gallerySearchInput = document.getElementById('gallerySearch');

  let galleryFilter = 'galeria';
  let gallerySearch = '';

  function renderGallery() {
    galleryGrid.textContent = '';

    const list = PRODUCTS.filter(p => {
      const filterMatch = galleryFilter === 'todos' ? true : p.cat.includes(galleryFilter);
      const searchMatch = !gallerySearch || p.name.toLowerCase().includes(gallerySearch);
      return filterMatch && searchMatch;
    });

    galleryCount.textContent = `${list.length} producto${list.length !== 1 ? 's' : ''}`;
    galleryNoResults.hidden = list.length > 0;

    list.forEach(p => {
      const card = document.createElement('article');
      card.className = 'gallery-product-card';

      const mediaWrap = buildMedia(p, '-gal');
      mediaWrap.className = 'gpc-media';
      const img = mediaWrap.querySelector('img');
      if (img) { img.width = 300; img.height = 300; }

      const overlay = document.createElement('div');
      overlay.className = 'gpc-overlay';
      const quickBtn = document.createElement('button');
      quickBtn.type = 'button'; quickBtn.className = 'btn btn-primary gpc-quick';
      quickBtn.textContent = '🔍 Ver detalle';
      quickBtn.addEventListener('click', () => openProductModal(p.id));
      overlay.appendChild(quickBtn);
      mediaWrap.appendChild(overlay);

      const body = document.createElement('div'); body.className = 'gpc-body';
      const name = document.createElement('p'); name.className = 'gpc-name'; name.textContent = p.name;

      const priceEl = document.createElement('p'); priceEl.className = 'gpc-price';
      priceEl.textContent = currencyFmt.format(p.price);
      if (p.oldPrice) {
        const oldEl = document.createElement('span'); oldEl.className = 'price-old';
        oldEl.style.marginLeft = '.5rem';
        oldEl.textContent = currencyFmt.format(p.oldPrice);
        priceEl.appendChild(oldEl);
      }

      const actions = document.createElement('div'); actions.className = 'gpc-actions';

      const buyNow = document.createElement('button');
      buyNow.type = 'button'; buyNow.className = 'btn btn-primary';
      buyNow.textContent = '🔥 Comprar';
      buyNow.addEventListener('click', () => openProductModal(p.id, true));

      const addCart = document.createElement('button');
      addCart.type = 'button'; addCart.className = 'btn btn-outline';
      addCart.textContent = '🛒 Carrito';
      addCart.addEventListener('click', () => openProductModal(p.id, false));

      actions.appendChild(buyNow); actions.appendChild(addCart);
      body.appendChild(name); body.appendChild(priceEl); body.appendChild(actions);
      card.appendChild(mediaWrap); card.appendChild(body);
      galleryGrid.appendChild(card);
    });
  }

  document.querySelectorAll('.gallery-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.gallery-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      galleryFilter = chip.dataset.filter;
      renderGallery();
    });
  });

  if (gallerySearchInput) {
    gallerySearchInput.addEventListener('input', () => {
      gallerySearch = gallerySearchInput.value.slice(0, 60).toLowerCase();
      renderGallery();
    });
  }

  /* ============================================================
     PRODUCT DETAIL MODAL (compartido para todos los productos)
     ============================================================ */
  const productModal = document.getElementById('productModal');
  const productModalClose = document.getElementById('productModalClose');
  const productModalBody = document.getElementById('productModalBody');

  function openProductModal(productId, buyNow = false) {
    const p = PRODUCTS.find(pr => pr.id === productId);
    if (!p) return;

    productModalBody.textContent = '';

    const mediaEl = buildMedia(p, '-modal');
    mediaEl.className = 'pm-media';

    const info = document.createElement('div'); info.className = 'pm-info';
    const nameEl = document.createElement('h3'); nameEl.className = 'pm-name'; nameEl.textContent = p.name;

    const priceRow = document.createElement('div'); priceRow.className = 'pm-price-row';
    const nowEl = document.createElement('span'); nowEl.className = 'pm-price-now'; nowEl.textContent = currencyFmt.format(p.price);
    priceRow.appendChild(nowEl);
    if (p.oldPrice) {
      const oldEl = document.createElement('span'); oldEl.className = 'pm-price-old'; oldEl.textContent = currencyFmt.format(p.oldPrice);
      priceRow.appendChild(oldEl);
    }

    const sizeLabel = document.createElement('p'); sizeLabel.className = 'pm-label'; sizeLabel.textContent = 'Selecciona tu talla:';
    const sizeGrid = document.createElement('div'); sizeGrid.className = 'pm-sizes';

    let chosenSize = selectedSizes[p.id] || gallerySelectedSizes[p.id] || null;

    p.sizes.forEach(sz => {
      const btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'size-chip pm-size-chip';
      btn.textContent = String(sz);
      if (chosenSize === sz) btn.classList.add('selected');
      btn.addEventListener('click', () => {
        chosenSize = sz;
        selectedSizes[p.id] = sz;
        gallerySelectedSizes[p.id] = sz;
        sizeGrid.querySelectorAll('.pm-size-chip').forEach(c => c.classList.remove('selected'));
        btn.classList.add('selected');
      });
      sizeGrid.appendChild(btn);
    });

    const qtyLabel = document.createElement('p'); qtyLabel.className = 'pm-label'; qtyLabel.textContent = 'Cantidad:';
    const qtyWrap = document.createElement('div'); qtyWrap.className = 'pm-qty-wrap';
    let qty = 1;
    const qtyMinus = document.createElement('button'); qtyMinus.type = 'button'; qtyMinus.className = 'qty-btn'; qtyMinus.textContent = '−';
    const qtyDisplay = document.createElement('span'); qtyDisplay.className = 'qty-val pm-qty-val'; qtyDisplay.textContent = '1';
    const qtyPlus = document.createElement('button'); qtyPlus.type = 'button'; qtyPlus.className = 'qty-btn'; qtyPlus.textContent = '+';
    qtyMinus.addEventListener('click', () => { if (qty > 1) { qty--; qtyDisplay.textContent = String(qty); } });
    qtyPlus.addEventListener('click', () => { if (qty < 20) { qty++; qtyDisplay.textContent = String(qty); } });
    qtyWrap.appendChild(qtyMinus); qtyWrap.appendChild(qtyDisplay); qtyWrap.appendChild(qtyPlus);

    const actionsDiv = document.createElement('div'); actionsDiv.className = 'pm-actions';
    const addBtn = document.createElement('button');
    addBtn.type = 'button'; addBtn.className = 'btn btn-primary pm-add';
    addBtn.textContent = '🛒 Agregar al carrito';
    addBtn.addEventListener('click', () => {
      if (!chosenSize) { showToast('Selecciona una talla primero'); return; }
      addToCartQty(p.id, chosenSize, qty);
      closeProductModal();
    });

    const buyNowBtn = document.createElement('button');
    buyNowBtn.type = 'button'; buyNowBtn.className = 'btn btn-outline pm-buy';
    buyNowBtn.textContent = '🔥 Comprar ahora por WhatsApp';
    buyNowBtn.addEventListener('click', () => {
      if (!chosenSize) { showToast('Selecciona una talla primero'); return; }
      const msg = `Hola K SPORT 🔥, quiero comprar *${p.name}* — Talla ${chosenSize} — Cantidad: ${qty} — Precio: ${currencyFmt.format(p.price * qty)}. ¿Me confirman disponibilidad?`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    });

    actionsDiv.appendChild(addBtn); actionsDiv.appendChild(buyNowBtn);

    info.appendChild(nameEl);
    info.appendChild(priceRow);
    info.appendChild(sizeLabel);
    info.appendChild(sizeGrid);
    info.appendChild(qtyLabel);
    info.appendChild(qtyWrap);
    info.appendChild(actionsDiv);

    productModalBody.appendChild(mediaEl);
    productModalBody.appendChild(info);

    productModal.classList.add('open');
    productModal.setAttribute('aria-hidden', 'false');
    document.getElementById('overlay').classList.add('open');
  }

  function closeProductModal() {
    productModal.classList.remove('open');
    productModal.setAttribute('aria-hidden', 'true');
    if (!cartDrawer.classList.contains('open') && !checkoutModal.classList.contains('open')) {
      document.getElementById('overlay').classList.remove('open');
    }
  }

  if (productModalClose) productModalClose.addEventListener('click', closeProductModal);

  /* ============================================================
     CARRITO
     ============================================================ */
  const cartToggle = document.getElementById('cartToggle');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartClose = document.getElementById('cartClose');
  const cartBody = document.getElementById('cartBody');
  const cartCount = document.getElementById('cartCount');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const overlayEl = document.getElementById('overlay');
  const clearCartBtn = document.getElementById('clearCart');
  const checkoutBtn = document.getElementById('checkoutBtn');

  function addToCart(productId, sizesMap) {
    const size = sizesMap[productId];
    if (!size) { showToast('Selecciona una talla primero'); return; }
    addToCartQty(productId, size, 1);
    openCart();
  }

  function addToCartQty(productId, size, qty) {
    const existing = cart.find(it => it.id === productId && it.size === size);
    if (existing) {
      existing.qty = Math.min(existing.qty + qty, 20);
    } else {
      cart.push({ id: productId, size, qty });
    }
    saveCart();
    renderCart();
    showToast('Agregado al carrito 🔥');
  }

  function changeQty(productId, size, delta) {
    const item = cart.find(it => it.id === productId && it.size === size);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(it => !(it.id === productId && it.size === size));
    }
    saveCart();
    renderCart();
  }

  function removeItem(productId, size) {
    cart = cart.filter(it => !(it.id === productId && it.size === size));
    saveCart();
    renderCart();
  }

  function cartTotal() {
    return cart.reduce((sum, it) => {
      const p = PRODUCTS.find(pr => pr.id === it.id);
      return p ? sum + p.price * it.qty : sum;
    }, 0);
  }

  function renderCart() {
    cartBody.textContent = '';
    const totalQty = cart.reduce((s, it) => s + it.qty, 0);
    cartCount.textContent = String(totalQty);

    if (cart.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'cart-empty';
      empty.textContent = 'Tu carrito está vacío. ¡Agrega tus sneakers favoritos!';
      cartBody.appendChild(empty);
    } else {
      cart.forEach(it => {
        const p = PRODUCTS.find(pr => pr.id === it.id);
        if (!p) return;
        const row = document.createElement('div'); row.className = 'cart-item';

        const media = buildMedia(p, `-mini-${it.size}`);
        media.className = 'cart-item-media';
        const img = media.querySelector('img');
        if (img) img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:8px;';

        const info = document.createElement('div'); info.className = 'cart-item-info';
        const name = document.createElement('p'); name.className = 'cart-item-name'; name.textContent = p.name;
        const meta = document.createElement('p'); meta.className = 'cart-item-meta'; meta.textContent = `Talla ${it.size}`;

        const qtyRow = document.createElement('div'); qtyRow.className = 'qty-row';
        const minus = document.createElement('button'); minus.type = 'button'; minus.className = 'qty-btn'; minus.textContent = '−'; minus.setAttribute('aria-label', 'Disminuir');
        minus.addEventListener('click', () => changeQty(p.id, it.size, -1));
        const qtyVal = document.createElement('span'); qtyVal.className = 'qty-val'; qtyVal.textContent = String(it.qty);
        const plus = document.createElement('button'); plus.type = 'button'; plus.className = 'qty-btn'; plus.textContent = '+'; plus.setAttribute('aria-label', 'Aumentar');
        plus.addEventListener('click', () => changeQty(p.id, it.size, 1));
        const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'remove-item'; remove.textContent = 'Eliminar';
        remove.addEventListener('click', () => removeItem(p.id, it.size));
        const price = document.createElement('span'); price.className = 'item-price'; price.textContent = currencyFmt.format(p.price * it.qty);

        qtyRow.appendChild(minus); qtyRow.appendChild(qtyVal); qtyRow.appendChild(plus); qtyRow.appendChild(remove); qtyRow.appendChild(price);
        info.appendChild(name); info.appendChild(meta); info.appendChild(qtyRow);
        row.appendChild(media); row.appendChild(info);
        cartBody.appendChild(row);
      });
    }
    cartSubtotal.textContent = currencyFmt.format(cartTotal());
  }

  function openCart() {
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    overlayEl.classList.add('open');
    cartToggle.setAttribute('aria-expanded', 'true');
  }
  function closeCart() {
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    cartToggle.setAttribute('aria-expanded', 'false');
    if (!checkoutModal.classList.contains('open') && !productModal.classList.contains('open')) {
      overlayEl.classList.remove('open');
    }
  }

  cartToggle.addEventListener('click', () => cartDrawer.classList.contains('open') ? closeCart() : openCart());
  cartClose.addEventListener('click', closeCart);
  overlayEl.addEventListener('click', () => { closeCart(); closeCheckout(); closeProductModal(); });

  clearCartBtn.addEventListener('click', () => {
    cart = []; saveCart(); renderCart(); showToast('Carrito vaciado');
  });

  /* ============================================================
     CHECKOUT MODAL
     ============================================================ */
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutClose = document.getElementById('checkoutClose');
  const checkoutForm = document.getElementById('checkoutForm');

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) { showToast('Tu carrito está vacío'); return; }
    openCheckout();
  });

  function openCheckout() {
    checkoutModal.classList.add('open');
    checkoutModal.setAttribute('aria-hidden', 'false');
    overlayEl.classList.add('open');
    document.getElementById('fullName').focus();
  }
  function closeCheckout() {
    checkoutModal.classList.remove('open');
    checkoutModal.setAttribute('aria-hidden', 'true');
    if (!cartDrawer.classList.contains('open') && !productModal.classList.contains('open')) {
      overlayEl.classList.remove('open');
    }
  }
  checkoutClose.addEventListener('click', closeCheckout);

  const FIELD_RULES = {
    fullName: { required: true, min: 3, max: 80, pattern: /^[A-Za-zÀ-ÿ\s]{3,80}$/, label: 'nombre' },
    phone: { required: true, min: 7, max: 15, pattern: /^[0-9+\s]{7,15}$/, label: 'teléfono' },
    city: { required: true, min: 2, max: 60, label: 'ciudad' },
    address: { required: true, min: 4, max: 120, label: 'dirección' },
    paymentMethod: { required: true, label: 'método de pago' }
  };

  function validateField(id) {
    const rule = FIELD_RULES[id]; if (!rule) return true;
    const el = document.getElementById(id);
    const errEl = document.getElementById(`err-${id}`);
    const val = el.value.trim();
    let message = '';
    if (rule.required && val.length === 0) message = `Por favor ingresa tu ${rule.label}.`;
    else if (rule.min && val.length < rule.min) message = `El ${rule.label} es muy corto.`;
    else if (rule.max && val.length > rule.max) message = `El ${rule.label} es muy largo.`;
    else if (rule.pattern && !rule.pattern.test(val)) message = `Revisa el formato de tu ${rule.label}.`;
    if (errEl) errEl.textContent = message;
    return message === '';
  }

  Object.keys(FIELD_RULES).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('blur', () => validateField(id));
  });

  function sanitize(str, maxLen) { return String(str).replace(/[<>]/g, '').trim().slice(0, maxLen); }

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const honeypot = document.getElementById('website').value;
    if (honeypot) { showToast('No pudimos procesar tu pedido. Intenta de nuevo.'); return; }

    let valid = true;
    Object.keys(FIELD_RULES).forEach(id => { if (!validateField(id)) valid = false; });
    if (!valid) { showToast('Revisa los campos marcados en rojo'); return; }

    const fullName = sanitize(document.getElementById('fullName').value, 80);
    const phone = sanitize(document.getElementById('phone').value, 15);
    const city = sanitize(document.getElementById('city').value, 60);
    const address = sanitize(document.getElementById('address').value, 120);
    const neighborhood = sanitize(document.getElementById('neighborhood').value, 80);
    const reference = sanitize(document.getElementById('reference').value, 120);
    const paymentMethod = sanitize(document.getElementById('paymentMethod').value, 30);
    const notes = sanitize(document.getElementById('notes').value, 300);

    const lines = [
      `🔥 Nuevo pedido — K SPORT`, ``,
      `Nombre: ${fullName}`, `WhatsApp: ${phone}`, `Ciudad: ${city}`, `Dirección: ${address}`,
      neighborhood ? `Barrio: ${neighborhood}` : null,
      reference ? `Referencia: ${reference}` : null,
      `Método de pago: ${paymentMethod}`,
      notes ? `Observaciones: ${notes}` : null,
      ``, `Productos:`
    ].filter(Boolean);

    cart.forEach(it => {
      const p = PRODUCTS.find(pr => pr.id === it.id);
      if (p) lines.push(`• ${p.name} — Talla ${it.size} — Cant. ${it.qty} — ${currencyFmt.format(p.price * it.qty)}`);
    });
    lines.push(``, `Total: ${currencyFmt.format(cartTotal())}`);

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
    closeCheckout(); closeCart();
    showToast('Pedido enviado por WhatsApp 🔥');
  });

  /* ============================================================
     TOAST
     ============================================================ */
  let toastTimer = null;
  function showToast(text) {
    let toast = document.querySelector('.toast');
    if (!toast) { toast = document.createElement('div'); toast.className = 'toast'; document.body.appendChild(toast); }
    toast.textContent = text;
    toast.classList.add('show');
    document.getElementById('liveRegion').textContent = text;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  /* ============================================================
     NAVBAR
     ============================================================ */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open'); hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }));

  document.getElementById('scrollCue').addEventListener('click', () => {
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
  });

  /* ============================================================
     REVEAL + COUNTERS
     ============================================================ */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); cardObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    if (reduceMotion) { el.classList.add('in-view'); } else { revealObserver.observe(el); }
  });

  const statEls = document.querySelectorAll('.stat-num');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      statsObserver.unobserve(entry.target);
      const target = parseInt(entry.target.dataset.count, 10) || 0;
      if (reduceMotion) { entry.target.textContent = String(target); return; }
      const duration = 1400, start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        entry.target.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => statsObserver.observe(el));

  /* ============================================================
     INIT
     ============================================================ */
  document.getElementById('year').textContent = String(new Date().getFullYear());
  renderGrid();
  renderCart();
  renderGallery();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeCart(); closeCheckout(); closeProductModal(); }
  });

})();
