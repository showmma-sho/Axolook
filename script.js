// document.addEventListener("DOMContentLoaded", () => {
//   // MODEL 3D scroll reveal
//   const model = document.querySelector('.model-3d');
//   const modelObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         model.classList.add('slide-in');
//         modelObserver.unobserve(model);
//       }
//     });
//   }, { threshold: 0.5 });
//   modelObserver.observe(model);

//   // ABOUT TEXT scroll reveal
//   const aboutText = document.querySelector('.about-content');
//   const textObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         aboutText.classList.add('reveal');
//         textObserver.unobserve(aboutText);
//       }
//     });
//   }, { threshold: 0.4 });
//   textObserver.observe(aboutText);
// });





const modello3D = document.getElementById("modello-3d");
const sections = Array.from(document.querySelectorAll("section"));

const sectionOffsets = sections.map(section => section.offsetTop);
const lastSectionIndex = sections.length - 1;

const getScrollProgress =  scrollY => {
  for (let i = 0; i < lastSectionIndex; i++) {
      if (scrollY >= sectionOffsets[i] && scrollY < sectionOffsets[i + 1]) {
          return i + (scrollY - sectionoffsets[i]) / (sectionOffsets[i+1] - sectionOffsets[i]);
  }
}

  return lastSectionIndex;

};

window.addEventListener("scroll", () => {
  const getScrollProgress = getScrollProgress(window.scrollY);

});