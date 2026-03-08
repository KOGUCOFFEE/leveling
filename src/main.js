const data = {
  player: { name: 'AstraNova', role: 'WARRIOR', level: 12, exp: 720, expMax: 1000, gold: 1540, avatar: '🛡️' },
  quests: [
    { name: 'Morning Deep Work Sprint', difficulty: 3, exp: 120, gold: 40 },
    { name: 'Workout + Mobility Session', difficulty: 2, exp: 90, gold: 25 },
    { name: 'Read 20 Pages', difficulty: 1, exp: 50, gold: 15 },
    { name: 'No-Distraction Evening Review', difficulty: 4, exp: 180, gold: 60 },
  ],
  stats: [
    ['Life', 68],
    ['Physical', 74],
    ['Spiritual', 56],
    ['Relationship', 62],
    ['Work', 81],
    ['Education', 77],
  ],
  rewards: [
    { name: 'Watch Netflix', cost: 120 },
    { name: 'Buy Snack', cost: 80 },
    { name: 'Play Game', cost: 150 },
  ],
};

const app = document.getElementById('app');
const pct = Math.round((data.player.exp / data.player.expMax) * 100);

app.innerHTML = `
  <div class="hud-grid layout">
    <aside class="sidebar glass">
      ${['🏠','🗡️','📊','🛒','💰','🎒','📚','🤖','⚙️'].map((i) => `<button class="icon-btn">${i}</button>`).join('')}
    </aside>

    <main class="main-col">
      <section class="glass card player-card">
        <div class="row-between">
          <div class="row">
            <div class="avatar">${data.player.avatar}</div>
            <div>
              <h2>${data.player.name}</h2>
              <p class="muted">LEVEL ${data.player.level}</p>
            </div>
          </div>
          <div class="lvl-badge">LVL ${data.player.level} ${data.player.role}</div>
        </div>
        <div class="exp-head"><span>EXP</span><span>${data.player.exp} / ${data.player.expMax}</span></div>
        <div class="exp-track"><div class="exp-fill" style="width:${pct}%"></div></div>
        <div class="gold">🪙 <span id="gold-count">0</span></div>
      </section>

      <section class="glass card">
        <h3>DAILY QUESTS</h3>
        <div class="grid-2">
          ${data.quests
            .map(
              (q) => `
              <article class="glass quest-card">
                <h4>${q.name}</h4>
                <p class="muted">Difficulty: ${'★'.repeat(q.difficulty)}</p>
                <div class="row-between meta"><span class="neon">+${q.exp} EXP</span><span class="gold-text">+${q.gold} Gold</span></div>
                <div class="row gap">
                  <button class="btn complete">Complete</button>
                  <button class="btn fail">Fail</button>
                </div>
              </article>`
            )
            .join('')}
        </div>
      </section>

      <section class="glass card">
        <h3>REWARD SHOP</h3>
        <div class="grid-3">
          ${data.rewards
            .map(
              (r) => `
                <article class="glass reward-card">
                  <h4>${r.name}</h4>
                  <p class="gold-text">${r.cost} Gold</p>
                  <button class="btn redeem">Redeem</button>
                </article>`
            )
            .join('')}
        </div>
      </section>
    </main>

    <aside class="right-col">
      <section class="glass card">
        <h3>LIFE STATS</h3>
        <div class="stats-list">
          ${data.stats
            .map(
              ([name, val]) => `
              <div>
                <div class="row-between tiny"><span>${name}</span><span>${val}</span></div>
                <div class="bar"><div class="bar-fill" style="width:${val}%"></div></div>
              </div>`
            )
            .join('')}
        </div>
      </section>

      <section class="glass card">
        <h3>AI ASSISTANT</h3>
        <div class="chat">Welcome back, hero. Need strategy for your next productivity streak?</div>
        <button class="suggestion">Analyze my productivity</button>
        <button class="suggestion">Suggest better daily quests</button>
        <button class="suggestion">What should I focus on this week?</button>
      </section>
    </aside>
  </div>
  <div id="toast" class="toast">Quest Completed +50 EXP</div>
`;

let n = 0;
const goldEl = document.getElementById('gold-count');
const t = setInterval(() => {
  n += Math.ceil((data.player.gold - n) * 0.15);
  goldEl.textContent = n.toLocaleString();
  if (n >= data.player.gold) {
    goldEl.textContent = data.player.gold.toLocaleString();
    clearInterval(t);
  }
}, 35);

const toast = document.getElementById('toast');
document.querySelectorAll('.complete').forEach((btn) => {
  btn.addEventListener('click', () => {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1600);
  });
});
