(function () {
  'use strict';

  /* drawer */

  var navToggle      = document.getElementById('navToggle');
  var navDrawer      = document.getElementById('navDrawer');
  var navDrawerClose = document.getElementById('navDrawerClose');
  var navScrim       = document.getElementById('navScrim');

  if (navToggle && navDrawer) {
    function openDrawer() {
      navDrawer.removeAttribute('hidden');
      if (navScrim) navScrim.removeAttribute('hidden');
      void navDrawer.offsetWidth;
      navDrawer.classList.add('open');
      if (navScrim) navScrim.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('body-no-scroll');
      if (navDrawerClose) navDrawerClose.focus();
    }

    function closeDrawer() {
      navDrawer.classList.remove('open');
      if (navScrim) navScrim.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('body-no-scroll');
      setTimeout(function () {
        if (!navDrawer.classList.contains('open')) {
          navDrawer.setAttribute('hidden', '');
          if (navScrim) navScrim.setAttribute('hidden', '');
        }
      }, 400);
      navToggle.focus();
    }

    navToggle.addEventListener('click', openDrawer);
    if (navDrawerClose) navDrawerClose.addEventListener('click', closeDrawer);
    if (navScrim) navScrim.addEventListener('click', closeDrawer);

    var drawerLinks = navDrawer.querySelectorAll('a');
    for (var i = 0; i < drawerLinks.length; i++) {
      drawerLinks[i].addEventListener('click', closeDrawer);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  /* page tools */

  function fetchPageText(url) {
    return fetch(url, { credentials: 'same-origin' }).then(function (resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.text();
    });
  }

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      ok ? resolve() : reject(new Error('execCommand failed'));
    });
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return legacyCopy(text);
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-copy-page]'), function (btn) {
    var label = btn.querySelector('.page-tool-label') || btn;
    var original = label.textContent;
    var resetTimer;
    btn.addEventListener('click', function () {
      var url = btn.getAttribute('data-copy-page');
      if (!url) return;
      fetchPageText(url).then(copyText).then(function () {
        label.textContent = 'Copied \u2713';
        btn.classList.add('is-copied');
        clearTimeout(resetTimer);
        resetTimer = setTimeout(function () {
          label.textContent = original;
          btn.classList.remove('is-copied');
        }, 1800);
      }).catch(function (err) {
        console.error('Copy-for-LLM failed:', err);
        label.textContent = 'Copy failed';
        clearTimeout(resetTimer);
        resetTimer = setTimeout(function () { label.textContent = original; }, 1800);
      });
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll('[data-view-page]'), function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var url = btn.getAttribute('data-view-page');
      if (!url) return;
      // Open a tab synchronously (avoids popup blocking), then point it at a
      // text/plain blob so the Markdown previews instead of downloading.
      var win = window.open('', '_blank');
      fetchPageText(url).then(function (text) {
        var blobUrl = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
        if (win) win.location = blobUrl; else window.location = blobUrl;
      }).catch(function (err) {
        console.error('View-as-Markdown failed:', err);
        if (win) win.location = url;
      });
    });
  });

  /* swatch copy */

  var brandToast = document.getElementById('brandToast');
  if (brandToast) {
    var toastTimer;
    var showToast = function (msg) {
      brandToast.textContent = msg;
      brandToast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { brandToast.classList.remove('show'); }, 1500);
    };
    var swatches = document.querySelectorAll('.brand-swatch');
    Array.prototype.forEach.call(swatches, function (el) {
      el.addEventListener('click', function () {
        var val = el.getAttribute('data-copy');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(val).then(
            function () { showToast(val + ' copied'); },
            function () { showToast(val); }
          );
        } else {
          showToast(val);
        }
      });
    });
  }

  /* scroll top */

  var scrollTop = document.getElementById('scrollTop');
  if (scrollTop) {
    var threshold = 600;
    var ticking = false;
    function syncScrollTop() {
      var show = window.scrollY > threshold;
      if (show) {
        scrollTop.removeAttribute('hidden');
      } else {
        scrollTop.setAttribute('hidden', '');
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(syncScrollTop);
        ticking = true;
      }
    }, { passive: true });
    syncScrollTop();
  }

  /* form */

  var form = document.getElementById('applyForm');
  if (!form) return;

  var statusEl    = document.getElementById('formStatus');
  var submitBtn   = document.getElementById('formSubmit');
  var loadedAtEl  = document.getElementById('f-loaded-at');
  var WEBHOOK_URL = '/api/public/contact';
  var TIMEOUT_MS  = 30000;

  var formLoadedAt = Date.now();
  if (loadedAtEl) loadedAtEl.value = String(formLoadedAt);

  function setStatus(msg, kind) {
    if (!statusEl) return;
    statusEl.textContent = msg || '';
    statusEl.classList.remove('error', 'success');
    if (kind) statusEl.classList.add(kind);
  }

  function setLoading(on) {
    if (!submitBtn) return;
    submitBtn.disabled = !!on;
    submitBtn.classList.toggle('loading', !!on);
    submitBtn.setAttribute('aria-busy', on ? 'true' : 'false');
  }

  function clearErrors() {
    var bad = form.querySelectorAll('.md-textfield.error');
    for (var i = 0; i < bad.length; i++) {
      bad[i].classList.remove('error');
    }
    var invalid = form.querySelectorAll('[aria-invalid="true"]');
    for (var j = 0; j < invalid.length; j++) {
      invalid[j].setAttribute('aria-invalid', 'false');
    }
  }

  function markError(input) {
    var field = input && input.closest('.md-textfield');
    if (field) field.classList.add('error');
    if (input) input.setAttribute('aria-invalid', 'true');
  }

  function validate() {
    clearErrors();
    var ok = true;
    var inputs = form.querySelectorAll('input[required], textarea[required]');
    for (var i = 0; i < inputs.length; i++) {
      var el = inputs[i];
      var v = (el.value || '').trim();
      var min = parseInt(el.getAttribute('minlength') || '0', 10);
      if (!v || (min && v.length < min) || !el.checkValidity()) {
        markError(el);
        ok = false;
      }
    }
    var emailEl = form.querySelector('[name="email"]');
    if (emailEl && emailEl.value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailEl.value)) {
      markError(emailEl);
      ok = false;
    }
    return ok;
  }

  function buildPayload() {
    var fd = new FormData(form);
    return {
      submitted_at: new Date().toISOString(),
      source: 'rewbihub.com / contact',
      loadedAt: Date.now() - formLoadedAt,
      firstName: (fd.get('firstName') || '').toString().trim(),
      lastName:  (fd.get('lastName')  || '').toString().trim(),
      email:     (fd.get('email')     || '').toString().trim().toLowerCase(),
      phone:     (fd.get('phone')     || '').toString().trim(),
      goals:     (fd.get('goals')     || '').toString().trim(),
      message:   (fd.get('message')   || '').toString().trim() || null,
      hp: (fd.get('company') || '').toString()
    };
  }

  function postWebhook(payload) {
    return new Promise(function (resolve, reject) {
      var ctrl = ('AbortController' in window) ? new AbortController() : null;
      var t = setTimeout(function () {
        if (ctrl) ctrl.abort();
        reject(new Error('Request timed out.'));
      }, TIMEOUT_MS);

      fetch(WEBHOOK_URL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl ? ctrl.signal : undefined
      }).then(function (res) {
        clearTimeout(t);
        if (!res.ok) return reject(new Error('Server error ' + res.status));
        resolve(res);
      }).catch(function (err) {
        clearTimeout(t);
        if (err && err.name === 'AbortError') return;
        reject(err);
      });
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    setStatus('');

    if (!validate()) {
      setStatus('Please complete the required fields.', 'error');
      var firstBad = form.querySelector('.md-textfield.error input, .md-textfield.error textarea');
      if (firstBad && firstBad.focus) firstBad.focus();
      return;
    }

    var payload = buildPayload();

    if (payload.hp) {
      form.reset();
      setStatus('Thanks \u2014 we\u2019ll be in touch.', 'success');
      return;
    }
    delete payload.hp;

    setLoading(true);

    postWebhook(payload)
      .then(function () {
        form.reset();
        setStatus('Thanks \u2014 we\u2019ll be in touch shortly.', 'success');
      })
      .catch(function (err) {
        setStatus('Could not submit: ' + (err && err.message ? err.message : 'unknown error') + '. Please try again.', 'error');
      })
      .then(function () { setLoading(false); });
  });
})();
