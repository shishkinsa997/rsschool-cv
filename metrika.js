type =
  "text/javascript" >
  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) {
        return;
      }
    }
    (k = e.createElement(t)),
      (a = e.getElementsByTagName(t)[0]),
      (k.async = 1),
      (k.src = r),
      a.parentNode.insertBefore(k, a);
  })(
    window,
    document,
    "script",
    "https://mc.yandex.ru/metrika/tag.js?id=103949365",
    "ym"
  );

ym(103949365, "init", {
  ssr: true,
  webvisor: true,
  clickmap: true,
  ecommerce: "dataLayer",
  accurateTrackBounce: true,
  trackLinks: true,
});

document.addEventListener('DOMContentLoaded', function() {
    var noscriptDiv = document.createElement('div');
    noscriptDiv.innerHTML = '<noscript><div><img src="https://mc.yandex.ru/watch/103949365" style="position:absolute; left:-9999px;" alt="" /></div></noscript>';
    document.body.appendChild(noscriptDiv);
});