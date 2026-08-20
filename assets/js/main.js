
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  var navLinks = document.querySelectorAll('.nav__link');
  var themeToggle = document.getElementById('theme-toggle');
  var typingText = document.getElementById('typing-text');
  var backToTop = document.getElementById('back-to-top');
  var contactForm = document.getElementById('contact-form');
  var formStatus = document.getElementById('form-status');
  var projectsGrid = document.getElementById('projects-grid');
  var canvas = document.getElementById('particles-canvas');
  var preloader = document.getElementById('preloader');
  var scrollProgress = document.getElementById('scroll-progress');
  var cursor = document.getElementById('cursor');
  var cursorFollower = document.getElementById('cursor-follower');
  var langSelect = document.getElementById('lang-select');

  // Language selector
  if (langSelect) {
    langSelect.value = window.i18n.getLanguage();
    langSelect.addEventListener('change', function (e) {
      window.i18n.setLanguage(e.target.value);
    });
  }

  // CV Download Button (hide when URL not configured)
  var cvDownloadBtn = document.getElementById('cv-download-btn');
  if (cvDownloadBtn && window.PORTFOLIO_CONFIG && !window.PORTFOLIO_CONFIG.cvUrl) {
    cvDownloadBtn.style.display = 'none';
  }

  // Preloader
  if (preloader) {
    var preloaderStart = Date.now();
    var MIN_DISPLAY = 800;

    window.addEventListener('load', function () {
      var elapsed = Date.now() - preloaderStart;
      var remaining = Math.max(0, MIN_DISPLAY - elapsed);
      setTimeout(function () {
        preloader.classList.add('preloader--hidden');
      }, remaining);
    });
  }

  var isPointerFine = window.matchMedia('(pointer: fine)').matches;

  // Custom cursor
  if (isPointerFine && cursor && cursorFollower) {
    document.documentElement.classList.add('has-custom-cursor');

    var mouseX = 0, mouseY = 0;
    var followerX = 0, followerY = 0;
    var hoverSelector = 'a, button, .btn, .skill-tag, .project-card, .cert-card';

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';

      var isInteractive = e.target && e.target.closest && e.target.closest(hoverSelector);
      cursor.classList.toggle('cursor--hover', Boolean(isInteractive));
      cursorFollower.classList.toggle('cursor-follower--hover', Boolean(isInteractive));
    });

    var followerRAF = null;

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';
      followerRAF = requestAnimationFrame(animateFollower);
    }
    animateFollower();

    document.addEventListener('visibilitychange', function () {
      if (document.hidden && followerRAF) {
        cancelAnimationFrame(followerRAF);
        followerRAF = null;
      } else if (!document.hidden && !followerRAF) {
        followerRAF = requestAnimationFrame(animateFollower);
      }
    });
  } else {
    if (cursor) cursor.style.display = 'none';
    if (cursorFollower) cursorFollower.style.display = 'none';
  }

  // Theme toggle
  var THEME_KEY = 'gm-theme';

  function getPreferredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  setTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Mobile menu
  if (navToggle && navMenu) {
    var navOverlay = document.createElement('div');
    navOverlay.className = 'nav__overlay';
    document.body.appendChild(navOverlay);

    var lastFocusedEl = null;

    function getFocusableElements() {
      return navMenu.querySelectorAll('a, button, select, [tabindex]:not([tabindex="-1"])');
    }

    function trapFocus(e) {
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }
      if (e.key !== 'Tab') return;
      var focusable = getFocusableElements();
      if (focusable.length === 0) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    function openMenu() {
      lastFocusedEl = document.activeElement;
      navToggle.classList.add('nav__toggle--active');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', window.i18n.t('aria_close_menu'));
      navMenu.classList.add('nav__menu--open');
      navOverlay.classList.add('nav__overlay--visible');
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', trapFocus);
      var firstLink = navMenu.querySelector('.nav__link');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      navToggle.classList.remove('nav__toggle--active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', window.i18n.t('aria_open_menu'));
      navMenu.classList.remove('nav__menu--open');
      navOverlay.classList.remove('nav__overlay--visible');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', trapFocus);
      if (lastFocusedEl) {
        lastFocusedEl.focus();
        lastFocusedEl = null;
      }
    }

    navToggle.addEventListener('click', function () {
      if (navMenu.classList.contains('nav__menu--open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navOverlay.addEventListener('click', closeMenu);

    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && navMenu.classList.contains('nav__menu--open')) {
        closeMenu();
      }
    });
  }

  // Scroll handling
  var sections = document.querySelectorAll('.section, .hero');

  function onScroll() {
    var scrollY = window.scrollY;

    if (scrollProgress) {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = progress + '%';
    }

    if (scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    if (backToTop) {
      if (scrollY > 500) {
        backToTop.classList.add('back-to-top--visible');
      } else {
        backToTop.classList.remove('back-to-top--visible');
      }
    }

    var current = '';
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('nav__link--active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('nav__link--active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  // Reveal on scroll
  var revealElements = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  // Typing effect (reads phrases from i18n)
  var phraseIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var typingSpeed = 80;

  function getTypingPhrases() {
    var phrases = window.i18n.t('typing_phrases');
    return Array.isArray(phrases) ? phrases : [];
  }

  function typeEffect() {
    var phrases = getTypingPhrases();
    if (phrases.length === 0) {
      setTimeout(typeEffect, 500);
      return;
    }

    var current = phrases[phraseIndex % phrases.length];

    if (isDeleting) {
      typingText.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    var delay = typingSpeed;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 500;
    } else if (isDeleting) {
      delay = 40;
    }

    setTimeout(typeEffect, delay);
  }

  if (typingText) {
    typeEffect();
  }

  // Counter animation
  var counterElements = document.querySelectorAll('[data-count]');

  if ('IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var duration = 1500;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  // GitHub projects
  var GITHUB_USER = window.PORTFOLIO_CONFIG.githubUser;

  var langColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    Java: '#b07219',
    'C#': '#178600',
    Go: '#00ADD8',
    Rust: '#dea584',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Dockerfile: '#384d54'
  };

  function sanitizeText(text) {
    var div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }

  function sanitizeUrl(url) {
    try {
      var parsed = new URL(url);
      return (parsed.protocol === 'https:' || parsed.protocol === 'http:') ? parsed.href : '#';
    } catch (e) {
      return '#';
    }
  }

  function fetchProjects() {
    var cacheKey = 'gh-repos-' + GITHUB_USER;
    var cached = null;
    try { cached = JSON.parse(sessionStorage.getItem(cacheKey)); } catch (e) { /* ignore */ }

    var promise = cached
      ? Promise.resolve(cached)
      : fetch('https://api.github.com/users/' + GITHUB_USER + '/repos?sort=updated&per_page=100&type=owner')
          .then(function (res) {
            if (!res.ok) throw new Error('GitHub API error');
            return res.json();
          })
          .then(function (data) {
            sessionStorage.setItem(cacheKey, JSON.stringify(data));
            return data;
          });

    promise.then(function (repos) {
        var loading = document.getElementById('projects-loading');
        if (loading) loading.remove();

        var priority = ['backendjwt', 'chalice-jwt-auth-api-estudo', 'questionnaire-manager', 'api-flask-ultra-simples'];

        var filtered = repos.filter(function (r) {
          return !r.fork && !r.archived && r.name !== GITHUB_USER + '.github.io';
        }).sort(function (a, b) {
          var pa = priority.indexOf(a.name);
          var pb = priority.indexOf(b.name);
          if (pa !== -1 || pb !== -1) {
            var ra = pa === -1 ? 99 : pa;
            var rb = pb === -1 ? 99 : pb;
            if (ra !== rb) return ra - rb;
          }
          return new Date(b.updated_at) - new Date(a.updated_at);
        }).slice(0, 6);

        if (filtered.length === 0) {
          var emptyP = document.createElement('p');
          emptyP.style.cssText = 'grid-column:1/-1;text-align:center;color:var(--text-muted)';
          emptyP.textContent = window.i18n.t('projects_empty');
          projectsGrid.appendChild(emptyP);
          return;
        }

        filtered.forEach(function (repo) {
          var langDot = repo.language && langColors[repo.language]
            ? '<span class="project-card__lang-dot" style="background:' + langColors[repo.language] + '"></span>'
            : '';

          var card = document.createElement('div');
          card.className = 'project-card';

          var header = document.createElement('div');
          header.className = 'project-card__header';
          header.innerHTML =
            '<svg class="project-card__icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>' +
            '<div class="project-card__links">' +
              '<a href="' + sanitizeUrl(repo.html_url) + '" target="_blank" rel="noopener noreferrer" aria-label="Ver repositório">' +
                '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
              '</a>' +
            '</div>';

          var name = document.createElement('h3');
          name.className = 'project-card__name';
          name.textContent = repo.name;

          var desc = document.createElement('p');
          desc.className = 'project-card__description';
          desc.textContent = repo.description || window.i18n.t('projects_no_description');

          var footer = document.createElement('div');
          footer.className = 'project-card__footer';
          footer.innerHTML =
            (repo.language
              ? '<span class="project-card__lang">' + langDot + ' ' + sanitizeText(repo.language) + '</span>'
              : '') +
            '<span class="project-card__stat">' +
              '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ' +
              repo.stargazers_count +
            '</span>' +
            '<span class="project-card__stat">' +
              '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg> ' +
              repo.forks_count +
            '</span>';

          card.appendChild(header);
          card.appendChild(name);
          card.appendChild(desc);
          card.appendChild(footer);
          projectsGrid.appendChild(card);
        });
      })
      .catch(function () {
        var loading = document.getElementById('projects-loading');
        if (loading) {
          var errorP = document.createElement('p');
          errorP.style.color = 'var(--text-muted)';
          errorP.textContent = window.i18n.t('projects_error') + ' ';
          var errorLink = document.createElement('a');
          errorLink.href = 'https://github.com/' + GITHUB_USER;
          errorLink.target = '_blank';
          errorLink.rel = 'noopener noreferrer';
          errorLink.textContent = window.i18n.t('projects_error_link');
          errorP.appendChild(errorLink);
          loading.textContent = '';
          loading.appendChild(errorP);
        }
      });
  }

  fetchProjects();

  // Contact form
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = document.getElementById('form-submit');
      var submitSpan = submitBtn.querySelector('span');
      submitBtn.disabled = true;
      submitSpan.textContent = window.i18n.t('form_sending');
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      var formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            formStatus.textContent = window.i18n.t('form_success');
            formStatus.classList.add('form-status--success');
            contactForm.reset();
          } else {
            throw new Error('Form error');
          }
        })
        .catch(function () {
          formStatus.textContent = window.i18n.t('form_error');
          formStatus.classList.add('form-status--error');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitSpan.textContent = window.i18n.t('form_submit');
        });
    });
  }

  // Particle system
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 60;
    var connectionDistance = 120;
    var mouse = { x: null, y: null };
    var animationId = null;
    function resizeCanvas() {
      var oldW = canvas.width;
      var oldH = canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (oldW && oldH) {
        particles.forEach(function (p) {
          p.x = (p.x / oldW) * canvas.width;
          p.y = (p.y / oldH) * canvas.height;
        });
      }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (isPointerFine) {
      window.addEventListener('mousemove', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      window.addEventListener('mouseout', function () {
        mouse.x = null;
        mouse.y = null;
      });
    }

    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 1.5 + 0.5;
    }

    Particle.prototype.update = function () {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        var dx = mouse.x - this.x;
        var dy = mouse.y - this.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          var force = (150 - dist) / 150 * 0.02;
          this.vx += dx * force;
          this.vy += dy * force;
        }
      }

      var speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > 1.5) {
        this.vx = (this.vx / speed) * 1.5;
        this.vy = (this.vy / speed) * 1.5;
      }
    };

    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    for (var i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      var particleColor = isDark ? 'rgba(99, 102, 241,' : 'rgba(79, 70, 229,';

      ctx.fillStyle = particleColor + '0.6)';

      particles.forEach(function (p) {
        p.update();
        p.draw();
      });

      ctx.lineWidth = 0.5;
      var currentOpacity = -1;

      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            var opacity = Math.round((1 - distance / connectionDistance) * 0.3 * 100) / 100;
            if (opacity !== currentOpacity) {
              if (currentOpacity !== -1) ctx.stroke();
              ctx.beginPath();
              ctx.strokeStyle = particleColor + opacity + ')';
              currentOpacity = opacity;
            }
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
          }
        }
      }
      if (currentOpacity !== -1) ctx.stroke();

      animationId = requestAnimationFrame(animate);
    }

    var canvasVisible = true;

    if ('IntersectionObserver' in window) {
      var canvasObserver = new IntersectionObserver(function (entries) {
        canvasVisible = entries[0].isIntersecting;
        if (canvasVisible && !animationId && !document.hidden) {
          animate();
        } else if (!canvasVisible && animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      }, { threshold: 0 });
      canvasObserver.observe(canvas);
    } else {
      animate();
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
        animationId = null;
      } else if (!animationId && canvasVisible) {
        animationId = requestAnimationFrame(animate);
      }
    });
  }

  // Card tilt effect
  if (isPointerFine) {
    var activeTiltCard = null;

    function resetTilt(card) {
      if (!card) return;
      card.style.transform = '';
      card.style.transition = '';
    }

    document.addEventListener('mousemove', function (e) {
      var card = e.target && e.target.closest
        ? e.target.closest('.project-card, .cert-card, .stat-card')
        : null;

      if (!card) {
        if (activeTiltCard) {
          resetTilt(activeTiltCard);
          activeTiltCard = null;
        }
        return;
      }

      if (activeTiltCard && activeTiltCard !== card) {
        resetTilt(activeTiltCard);
      }
      activeTiltCard = card;

      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var rotateX = ((y / rect.height) - 0.5) * -8;
      var rotateY = ((x / rect.width) - 0.5) * 8;
      card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
      card.style.transition = 'transform 0.1s ease';
    });

    document.addEventListener('mouseleave', function () {
      resetTilt(activeTiltCard);
      activeTiltCard = null;
    }, true);

    window.addEventListener('blur', function () {
      resetTilt(activeTiltCard);
      activeTiltCard = null;
    });
  }

})();
