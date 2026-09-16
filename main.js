/* MUHAS Review — small progressive enhancements. Nothing here is required to read the issue. */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- reading progress + sticky spine ---- */
  var bar = document.getElementById('progressBar');
  var spine = document.getElementById('spine');
  var cover = document.querySelector('.cover');

  function onScroll() {
    var h = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
    if (spine && cover) spine.classList.toggle('is-on', scrollY > cover.offsetHeight * 0.72);
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---- active section in the spine nav ---- */
  var links = [].slice.call(document.querySelectorAll('.spine__nav a'));
  var targets = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && targets.length) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-here', a.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    targets.forEach(function (t) { navObs.observe(t); });
  }

  /* ---- gentle reveal on scroll ---- */
  var revealable = document.querySelectorAll(
    '.sheet .folio, .sheet .h-display, .sheet .intro, .toc li, .letter__fig, .letter__body,' +
    '.vm__card, .stats li, .timeline li, .plate, .leader, .value, .feature, .card, .place, .units li'
  );

  if (reduce || !('IntersectionObserver' in window)) {
    [].forEach.call(revealable, function (el) { el.classList.add('is-in'); });
  } else {
    [].forEach.call(revealable, function (el) { el.classList.add('rv'); });
    var rvObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        rvObs.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    [].forEach.call(revealable, function (el) { rvObs.observe(el); });
  }

  /* ---- count up the year's numbers once they are on screen ---- */
  var nums = document.querySelectorAll('.stats b[data-count]');
  function fmt(n) { return n.toLocaleString('en-US'); }

  if (reduce || !('IntersectionObserver' in window)) {
    /* leave the printed values in place */
  } else {
    var numObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        numObs.unobserve(el);
        var end = parseInt(el.getAttribute('data-count'), 10);
        if (!end) return;
        var dur = 1000, t0 = performance.now();
        (function step(now) {
          var p = Math.min((now - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(step);
        })(t0);
      });
    }, { threshold: 0.6 });
    [].forEach.call(nums, function (el) { numObs.observe(el); });
  }
})();
