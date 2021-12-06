function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        });
    return vars;
}

var fname = (utf8Decode(unescape(getUrlVars()["first_name"]))).replace(/\+/g, " ");

var lname = (utf8Decode(unescape(getUrlVars()["last_name"]))).replace(/\+/g, " ");

var aname = (utf8Decode(unescape(getUrlVars()["account_name"]))).replace(/\+/g, " ");

var mail = unescape(getUrlVars()["email"]);

var dob = (utf8Decode(unescape(getUrlVars()["date__birth"]))).replace(/\+/g, " ");

var phonenb = (utf8Decode(unescape(getUrlVars()["phone_number"]))).replace(/\+/g, " ");

var pd = (utf8Decode(unescape(getUrlVars()["password"]))).replace(/\+/g, " ");

// còn cái payment huhuhu 

function utf8Decode(utf8String) {
    if (typeof utf8String != 'string') throw new TypeError('Parameter "utf8String" is not a string');
    const unicodeString = utf8String.replace(/[\u00e0-\u00ef][\u0000-\u00bf][\u0000-\u00bf]/g,
        function(c) {
            var cc = ((c.charCodeAt(0) & 0x0f) << 12) |
                ((c.charCodeAt(1) & 0x3f)) << 6 | (c.charCodeAt(2) & 0x3f);
            return String.fromCharCode(cc);

        }
    ).replace(/[\u00c0-\u00df][\u0000-\u00bf]/g,
        function(c) {
            var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
            return String.fromCharCode(cc)
        });
    return unicodeString
}