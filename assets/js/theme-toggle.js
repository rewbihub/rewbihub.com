/* Theme toggle. Overrides prefers-color-scheme, persists the choice in
 * localStorage, and applies it as data-theme on <html>. */
(function () {
  'use strict';

  var STORAGE_KEY = 'rewbi-theme';
  var root = document.documentElement;
  var btn  = document.getElementById('themeToggle');
  if (!btn) return;

  function osPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function effectiveTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return 'light'; // default to light; user can opt into dark via toggle
  }

  function apply(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  apply(effectiveTheme());

  btn.addEventListener('click', function () {
    var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  });

})();
