(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  // Set stagger index for grouped items
  document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
    var children = group.querySelectorAll('[data-reveal]');
    children.forEach(function (child, i) {
      child.style.setProperty('--reveal-index', i);
    });
  });

  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function (el) { observer.observe(el); });
})();
