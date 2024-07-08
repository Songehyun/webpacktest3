(() => {
  var r = {
      425: (r) => {
        r.exports = function (r, o) {
          return r + o;
        };
      },
    },
    o = {};
  const t = (function t(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var s = (o[e] = { exports: {} });
    return r[e](s, s.exports, t), s.exports;
  })(425);
  console.log(t(3, 5));
})();
