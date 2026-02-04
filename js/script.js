const container = document.querySelector('.bubble-container');

function updateActive() {
  const bubbles = Array.from(container.children);
  bubbles.forEach(b => b.classList.remove('active'));
  bubbles[0].classList.add('active');
}

// bring clicked bubble to center
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


//NAVBAR CONTROL

document.querySelectorAll('.nav-list a').forEach(link => {

  link.addEventListener('click', e => {
    e.preventDefault();

    const targetName = link.dataset.target;

    const targetBubble = Array.from(container.children)
      .find(b => b.dataset.section === targetName);

    focusBubble(targetBubble);
  });

});
