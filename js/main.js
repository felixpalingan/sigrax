/**
 * Sigrax CMMS — Clean Modern Interactive Logic
 * Vanilla JavaScript, zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const siteNavbar = document.querySelector('.site-navbar');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close mobile menu on clicking outside or on a link
    document.addEventListener('click', (e) => {
      if (siteNavbar && !siteNavbar.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  }

  // 2. Interactive Product Showcase Tabs (Home Page)
  const tabButtons = document.querySelectorAll('.tab-nav-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');

        // Update active tab buttons
        tabButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Show matching tab panel
        tabPanels.forEach((panel) => {
          if (panel.id === targetId) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });
      });
    });
  }

  // 3. Category Filter (Features / Products Page)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const moduleCards = document.querySelectorAll('.module-item-card');

  if (filterButtons.length > 0 && moduleCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        moduleCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. FAQ Accordion (Services Page)
  const faqToggleButtons = document.querySelectorAll('.faq-toggle-btn');

  if (faqToggleButtons.length > 0) {
    faqToggleButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentItem = btn.closest('.faq-accordion-item');
        const isOpen = currentItem.classList.contains('open');

        // Close all items
        document.querySelectorAll('.faq-accordion-item').forEach((item) => {
          item.classList.remove('open');
          const toggle = item.querySelector('.faq-toggle-btn');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });

        // Toggle current item
        if (!isOpen) {
          currentItem.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // 5. Image Lightbox Zoom Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.querySelector('.lightbox-close');

  const triggerElements = document.querySelectorAll('[data-lightbox="true"]');

  if (lightboxModal && lightboxImg) {
    triggerElements.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const src = trigger.getAttribute('data-src') || trigger.querySelector('img')?.src;
        const title = trigger.getAttribute('data-title') || 'Pratinjau Screenshot';
        const desc = trigger.getAttribute('data-desc') || '';

        if (src) {
          lightboxImg.src = src;
          if (lightboxTitle) lightboxTitle.textContent = title;
          if (lightboxDesc) lightboxDesc.textContent = desc;
          lightboxModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 6. Smooth Scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
