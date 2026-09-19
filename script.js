/**
 * Bijoy Lohar — Interactive Portfolio Storyboard Script
 * Scene 1: Cursor Spotlight & Radar Ping Status
 * Scene 2: Interactive 3D Photo Deck (Fan-Out & Click-to-Cycle Spotlight)
 * Scene 3: Asymmetrical Bento Grid 3D Tilt & Glare Sweeps
 * Scene 4: Kinetic Lifestyle Infinite Marquee & Modal Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Ambient Cursor Spotlight Tracking
  const spotlight = document.getElementById('cursorSpotlight');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let spotlightX = mouseX;
  let spotlightY = mouseY;

  if (spotlight) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    }, { passive: true });

    function animateSpotlight() {
      spotlightX += (mouseX - spotlightX) * 0.1;
      spotlightY += (mouseY - spotlightY) * 0.1;
      spotlight.style.transform = `translate3d(${spotlightX - 275}px, ${spotlightY - 275}px, 0)`;
      requestAnimationFrame(animateSpotlight);
    }
    requestAnimationFrame(animateSpotlight);
  }

  // 2. Scene 2: Interactive 3D Photo Deck (Click-to-Cycle Spotlight)
  const deckCards = document.querySelectorAll('.deck-card');
  const photoDeck = document.getElementById('photoDeck');

  if (deckCards.length > 0) {
    deckCards.forEach(card => {
      card.addEventListener('click', () => {
        // Swap Spotlight Card
        deckCards.forEach(c => {
          c.classList.remove('active-spotlight');
        });

        card.classList.add('active-spotlight');

        // Re-arrange z-indexes and transforms
        if (card.classList.contains('card-left')) {
          card.classList.remove('card-left');
          card.classList.add('card-center');

          const otherCenter = document.querySelector('.deck-card.card-center:not(.active-spotlight)');
          if (otherCenter) {
            otherCenter.classList.remove('card-center');
            otherCenter.classList.add('card-right');
          }

          const otherRight = document.querySelector('.deck-card.card-right:not(.active-spotlight)');
          if (otherRight) {
            otherRight.classList.remove('card-right');
            otherRight.classList.add('card-left');
          }
        } else if (card.classList.contains('card-right')) {
          card.classList.remove('card-right');
          card.classList.add('card-center');

          const otherCenter = document.querySelector('.deck-card.card-center:not(.active-spotlight)');
          if (otherCenter) {
            otherCenter.classList.remove('card-center');
            otherCenter.classList.add('card-left');
          }

          const otherLeft = document.querySelector('.deck-card.card-left:not(.active-spotlight)');
          if (otherLeft) {
            otherLeft.classList.remove('card-left');
            otherLeft.classList.add('card-right');
          }
        }
      });
    });
  }

  // 3. Scene 3: 3D Tilt & Glare Overlay Sweeps
  const tiltElements = document.querySelectorAll('.tilt-card');

  tiltElements.forEach(elem => {
    elem.addEventListener('mousemove', (e) => {
      const rect = elem.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      elem.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      elem.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
      elem.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
    });

    elem.addEventListener('mouseleave', () => {
      elem.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  // 4. Magnetic Hover Pull Effect on Buttons & Chips
  const magneticTargets = document.querySelectorAll('.magnetic-target');

  magneticTargets.forEach(target => {
    target.addEventListener('mousemove', (e) => {
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.22;
      const deltaY = (e.clientY - centerY) * 0.22;

      target.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(1.02)`;
    });

    target.addEventListener('mouseleave', () => {
      target.style.transform = 'translate3d(0, 0, 0) scale(1)';
    });
  });

  // 5. Scroll Reveal Observer
  const scrollElements = document.querySelectorAll('.scroll-reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    scrollElements.forEach(el => revealObserver.observe(el));
  } else {
    scrollElements.forEach(el => el.classList.add('is-visible'));
  }

  // 6. Interactive Tech Stack Pills Feedback
  const techPills = document.querySelectorAll('.tech-pill-interactive');
  techPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const techName = pill.getAttribute('data-tech') || pill.textContent.trim();
      showToast(`Selected Tech Spec: ${techName}`);

      pill.style.transform = 'scale(0.92)';
      setTimeout(() => {
        pill.style.transform = 'translateY(-3px)';
      }, 150);
    });
  });

  // 7. Venture Modal Engine
  const modalBackdrop = document.getElementById('ventureModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  const modalTriggers = document.querySelectorAll('.modal-trigger');

  const ventureData = {
    omnikart: {
      title: "OmniKart E-Commerce Platform",
      subtitle: "Powered by Shadow Arrow Engine",
      domain: "OmniKart Storefront Showcase",
      details: [
        "Ultra-fast checkout pipeline with instant dynamic product search.",
        "Real-time inventory tracking and order status WebSockets.",
        "Mobile-first responsive commerce UI built for modern retail."
      ],
      link: "https://www.shadowarrow.in"
    }
  };

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const ventureKey = btn.getAttribute('data-modal');
      const data = ventureData[ventureKey];
      if (!data) return;

      modalContent.innerHTML = `
        <span class="meta-label">VENTURE SPECIFICATION</span>
        <h3 style="font-size: 1.6rem; margin-bottom: 0.25rem;">${data.title}</h3>
        <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">${data.subtitle} &bull; ${data.domain}</p>
        <ul style="list-style: none; margin-bottom: 1.75rem; display: flex; flex-direction: column; gap: 0.75rem;">
          ${data.details.map(d => `<li style="display: flex; gap: 0.5rem; font-size: 0.925rem; color: var(--text-secondary);"><i data-lucide="check" style="color: #10b981;"></i> ${d}</li>`).join('')}
        </ul>
        <a href="${data.link}" target="_blank" rel="noopener" class="btn-primary-matte w-full" style="justify-content: center;">
          <span>Visit Venture Portal</span>
          <i data-lucide="arrow-up-right"></i>
        </a>
      `;
      lucide.createIcons();
      modalBackdrop.classList.remove('hidden');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalBackdrop.classList.add('hidden');
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.add('hidden');
      }
    });
  }

  // 8. Contact Form Handler & Toast Notification
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending Message...</span> <i data-lucide="loader-2" class="spin"></i>`;
      lucide.createIcons();

      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        lucide.createIcons();

        showToast('Thank you! Your message has been delivered to Bijoy Lohar.');
      }, 1200);
    });
  }

  function showToast(message) {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.remove('hidden');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3500);
  }

  // 9. GitHub Dynamic Avatar Fallback Check
  const githubAvatar = document.getElementById('githubAvatar');
  if (githubAvatar) {
    const imgTest = new Image();
    imgTest.onload = () => {};
    imgTest.onerror = () => {
      githubAvatar.src = 'https://ui-avatars.com/api/?name=Bijoy+Lohar&background=09090b&color=fff&size=400';
    };
    imgTest.src = githubAvatar.src;
  }

});
