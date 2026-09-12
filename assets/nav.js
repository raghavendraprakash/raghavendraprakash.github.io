// Off-canvas sidebar toggle. Sidebar is static on desktop (see style.css);
// this only matters below the 760px breakpoint.
(function () {
  var toggle = document.getElementById('navToggle');
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('sidebarBackdrop');
  if (!toggle || !sidebar || !backdrop) return;

  function openNav() {
    sidebar.classList.add('is-open');
    backdrop.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    sidebar.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var isOpen = sidebar.classList.contains('is-open');
    if (isOpen) { closeNav(); } else { openNav(); }
  });

  backdrop.addEventListener('click', closeNav);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  // Close automatically after choosing a link, so returning via back/forward
  // navigation doesn't leave the panel open.
  sidebar.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });
})();
