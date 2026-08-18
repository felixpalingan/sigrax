/**
 * Sigrax CMMS - Modern Interactive Logic
 * Zero-dependency, lightweight, performant Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Navbar Scroll Effect
  const navbar = document.querySelector('.site-navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile Navigation Drawer
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close on clicking outside or link
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  }

  // 3. 3D Progressive Layer Disassembly on Scroll (Layer Berkurang Satu per Satu)
  const assemblySection = document.querySelector('.assembly-scroll-section');
  const assemblyStack = document.querySelector('.assembly-3d-stack');
  const stepItems = document.querySelectorAll('.assembly-step-item');
  const toggleBtn = document.getElementById('toggleAssemblyBtn');
  const statusBadge = document.querySelector('.assembly-status-badge');

  const layer4 = document.querySelector('.assembly-layer.layer-4');
  const layer3 = document.querySelector('.assembly-layer.layer-3');
  const layer2 = document.querySelector('.assembly-layer.layer-2');
  const layer1 = document.querySelector('.assembly-layer.layer-1');

  let isManualDisassembled = false;

  if (assemblySection && assemblyStack && layer4 && layer3 && layer2 && layer1) {
    
    // Function to apply progressive disassembly based on progress (0.0 to 1.0)
    const applyDisassemblyProgress = (progress) => {
      // Progress Breakdown:
      // [0.00 - 0.15]: Phase 0 -> Full Assembled Stack (Semua 4 Layer utuh menyatu)
      // [0.15 - 0.40]: Phase 1 -> Layer 4 (Executive UI) terlepas, terbang ke atas dan memudar (Tersisa Layer 3, 2, 1)
      // [0.40 - 0.65]: Phase 2 -> Layer 3 (Work Order) terlepas, terbang ke atas dan memudar (Tersisa Layer 2, 1)
      // [0.65 - 0.90]: Phase 3 -> Layer 2 (Preventive) terlepas, terbang ke atas dan memudar (Tersisa Layer 1 - Core Database)
      // [0.90 - 1.00]: Phase 4 -> Layer 1 Core Database terisolasi & bersinar terang di fondasi!

      if (progress <= 0.15) {
        // Full Assembled: 4 Layer lengkap menyatu
        updateActiveStep(0);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-layer-group text-gold"></i> Ekosistem Terpadu (4 Lapisan Aktif)';
        
        setLayerStyle(layer4, { z: 45, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer3, { z: 30, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer2, { z: 15, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer1, { z: 0,  y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });

      } else if (progress > 0.15 && progress <= 0.40) {
        // Layer 4 Terangkat
        const subProg = (progress - 0.15) / 0.25; // 0 to 1
        updateActiveStep(1);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-chart-pie text-gold"></i> Layer 4: Executive Command Analytics';

        // Layer 4 flies away up & disappears
        const l4Z = 45 + (subProg * 220);
        const l4Y = -(subProg * 80);
        const l4Opacity = Math.max(0, 1 - (subProg * 1.3));
        const l4Scale = 1 + (subProg * 0.15);

        setLayerStyle(layer4, { z: l4Z, y: l4Y, x: subProg * 30, opacity: l4Opacity, scale: l4Scale, filter: `blur(${subProg * 4}px)` });
        setLayerStyle(layer3, { z: 30, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer2, { z: 15, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer1, { z: 0,  y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });

      } else if (progress > 0.40 && progress <= 0.65) {
        // Layer 3 Terangkat
        const subProg = (progress - 0.40) / 0.25;
        updateActiveStep(2);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-clipboard-check text-gold"></i> Layer 3: Work Order & Field Operations';

        // Layer 4 sudah hilang
        setLayerStyle(layer4, { z: 300, y: -120, x: 50, opacity: 0, scale: 1.2, filter: 'blur(8px)' });

        // Layer 3 flies away up & disappears
        const l3Z = 30 + (subProg * 200);
        const l3Y = -(subProg * 70);
        const l3Opacity = Math.max(0, 1 - (subProg * 1.3));
        const l3Scale = 1 + (subProg * 0.12);

        setLayerStyle(layer3, { z: l3Z, y: l3Y, x: subProg * 25, opacity: l3Opacity, scale: l3Scale, filter: `blur(${subProg * 4}px)` });
        setLayerStyle(layer2, { z: 15, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer1, { z: 0,  y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });

      } else if (progress > 0.65 && progress <= 0.90) {
        // Layer 2 Terangkat
        const subProg = (progress - 0.65) / 0.25;
        updateActiveStep(3);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-calendar-check text-gold"></i> Layer 2: Preventive Automation Engine';

        // Layer 4 & 3 sudah hilang
        setLayerStyle(layer4, { z: 300, y: -120, x: 50, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer3, { z: 280, y: -100, x: 40, opacity: 0, scale: 1.2, filter: 'blur(8px)' });

        // Layer 2 flies away up & disappears
        const l2Z = 15 + (subProg * 180);
        const l2Y = -(subProg * 60);
        const l2Opacity = Math.max(0, 1 - (subProg * 1.3));
        const l2Scale = 1 + (subProg * 0.1);

        setLayerStyle(layer2, { z: l2Z, y: l2Y, x: subProg * 20, opacity: l2Opacity, scale: l2Scale, filter: `blur(${subProg * 4}px)` });
        setLayerStyle(layer1, { z: 0,  y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });

      } else {
        // Hanya tersisa Layer 1
        updateActiveStep(3);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-database text-gold"></i> Layer 1: Master Database & Asset Core';

        setLayerStyle(layer4, { z: 300, y: -120, x: 50, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer3, { z: 280, y: -100, x: 40, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer2, { z: 250, y: -90,  x: 30, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer1, { z: 10,  y: 0,    x: 0,  opacity: 1, scale: 1.05, filter: 'none' });
      }
    };

    const setLayerStyle = (el, { z, y, x, opacity, scale, filter }) => {
      if (!el) return;
      el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
      el.style.opacity = opacity;
      el.style.filter = filter;
      el.style.pointerEvents = opacity < 0.2 ? 'none' : 'auto';
    };

    const updateActiveStep = (index) => {
      stepItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    const handleAssemblyScroll = () => {
      if (isManualDisassembled) return;

      const rect = assemblySection.getBoundingClientRect();
      const sectionHeight = assemblySection.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const totalScrollable = sectionHeight - viewportHeight;
      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      applyDisassemblyProgress(progress);
    };

    window.addEventListener('scroll', handleAssemblyScroll, { passive: true });
    // Initialize first state
    handleAssemblyScroll();

    // Step Item Click to preview specific layer states
    stepItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        isManualDisassembled = true;
        const progressSteps = [0.05, 0.30, 0.55, 0.95];
        applyDisassemblyProgress(progressSteps[index]);
      });
    });

    // Toggle Button (Reset / Re-Assemble)
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        isManualDisassembled = !isManualDisassembled;
        if (isManualDisassembled) {
          // Force Disassemble all to core
          applyDisassemblyProgress(0.95);
          toggleBtn.innerHTML = '<i class="fas fa-layer-group"></i> Satukan Kembali Semua Layer';
        } else {
          // Force Re-Assemble all 4
          applyDisassemblyProgress(0.05);
          toggleBtn.innerHTML = '<i class="fas fa-arrows-split-up-and-left"></i> Uraikan Layer (Disassemble)';
        }
      });
    }
  }

  // 4. Interactive Module Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');

        // Update active buttons
        tabButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Update active panels
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

  // 5. Image Lightbox Modal Viewer
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.querySelector('.lightbox-close');

  const triggerElements = document.querySelectorAll('[data-lightbox="true"]');

  triggerElements.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const src = trigger.getAttribute('data-src') || trigger.querySelector('img')?.src;
      const title = trigger.getAttribute('data-title') || 'Sigrax CMMS Preview';
      const desc = trigger.getAttribute('data-desc') || '';

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
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 6. Category Filter (for Features Page)
  const filterPills = document.querySelectorAll('.filter-pill');
  const moduleCards = document.querySelectorAll('.module-card');

  if (filterPills.length > 0 && moduleCards.length > 0) {
    filterPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const category = pill.getAttribute('data-category');

        filterPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');

        moduleCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 7. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});
