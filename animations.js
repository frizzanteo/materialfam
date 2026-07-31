/**
 * Material Initiative (FAM) Landing Page Animations
 * Powered by GSAP & ScrollTrigger
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Register ScrollTrigger Plugin
  gsap.registerPlugin(ScrollTrigger);

  // 2. Initial Hero Entrance Animation Timeline
  const heroTimeline = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 1 }
  });

  heroTimeline
    .from('.site-header', {
      y: -40,
      opacity: 0,
      duration: 0.8
    })
    .from('.hero-media-wrapper', {
      scale: 0.96,
      opacity: 0,
      duration: 0.9
    }, '-=0.4')
    .from('.hero-badge', {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.4')
    .from('.hero-subcall', {
      y: 10,
      opacity: 0,
      duration: 0.4
    }, '-=0.2');

  // Floating Cubes Animation — distances scale with the container's rendered width
  // (container is min(438px, 100vw-40px), so on mobile it's smaller)
  const container = document.querySelector('.hero-anim-container');
  const scale = () => container ? container.offsetWidth / 438 : 1;

  gsap.to('.mama-cube', {
    x: () => 32 * scale(),
    y: () => -18.5 * scale(),
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut'
  });

  gsap.to('.rex-cube', {
    x: () => -24 * scale(),
    y: () => -13.8 * scale(),
    duration: 2.5,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
    delay: 0.5
  });

  gsap.to('.viel-cube', {
    x: () => -36 * scale(),
    y: () => 18 * scale(),
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
    delay: 0.7
  });

  gsap.to('.silandro-cube', {
    x: () => 28 * scale(),
    y: () => 16.2 * scale(),
    duration: 2.8,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
    delay: 0.2
  });

  gsap.to('.next-one-cube', {
    x: () => -20 * scale(),
    y: () => 22 * scale(),
    duration: 3.2,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
    delay: 0.9
  });

  // Invalidate GSAP values on resize so distances stay proportional
  window.addEventListener('resize', () => gsap.globalTimeline.invalidate());


  // 3. Reveal Animations on Scroll (.gsap-reveal)
  const revealElements = gsap.utils.toArray('.gsap-reveal:not(.site-header):not(.hero-section)');

  revealElements.forEach((el) => {
    gsap.fromTo(el,
      {
        y: 35,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  });

  // 4. Scale & Subtle Zoom Animations (.gsap-reveal-scale)
  const scaleElements = gsap.utils.toArray('.gsap-reveal-scale');

  scaleElements.forEach((el) => {
    gsap.fromTo(el,
      {
        scale: 0.94,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  });

  // Refresh ScrollTrigger after window load to ensure accurate positions
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

  // 5. Active Navbar Link Highlighting on Scroll
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let scrollPosition = window.scrollY + 250;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);



});
