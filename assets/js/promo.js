/* Welcome offer modal — Editor's Choice operator. Data mirrors data/operators.json. */
(function () {
  var OP = {
    name: "Spinjo Casino",
    logo: "/logos/spinjo.png",
    link: "https://roosterspartners.com/aaznxby3ku",
    licence: "Cura\u00e7ao Gaming Control Board",
    wagering: "40x",
    minDep: "NZ$30 to qualify"
  };
  var KEY = 'ck_promo_seen';

  if (document.body.getAttribute('data-no-promo') !== null) return;

  /* Shown once per visitor, permanently. sessionStorage is a fallback for
     browsers that block localStorage, so it still cannot repeat within a visit. */
  function store(fn) {
    var out = null;
    try { out = fn(localStorage); } catch (e) {}
    try { var s = fn(sessionStorage); out = out || s; } catch (e) {}
    return out;
  }
  function seen() { return !!store(function (s) { return s.getItem(KEY); }); }
  function remember() { store(function (s) { s.setItem(KEY, Date.now()); return 1; }); }

  if (seen()) return;

  var opener = null, root = null;

  function close() {
    if (!root) return;
    root.classList.remove('is-open');
    document.documentElement.style.overflow = '';
    document.removeEventListener('keydown', onKey, true);
    var el = root;
    setTimeout(function () { if (el && el.parentNode) el.parentNode.removeChild(el); }, 220);
    root = null;
    if (opener && opener.focus) opener.focus();
  }

  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab' || !root) return;
    var f = root.querySelectorAll('a[href], button');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function build() {
    opener = document.activeElement;
    root = document.createElement('div');
    root.className = 'promo';
    root.innerHTML =
      '<div class="promo-veil" data-close></div>' +
      '<div class="promo-card" role="dialog" aria-modal="true" aria-labelledby="promo-h">' +
        '<div class="promo-inner">' +
          '<button class="promo-x" type="button" aria-label="Close welcome offer">&times;</button>' +
          '<span class="promo-flag">Exclusive welcome offer</span>' +
          '<img class="promo-logo" src="' + OP.logo + '" alt="' + OP.name + ' logo" width="76" height="76">' +
          '<p class="promo-op">' + OP.name + '</p>' +
          '<h2 class="promo-h" id="promo-h"><span>NZ$5,000</span> + 300 free spins</h2>' +
          '<p class="promo-sub">across your first four deposits</p>' +
          '<ul class="promo-chips">' +
            '<li>' + OP.wagering + ' wagering</li>' +
            '<li>' + OP.minDep + ' min deposit</li>' +
            '<li>' + OP.licence + '</li>' +
          '</ul>' +
          '<a class="promo-cta" href="' + OP.link + '" rel="nofollow sponsored noopener" target="_blank">Claim your bonus <span aria-hidden="true">&rsaquo;</span></a>' +
          '<button class="promo-no" type="button">No thanks, keep browsing</button>' +
          '<p class="promo-fine">18+ &middot; New players only &middot; T&amp;Cs apply &middot; ' +
            '<a href="/responsible-gambling/">Play responsibly</a></p>' +
        '</div>' +
      '</div>';

    document.body.appendChild(root);
    document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(function () { root.classList.add('is-open'); });

    root.addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-close') ||
          e.target.closest('.promo-x') || e.target.closest('.promo-no')) { remember(); close(); }
      else if (e.target.closest('.promo-cta')) { remember(); }
    });
    document.addEventListener('keydown', onKey, true);
    var cta = root.querySelector('.promo-cta');
    if (cta) cta.focus();
    remember();
  }

  function start() { setTimeout(build, 1200); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
