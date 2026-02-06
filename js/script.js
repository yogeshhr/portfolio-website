const container = document.querySelector('.bubble-container');
const navLinks = document.querySelectorAll('.nav-list a');

// update active bubble
function updateActive() {
  const bubbles = Array.from(container.children);

  bubbles.forEach(b => b.classList.remove('active'));
  bubbles[0].classList.add('active');

  const activeSection = bubbles[0].dataset.section;

  // update navbar active state
  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.dataset.target === activeSection) {
      link.classList.add('active');
    }
  });
}

// bring bubble to center
function focusBubble(target) {
  while (container.firstElementChild !== target) {
    container.appendChild(container.firstElementChild);
  }
  updateActive();
}

// bubble click
document.querySelectorAll('.hero-bubble').forEach(bubble => {
  bubble.addEventListener('click', () => {
    if (bubble.classList.contains('active')) return;
    focusBubble(bubble);
  });
});

// navbar click
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetName = link.dataset.target;

    const targetBubble = Array.from(container.children)
      .find(b => b.dataset.section === targetName);

    focusBubble(targetBubble);
  });
});

// initialize highlight on load
updateActive();
