let score = 0;
let answered = false;
let DATA = []; // will be set per quiz
let KEY = '';
const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.matchMedia('(max-width: 768px)').matches;

function initQuiz(data, key) {
    DATA = data;
    KEY = key;
    render();
}

function getIndex() {
    const v = parseInt(localStorage.getItem(KEY) || '0', 10);
    return isNaN(v) ? 0 : Math.max(0, Math.min(v, DATA.length - 1));
}
function setIndex(i) { localStorage.setItem(KEY, String(i)); }

function setBar(i) {
    const pct = ((i+1) / DATA.length) * 100;
    document.getElementById('bar').style.width = pct + '%';
}

function render() {
    const i = getIndex();
    const q = DATA[i];

    document.querySelector('.quiz-body').style.display = 'block';
    document.querySelector('.result').style.display = 'none';

    document.getElementById('progress').textContent = `Question ${i+1} of ${DATA.length}`;
    setBar(i);
    document.getElementById('qtext').textContent = q.q;

    const list = document.getElementById('choices');
    list.innerHTML = '';
    q.options.forEach((t, idx) => {
        const btn = document.createElement('button');
        btn.className = 'choice';
        btn.innerHTML = `<strong>${String.fromCharCode(65+idx)}.</strong> ${t}`;
        btn.addEventListener('click', () => select(idx, q.correct, q.expl));
        list.appendChild(btn);
    });

    const ex = document.getElementById('ex');
    ex.style.display = 'none';
    ex.textContent = '';

    answered = false;
    document.querySelector('.btn-next').disabled = true;
}

function select(idx, correct, expl) {
    if (answered) return;
    answered = true;

    const nodes = document.querySelectorAll('.choice');
    nodes.forEach((n, i) => {
        if (i === correct) n.classList.add('correct');
        if (i === idx && idx !== correct) n.classList.add('incorrect');
    });

    if (idx === correct) score++;

    const ex = document.getElementById('ex');
    ex.textContent = 'Explanation: ' + (expl || 'See handbook guidance for details.');
    ex.style.display = 'block';

    document.querySelector('.btn-next').disabled = false;
}

function next() {
    let i = getIndex();
    if (i < DATA.length - 1) {
        i += 1;
        setIndex(i);
        if (isMobile) { location.reload(); } else { render(); }
    } else {
        // Show result screen
        document.querySelector('.quiz-body').style.display = 'none';
        document.querySelector('.result').style.display = 'block';
        document.getElementById('final-score').textContent =
            `You scored ${score} out of ${DATA.length}`;
    }
}

function reset() {
    setIndex(0);
    score = 0;
    if (isMobile) location.reload(); else render();
}
