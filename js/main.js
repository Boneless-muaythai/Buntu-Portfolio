(function () {
  'use strict';

  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  // Theme toggle (dark / light)
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const root = document.documentElement;

  function currentTheme() {
    const explicit = root.getAttribute('data-theme');
    if (explicit === 'light' || explicit === 'dark') return explicit;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    // Show the icon for the mode you can switch TO.
    if (sunIcon) sunIcon.classList.toggle('hidden', !isDark);
    if (moonIcon) moonIcon.classList.toggle('hidden', isDark);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  if (themeToggle) {
    applyTheme(currentTheme());
    themeToggle.addEventListener('click', function () {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
    });
  }

  // Header scroll state
  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  function setMenuOpen(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.classList.toggle('hidden', !open);
    menuIconOpen.classList.toggle('hidden', open);
    menuIconClose.classList.toggle('hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', function () {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenuOpen(false);
    });
  });

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // Contact form validation
  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorEl = document.querySelector('.error-msg[data-for="' + fieldId + '"]');
    if (input) input.classList.add('border-red-500');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
  }

  function clearErrors() {
    contactForm.querySelectorAll('.error-msg').forEach(function (el) {
      el.classList.add('hidden');
      el.textContent = '';
    });
    contactForm.querySelectorAll('input, textarea').forEach(function (el) {
      el.classList.remove('border-red-500');
    });
    formSuccess.classList.add('hidden');
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    let valid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
      showError('name', 'Please enter your name.');
      valid = false;
    }
    if (!email) {
      showError('email', 'Please enter your email.');
      valid = false;
    } else if (!validateEmail(email)) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }
    if (!message) {
      showError('message', 'Please enter a message.');
      valid = false;
    }

    if (!valid) return;

    // ⚠️ PRE-LAUNCH TO-DO: This form does NOT send anywhere yet — it only logs
    // to the console and shows the success message. Before going live, connect
    // it to a real handler (e.g. Formspree, Netlify Forms, or a backend) so
    // submissions actually reach your inbox. See the "Send Message" button /
    // <form id="contact-form"> in index.html.
    console.log('Contact form submitted (demo only — not sent anywhere):', {
      name: name,
      email: email,
      projectType: document.getElementById('project-type').value,
      budget: document.getElementById('budget').value,
      message: message,
    });

    formSuccess.classList.remove('hidden');
    contactForm.reset();
  });
})();
