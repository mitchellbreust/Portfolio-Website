
hide(document.getElementById("portfolio-item1-pop-out"));

const animatedTexts = document.querySelectorAll('.animated-text');

if (animatedTexts.length > 0) {
  window.addEventListener('scroll', () => {
    console.log(window.innerHeight + window.scrollY)
    animatedTexts.forEach((animatedText) => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = animatedText.offsetTop + animatedText.offsetHeight / 2;
      const threshold = 100; // Change this value to adjust the threshold

      if (scrollPosition >= elementPosition - threshold) {
        animatedText.classList.add('animate');
      } else {
        animatedText.classList.remove('animate');
      }
    });
  });
} else {
  console.error('Elements with class "animated-text" not found');
}









