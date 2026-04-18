// Carousel
const track = document.getElementById('carouselTrack');
const dotsWrap = document.getElementById('carouselDots');
const cards = track.querySelectorAll('.testi-card');
let current = 0;

cards.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});

function goTo(index) {
  current = (index + cards.length) % cards.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) =>
    d.classList.toggle('active', i === current)
  );
}

document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));

setInterval(() => goTo(current + 1), 5000);

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
