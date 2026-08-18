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

  const layer6 = document.querySelector('.assembly-layer.layer-6');
  const layer5 = document.querySelector('.assembly-layer.layer-5');
  const layer4 = document.querySelector('.assembly-layer.layer-4');
  const layer3 = document.querySelector('.assembly-layer.layer-3');
  const layer2 = document.querySelector('.assembly-layer.layer-2');
  const layer1 = document.querySelector('.assembly-layer.layer-1');

  let isManualDisassembled = false;

  if (assemblySection && assemblyStack && layer6 && layer5 && layer4 && layer3 && layer2 && layer1) {
    
    // Function to apply progressive disassembly based on progress (0.0 to 1.0)
    const applyDisassemblyProgress = (progress) => {
      // 6 Phases:
      // [0.00 - 0.12]: Full Assembled Stack (Semua 6 Layer Utuh)
      // [0.12 - 0.28]: Phase 1 -> Layer 6 (Executive Dashboard) terangkat & memudar
      // [0.28 - 0.44]: Phase 2 -> Layer 5 (Audit & Analytics) terangkat & memudar
      // [0.44 - 0.60]: Phase 3 -> Layer 4 (Work Order & Ops) terangkat & memudar
      // [0.60 - 0.76]: Phase 4 -> Layer 3 (Parts & Inventory) terangkat & memudar
      // [0.76 - 0.90]: Phase 5 -> Layer 2 (Preventive Scheduler) terangkat & memudar
      // [0.90 - 1.00]: Phase 6 -> Layer 1 (Master Data & Hierarchy Core) tersisa & bersinar di fondasi

      if (progress <= 0.12) {
        // Full 6 Layers
        updateActiveStep(0);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-layer-group text-gold"></i> Ekosistem Terpadu (6 Lapisan Sistem Aktif)';
        
        setLayerStyle(layer6, { z: 65, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer5, { z: 52, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer4, { z: 39, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer3, { z: 26, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer2, { z: 13, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer1, { z: 0,  y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });

      } else if (progress > 0.12 && progress <= 0.28) {
        // Layer 6 lifts off
        const p = (progress - 0.12) / 0.16;
        updateActiveStep(1);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-chart-pie text-gold"></i> Layer 6: Executive Command Analytics';

        setLayerStyle(layer6, { z: 65 + (p * 200), y: -(p * 70), x: p * 25, opacity: Math.max(0, 1 - (p * 1.3)), scale: 1 + (p * 0.12), filter: `blur(${p * 4}px)` });
        setLayerStyle(layer5, { z: 52, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer4, { z: 39, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer3, { z: 26, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer2, { z: 13, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer1, { z: 0,  y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });

      } else if (progress > 0.28 && progress <= 0.44) {
        // Layer 5 lifts off
        const p = (progress - 0.28) / 0.16;
        updateActiveStep(2);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-file-chart-column text-gold"></i> Layer 5: Audit & Compliance Analytics';

        setLayerStyle(layer6, { z: 300, y: -100, x: 40, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer5, { z: 52 + (p * 180), y: -(p * 65), x: p * 20, opacity: Math.max(0, 1 - (p * 1.3)), scale: 1 + (p * 0.1), filter: `blur(${p * 4}px)` });
        setLayerStyle(layer4, { z: 39, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer3, { z: 26, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer2, { z: 13, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer1, { z: 0,  y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });

      } else if (progress > 0.44 && progress <= 0.60) {
        // Layer 4 lifts off
        const p = (progress - 0.44) / 0.16;
        updateActiveStep(3);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-clipboard-check text-gold"></i> Layer 4: Field Operations & Work Order Hub';

        setLayerStyle(layer6, { z: 300, y: -100, x: 40, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer5, { z: 280, y: -90,  x: 35, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer4, { z: 39 + (p * 180), y: -(p * 60), x: p * 20, opacity: Math.max(0, 1 - (p * 1.3)), scale: 1 + (p * 0.1), filter: `blur(${p * 4}px)` });
        setLayerStyle(layer3, { z: 26, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer2, { z: 13, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer1, { z: 0,  y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });

      } else if (progress > 0.60 && progress <= 0.76) {
        // Layer 3 lifts off
        const p = (progress - 0.60) / 0.16;
        updateActiveStep(4);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-boxes-stacked text-gold"></i> Layer 3: Spare Parts & Inventory Control';

        setLayerStyle(layer6, { z: 300, y: -100, x: 40, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer5, { z: 280, y: -90,  x: 35, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer4, { z: 260, y: -80,  x: 30, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer3, { z: 26 + (p * 160), y: -(p * 55), x: p * 15, opacity: Math.max(0, 1 - (p * 1.3)), scale: 1 + (p * 0.08), filter: `blur(${p * 4}px)` });
        setLayerStyle(layer2, { z: 13, y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });
        setLayerStyle(layer1, { z: 0,  y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });

      } else if (progress > 0.76 && progress <= 0.90) {
        // Layer 2 lifts off
        const p = (progress - 0.76) / 0.14;
        updateActiveStep(5);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-calendar-check text-gold"></i> Layer 2: Preventive & Automation Scheduler';

        setLayerStyle(layer6, { z: 300, y: -100, x: 40, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer5, { z: 280, y: -90,  x: 35, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer4, { z: 260, y: -80,  x: 30, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer3, { z: 240, y: -70,  x: 25, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer2, { z: 13 + (p * 150), y: -(p * 50), x: p * 15, opacity: Math.max(0, 1 - (p * 1.3)), scale: 1 + (p * 0.08), filter: `blur(${p * 4}px)` });
        setLayerStyle(layer1, { z: 0,  y: 0, x: 0, opacity: 1, scale: 1, filter: 'none' });

      } else {
        // Hanya tersisa Layer 1 (Master Data Core)
        updateActiveStep(5);
        if (statusBadge) statusBadge.innerHTML = '<i class="fas fa-database text-gold"></i> Layer 1: Master Database & Plant Hierarchy Core';

        setLayerStyle(layer6, { z: 300, y: -100, x: 40, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer5, { z: 280, y: -90,  x: 35, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer4, { z: 260, y: -80,  x: 30, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer3, { z: 240, y: -70,  x: 25, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer2, { z: 220, y: -60,  x: 20, opacity: 0, scale: 1.2, filter: 'blur(8px)' });
        setLayerStyle(layer1, { z: 15,  y: 0,    x: 0,  opacity: 1, scale: 1.05, filter: 'none' });
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
