/**
 * Sigrax CMMS — Clean Interactive Logic
 * Vanilla JS, zero dependencies
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Navbar scroll
  const navbar = document.querySelector('.site-navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.style.borderBottomColor = window.scrollY > 10
        ? 'rgba(255,255,255,0.08)'
        : 'rgba(255,255,255,0.04)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 2. Mobile menu
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    });

    document.addEventListener('click', (e) => {
      if (navbar && !navbar.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('i').className = 'fas fa-bars';
      }
    });
  }

  // 3. Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  if (tabButtons.length > 0) {
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        tabButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        tabPanels.forEach((panel) => {
          panel.classList.toggle('active', panel.id === target);
        });
      });
    });
  }

  // 4. Lightbox
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.querySelector('.lightbox-close');

  document.querySelectorAll('[data-lightbox="true"]').forEach((el) => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-src') || el.querySelector('img')?.src;
      const title = el.getAttribute('data-title') || '';
      const desc = el.getAttribute('data-desc') || '';

      if (lightbox && lightboxImg && src) {
        lightboxImg.src = src;
        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxDesc) lightboxDesc.textContent = desc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightbox) {
    const close = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  // 5. Category filter (features page)
  const filterPills = document.querySelectorAll('.filter-pill');
  const moduleCards = document.querySelectorAll('.module-card');

  if (filterPills.length > 0 && moduleCards.length > 0) {
    filterPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const cat = pill.getAttribute('data-category');
        filterPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');

        moduleCards.forEach((card) => {
          const match = cat === 'all' || card.getAttribute('data-category') === cat;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // 6. FAQ accordion (services page)
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));

      // Toggle current
      if (!wasOpen) item.classList.add('open');
    });
  });

  // 7. Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
