window.onload = () => {
  const music = document.getElementById('bg-music');
  const startBtn = document.getElementById('start-btn');
  const sections = ['landing','message','gallery','timeline','notes','ending'];
  let idx = 0;

  startBtn.addEventListener('click', () => {
    idx = 1;
    showSection(idx);
    music.play();
  });

  document.querySelector('#to-gallery').onclick = () => { idx=2; showSection(idx); };
  document.querySelector('#to-timeline').onclick = () => { idx=3; showSection(idx); };
  document.querySelector('#to-notes').onclick = () => { idx=4; showSection(idx); };
  document.querySelector('#to-end').onclick = () => { idx=5; showSection(idx); };

  function showSection(i) {
    sections.forEach((id, j) => {
      document.getElementById(id).classList.toggle('active', j === i);
    });
  }
};
