// ─── NAVBAR SCROLL ───
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// ─── HAMBURGER ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});

mobileClose.addEventListener('click', closeMobile);

function closeMobile() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── PACKAGE TABS ───
function filterPkg(type) {
  const allCards = document.querySelectorAll('.pkg-card');
  const allBtns = document.querySelectorAll('.tab-btn');

  allBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  allCards.forEach(card => {
    if (card.dataset.type === type) {
      card.classList.add('active-card');
      card.style.display = 'block';
      // Animate in
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'all 0.3s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    } else {
      card.classList.remove('active-card');
      card.style.display = 'none';
    }
  });
}

// ─── REVEAL ON SCROLL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── FORM SUBMISSIONS ───
function submitBooking(e) {
  e.preventDefault();
  const msg = document.getElementById('successMsg');
  msg.style.display = 'block';
  e.target.reset();
  e.target.style.display = 'none';
  msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function submitContact(e) {
  e.preventDefault();
  const success = document.getElementById('contactSuccess');
  success.style.display = 'block';
  success.innerHTML = currentLang === 'en'
    ? '✅ Message sent! We will reply within 24 hours. JazakAllahu Khairan.'
    : '✅ تم إرسال رسالتك! سنرد خلال 24 ساعة. جزاكم الله خيراً.';
  e.target.reset();
}

// ─── LANGUAGE TOGGLE ───
let currentLang = 'en';
const langBtn = document.getElementById('langToggle');

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  const html = document.documentElement;

  if (currentLang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    langBtn.textContent = '🌐 English';
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    langBtn.textContent = '🌐 العربية';
  }

  // Translate all data-en / data-ar elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = currentLang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-ar');
    if (text && !el.querySelector('span[data-en]')) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else if (el.innerHTML.includes('<span')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    const en = el.getAttribute('data-placeholder-en') || el.placeholder;
    const ar = el.getAttribute('data-placeholder-ar') || el.placeholder;
    if (currentLang === 'ar' && el.getAttribute('data-placeholder-ar')) {
      el.placeholder = ar;
    }
  });
});

// ─── COUNTER ANIMATION ───
function animateCounter(el, target) {
  let start = 0;
  const duration = 2000;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const val = Math.floor(progress * target);
    el.textContent = val.toLocaleString() + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Observe hero stats
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ─── SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = document.getElementById('navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── ACTIVE NAV LINK ON SCROLL ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--gold-light)';
    }
  });
});

// ─── PACKAGE TABS: init first tab on load ───
window.addEventListener('DOMContentLoaded', () => {
  const firstTab = document.querySelector('.tab-btn');
  if (firstTab) firstTab.click();
});
