// Loads the application after the document has been created.
(function () {
  const script = document.createElement('script');
  script.src = 'common/app.js';
  script.defer = true;
  document.head.appendChild(script);
})();
