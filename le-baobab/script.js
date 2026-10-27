(() => {
  "use strict";
  console.log("[Le Baobab] script chargé");

  /* ============ DONNÉES ============ */
  const dishes = [
    { id: 1, name: "Salade de mangue verte", cat: "Entrées", price: 12000, emoji: "🥗", bg: "linear-gradient(135deg,#7BA05B,#4F7942)",
      desc: "Mangue verte râpée, cacahuètes torréfiées, coriandre fraîche, vinaigrette au citron vert.",
      allergens: "Allergènes : arachides." },
    { id: 2, name: "Beignets de crevettes", cat: "Entrées", price: 15000, emoji: "🍤", bg: "linear-gradient(135deg,#E08E45,#C75B39)",
      desc: "Six beignets croustillants, sauce piment maison, citron.",
      allergens: "Allergènes : crustacés, gluten." },
    { id: 3, name: "Soupe de poisson du fleuve", cat: "Entrées", price: 14000, emoji: "🍲", bg: "linear-gradient(135deg,#B8860B,#8B6508)",
      desc: "Poisson frais du fleuve Congo, tomates, gingembre, basilic africain.",
      allergens: "Allergènes : poisson." },

    { id: 4, name: "Poulet Moambe", cat: "Plats", price: 28000, emoji: "🍗", bg: "linear-gradient(135deg,#C75B39,#8B3A20)",
      desc: "Poulet fermier, sauce à la noix de palme, riz parfumé, bananes plantains. Notre signature.",
      allergens: "Allergènes : fruits à coque (noix de palme)." },
    { id: 5, name: "Capitaine braisé", cat: "Plats", price: 32000, emoji: "🐟", bg: "linear-gradient(135deg,#4682B4,#2C5282)",
      desc: "Capitaine entier braisé, sauce tomate-gingembre, attiéké.",
      allergens: "Allergènes : poisson." },
    { id: 6, name: "Riz sauté aux légumes", cat: "Plats", price: 18000, emoji: "🍚", bg: "linear-gradient(135deg,#D4A24C,#B8860B)",
      desc: "Riz parfumé sauté, légumes de saison, sauce soja légère. Végétarien.",
      allergens: "Allergènes : soja." },
    { id: 7, name: "Fumbwa aux arachides", cat: "Plats", price: 22000, emoji: "🌿", bg: "linear-gradient(135deg,#4F7942,#2D5016)",
      desc: "Feuilles de fumbwa, pâte d'arachide, riz ou chikwangue. Végétarien.",
      allergens: "Allergènes : arachides." },

    { id: 8, name: "Brochettes de bœuf", cat: "Grillades", price: 25000, emoji: "🥩", bg: "linear-gradient(135deg,#8B2500,#5C1500)",
      desc: "Quatre brochettes de bœuf marinées, piment, oignons grillés, frites de plantain.",
      allergens: "Aucun allergène majeur." },
    { id: 9, name: "Poulet grillé piment", cat: "Grillades", price: 26000, emoji: "🔥", bg: "linear-gradient(135deg,#C75B39,#7A2E15)",
      desc: "Demi-poulet grillé au charbon, sauce piment, riz ou frites.",
      allergens: "Aucun allergène majeur." },
    { id: 10, name: "Côtes de porc BBQ", cat: "Grillades", price: 30000, emoji: "🍖", bg: "linear-gradient(135deg,#A8482B,#6B2A18)",
      desc: "Côtes de porc marinées 24h, sauce BBQ maison, salade croquante.",
      allergens: "Aucun allergène majeur." },

    { id: 11, name: "Tarte à la mangue", cat: "Desserts", price: 10000, emoji: "🥭", bg: "linear-gradient(135deg,#F2A93B,#C75B39)",
      desc: "Tarte sablée, mangue fraîche, crème vanillée.",
      allergens: "Allergènes : gluten, œufs, lait." },
    { id: 12, name: "Beignets au miel", cat: "Desserts", price: 8000, emoji: "🍩", bg: "linear-gradient(135deg,#D4A24C,#8B6508)",
      desc: "Six beignets moelleux, miel de forêt, cannelle.",
      allergens: "Allergènes : gluten, œufs." },
    { id: 13, name: "Glace coco-ananas", cat: "Desserts", price: 9000, emoji: "🍨", bg: "linear-gradient(135deg,#95C7A8,#4F7942)",
      desc: "Deux boules, coco et ananas rôti. Sans gluten.",
      allergens: "Allergènes : lait." },

    { id: 14, name: "Jus de bissap", cat: "Boissons", price: 5000, emoji: "🍷", bg: "linear-gradient(135deg,#8B2500,#5C1500)",
      desc: "Infusion d'hibiscus, gingembre, menthe fraîche. Servi glacé.",
      allergens: "Aucun allergène majeur." },
    { id: 15, name: "Cocktail gingembre", cat: "Boissons", price: 7000, emoji: "🍹", bg: "linear-gradient(135deg,#F2A93B,#C75B39)",
      desc: "Jus de gingembre frais, citron vert, sirop de canne, eau pétillante.",
      allergens: "Aucun allergène majeur." },
    { id: 16, name: "Bière locale", cat: "Boissons", price: 4000, emoji: "🍺", bg: "linear-gradient(135deg,#B8860B,#7A5C00)",
      desc: "Bouteille 65cl, servie fraîche.",
      allergens: "Allergènes : gluten." },
    { id: 17, name: "Eau minérale", cat: "Boissons", price: 2000, emoji: "💧", bg: "linear-gradient(135deg,#4682B4,#2C5282)",
      desc: "Bouteille 50cl, plate ou pétillante.",
      allergens: "Aucun allergène majeur." }
  ];

  const testimonials = [
    { quote: "Le Moambe du Baobab est le meilleur de Kinshasa. Et la terrasse, un vrai bonheur en fin de journée.", name: "Grâce M.", area: "Gombe, Kinshasa", stars: 5 },
    { quote: "Nous y avons fêté les 40 ans de ma mère. Service impeccable, personnel aux petits soins, et le gâteau était parfait.", name: "Didier K.", area: "Limete, Kinshasa", stars: 5 },
    { quote: "Déjeuner d'affaires impeccable : rapide, discret, et la cuisine est vraiment au-dessus du lot.", name: "Sandrine T.", area: "Ngaliema, Kinshasa", stars: 5 },
    { quote: "Les brochettes de bœuf sont grillées à la perfection. On revient chaque semaine avec les collègues.", name: "Josué L.", area: "Gombe, Kinshasa", stars: 5 }
  ];

  const TIME_SLOTS = ["12:00","12:30","13:00","13:30","14:00","14:30","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"];

  /* ============ HELPERS ============ */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmt = n => n.toLocaleString("fr-FR") + " CDF";

  /* ============ INIT ============ */
  try {
    /* ---- MENU MOBILE ---- */
    const navToggle = $(".nav-toggle");
    const navMenu = $("#nav-menu");
    if (navToggle && navMenu) {
      const closeMenu = () => {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      };
      navToggle.addEventListener("click", () => {
        const open = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!open));
        navMenu.classList.toggle("is-open", !open);
      });
      $$(".nav-link, .nav-cta", navMenu).forEach(l => l.addEventListener("click", closeMenu));
      document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
    }

    /* ---- CARTES PLATS ---- */
    const grid = $("#menu-grid");
    const emptyMsg = $("#menu-empty");

    function dishCardHTML(d) {
      return `
        <button type="button" class="dish-card" data-cat="${d.cat}" data-id="${d.id}" aria-label="Voir la fiche : ${d.name}">
          <div class="dish-img" style="background:${d.bg}">${d.emoji}</div>
          <div class="dish-body">
            <div class="dish-head">
              <h3>${d.name}</h3>
              <span class="dish-price">${fmt(d.price)}</span>
            </div>
            <p class="dish-cat">${d.cat}</p>
            <p class="dish-desc">${d.desc}</p>
          </div>
        </button>`;
    }

    if (grid) {
      grid.innerHTML = dishes.map(dishCardHTML).join("");
      console.log("[Le Baobab] plats rendus:", dishes.length);
    }

    /* ---- FILTRES ---- */
    let activeCat = "all";
    function applyFilter() {
      if (!grid) return;
      let n = 0;
      $$(".dish-card", grid).forEach(card => {
        const show = activeCat === "all" || card.dataset.cat === activeCat;
        card.style.display = show ? "" : "none";
        if (show) n++;
      });
      if (emptyMsg) emptyMsg.hidden = n > 0;
    }
    $$(".chip[data-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        $$(".chip[data-filter]").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        activeCat = btn.dataset.filter;
        applyFilter();
      });
    });

    /* ---- MODAL PLAT ---- */
    const modal = $("#dish-modal");
    let lastFocused = null;

    function openModal(dish) {
      if (!modal) return;
      lastFocused = document.activeElement;
      const media = $("#dish-modal-media");
      if (media) { media.style.background = dish.bg; media.textContent = dish.emoji; }
      const t = $("#dish-modal-title"); if (t) t.textContent = dish.name;
      const p = $("#dish-modal-price"); if (p) p.textContent = fmt(dish.price);
      const c = $("#dish-modal-cat"); if (c) c.textContent = dish.cat;
      const d = $("#dish-modal-desc"); if (d) d.textContent = dish.desc;
      const a = $("#dish-modal-allergens"); if (a) a.textContent = dish.allergens;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      const closeBtn = $("#modal-close"); if (closeBtn) closeBtn.focus();
    }
    function closeModal() {
      if (!modal || modal.hidden) return;
      modal.hidden = true;
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    if (grid) {
      grid.addEventListener("click", e => {
        const btn = e.target.closest(".dish-card");
        if (!btn) return;
        const dish = dishes.find(d => d.id === Number(btn.dataset.id));
        if (dish) openModal(dish);
      });
    }
    $$("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

    if (modal) {
      modal.addEventListener("keydown", e => {
        if (e.key !== "Tab") return;
        const f = $$("button, a, input, select, textarea", modal).filter(el => !el.disabled && el.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      });
    }

    /* ---- FORMULAIRE RÉSERVATION ---- */
    const form = $("#reservation-form");
    const success = $("#res-success");
    const timeSelect = $("#res-time");
    const dateInput = $("#res-date");

    // Remplir les créneaux horaires
    if (timeSelect) {
      TIME_SLOTS.forEach(t => {
        const o = document.createElement("option");
        o.value = t; o.textContent = t;
        timeSelect.appendChild(o);
      });
    }

    // Date minimale = aujourd'hui
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.min = today;
    }

    if (form) {
      const rules = {
        name: v => v.trim().length >= 2,
        phone: v => v.replace(/\D/g, "").length >= 8,
        date: v => {
          if (!v) return false;
          const today = new Date(); today.setHours(0,0,0,0);
          return new Date(v) >= today;
        },
        time: v => v !== "",
        guests: v => v !== ""
      };

      function validateField(name) {
        const input = form.elements[name];
        if (!input) return true;
        const field = input.closest(".field");
        const error = document.getElementById("res-" + name + "-error");
        const ok = rules[name] ? rules[name](input.value) : true;
        if (field) field.classList.toggle("has-error", !ok);
        if (error) error.hidden = ok;
        input.setAttribute("aria-invalid", String(!ok));
        return ok;
      }

      ["name", "phone", "date", "time", "guests"].forEach(n => {
        const input = form.elements[n];
        if (!input) return;
        input.addEventListener("blur", () => validateField(n));
        input.addEventListener("input", () => {
          const f = input.closest(".field");
          if (f && f.classList.contains("has-error")) validateField(n);
        });
        input.addEventListener("change", () => {
          const f = input.closest(".field");
          if (f && f.classList.contains("has-error")) validateField(n);
        });
      });

      form.addEventListener("submit", e => {
        e.preventDefault();
        const ok = ["name", "phone", "date", "time", "guests"].map(validateField).every(Boolean);
        if (!ok) {
          const firstError = $(".field.has-error input, .field.has-error select", form);
          if (firstError) firstError.focus();
          return;
        }
        // DEMO ONLY: pas de backend — on simule la confirmation
        if (success) success.hidden = false;
        form.reset();
        if (dateInput) {
          const today = new Date().toISOString().split("T")[0];
          dateInput.min = today;
        }
        // remettre les options d'heure (car reset les efface)
        if (timeSelect) {
          timeSelect.innerHTML = '<option value="">— Choisir —</option>';
          TIME_SLOTS.forEach(t => {
            const o = document.createElement("option");
            o.value = t; o.textContent = t;
            timeSelect.appendChild(o);
          });
        }
        setTimeout(() => { if (success) success.hidden = true; }, 8000);
      });
    }

    /* ---- CARROUSEL AVIS ---- */
    const track = $("#carousel-track");
    const dots = $("#carousel-dots");
    let current = 0;
    let timer = null;

    if (track && dots) {
      track.innerHTML = testimonials.map(t => `
        <li class="carousel-slide">
          <div class="carousel-stars" aria-label="${t.stars} étoiles sur 5">${"★".repeat(t.stars)}</div>
          <p class="carousel-quote">« ${t.quote} »</p>
          <p class="carousel-author">${t.name}<span>${t.area}</span></p>
        </li>`).join("");

      dots.innerHTML = testimonials.map((_, i) =>
        `<button type="button" class="carousel-dot${i === 0 ? " is-active" : ""}" data-slide="${i}" aria-label="Avis ${i + 1}"></button>`
      ).join("");

      $$(".carousel-dot", dots).forEach(dot =>
        dot.addEventListener("click", () => goSlide(Number(dot.dataset.slide)))
      );
    }

    function goSlide(i) {
      if (!track) return;
      current = (i + testimonials.length) % testimonials.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      $$(".carousel-dot", dots).forEach((d, idx) => d.classList.toggle("is-active", idx === current));
    }
    function startTimer() {
      if (prefersReducedMotion) return;
      stopTimer();
      timer = setInterval(() => goSlide(current + 1), 6500);
    }
    function stopTimer() { if (timer) clearInterval(timer); timer = null; }

    const prev = $("#carousel-prev");
    const next = $("#carousel-next");
    if (prev) prev.addEventListener("click", () => { goSlide(current - 1); startTimer(); });
    if (next) next.addEventListener("click", () => { goSlide(current + 1); startTimer(); });

    const carousel = $(".carousel");
    if (carousel) {
      carousel.addEventListener("mouseenter", stopTimer);
      carousel.addEventListener("mouseleave", startTimer);
    }

    /* ---- ACCORDÉON FAQ ---- */
    const items = $$(".accordion-item");
    items.forEach(item => {
      const btn = $(".accordion-btn", item);
      const panel = $(".accordion-panel", item);
      if (!btn || !panel) return;
      btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        items.forEach(other => {
          const ob = $(".accordion-btn", other);
          const op = $(".accordion-panel", other);
          if (ob) ob.setAttribute("aria-expanded", "false");
          if (op) op.style.maxHeight = "";
        });
        if (!isOpen) {
          btn.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });

    /* ---- RÉVÉLATION AU SCROLL ---- */
    const revealEls = $$(".reveal");
    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      revealEls.forEach(el => el.classList.add("will-animate"));
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(el => io.observe(el));
      setTimeout(() => revealEls.forEach(el => el.classList.add("is-visible")), 2500);
    } else {
      revealEls.forEach(el => el.classList.add("is-visible"));
    }

    /* ---- BACK TO TOP ---- */
    const back = $("#back-to-top");
    if (back) {
      window.addEventListener("scroll", () => { back.hidden = window.scrollY < 500; }, { passive: true });
      back.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
    }

    /* ---- NAV ACTIF ---- */
    const sections = $$("main section[id]");
    const navLinks = $$(".nav-link");
    if ("IntersectionObserver" in window && sections.length) {
      const navIO = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            navLinks.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id));
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(s => navIO.observe(s));
    }

    /* ---- INIT VISUEL ---- */
    applyFilter();
    goSlide(0);
    startTimer();

    // Recalculer la hauteur des panneaux FAQ ouverts au resize
    window.addEventListener("resize", () => {
      $$('.accordion-btn[aria-expanded="true"]').forEach(b => {
        const p = b.closest(".accordion-item").querySelector(".accordion-panel");
        if (p) p.style.maxHeight = p.scrollHeight + "px";
      });
    });

    console.log("[Le Baobab] initialisation terminée ✓");
  } catch (err) {
    console.error("[Le Baobab] erreur :", err);
  }
})();