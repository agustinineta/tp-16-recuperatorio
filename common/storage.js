window.BlocklyGamesStorage = {
  get(key, fallback = '') {
    try { return localStorage.getItem('blockly-games:' + key) ?? fallback; }
    catch (_) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('blockly-games:' + key, String(value)); } catch (_) {}
  }
};
