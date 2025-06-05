document.addEventListener("DOMContentLoaded", () => {
  // MODEL 3D scroll reveal
  const model = document.querySelector('.model-3d');
  const modelObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        model.classList.add('slide-in');
        modelObserver.unobserve(model);
      }
    });
  }, { threshold: 0.5 });
  modelObserver.observe(model);

  // ABOUT TEXT scroll reveal
  const aboutText = document.querySelector('.about-content');
  const textObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutText.classList.add('reveal');
        textObserver.unobserve(aboutText);
      }
    });
  }, { threshold: 0.4 });
  textObserver.observe(aboutText);
});
