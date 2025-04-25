const chars = [
    // Special characters
    '#', '$', '%', '^', '&', '*', '-', '_', '=', '+', '[', ']', '{', '}', '|', '<', '>', ',', '.', '/', '`', '~',
    '¢', '£', '¤', '¥', '¦', '§', '©', '®', '°', '±', '²', '³', 'µ', '¶', '·', '¹', '¼', '½', '¾', '¿', '÷', '‡', '‰', '‱', '•', '∞', '∂', '∑', '∏', '∫',
    '√', '∆', '≈', '≠', '≤', '≥', '∇', '∈', '∉', '∩', '⊂', '⊃', '⊆', '⊇', '⊕', '⊗', '∴', '∵', '⇒', '⇔', '←', '↑', '→', '↓', '↔', '↕', '♠', '♣', '♥', '♦',
    '♭', '♯', '♪', '♫', '✓', '✔', '✕', '✖', '✗', '✘', '§',

    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',

    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',

    '0','1','2','3','4','5','6','7','8','9'
];


const sps = [
    ' ', '\n', '.', ',', '+', '-', '*', '/', '='
]

// const charstemp = [].concat(chars);

function shuff(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function convert(t) {
    var input = document.getElementById("ipt").value;
    var ps = document.getElementById("ps").value;

    if (input != '') {
        if (ps == '') {
            shuff(chars);
            const temp = chars.slice(0, 37 + sps.length);

            for (let i = 0; i < 37 + sps.length; i++) {
                document.getElementById("ps").value += temp[i];
            }

        }else{
            if(ps.length < (37 + sps.length)){
                alert(`Password should be ${37 + sps.length} characters.`)
                return;
            }
        }

        ps = document.getElementById("ps").value

        let swt = {};
        let swtr = {};


        for (let i = 0; i < 26; i++) {
            swt[ps[i]] = String.fromCharCode('a'.charCodeAt(0) + i);
        }
        
        let x = 0;
        for (let i = 26; i < 36; i++) {
            swt[ps[i]] = x;
            x++
        }
        
        x = 0;
        for (let i = 36; i < sps.length + 36; i++) {
            swt[ps[i]] = sps[x];
            x++
        }
        

        for (let key in swt) {
            swtr[swt[key]] = key;
        }

        let opt = "";

        for (let i = 0; i < input.length; i++) {
            let ch = input[i];

            if (t) {
                if (ch >= 'A' && ch <= 'Z') {
                    ch = ch.toLowerCase();
                }
                opt += (ch in swtr) ? swtr[ch] : ch;
            } else {
                opt += (ch in swt) ? swt[ch] : ch;
            }
        }
        console.log(opt)

        document.getElementById("opt").textContent = opt;
    }else{
        alert("Input can't be empty.");
    }
}

const enb = document.getElementById('enb');
enb.onclick = function () {
    convert(true)
};


const deb = document.getElementById('deb');
deb.onclick = function () {
    convert(false)
}

const cpp = document.getElementById('cpp');
cpp.onclick = function () {
    const ps = document.getElementById("ps").value
    if(ps == ''){
        alert('Nothing to be copied!')
        return
    }

    navigator.clipboard.writeText(ps);

    cpp.textContent = "Copied!";

    setTimeout(function() {
        cpp.textContent = "Pass";
    }, 2000);
}

const cpo = document.getElementById('cpo');
cpo.onclick = function () {
    const opt = document.getElementById("opt").textContent
    if(opt == ''){
        alert('Nothing to be copied!')
        return
    }

    navigator.clipboard.writeText(opt);

    cpo.textContent = "Copied!";

    setTimeout(function() {
        cpo.textContent = "Copy";
    }, 2000);
}






