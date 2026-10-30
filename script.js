/**
 * KAAAFI KORNER — SCRIPT & FOUNDATION ENGINE
 * Verified Business Information & Interactive Utilities
 * Silvassa, Gujarat, India
 */

/**
 * SOURCE OF TRUTH — Verified Business Information
 * Strictly adhering to accuracy guidelines: no fabricated phone numbers, prices, or hours.
 */
const KAAAFI_DATA = Object.freeze({
  name: "Kaaafi Korner",
  category: "Coffee shop",
  priceRange: "₹200–₹400 per person",
  address: "Shop No. 9, Horizon Park, Naroli Road, Silvassa, Athal, Dadra and Nagar Haveli and Daman and Diu, 396230",
  googleRating: {
    score: 4.7,
    maxScore: 5,
    reviewsCount: 94,
    searchUrl: "https://www.google.com/search?q=kaafi+korner+silvassa"
  },
  hours: {
    listedClosing: "10:30 PM",
    scheduleNote: "Complete weekly opening schedule is not yet confirmed"
  },
  description: "Kaaafi Korner is a cozy neighbourhood café serving specialty coffee, South Indian favourites, and a selection of classic café dishes. From a good cup of coffee and a dosa to sandwiches, breakfasts and easy comfort food, there’s something for everyone. Come by for a quick coffee, a meal with friends, or simply to spend a little time at the Korner.",
  social: {
    instagramProfile: "https://www.instagram.com/kaaafikorner/",
    instagramEmbeds: [
      "https://www.instagram.com/p/De6PEXsOHzl/",
      "https://www.instagram.com/reel/DdEtxeROfxv/"
    ]
  },
  reviews: [
    {
      author: "Shreya Verma",
      rating: 5,
      text: "The place, food and service too good"
    },
    {
      author: "Krupali Patel",
      rating: 1,
      text: "The drinks we ordered weren't very tasty either."
    },
    {
      author: "Gamer Akshar",
      rating: 4,
      text: "Good interior, friendly staff 😍 must visit"
    }
  ]
});

// Expose globally for interactive components
window.KAAAFI_DATA = KAAAFI_DATA;

/**
 * MENU DATA SOURCE OF TRUTH
 * Items based on verified café descriptions, reported specialties and in-store inquiries.
 * Prices remain flagged as 'Pending confirmation' rather than fabricated.
 */
const KAAAFI_MENU_DATA = Object.freeze([
  {
    id: "sig-dosa",
    name: "Signature Crispy Dosa",
    category: "dosas",
    badge: "Signature",
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Freshly made thin, golden-creped dosa roasted crisp, served with house coconut chutney and warm spiced sambar.",
    tag: "South Indian Classic"
  },
  {
    id: "benne-dosa",
    name: "Benne Dosa",
    category: "dosas",
    badge: null,
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Authentic Davanagere-style butter dosa with a crisp golden exterior and melt-in-mouth soft center, paired with spicy chutneys.",
    tag: "Traditional Recipe"
  },
  {
    id: "ghee-podi-dosa",
    name: "Ghee Podi Dosa",
    category: "dosas",
    badge: null,
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Crispy roast dosa generously brushed with pure aromatic desi ghee and layered with roasted lentil spice podi.",
    tag: "Spiced & Crisp"
  },
  {
    id: "filter-kaapi",
    name: "Traditional Filter Kaapi",
    category: "coffee",
    badge: "Specialty",
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Slow-dripped South Indian decoction whipped with hot frothy milk, delivering deep aromas and authentic warmth.",
    tag: "Freshly Brewed"
  },
  {
    id: "cold-coffee",
    name: "Specialty Cold Coffee",
    category: "coffee",
    badge: null,
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Bold espresso shot blended chilled with whole milk and light sweetness, poured over ice for a creamy smooth finish.",
    tag: "Chilled Classic"
  },
  {
    id: "americano",
    name: "Artisanal Americano",
    category: "coffee",
    badge: null,
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Pure double extraction of dark-roasted coffee beans lengthened with hot water, highlighting delicate notes and bold crema.",
    tag: "Bold Roast"
  },
  {
    id: "grilled-sandwich",
    name: "Café Grilled Sandwich",
    category: "quick-bites",
    badge: null,
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Toasted bread layered with fresh sliced vegetables, house green chutney, and mild cheese, grilled golden brown.",
    tag: "Made to Order"
  },
  {
    id: "idli-platter",
    name: "Steamed Idli Platter",
    category: "quick-bites",
    badge: null,
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Fluffy steamed fermented rice and lentil cakes served warm with steaming drumstick sambar and fresh coconut dip.",
    tag: "Light & Wholesome"
  },
  {
    id: "mint-cooler",
    name: "Citrus Mint Cooler",
    category: "coolers",
    badge: null,
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Invigorating blend of fresh mint, zesty lime, crushed ice, and effervescent soda for a sparkling afternoon palate cleanser.",
    tag: "Sparkling & Cold"
  },
  {
    id: "thick-shake",
    name: "Café Thick Shake",
    category: "coolers",
    badge: null,
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Indulgent thick shake churned with chilled dairy cream, rich chocolate or vanilla infusion, served velvety thick.",
    tag: "Sweet & Creamy"
  },
  {
    id: "breakfast-combo",
    name: "Comfort Breakfast Combo",
    category: "favourites",
    badge: null,
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "A hearty morning pairing of South Indian tiffin or warm café toast served alongside your choice of hot Kaapi or brew.",
    tag: "Morning Favourite"
  },
  {
    id: "medu-vada",
    name: "Crispy Medu Vada",
    category: "favourites",
    badge: null,
    isVeg: true,
    price: null,
    priceLabel: "₹ -- (TBC)",
    description: "Golden crisp on the outside, fluffy and savory inside, infused with crushed peppercorns and curry leaves, served with chutney.",
    tag: "Evening Comfort"
  }
]);

window.KAAAFI_MENU_DATA = KAAAFI_MENU_DATA;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if CDN is active
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll-Triggered Reveal Engine (IntersectionObserver)
  const initScrollReveals = () => {
    const revealElements = document.querySelectorAll('.reveal-fade-up');
    if (!revealElements.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  };

  initScrollReveals();

  // 2. Sticky Navbar Scroll State
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  // 3. Mobile Navigation Drawer Controls
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }

  // Close drawer when any mobile nav anchor is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close drawer on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeDrawer();
      if (mobileMenuBtn) mobileMenuBtn.focus();
    }
  });

  // 4. Smooth Anchor Navigation Handler with Sticky Header Clearance
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const header = document.getElementById('siteHeader');
        const headerOffset = header ? header.offsetHeight : 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  // 5. ScrollSpy for Dynamic Active Navbar Link
  const sectionsWithIds = document.querySelectorAll('section[id]');
  const mainNavLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (sectionsWithIds.length && mainNavLinks.length) {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 140;
      let activeSectionId = 'home';

      sectionsWithIds.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          activeSectionId = section.getAttribute('id');
        }
      });

      mainNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${activeSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
  }

  // 6. Interactive Menu Category Filter Engine
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  if (filterButtons.length && menuCards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedCategory = btn.getAttribute('data-filter');

        // Update active class and accessibility attributes
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Filter cards with smooth opacity and transform transition
        menuCards.forEach(card => {
          const itemCategory = card.getAttribute('data-category');
          const isMatch = selectedCategory === 'all' || itemCategory === selectedCategory;

          if (isMatch) {
            card.classList.remove('is-hidden');
            if (!prefersReducedMotion) {
              card.style.opacity = '0';
              card.style.transform = 'translateY(12px)';
              requestAnimationFrame(() => {
                card.style.transition = 'opacity 0.32s ease, transform 0.32s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              });
            } else {
              card.style.opacity = '1';
              card.style.transform = 'none';
            }
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // 7. Instagram Embeds Initialization
  const initInstagramEmbeds = () => {
    if (window.instgrm && window.instgrm.Embeds) {
      try {
        window.instgrm.Embeds.process();
      } catch (err) {
        // Fallback visual cards remain active
      }
    }
  };

  initInstagramEmbeds();
  window.addEventListener('load', initInstagramEmbeds);

  // 8. Copy Address to Clipboard with Accessible Feedback
  const copyAddressBtn = document.getElementById('copyAddressBtn');
  const copyToast = document.getElementById('copyToast');
  const copyBtnText = document.getElementById('copyBtnText');

  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', async () => {
      const addressText = copyAddressBtn.getAttribute('data-address');
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(addressText);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = addressText;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        if (copyToast) {
          copyToast.textContent = '✓ Copied to clipboard!';
          copyToast.classList.add('show');
        }
        if (copyBtnText) {
          copyBtnText.textContent = 'Copied!';
        }

        setTimeout(() => {
          if (copyToast) {
            copyToast.classList.remove('show');
            copyToast.textContent = '';
          }
          if (copyBtnText) {
            copyBtnText.textContent = 'Copy Address';
          }
        }, 2500);
      } catch (err) {
        if (copyToast) {
          copyToast.textContent = 'Please copy manually';
          copyToast.classList.add('show');
        }
      }
    });
  }

  // 9. Accessible FAQ Accordion Engine
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const panelId = trigger.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      const item = trigger.closest('.faq-item');

      // Close other open panels for clean, focused reading
      faqTriggers.forEach(otherTrigger => {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          const otherPanelId = otherTrigger.getAttribute('aria-controls');
          const otherPanel = document.getElementById(otherPanelId);
          const otherItem = otherTrigger.closest('.faq-item');
          if (otherPanel) {
            otherPanel.style.maxHeight = null;
          }
          if (otherItem) {
            otherItem.classList.remove('is-open');
          }
        }
      });

      // Toggle current panel
      if (!isExpanded) {
        trigger.setAttribute('aria-expanded', 'true');
        if (item) item.classList.add('is-open');
        if (panel) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      } else {
        trigger.setAttribute('aria-expanded', 'false');
        if (item) item.classList.remove('is-open');
        if (panel) {
          panel.style.maxHeight = null;
        }
      }
    });
  });

  // Recalculate open FAQ accordion max-height on viewport resize
  window.addEventListener('resize', () => {
    const openTrigger = document.querySelector('.faq-trigger[aria-expanded="true"]');
    if (openTrigger) {
      const openPanelId = openTrigger.getAttribute('aria-controls');
      const openPanel = document.getElementById(openPanelId);
      if (openPanel) {
        openPanel.style.maxHeight = openPanel.scrollHeight + 'px';
      }
    }
  });

  // 10. Dynamic Copyright Year
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 11. Floating Back-to-Top Button Controller
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    const handleScrollTopVisibility = () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });
    handleScrollTopVisibility();

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }
});
