const ipt = document.getElementById('ipt');
const cc = document.getElementById('cc');
const enb = document.getElementById('enb');
const deb = document.getElementById('deb');
const cpo = document.getElementById('cpo');
const opt = document.getElementById('opt');

function shift(c, s, d) {
    let base = (c >= 'a' && c <= 'z') ? 97 : (c >= 'A' && c <= 'Z') ? 65 : null;
    if (base !== null) {
        let o = c.charCodeAt(0) - base;
        o = (d ? o - s + 26 : o + s) % 26;
        return String.fromCharCode(o + base);
    }
    return c;
}

function convert(d) {
    let msg = ipt.value;
    if (msg == '') {
        alert("Input can't be empty.");
        return;
    }
    let s = parseInt(cc.value);
    let res = '';

    for (let i = 0; i < msg.length; i++) {
        res += shift(msg[i], s, d);
    }

    opt.textContent = res;
}

enb.onclick = function () {
    convert(false);
};

deb.onclick = function () {
    convert(true);
};

cpo.onclick = function () {
    let txt = opt.textContent;
    if(txt == ''){
        alert('Nothing to be copied!')
        return
    }
    navigator.clipboard.writeText(txt);
   
    cpo.textContent = "Copied!";

    setTimeout(function() {
        cpo.textContent = "Copy";
    }, 2000);
};
