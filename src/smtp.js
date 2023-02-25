/* eslint-disable */
/* SmtpJS.com - v3.0.0 */
var email = new (class Email {
  constructor() {}
  send = (a) => {
    return new Promise(function(n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
        n(e);
      });
    });
  };
  ajaxPost = (e, n, t) => {
    var a = email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function() {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  };
  ajax = (e, n) => {
    var t = email.createCORSRequest("GET", e);
    (t.onload = function() {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  };
  createCORSRequest = (e, n) => {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  };
})();
export default email;
