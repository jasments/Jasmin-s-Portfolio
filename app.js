// Smooth scroll 
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-scroll], a[href^='#']");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const target = document.querySelector(href);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Reveal-on-scroll 
const revealTargets = document.querySelectorAll(".section, .work-card, .frame");

revealTargets.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(14px)";
  el.style.transition = "opacity 600ms ease, transform 600ms ease";
  el.style.willChange = "opacity, transform";
});

const io = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => io.observe(el));
